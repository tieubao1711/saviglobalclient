import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ShoppingCart } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { productsData } from "./data";
import { useTranslations } from "next-intl";
import Cart from "@/components/shopping-cart";

export default function Page() {
  const t = useTranslations();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/banner-about-us.jpg?height=400&width=1600"
          alt="Aimei Global Business banner image"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex-col gap-2 md:flex-row flex md:items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-blue-600 hover:text-blue-800"
                  href="/"
                >
                  {t("home")}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage> {t("products")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Cart />
        </div>

        <div className="mx-auto max-w-6xl flex flex-col md:grid md:grid-cols-4 gap-4">
          {productsData.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
