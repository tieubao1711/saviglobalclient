"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function RewardSearch() {
  const t = useTranslations();

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="space-y-8 border rounded-md p-4 shadow-md">
        {/* Date Range Selection */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">{t("start-date")}</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "yyyy/MM/dd") : "2024/11/12"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">{t("end-date")}</label>
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "yyyy/MM/dd") : "2024/11/12"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Button>{t("search")}</Button>
            </div>
          </div>
        </div>

        {/* Period Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {t("view-by-bonus-cycle")}
          </label>
          <div className="flex gap-2">
            <Select defaultValue="current">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">2024-11-10 ~ 2024-11-10</SelectItem>
              </SelectContent>
            </Select>
            <Button>{t("search")}</Button>
          </div>
        </div>

        {/* Member Information */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{t("code")}</span>
              <span>VN-240724091</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{t("full-name")}</span>
              <span>TRAN XUAN HANH</span>
            </div>
          </div>
        </div>

        {/* Rewards Table */}
        <div className="rounded-md border-t pt-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-500 text-white hover:bg-blue-500">
                <TableHead className="text-white">Chu Kỳ Thưởng</TableHead>
                <TableHead className="text-white">消費封等</TableHead>
                <TableHead className="text-white">報單中心</TableHead>
                <TableHead className="text-white">報單同階</TableHead>
                <TableHead className="text-white">消費分紅</TableHead>
                <TableHead className="text-white">安置員點</TableHead>
                <TableHead className="text-white">輔導封等</TableHead>
                <TableHead className="text-white">輔導分紅</TableHead>
                <TableHead className="text-white">TỔNG</TableHead>
                <TableHead className="text-white">CÁC BỔ SUNG KHÁC</TableHead>
                <TableHead className="text-white">
                  CÁC KHOẢN KHẤU TRỪ KHÁC
                </TableHead>
                <TableHead className="text-white">THUẾ</TableHead>
                <TableHead className="text-white">PHÍ BỔ SUNG</TableHead>
                <TableHead className="text-white">TỔNG CỘNG</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024-11-10</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
              </TableRow>
              <TableRow className="bg-blue-50">
                <TableCell className="font-medium">Tổng cộng:</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
