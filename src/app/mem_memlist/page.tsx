import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
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
          <h1 className="text-2xl text-blue-900">{t("members-list")}</h1>

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
                <BreadcrumbLink href="/" className="text-blue-500">
                  {t("members-area")}
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t("organization-table-query")}</BreadcrumbPage>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t("members-list")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pb-10">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-gray-50">
            <div className="text-sm text-gray-600">
              {t("number-of-people-in-the-organization")}:
            </div>
            <div className="text-2xl font-semibold">3</div>
          </Card>
          <Card className="p-4 bg-gray-50">
            <div className="text-sm text-gray-600">
              {t("number-of-people-in-the-left-area")}:
            </div>
            <div className="text-2xl font-semibold">1</div>
          </Card>
          <Card className="p-4 bg-gray-50">
            <div className="text-sm text-gray-600">
              {t("number-of-people-in-the-right-area")}:
            </div>
            <div className="text-2xl font-semibold">1</div>
          </Card>
        </div>

        {/* Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-emerald-500">
              <TableRow>
                <TableHead className="text-white font-medium">
                  {t("code")}
                </TableHead>
                <TableHead className="text-white font-medium">
                  {t("full-name")}
                </TableHead>
                <TableHead className="text-white font-medium">
                  {t("date-of-joining")}
                </TableHead>
                <TableHead className="text-white font-medium">
                  {t("recommender")}
                </TableHead>
                <TableHead className="text-white font-medium">
                  {t("zone")}
                </TableHead>
                <TableHead className="text-white font-medium">
                  {t("level")}
                </TableHead>
                <TableHead className="text-white font-medium"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>VN-240801262</TableCell>
                <TableCell>BUI DUC LUU</TableCell>
                <TableCell>2024-08-01</TableCell>
                <TableCell>TRAN XUAN HANH</TableCell>
                <TableCell>khu vực bên trái</TableCell>
                <TableCell>消費商</TableCell>
                <TableCell>
                  <Link href="#" className="text-blue-600 hover:underline">
                    {t("organizational-chart")}
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>VN-240726082</TableCell>
                <TableCell>VO THI ANH-1</TableCell>
                <TableCell>2024-07-26</TableCell>
                <TableCell>TRAN XUAN HANH</TableCell>
                <TableCell>khu vực bên phải</TableCell>
                <TableCell>消費商</TableCell>
                <TableCell>
                  <Link href="#" className="text-blue-600 hover:underline">
                    {t("organizational-chart")}
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>VN-240724091</TableCell>
                <TableCell>TRAN XUAN HANH</TableCell>
                <TableCell>2024-07-24</TableCell>
                <TableCell>LUONG XUAN THAI</TableCell>
                <TableCell>Của tôi</TableCell>
                <TableCell>消費商</TableCell>
                <TableCell>
                  <Link href="#" className="text-blue-600 hover:underline">
                    {t("organizational-chart")}
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
