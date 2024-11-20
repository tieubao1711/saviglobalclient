"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[#1a237e] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <Link href="#" className="block hover:underline">
              {t("instruction")}
            </Link>
            <Link href="#" className="block hover:underline">
              {t("policy")}
            </Link>
          </div>
          <div className="text-sm text-gray-300">
            <p>
              2024 copyright © All rights reserved.{" "}
              <span>
                Power By{" "}
                <Link href="#" className="hover:underline">
                  暨訊科技
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
