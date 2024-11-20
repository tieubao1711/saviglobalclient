import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
          <h1 className="text-2xl text-blue-900">
            {t("e-wallet-convert-cash")}
          </h1>

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
                <BreadcrumbPage>{t("e-wallet")}</BreadcrumbPage>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t("e-wallet-convert-cash")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mx-auto max-w-2xl space-y-8 my-10">
          <div className="p-4 border rounded-md shadow-md">
            {/* Welcome Message */}
            <div>
              <h2 className="text-lg font-medium">TRAN XUAN HANH,</h2>
              <p className="text-muted-foreground">{t("wellcome-message")}</p>
            </div>

            {/* Wallet Information */}
            <div className="space-y-4 my-4">
              <div className="grid gap-2">
                <Label>{t("current-amount")}:</Label>
                <div className="font-medium">18.13</div>
              </div>
              <div className="grid gap-2">
                <Label>{t("daily-redemption-limit")}:</Label>
                <div className="font-medium">18.13</div>
              </div>
              <div className="grid gap-2">
                <Label>{t("amount-exchanged-today")}:</Label>
                <div className="font-medium">0.00</div>
              </div>
              <div className="grid gap-2">
                <Label>{t("amount-currently-redeemable")}:</Label>
                <div className="font-medium">18.13</div>
              </div>
            </div>

            {/* Transfer Options */}
            <div className="space-y-2">
              <Label>
                {t("the-following-redemption-methods-are-available")}:
              </Label>
              <RadioGroup defaultValue="bank">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank">{t("bank-transfer")}</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Transfer Amount */}
            <div className="space-y-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="amount">{t("exchange-amount")}:</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0"
                  className="max-w-[200px]"
                />
              </div>
              <div className="flex justify-end">
                <Button className="w-32">{t("next-step")}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
