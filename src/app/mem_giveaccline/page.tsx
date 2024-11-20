import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Users } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

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

      <div className="container mx-auto p-4">
        <div className="pb-6 flex-col gap-2 md:flex-row flex md:items-center justify-between border-b">
          <h1 className="text-2xl text-blue-900 uppercase">
            {t("organization-table-query")}
          </h1>

          {/* Header Navigation */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-blue-500">
                  {t("home")}
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink href="/member" className="text-blue-500">
                  {t("members-area")}
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t("organization-table-query")}</BreadcrumbPage>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t("organizational-chart")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Tree View */}
      <div className="max-w-5xl mx-auto my-10 border rounded-lg bg-white shadow-sm">
        <div className="p-4">
          <ul className="space-y-4">
            {/* Root Node */}
            <li>
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-gray-400">⊖</span>
                <span>0</span>
                <Link href="#" className="hover:underline">
                  VN-240724091 TRAN XUAN HANH
                </Link>
                <span className="text-gray-600">2024/7/24</span>
                <span className="text-gray-600">消費商</span>
                <span className="text-gray-600">級別：一般</span>
                <Users className="w-4 h-4 text-gray-400" />
              </div>

              {/* Child Nodes */}
              <ul className="ml-8 mt-4 space-y-4">
                <li>
                  <div className="flex items-center gap-2 text-blue-600">
                    <span className="text-gray-400">└</span>
                    <span>1</span>
                    <Link href="#" className="hover:underline">
                      VN-240726082 VO THI ANH-1
                    </Link>
                    <span className="text-gray-600">2024/7/26</span>
                    <span className="text-gray-600">消費商</span>
                    <span className="text-gray-600">級別：一般</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-blue-600">
                    <span className="text-gray-400">└</span>
                    <span>1</span>
                    <Link href="#" className="hover:underline">
                      VN-240801262 BUI DUC LUU
                    </Link>
                    <span className="text-gray-600">2024/8/1</span>
                    <span className="text-gray-600">消費商</span>
                    <span className="text-gray-600">級別：一般</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
