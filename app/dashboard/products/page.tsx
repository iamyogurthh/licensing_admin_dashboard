import { Package } from 'lucide-react';

import { prisma } from '@/lib/prisma';

import { ProductDialog } from '@/components/products/product-dialog';
import { ProductTable } from '@/components/products/product-table';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <main className="flex-1 space-y-8 p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Package className="size-6" />

            <h1 className="text-2xl font-semibold tracking-tight">Products</h1>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage products that can be licensed.
          </p>
        </div>

        <ProductDialog />
      </div>

      {/* Product List */}
      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
        </CardHeader>

        <CardContent>
          <ProductTable products={products} />
        </CardContent>
      </Card>
    </main>
  );
}
