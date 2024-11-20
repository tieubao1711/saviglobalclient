import Link from "next/link";
import { ChevronRight, ChevronsRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";
import Cart from "@/components/shopping-cart";

const announcements = [
  { id: 1, title: "Hoạt động khen thưởng thập tục", date: "2024-11-07" },
  {
    id: 2,
    title: "Việc tuyển dụng riêng tư của các thành viên bí cẩm",
    date: "2024-10-24",
  },
  { id: 3, title: "Cuộc thi Vua tiền cờ tháng 9", date: "2024-10-15" },
  { id: 4, title: "Thông báo nghỉ lễ Quốc Khánh", date: "2024-10-09" },
  { id: 5, title: "金色十月快递升级新活动", date: "2024-10-07" },
  {
    id: 6,
    title: "Sự kiện thưởng khuyến mãi nhanh tháng 10 vàng",
    date: "2024-10-07",
    highlight: true,
  },
  { id: 7, title: "Thông báo tạm ngưng làm việc", date: "2024-10-01" },
  { id: 8, title: "Quy định chuyển nhượng thành viên", date: "2024-09-13" },
  {
    id: 9,
    title: "Ứng dụng Trung tâm Dịch vụ khách hàng",
    date: "2024-09-13",
  },
  { id: 10, title: "Quy định chuyển nhượng thành viên", date: "2024-09-13" },
  {
    id: 11,
    title: "Thông báo nghỉ lễ Trung thu của Đài Loan",
    date: "2024-09-13",
  },
  { id: 12, title: "Promotion đơn Tết Trung thu !", date: "2024-09-06" },
  {
    id: 13,
    title: "Hoạt động khen thưởng bổ sung bị hoãn lại",
    date: "2024-08-30",
  },
  {
    id: 14,
    title: "Thông báo nghỉ lễ Quốc Khánh Việt Nam",
    date: "2024-08-27",
  },
  {
    id: 15,
    title: "Chương trình khuyến mãi VIP tháng 8",
    date: "2024-08-09",
  },
];

export default function News() {
  const t = useTranslations();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex-col gap-2 md:flex-row flex md:items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-blue-500">
                {t("home")}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>{t("news")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Cart />
      </div>

      <Card className="max-w-6xl mx-auto">
        <CardHeader className="grid grid-cols-2 bg-emerald-400 text-white">
          <CardTitle>{t("title")}</CardTitle>
          <CardTitle className="text-right">{t("time")}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {announcements.map((announcement, index) => (
            <Link
              key={index}
              href={`/news/${announcement.id}`}
              className={`flex justify-between p-4 hover:bg-gray-50 border-b last:border-b-0 ${
                announcement.highlight ? "bg-green-50" : ""
              }`}
            >
              <span>{announcement.title}</span>
              <span className="text-gray-600">{announcement.date}</span>
            </Link>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-center gap-2 mt-4">
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
