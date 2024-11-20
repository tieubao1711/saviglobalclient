import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Cart from "@/components/shopping-cart";

export default function About() {
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
                <BreadcrumbPage>{t("about-us")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Cart />
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">
              {t("AboutUsPage.content")}
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image
              src="/about-us.jpg?height=600&width=1200"
              alt="Modern skyscrapers with blue glass facades"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
