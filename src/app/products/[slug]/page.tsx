import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { productsData } from "../data";
import Cart from "@/components/shopping-cart";

export default function Page({ params }: { params: { slug: string } }) {
  const t = useTranslations();
  const product = productsData.find((product) => product.slug === params.slug);

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
                <BreadcrumbLink
                  className="text-blue-600 hover:text-blue-800"
                  href="/products"
                >
                  {t("products")}
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t("product-detail")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Cart />
        </div>

        <h1 className="text-2xl font-bold text-blue-900">
          {product?.product_name}
        </h1>

        <div className="mx-auto max-w-6xl mt-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="aspect-square relative">
              <Image
                src="/product-sample.jpg"
                alt="Ngưu Chương Chỉ"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <span className="font-medium">{t("name")}</span>
                  </div>
                  <div className="border-b pb-2">
                    <span className="font-medium">{t("code")}</span>
                  </div>
                  <div className="border-b pb-2">
                    <span className="font-medium">{t("price")}</span>
                  </div>
                  <div className="border-b pb-2">
                    <span className="font-medium">{t("quantity")}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-b pb-2">{product?.product_name}</div>
                  <div className="border-b pb-2">{product?.product_code}</div>
                  <div className="border-b pb-2">{product?.price}</div>
                  <div className="border-b pb-2">{product?.quantity}</div>
                </div>
              </div>

              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                {t("add-to-cart")}
              </Button>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold">
              {product?.product_name}
              <span className="block text-sm font-normal text-gray-600">
                ({product?.quantity} hộp)
              </span>
            </h2>
            <p className="text-red-500">
              {product?.currency_unit} {product?.currency_value}
            </p>
            <p className="text-gray-600">PV500USD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
