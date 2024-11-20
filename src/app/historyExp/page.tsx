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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";

const pointsHistory = [
  {
    memberId: "VN-240724091",
    date: "2024-11-09",
    points: "-3.00",
    description: "轉入電子錢包",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-08",
    points: "3.00",
    description: "2024/11/8 ~ 2024/11/8 視入點值**",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-08",
    points: "-3.18",
    description: "轉入電子錢包",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-07",
    points: "3.18",
    description: "2024/11/7 ~ 2024/11/7 視入點值**",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-07",
    points: "-3.24",
    description: "轉入電子錢包",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-06",
    points: "3.24",
    description: "2024/11/6 ~ 2024/11/6 視入點值**",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-06",
    points: "-4.26",
    description: "轉入電子錢包",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-05",
    points: "4.26",
    description: "2024/11/5 ~ 2024/11/5 視入點值**",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-05",
    points: "-4.30",
    description: "轉入電子錢包",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-04",
    points: "4.30",
    description: "2024/11/4 ~ 2024/11/4 視入點值**",
  },
  {
    memberId: "VN-240724091",
    date: "2024-11-02",
    points: "-2.90",
    description: "轉入電子錢包",
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
          <h1 className="text-2xl text-blue-900">{t("points-history")}</h1>

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
                <BreadcrumbPage>{t("points-history")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="min-h-screen bg-background">
          <div className="max-w-6xl mx-auto p-6">
            {/* Points Selection and Balance */}
            <div className="mb-6 flex items-center gap-4">
              <Select defaultValue="temp">
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder="Select points type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="temp">VÍ TẠM TÍNH</SelectItem>
                  <SelectItem value="point-active">ĐIỂM KÍCH HOẠT</SelectItem>
                </SelectContent>
              </Select>
              <Badge variant="secondary" className="bg-violet-500 text-white">
                {t("amount")}
              </Badge>
              <span>0.00</span>
            </div>

            {/* Points History Table */}
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
                  {pointsHistory.map((entry, index) => (
                    <TableRow
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <TableCell>{entry.memberId}</TableCell>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell>{entry.points}</TableCell>
                      <TableCell>{entry.description}</TableCell>
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
