import { defineConfig } from 'vitest/config';
import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

console.log('DATABASE_URL loaded:', Boolean(process.env.DATABASE_URL));

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },

  test: {
    environment: 'node',
    testTimeout: 30000,
    hookTimeout: 30000,
  },
});
