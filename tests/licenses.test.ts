import { describe, expect, it, afterEach } from 'vitest';
import { randomUUID } from 'crypto';
import { prisma } from '../lib/prisma';

const BASE_URL = 'http://localhost:3000';

type TestLicense = {
  licenseId: string;
  licenseKey: string;
  customerId: string;
  productId: string;
};

async function api(endpoint: string, body: Record<string, unknown>) {
  return fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

async function createTestLicense(
  options: {
    maxInstallations?: number;
    expiresAt?: Date | null;
    status?: 'ACTIVE' | 'SUSPENDED' | 'REVOKED' | 'EXPIRED';
    productActive?: boolean;
  } = {},
): Promise<TestLicense> {
  const id = randomUUID();

  const customer = await prisma.customer.create({
    data: {
      name: `Vitest Customer ${id}`,
      email: `vitest-${id}@example.com`,
    },
  });

  const product = await prisma.product.create({
    data: {
      name: `Vitest Product ${id}`,
      code: `VITEST-${id}`,
      version: '1.0.0',
      isActive: options.productActive ?? true,
    },
  });

  const license = await prisma.license.create({
    data: {
      licenseKey: `TEST-${id}`.toUpperCase(),
      type: 'PERPETUAL',
      status: options.status ?? 'ACTIVE',
      expiresAt: options.expiresAt === undefined ? null : options.expiresAt,
      maxInstallations: options.maxInstallations ?? 1,
      customerId: customer.id,
      productId: product.id,
    },
  });

  return {
    licenseId: license.id,
    licenseKey: license.licenseKey,
    customerId: customer.id,
    productId: product.id,
  };
}

async function cleanupTestLicense(testLicense: TestLicense) {
  // License has Cascade delete for installations/events.
  await prisma.license.delete({
    where: {
      id: testLicense.licenseId,
    },
  });

  await prisma.product.delete({
    where: {
      id: testLicense.productId,
    },
  });

  await prisma.customer.delete({
    where: {
      id: testLicense.customerId,
    },
  });
}

describe('License API', () => {
  let testLicense: TestLicense | null = null;

  afterEach(async () => {
    if (testLicense) {
      await cleanupTestLicense(testLicense);
      testLicense = null;
    }
  });

  // ============================================================
  // BASIC ACTIVATION
  // ============================================================

  it('should activate a license', async () => {
    testLicense = await createTestLicense();

    const machineId = `TEST-MACHINE-${randomUUID()}`;

    const response = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.success).toBe(true);
    expect(data.code).toBe('ACTIVATED');
    expect(data.installation).toBeDefined();
    expect(data.installation.machineId).toBe(machineId);
    expect(data.installation.status).toBe('ACTIVE');
  });

  // ============================================================
  // VALIDATION
  // ============================================================

  it('should validate an activated machine', async () => {
    testLicense = await createTestLicense();

    const machineId = `TEST-MACHINE-${randomUUID()}`;

    const activationResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    expect(activationResponse.status).toBe(201);

    const response = await api('/api/licenses/validate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      appVersion: '1.0.0',
    });

    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.code).toBe('VALID');
    expect(data.installation.machineId).toBe(machineId);
  });

  // ============================================================
  // WRONG MACHINE
  // ============================================================

  it('should reject a different machine', async () => {
    testLicense = await createTestLicense();

    const machineId = `TEST-MACHINE-${randomUUID()}`;
    const wrongMachineId = `WRONG-MACHINE-${randomUUID()}`;

    const activationResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    expect(activationResponse.status).toBe(201);

    const response = await api('/api/licenses/validate', {
      licenseKey: testLicense.licenseKey,
      machineId: wrongMachineId,
      appVersion: '1.0.0',
    });

    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.success).toBe(false);
    expect(data.code).toBe('MACHINE_NOT_REGISTERED');
  });

  // ============================================================
  // INVALID LICENSE KEY
  // ============================================================

  it('should reject an invalid license key', async () => {
    testLicense = await createTestLicense();

    const response = await api('/api/licenses/activate', {
      licenseKey: 'INVALID-LICENSE-KEY',
      machineId: `TEST-MACHINE-${randomUUID()}`,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    const data = await response.json();

    expect(response.status).toBe(404);
    expect(data.success).toBe(false);
    expect(data.code).toBe('LICENSE_NOT_FOUND');
  });

  // ============================================================
  // EXPIRED LICENSE
  // ============================================================

  it('should reject an expired license', async () => {
    testLicense = await createTestLicense({
      expiresAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    });

    const response = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId: `TEST-MACHINE-${randomUUID()}`,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.success).toBe(false);
    expect(data.code).toBe('LICENSE_EXPIRED');
  });

  // ============================================================
  // SUSPENDED LICENSE
  // ============================================================

  it('should reject a suspended license', async () => {
    testLicense = await createTestLicense({
      status: 'SUSPENDED',
    });

    const response = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId: `TEST-MACHINE-${randomUUID()}`,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.success).toBe(false);
    expect(data.code).toBe('LICENSE_NOT_ACTIVE');
  });

  // ============================================================
  // REVOKED LICENSE
  // ============================================================

  it('should reject a revoked license', async () => {
    testLicense = await createTestLicense({
      status: 'REVOKED',
    });

    const response = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId: `TEST-MACHINE-${randomUUID()}`,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.success).toBe(false);
    expect(data.code).toBe('LICENSE_NOT_ACTIVE');
  });

  // ============================================================
  // INACTIVE PRODUCT
  // ============================================================

  it('should reject an inactive product', async () => {
    testLicense = await createTestLicense({
      productActive: false,
    });

    const response = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId: `TEST-MACHINE-${randomUUID()}`,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.success).toBe(false);
    expect(data.code).toBe('PRODUCT_INACTIVE');
  });

  // ============================================================
  // BLOCKED INSTALLATION
  // ============================================================

  it('should reject a blocked installation', async () => {
    testLicense = await createTestLicense();

    const machineId = `TEST-MACHINE-${randomUUID()}`;

    const activationResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    expect(activationResponse.status).toBe(201);

    await prisma.installation.update({
      where: {
        licenseId_machineId: {
          licenseId: testLicense.licenseId,
          machineId,
        },
      },
      data: {
        status: 'BLOCKED',
      },
    });

    const response = await api('/api/licenses/validate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      appVersion: '1.0.0',
    });

    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.success).toBe(false);
    expect(data.code).toBe('INSTALLATION_BLOCKED');
  });

  // ============================================================
  // INSTALLATION LIMIT
  // ============================================================

  it('should enforce the installation limit', async () => {
    testLicense = await createTestLicense({
      maxInstallations: 1,
    });

    const machineOne = `TEST-MACHINE-${randomUUID()}`;
    const machineTwo = `TEST-MACHINE-${randomUUID()}`;

    const firstResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId: machineOne,
      deviceName: 'Vitest PC 1',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    expect(firstResponse.status).toBe(201);

    const secondResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId: machineTwo,
      deviceName: 'Vitest PC 2',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    const data = await secondResponse.json();

    expect(secondResponse.status).toBe(403);
    expect(data.success).toBe(false);
    expect(data.code).toBe('INSTALLATION_LIMIT_REACHED');
  });

  // ============================================================
  // DUPLICATE ACTIVATION
  // ============================================================

  it('should handle duplicate activation', async () => {
    testLicense = await createTestLicense();

    const machineId = `TEST-MACHINE-${randomUUID()}`;

    const firstResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    expect(firstResponse.status).toBe(201);

    const secondResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    const data = await secondResponse.json();

    expect(secondResponse.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.code).toBe('ALREADY_ACTIVATED');
  });

  // ============================================================
  // DEACTIVATION
  // ============================================================

  it('should deactivate an active installation', async () => {
    testLicense = await createTestLicense();

    const machineId = `TEST-MACHINE-${randomUUID()}`;

    const activationResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    expect(activationResponse.status).toBe(201);

    const response = await api('/api/licenses/deactivate', {
      licenseKey: testLicense.licenseKey,
      machineId,
    });

    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.code).toBe('DEACTIVATED');
    expect(data.installation.status).toBe('DEACTIVATED');
  });

  // ============================================================
  // ALREADY DEACTIVATED
  // ============================================================

  it('should handle already deactivated installation', async () => {
    testLicense = await createTestLicense();

    const machineId = `TEST-MACHINE-${randomUUID()}`;

    const activationResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    expect(activationResponse.status).toBe(201);

    const firstDeactivate = await api('/api/licenses/deactivate', {
      licenseKey: testLicense.licenseKey,
      machineId,
    });

    const firstData = await firstDeactivate.json();

    expect(firstDeactivate.status).toBe(200);
    expect(firstData.success).toBe(true);
    expect(firstData.code).toBe('DEACTIVATED');

    const secondDeactivate = await api('/api/licenses/deactivate', {
      licenseKey: testLicense.licenseKey,
      machineId,
    });

    const secondData = await secondDeactivate.json();

    expect(secondDeactivate.status).toBe(200);
    expect(secondData.success).toBe(true);
    expect(secondData.code).toBe('ALREADY_DEACTIVATED');
  });

  // ============================================================
  // VALIDATION AFTER DEACTIVATION
  // ============================================================

  it('should reject validation after deactivation', async () => {
    testLicense = await createTestLicense();

    const machineId = `TEST-MACHINE-${randomUUID()}`;

    const activationResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    expect(activationResponse.status).toBe(201);

    const deactivateResponse = await api('/api/licenses/deactivate', {
      licenseKey: testLicense.licenseKey,
      machineId,
    });

    expect(deactivateResponse.status).toBe(200);

    const response = await api('/api/licenses/validate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      appVersion: '1.0.0',
    });

    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.success).toBe(false);
    expect(data.code).toBe('INSTALLATION_NOT_ACTIVE');
  });

  it('should reactivate a deactivated installation', async () => {
    testLicense = await createTestLicense();

    const machineId = `TEST-MACHINE-${randomUUID()}`;

    // First activation
    const activationResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    expect(activationResponse.status).toBe(201);

    // Deactivate
    const deactivateResponse = await api('/api/licenses/deactivate', {
      licenseKey: testLicense.licenseKey,
      machineId,
    });

    expect(deactivateResponse.status).toBe(200);

    // Activate again
    const reactivateResponse = await api('/api/licenses/activate', {
      licenseKey: testLicense.licenseKey,
      machineId,
      deviceName: 'Vitest Test PC',
      operatingSystem: 'Windows 11',
      appVersion: '1.0.0',
    });

    const data = await reactivateResponse.json();

    expect(reactivateResponse.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.code).toBe('ACTIVATED');
    expect(data.installation.machineId).toBe(machineId);
    expect(data.installation.status).toBe('ACTIVE');
  });
});
