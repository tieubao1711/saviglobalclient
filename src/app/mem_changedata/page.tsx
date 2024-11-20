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
          <h1 className="text-2xl text-blue-900">{t("information-change")}</h1>

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
                <BreadcrumbPage>{t("information-change")}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <form className="mx-auto max-w-2xl space-y-8 p-4 border rounded-md shadow-md my-10">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="memberId">{t("code")}</Label>
              <Input
                id="memberId"
                value="VN-24072491"
                readOnly
                className="bg-gray-50"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="memberName">{t("full-name")}</Label>
                <Input id="memberName" defaultValue="TRAN XUAN HANH" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="memberClass">{t("level")}</Label>
                <Input
                  id="memberClass"
                  defaultValue="会員"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
            </div>

            {/* <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="dayPhone">Điện thoại ban ngày</Label>
                <Input id="dayPhone" type="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eveningPhone">Điện thoại ban đêm</Label>
                <Input id="eveningPhone" type="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fax">Số Fax</Label>
                <Input id="fax" type="tel" />
              </div>
            </div> */}

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="mobilePhone">{t("phone-number")}</Label>
                <Input id="mobilePhone" type="tel" defaultValue="0901547118" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="hanhtrxn.poid@gmail.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="deliveryAddress">{t("shipping-address")}</Label>
              <Input id="deliveryAddress" defaultValue="mặt bằng tầng 0" />
              <Input defaultValue="Số nhà 19, Khu đập thải số 2300, Khu phố 1, Thị trấn Tân Minh, Huyện Hàm Tân, Bình Thuận" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="billingAddress">{t("billing-address")}</Label>
              <Input id="billingAddress" defaultValue="mặt bằng tầng 0" />
            </div>

            <div className="space-y-4">
              <Label>{t("bank-information")}</Label>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="bankName">{t("name")}</Label>
                  <Input
                    id="bankName"
                    defaultValue="Ngân hàng thương mại cổ phần"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountName">{t("account-name")}</Label>
                  <Input id="accountName" defaultValue="TRAN XUAN HANH" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">{t("account-number")}</Label>
                  <Input id="accountNumber" defaultValue="4273507" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              {t("refill")}
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              {t("confirm")}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
