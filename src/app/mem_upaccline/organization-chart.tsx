"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronRight,
  Calendar as CalendarIcon,
  Users,
  Search,
} from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { useTranslations } from "next-intl";

export function OrganizationChart() {
  const t = useTranslations();

  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Search Form */}
      <div className="bg-white rounded-lg border p-6 mb-6 space-y-6">
        <div>
          <h2 className="text-sm font-medium mb-4">{t("set-query-period")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-date" className="text-sm text-gray-600">
                {t("start-date")}
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${
                      !startDate && "text-muted-foreground"
                    }`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? (
                      format(startDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
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
              <Label htmlFor="end-date" className="text-sm text-gray-600">
                {t("end-date")}
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${
                      !endDate && "text-muted-foreground"
                    }`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? (
                      format(endDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-1">
            <Label htmlFor="member-search" className="sr-only">
              {t("name-or-membership-number")}
            </Label>
            <Input
              id="member-search"
              type="text"
              placeholder={t("placeholder")}
            />
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            <Search className="w-4 h-4 mr-2" />
            {t("search")}
          </Button>
        </div>
      </div>

      {/* Results List */}
      <div className="bg-white rounded-lg border p-4">
        <ul className="space-y-4">
          {/* Root Member */}
          <li>
            <div className="flex items-center gap-2 text-blue-600">
              <span className="text-green-500 font-bold">⊖</span>
              <span>0</span>
              <Link
                href="#"
                className="hover:underline flex items-center gap-2 flex-wrap"
              >
                VN-240724091 TRAN XUAN HANH
                <span className="text-gray-600">2024/7/24</span>
                <span className="text-gray-600">消費商</span>
                <span className="text-gray-600">Đơn vị : 一般</span>
                <Users className="w-4 h-4 text-gray-400" />
              </Link>
            </div>

            {/* Nested Members */}
            <ul className="ml-8 mt-4 space-y-4">
              <li>
                <div className="flex items-center gap-2 text-blue-600">
                  <span className="text-blue-500 font-bold">└</span>
                  <span>1</span>
                  <Link
                    href="#"
                    className="hover:underline flex items-center gap-2 flex-wrap"
                  >
                    VN-240801262 BUI DUC LUU
                    <span className="text-gray-600">2024/8/1</span>
                    <span className="text-gray-600">消費商</span>
                    <span className="text-gray-600">Đơn vị : 一般</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-blue-600">
                  <span className="text-red-500 font-bold">└</span>
                  <span>1</span>
                  <Link
                    href="#"
                    className="hover:underline flex items-center gap-2 flex-wrap"
                  >
                    VN-240726082 VO THI ANH-1
                    <span className="text-gray-600">2024/7/26</span>
                    <span className="text-gray-600">消費商</span>
                    <span className="text-gray-600">Đơn vị : 一般</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
