import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
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
            {t("organization-table-query")}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-2 mb-10">
        <Card className="p-6">
          <form className="space-y-6 md:px-28">
            {/* Member ID */}
            <div className="flex items-start gap-4">
              <Checkbox id="member-id-check" className="mt-1" />
              <div className="flex-1 space-y-2">
                <Label htmlFor="member-id">{t("code")}</Label>
                <Input id="member-id" />
              </div>
            </div>

            {/* Member Name */}
            <div className="flex items-start gap-4">
              <Checkbox id="member-name-check" className="mt-1" />
              <div className="flex-1 space-y-2">
                <Label htmlFor="member-name">{t("full-name")}</Label>
                <Input id="member-name" />
              </div>
            </div>

            {/* Level */}
            <div className="flex items-start gap-4">
              <Checkbox id="level-check" className="mt-1" />
              <div className="flex-1 space-y-2">
                <Label htmlFor="level">{t("level")}</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="消費商" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consumer">消費商</SelectItem>
                    <SelectItem value="vip-1">VIP1</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-2 mt-2">
                  <Checkbox id="direct-referral" />
                  <Label
                    htmlFor="direct-referral"
                    className="text-sm text-gray-600"
                  >
                    {t("search-direct-referrals-only")}
                  </Label>
                </div>
              </div>
            </div>

            {/* Member Level */}
            <div className="flex items-start gap-4">
              <Checkbox id="member-level-check" className="mt-1" />
              <div className="flex-1 space-y-2">
                <Label htmlFor="member-level">{t("appointment-level")}</Label>
                <Input id="member-level" />
              </div>
            </div>

            {/* Target */}
            <div className="space-y-2">
              <Label htmlFor="target">{t("object")}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Tổ chức tải định cư" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="organization">
                    Tổ chức tái định cư
                  </SelectItem>
                  <SelectItem value="organization-2">
                    Tổ chức được đề xuất
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort By */}
            <div className="space-y-2">
              <Label htmlFor="sort-by">{t("sort-by")}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Mã số hội viên" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="value-1">Mã số hội viên</SelectItem>
                  <SelectItem value="value-2">Ngày tham gia</SelectItem>
                  <SelectItem value="value-3">Cấp bậc</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <Button
                variant="outline"
                type="reset"
                className="bg-orange-500 hover:bg-orange-600 text-white hover:text-white border-none"
              >
                {t("refill")}
              </Button>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                {t("search")}
              </Button>
            </div>
          </form>

          {/* Results Info */}
          <div className="mt-6 space-y-2">
            <p>{t("number-of-searches")}:0</p>
            <p className="text-gray-800 text-sm">
              {t("only-500-items-can-be-listed-at-most")}
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}
