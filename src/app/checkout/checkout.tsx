"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function Checkout() {
  const t = useTranslations();

  const [sameAsCustomer, setSameAsCustomer] = useState(false);

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
              <BreadcrumbPage>{t("checkout")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader className="bg-emerald-400 text-white">
            <CardTitle>{t("cart")}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">{t("product-name")}</th>
                    <th className="text-center p-2">{t("quantity")}</th>
                    <th className="text-center p-2">{t("unit-price")}</th>
                    <th className="text-center p-2">PV</th>
                    <th className="text-center p-2">{t("total-amount")}</th>
                    <th className="text-center p-2">{t("total")} PV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">
                      <div>002</div>
                      <div>Ngưu Chương Chỉ (2 hộp)</div>
                    </td>
                    <td className="text-center p-2">2</td>
                    <td className="text-center p-2">550.00</td>
                    <td className="text-center p-2">500.00</td>
                    <td className="text-center p-2">1100.00</td>
                    <td className="text-center p-2">1000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <div>{t("total-transactions")}: 1</div>
                <div>{t("discount")}: 0.00</div>
                <div>{t("shipping-fee")}: 0.00</div>
              </div>
              <div className="text-right">
                <div>{t("total")} PV: 1000.00</div>
                <div>{t("total-amount")}: 1100.00</div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href="/products">{t("continue-to-purchase")}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-emerald-400 text-white">
            <CardTitle>{t("basic-information")}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-medium">{t("full-name")}</div>
                <div>TRAN XUAN HANH</div>
              </div>
              <div>
                <div className="font-medium">{t("phone-number")}</div>
                <div>0902547119</div>
              </div>
            </div>
            <div>
              <div className="font-medium">{t("shipping-address")}</div>
              <div>
                055 mã 19, Khu phố thứ 2, Z100, Khu phố 1, Thị trấn Tân Minh,
                Huyện Hàm Tân, Bình Thuận
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-emerald-400 text-white">
            <CardTitle>{t("billing-information")}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="same-info"
                  checked={sameAsCustomer}
                  onCheckedChange={(checked) =>
                    setSameAsCustomer(checked as boolean)
                  }
                />
                <Label htmlFor="same-info">{t("information-as-above")}</Label>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullname">{t("full-name")}</Label>
                  <Input id="fullname" placeholder={t("full-name")} />
                </div>
                <div>
                  <Label htmlFor="address">{t("billing-address")}</Label>
                  <Input id="address" placeholder={t("billing-address")} />
                </div>
                <div>
                  <Label htmlFor="phone">{t("phone-number")}</Label>
                  <Input id="phone" placeholder={t("phone-number")} />
                </div>
                <div>
                  <Label htmlFor="notes">{t("note")}</Label>
                  <Textarea id="notes" placeholder={t("note")} />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                {t("confirm")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
