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
          <h1 className="text-2xl text-blue-900">{t("bonus-inquiry")}</h1>

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
                <BreadcrumbPage>{t("bonus-inquiry")}</BreadcrumbPage>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t("current-bonus-inquiry")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="max-w-6xl mx-auto my-10">
          {/* Member Info */}
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{t("code")}:</span>
                <span className="text-sm">VN-240724091</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{t("full-name")}:</span>
                <span className="text-sm">TRAN XUAN HANH</span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader className="bg-blue-50">
                <TableRow>
                  <TableHead rowSpan={2} className="border text-center">
                    Chu Kỳ Thưởng
                  </TableHead>
                  <TableHead className="border text-center">消費封</TableHead>
                  <TableHead className="border text-center">報單中</TableHead>
                  <TableHead className="border text-center">報單完</TableHead>
                  <TableHead className="border text-center">消費分</TableHead>
                  <TableHead className="border text-center">安置員</TableHead>
                  <TableHead className="border text-center">輔導封</TableHead>
                  <TableHead className="border text-center">輔導分</TableHead>
                  <TableHead className="border text-center">TỔNG</TableHead>
                  <TableHead className="border text-center">
                    CÁC BỔ SUNG KHÁC
                  </TableHead>
                  <TableHead className="border text-center">
                    CÁC KHOẢN KHẤU TRỪ KHÁC
                  </TableHead>
                  <TableHead className="border text-center">THUẾ</TableHead>
                  <TableHead className="border text-center">
                    PHÍ BỔ SUNG
                  </TableHead>
                  <TableHead className="border text-center">
                    TỔNG CỘNG
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border text-center">
                    2024-11-10
                  </TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                </TableRow>
                <TableRow className="bg-blue-50">
                  <TableCell className="border font-medium">
                    Tổng cộng:
                  </TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                  <TableCell className="border text-center">0.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
}
