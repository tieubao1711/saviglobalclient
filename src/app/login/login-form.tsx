"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function LoginForm() {
  const t = useTranslations();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold bg-gray-700 text-white p-3 -mx-6 -mt-6 rounded-t-lg">
          {t("login")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="username">{t("account")}</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">{t("password")}</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="captcha">{t("verification-code")}</Label>
            <Input
              id="captcha"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              required
            />
            <div className="mt-2">
              <Image
                src="/placeholder.svg?height=50&width=150"
                alt="CAPTCHA"
                width={150}
                height={50}
                className="border"
              />
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <Link href="/join" className="text-blue-500 hover:underline">
              {t("register-member")}
            </Link>
            <Link
              href="/forget-password"
              className="text-blue-500 hover:underline"
            >
              {t("forgot-password")}
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            {t("login")}
          </Button>
        </form>
      </div>
    </div>
  );
}
