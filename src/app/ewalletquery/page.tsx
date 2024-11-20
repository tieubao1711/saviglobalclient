import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";

const transactions = [
  {
    memberId: "VN-240724091",
    date: "2024-11-09",
    amount: "3.00",
    description: "由 暫結獎金(VÍ TẠM TÍNH) 轉入",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-08",
    amount: "3.18",
    description: "由 暫結獎金(VÍ TẠM TÍNH) 轉入",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-07",
    amount: "3.24",
    description: "由 暫結獎金(VÍ TẠM TÍNH) 轉入",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-06",
    amount: "4.26",
    description: "由 暫結獎金(VÍ TẠM TÍNH) 轉入",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-05",
    amount: "4.30",
    description: "由 暫結獎金(VÍ TẠM TÍNH) 轉入",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-02",
    amount: "-15.00",
    description: "Đổi ví điện tử",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-02",
    amount: "2.90",
    description: "由 暫結獎金(VÍ TẠM TÍNH) 轉入",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-01",
    amount: "2.90",
    description: "由 暫結獎金(VÍ TẠM TÍNH) 轉入",
  },
  {
    memberId: "VN-240724091",
    date: "2024-10-31",
    amount: "3.06",
    description: "由 暫結獎金(VÍ TẠM TÍNH) 轉入",
  },
  {
    memberId: "VN-240724091",
    date: "2024-10-30",
    amount: "6.18",
    description: "由 暫結獎金(VÍ TẠM TÍNH) 轉入",
  },
  {
    memberId: "VN-240724091",
    date: "2024-10-26",
    amount: "-15.00",
    description: "Đổi ví điện tử",
  },
];

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
          <h1 className="text-2xl text-blue-900">{t("e-wallet-history")}</h1>

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
                <BreadcrumbPage>{t("e-wallet")}</BreadcrumbPage>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t("e-wallet-history")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="min-h-screen bg-background">
          <div className="max-w-6xl mx-auto p-6">
            {/* Account Balance */}
            <div className="mb-6 flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-violet-500 text-white hover:bg-violet-600"
              >
                {t("account-balance")}
              </Badge>
              <span className="text-lg font-medium">18.13</span>
            </div>

            {/* Transaction History Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader className="bg-emerald-400">
                  <TableRow>
                    <TableHead className="text-white">{t("code")}</TableHead>
                    <TableHead className="text-white">{t("date")}</TableHead>
                    <TableHead className="text-white">{t("amount")}</TableHead>
                    <TableHead className="text-white">
                      {t("description")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction, index) => (
                    <TableRow
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <TableCell>{transaction.memberId}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
