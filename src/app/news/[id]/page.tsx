import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const t = useTranslations();

  return (
    <main>
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

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
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
                  {t("news")}
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t("new-detail")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center py-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-md shadow-sm">
            <h1 className="text-xl text-center ">
              Hoạt động khen thưởng tiếp tục
            </h1>
          </div>

          {/* Date */}
          <div className="flex gap-2 justify-center my-6 text-gray-600">
            <span>{t("LatestNewsPage.time")}:</span>
            <span>2024-11-07</span>
          </div>

          {/* Announcement Image */}
          <div className="max-w-4xl mx-auto">
            <Image
              src="/announcement-sample.jpg?height=600&width=800"
              alt="Announcement from Ame Global International Ltd. about VIP 2 membership rewards"
              width={800}
              height={600}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
