import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coins, Wallet, DollarSign } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Page() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-800 px-6 py-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="space-y-1">
            <h1 className="text-white text-2xl font-semibold">
              {t("members-area")}
            </h1>
            {/* <p className="text-blue-100">愛美全球事業有限公司</p> */}
          </div>
          <Button
            asChild
            className="bg-purple-700 hover:bg-purple-700/80 text-white"
          >
            <Link href="/join">{t("join-online")}</Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="container mx-auto -mt-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-blue-500 text-white p-4">
            <div className="flex items-center gap-3">
              <Coins className="w-8 h-8" />
              <div>
                <p className="text-sm text-blue-100">{t("bonus-points")}</p>
                <p className="text-2xl font-semibold">792.87</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white p-4">
            <div className="flex items-center gap-3">
              <Wallet className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">{t("e-wallet")}</p>
                <p className="text-2xl font-semibold">18.13</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white p-4">
            <div className="flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-600">{t("temporary-wallet")}</p>
                <p className="text-2xl font-semibold">0.00</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white p-4">
            <div className="flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-sm text-gray-600">{t("trigger-points")}</p>
                <p className="text-2xl font-semibold">0.00</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6 grid md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            {t("basic-information")}
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 border-b py-2">
              <span className="text-gray-600">{t("full-name")}</span>
              <span>TRAN XUAN HANH</span>
            </div>
            <div className="grid grid-cols-2 border-b py-2">
              <span className="text-gray-600">{t("code")}</span>
              <span>VN-240724091</span>
            </div>
            <div className="grid grid-cols-2 border-b py-2">
              <span className="text-gray-600">{t("date-of-joining")}</span>
              <span>2024-07-24</span>
            </div>
            <div className="grid grid-cols-2 border-b py-2">
              <span className="text-gray-600">{t("appointment-level")}</span>
              <span>消費商</span>
            </div>
            <div className="grid grid-cols-2 border-b py-2">
              <span className="text-gray-600">{t("level")}</span>
              <span>一般</span>
            </div>
            <div className="grid grid-cols-2 border-b py-2">
              <span className="text-gray-600">Email</span>
              <span>hanhtran.pkd@gmail.com</span>
            </div>
            <div className="grid grid-cols-2 border-b py-2">
              <span className="text-gray-600">{t("phone-number")}</span>
              <span>0901547119</span>
            </div>
          </div>
        </Card>

        {/* Accumulated Sales */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            {t("accumulated-performance")}
          </h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span>{t("left-area")}</span>
                <Button variant="link" className="text-blue-600">
                  {t("click-to-display-information")}
                </Button>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span>{t("right-area")}</span>
                <Button variant="link" className="text-blue-600">
                  {t("click-to-display-information")}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
