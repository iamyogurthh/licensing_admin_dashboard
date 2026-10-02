'use client';

import { useMemo, useState, useTransition } from 'react';
import { CheckCircle2, Search, XCircle } from 'lucide-react';

import { toggleProductStatus } from '@/app/dashboard/products/actions';

import { ProductDialog } from '@/components/products/product-dialog';
import { DeleteProductDialog } from '@/components/products/delete-product-dialog';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Product = {
  id: string;
  name: string;
  code: string;
  description: string | null;
  version: string | null;
  isActive: boolean;
  createdAt: Date;
};

export function ProductTable({ products }: { products: Product[] }) {
  const [search, setSearch] = useState('');
  const [isPending, startTransition] = useTransition();

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return products;
    }

    return products.filter((product) =>
      [product.name, product.code, product.version, product.description]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(query)),
    );
  }, [products, search]);

  function handleToggleStatus(id: string) {
    startTransition(async () => {
      try {
        await toggleProductStatus(id);
      } catch (error) {
        console.error(error);
      }
    });
  }

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="pl-9"
        />
      </div>

      {/* Table */}
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Version</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[180px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredProducts.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-32 text-center text-muted-foreground"
                >
                  {search ? 'No products found.' : 'No products yet.'}
                </TableCell>
              </TableRow>
            ) : (
              filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  {/* Product */}
                  <TableCell>
                    <div>
                      <p className="font-medium">{product.name}</p>

                      {product.description && (
                        <p className="mt-1 max-w-md truncate text-xs text-muted-foreground">
                          {product.description}
                        </p>
                      )}
                    </div>
                  </TableCell>

                  {/* Code */}
                  <TableCell>
                    <code className="rounded bg-muted px-2 py-1 text-xs font-medium">
                      {product.code}
                    </code>
                  </TableCell>

                  {/* Version */}
                  <TableCell>{product.version ?? '—'}</TableCell>

                  {/* Status */}
                  <TableCell>
                    {product.isActive ? (
                      <Badge variant="secondary" className="gap-1">
                        <CheckCircle2 className="size-3" />
                        Active
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="gap-1">
                        <XCircle className="size-3" />
                        Inactive
                      </Badge>
                    )}
                  </TableCell>

                  {/* Actions */}
                  <TableCell>
                    <div className="flex justify-end gap-1">
                      <ProductDialog product={product} />

                      <Button
                        variant="ghost"
                        size="sm"
                        disabled={isPending}
                        onClick={() => handleToggleStatus(product.id)}
                      >
                        {product.isActive ? 'Deactivate' : 'Activate'}
                      </Button>

                      <DeleteProductDialog
                        productId={product.id}
                        productName={product.name}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <p className="text-sm text-muted-foreground">
        Showing {filteredProducts.length} of {products.length} products
      </p>
    </div>
  );
}
