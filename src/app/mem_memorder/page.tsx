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
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
          <h1 className="text-2xl text-blue-900">{t("today-orders")}</h1>

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
                <BreadcrumbPage>{t("today-orders")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="order-history" className="max-w-5xl mx-auto my-10">
          <TabsList className="w-fit">
            <TabsTrigger value="order-history" className="px-6">
              {t("history-orders")}
            </TabsTrigger>
            <TabsTrigger value="pending" className="px-6">
              {t("today-orders")}
            </TabsTrigger>
          </TabsList>

          {/* Delivered Orders Tab */}
          <TabsContent value="order-history">
            <div className="rounded-lg border p-6">
              {/* Date Range Selector */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="startDate">{t("start-date")}</Label>
                  <div className="relative">
                    <Input
                      type="text"
                      id="startDate"
                      placeholder="2024/11/5"
                      className="pl-10"
                    />
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">{t("end-date")}</Label>
                  <div className="relative">
                    <Input
                      type="text"
                      id="endDate"
                      placeholder="2024/11/12"
                      className="pl-10"
                    />
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Confirm Button */}
              <div className="flex justify-end mt-4">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  {t("search")}
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Pending Orders Tab */}
          <TabsContent value="pending">Chưa có UI</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
