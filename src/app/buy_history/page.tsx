import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
          <h1 className="text-2xl text-blue-900">{t("purchase-history")}</h1>

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
                <BreadcrumbPage>{t("purchase-history")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="delivered" className="max-w-6xl mx-auto my-10">
          <TabsList className="w-fit">
            <TabsTrigger value="delivered" className="px-6">
              {t("shipped")}
            </TabsTrigger>
            <TabsTrigger value="pending" className="px-6">
              {t("not-shipped")}
            </TabsTrigger>
          </TabsList>

          {/* Delivered Orders Tab */}
          <TabsContent value="delivered">
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#5ccfcf] hover:bg-[#5ccfcf]/90">
                    <TableHead className="text-white">{t("date")}</TableHead>
                    <TableHead className="text-white">{t("code")}</TableHead>
                    <TableHead className="text-white">
                      {t("payment-type")}
                    </TableHead>
                    <TableHead className="text-white">
                      {t("amount")} PV
                    </TableHead>
                    <TableHead className="text-white">{t("amount")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024/07/24</TableCell>
                    <TableCell>2407243204718447</TableCell>
                    <TableCell>一般訂單</TableCell>
                    <TableCell>500.00</TableCell>
                    <TableCell>550.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Pending Orders Tab */}
          <TabsContent value="pending">
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#5ccfcf] hover:bg-[#5ccfcf]/90">
                    <TableHead className="text-white">{t("date")}</TableHead>
                    <TableHead className="text-white">{t("code")}</TableHead>
                    <TableHead className="text-white">
                      {t("payment-type")}
                    </TableHead>
                    <TableHead className="text-white">
                      {t("amount")} PV
                    </TableHead>
                    <TableHead className="text-white">{t("amount")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024/07/24</TableCell>
                    <TableCell>2407243204718447</TableCell>
                    <TableCell>一般訂單</TableCell>
                    <TableCell>700.00</TableCell>
                    <TableCell>550.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024/07/24</TableCell>
                    <TableCell>2407243204718447</TableCell>
                    <TableCell>一般訂單</TableCell>
                    <TableCell>700.00</TableCell>
                    <TableCell>550.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024/07/24</TableCell>
                    <TableCell>2407243204718447</TableCell>
                    <TableCell>一般訂單</TableCell>
                    <TableCell>700.00</TableCell>
                    <TableCell>550.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
