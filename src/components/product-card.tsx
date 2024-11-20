"use client";

import { MouseEvent, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { productsData } from "@/app/products/data";

export function ProductCard({
  product,
}: {
  product: (typeof productsData)[number];
}) {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(0);

  const incrementQuantity = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const addToCart = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setCartItems((prev) => prev + quantity);
  };

  return (
    <Card
      className="border shadow-sm"
      onClick={() => {
        router.push(`/products/${product.slug}`);
      }}
    >
      <CardContent className="p-4">
        <div className="aspect-square relative mb-4">
          <Image
            src="/product-sample.jpg"
            alt="Ngưu Chương Chỉ"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h2 className="text-lg font-semibold mb-2">{product.product_name}</h2>
        <div className="space-y-2 text-sm">
          <p className="text-gray-600">Mã số: {product.product_code}</p>
          <p className="text-gray-600">Giá thành: {product.price}</p>
          <p className="text-gray-600">PV: {product.exchange_value}</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Button
            variant="outline"
            size="icon"
            onClick={decrementQuantity}
            className="h-8 w-8"
          >
            -
          </Button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-16 h-8 text-center border rounded"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={incrementQuantity}
            className="h-8 w-8"
          >
            +
          </Button>
          <Button onClick={addToCart} size="icon" className="ml-2 h-8 w-8">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
