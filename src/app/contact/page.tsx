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
        {/* Header Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-blue-500">
                  {t("home")}
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t("contact-us")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Contact Information */}
        <div className="space-y-12">
          {/* Taiwan HQ */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">台灣總公司</h2>
            <div className="space-y-2 max-w-2xl mx-auto">
              <p className="text-center">
                地址:高雄市新興區民權一路251號5樓E室
              </p>
              <div className="flex justify-center gap-8">
                <a
                  href="tel:07-2221115"
                  className="text-blue-600 hover:underline"
                >
                  TEL:07-2221115
                </a>
                <p>傳真:07-2221105</p>
              </div>
            </div>
          </section>

          {/* Vietnam Branch */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">越南分公司</h2>
            <div className="space-y-2 max-w-2xl mx-auto">
              <p className="text-center">
                ADD:Phòng 1702 67 Hoàng Văn Thái, Tân Phú, Quận7,T.P.HCM, Việt
                Nam
              </p>
              <div className="flex justify-center">
                <a
                  href="tel:0862408360"
                  className="text-blue-600 hover:underline"
                >
                  TEL:0862408360
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
