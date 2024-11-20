"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

export default function Calendar() {
  const [currentDate] = useState(new Date(2024, 10)); // November 2024

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const lastDayOfPrevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();

  const days = [];
  const highlightedDate = 9; // The date highlighted in green

  // Previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({
      date: lastDayOfPrevMonth - i,
      isCurrentMonth: false,
      isWeekend: false,
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const dayOfWeek = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      i
    ).getDay();
    days.push({
      date: i,
      isCurrentMonth: true,
      isWeekend: dayOfWeek === 6 || dayOfWeek === 0,
      isHighlighted: i === highlightedDate,
    });
  }

  // Next month days
  const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: i,
      isCurrentMonth: false,
      isWeekend: false,
    });
  }

  const t = useTranslations();

  const weekDays = [
    t("CalendarPage.sunday"),
    t("CalendarPage.monday"),
    t("CalendarPage.tuesday"),
    t("CalendarPage.wednesday"),
    t("CalendarPage.thursday"),
    t("CalendarPage.friday"),
    t("CalendarPage.saturday"),
  ];

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
              <BreadcrumbLink href="/news" className="text-blue-500">
                {t("news")}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>{t("calendar")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Cart />
      </div>

      <Card className="max-w-4xl mx-auto">
        <div className="bg-emerald-400 text-white p-4 flex justify-between items-center">
          <Button
            variant="ghost"
            className="text-white hover:text-white hover:bg-emerald-500"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-lg font-medium">Tháng 11 2024</span>
          <Button
            variant="ghost"
            className="text-white hover:text-white hover:bg-emerald-500"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-7">
          {weekDays.map((day, index) => (
            <div
              key={day}
              className={`p-4 text-center font-medium bg-blue-900 text-white border-r border-b ${
                index === weekDays.length - 1 ? "border-r-0" : ""
              }`}
            >
              {day}
            </div>
          ))}

          {days.map((day, index) => (
            <div
              key={index}
              className={`p-4 text-center border-b border-r relative min-h-[80px] ${
                index % 7 === 6 ? "border-r-0" : ""
              } ${!day.isCurrentMonth ? "text-gray-400" : ""} ${
                day.isWeekend ? "bg-blue-50" : ""
              } ${day.isHighlighted ? "bg-green-100" : ""}`}
            >
              <span className="absolute top-2 right-2">{day.date}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
