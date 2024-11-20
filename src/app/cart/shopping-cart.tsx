"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";

export default function ShoppingCart() {
  const t = useTranslations();

  const [quantity, setQuantity] = useState(2);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const unitPrice = 550.0;
  const pvPrice = 500.0;
  const totalAmount = quantity * unitPrice;
  const totalPV = quantity * pvPrice;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-blue-500">
                {t("home")}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/products" className="text-blue-500">
                {t("products")}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>{t("cart")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Card className="mb-6">
        <div className="bg-emerald-400 text-white p-4 text-lg font-medium">
          {t("cart")}
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start relative">
            <div className="w-full md:w-48 aspect-square relative">
              <Image
                src="/product-sample.jpg"
                alt="Ngưu Chương Chỉ"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-gray-500">002</div>
                  <h3 className="text-lg font-medium">
                    Ngưu Chương Chỉ (2 hộp)
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-600"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
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
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-500">{t("unit-price")}</div>
                  <div>{unitPrice.toFixed(2)}</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-500">{t("total-amount")}</div>
                  <div>{totalAmount.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-gray-500">PV</div>
                  <div>{pvPrice.toFixed(2)}</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-500">{t("total")} PV</div>
                  <div>{totalPV.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row justify-between gap-4 items-start">
        <div className="space-y-2">
          <div>{t("total-transactions")}: 1</div>
          <div>
            {t("total-amount")} {totalAmount.toFixed(2)}
          </div>
        </div>
        <div className="space-y-2 md:text-right">
          <div>
            {t("total")} PV {totalPV.toFixed(2)}
          </div>
          <div className="flex gap-4">
            <Button asChild className="bg-blue-500 hover:bg-blue-600">
              <Link href="/products">{t("continue-to-purchase")}</Link>
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Link href="/checkout">{t("checkout")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
