"use client";

import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/lib/locale";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <Button
      className="rounded-none"
      size="sm"
      variant="ghost"
      onClick={() => onChange(locale === "vi" ? "en" : "vi")}
    >
      <Globe className="h-4 w-4" />
      {locale.toUpperCase()}
    </Button>
  );
}
