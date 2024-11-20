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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Copy, PenSquare, Share, User } from "lucide-react";
import Link from "next/link";
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
          <h1 className="text-2xl text-blue-900">
            {t("placement-organizational-tree-diagram")}
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
                <BreadcrumbLink href="/member" className="text-blue-500">
                  {t("members-area")}
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{t("organization-table-query")}</BreadcrumbPage>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>
                  {t("placement-organizational-tree-diagram")}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center md:gap-6 justify-between">
          <div className="flex gap-4 mb-6 border rounded-lg p-4">
            <RadioGroup defaultValue="right" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="left" id="left" />
                <Label htmlFor="left">{t("extreme-left")}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="right" id="right" />
                <Label htmlFor="right">{t("extreme-right")}</Label>
              </div>
            </RadioGroup>
            <Button variant="default" className="bg-blue-500 hover:bg-blue-700">
              {t("setting")}
            </Button>
          </div>

          <div className="flex gap-4 flex-1 mb-6 border rounded-lg p-4">
            <Input />
            <Button variant="default" className="bg-blue-500 hover:bg-blue-700">
              {t("search")}
            </Button>
          </div>
        </div>

        <div className="border rounded-lg p-6 mb-6">
          <div className="flex flex-col items-center">
            {/* Root Node */}
            <div className="flex flex-col items-center mb-8">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <User className="w-8 h-8 text-gray-600" />
              </div>
              <div className="text-center">
                <Link href="#" className="text-blue-500 hover:underline">
                  TRAN XUAN HANH
                </Link>
                <div className="text-sm text-gray-600">VN-24072409</div>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                <span className="uppercase">
                  {t("number-of-people-in-the-left-area")}: 1
                </span>
                <span className="mx-2">|</span>
                <span className="uppercase">
                  {t("number-of-people-in-the-right-area")}: 1
                </span>
              </div>
            </div>

            {/* Tree Branches */}
            <div className="relative w-full">
              <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
              <div className="absolute top-8 left-1/4 right-1/4 h-px bg-gray-300"></div>
              <div className="absolute top-8 left-1/4 w-px h-8 bg-gray-300"></div>
              <div className="absolute top-8 right-1/4 w-px h-8 bg-gray-300"></div>

              {/* Child Nodes */}
              <div className="flex justify-between pt-16">
                {/* Left Child */}
                <div className="flex flex-col items-center w-1/2">
                  <div className="bg-gray-100 rounded-full p-4 mb-2">
                    <User className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="text-center">
                    <Link href="#" className="text-blue-500 hover:underline">
                      BUI DUC LUU
                    </Link>
                    <div className="text-sm text-gray-600">VN-24080126</div>
                  </div>

                  <div className="relative w-full">
                    <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
                    <div className="absolute top-8 left-1/4 right-1/4 h-px bg-gray-300"></div>
                    <div className="absolute top-8 left-1/4 w-px h-8 bg-gray-300"></div>
                    <div className="absolute top-8 right-1/4 w-px h-8 bg-gray-300"></div>

                    {/* Child Nodes */}
                    <div className="flex justify-between pt-16">
                      {/* Left Child */}
                      <div className="flex flex-col items-center w-1/2">
                        <div className="bg-gray-100 rounded-full p-4 mb-2">
                          <PenSquare className="w-8 h-8 text-gray-600" />
                        </div>
                        <div className="text-center">
                          <Link
                            href="/join"
                            className="text-blue-500 hover:underline"
                          >
                            {t("join-online")}
                          </Link>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" className="h-6 px-1.5">
                            <Copy />
                          </Button>
                          <Button variant="outline" className="h-6 px-1.5">
                            <Share />
                          </Button>
                        </div>
                      </div>

                      {/* Right Child */}
                      <div className="flex flex-col items-center w-1/2">
                        <div className="bg-gray-100 rounded-full p-4 mb-2">
                          <PenSquare className="w-8 h-8 text-gray-600" />
                        </div>
                        <div className="text-center">
                          <Link
                            href="/join"
                            className="text-blue-500 hover:underline"
                          >
                            {t("join-online")}
                          </Link>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" className="h-6 px-1.5">
                            <Copy />
                          </Button>
                          <Button variant="outline" className="h-6 px-1.5">
                            <Share />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Child */}
                <div className="flex flex-col items-center w-1/2">
                  <div className="bg-gray-100 rounded-full p-4 mb-2">
                    <User className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="text-center">
                    <Link href="#" className="text-blue-500 hover:underline">
                      VO THI ANH-1
                    </Link>
                    <div className="text-sm text-gray-600">VN-24072608</div>
                  </div>

                  <div className="relative w-full">
                    <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-300 -translate-x-1/2"></div>
                    <div className="absolute top-8 left-1/4 right-1/4 h-px bg-gray-300"></div>
                    <div className="absolute top-8 left-1/4 w-px h-8 bg-gray-300"></div>
                    <div className="absolute top-8 right-1/4 w-px h-8 bg-gray-300"></div>

                    {/* Child Nodes */}
                    <div className="flex justify-between pt-16">
                      {/* Left Child */}
                      <div className="flex flex-col items-center w-1/2">
                        <div className="bg-gray-100 rounded-full p-4 mb-2">
                          <PenSquare className="w-8 h-8 text-gray-600" />
                        </div>
                        <div className="text-center">
                          <Link
                            href="/join"
                            className="text-blue-500 hover:underline"
                          >
                            {t("join-online")}
                          </Link>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" className="h-6 px-1.5">
                            <Copy />
                          </Button>
                          <Button variant="outline" className="h-6 px-1.5">
                            <Share />
                          </Button>
                        </div>
                      </div>

                      {/* Right Child */}
                      <div className="flex flex-col items-center w-1/2">
                        <div className="bg-gray-100 rounded-full p-4 mb-2">
                          <PenSquare className="w-8 h-8 text-gray-600" />
                        </div>
                        <div className="text-center">
                          <Link
                            href="/join"
                            className="text-blue-500 hover:underline"
                          >
                            {t("join-online")}
                          </Link>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" className="h-6 px-1.5">
                            <Copy />
                          </Button>
                          <Button variant="outline" className="h-6 px-1.5">
                            <Share />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <Button variant="secondary">{t("previous-level")}</Button>
          <Button variant="secondary">{t("own")}</Button>
          <Button variant="secondary">{t("previous-page")}</Button>
        </div>

        {/* Member Information */}
        <div className="space-y-4">
          <div className="bg-teal-500 text-white p-2">
            {t("basic-information-of-member")}
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50">
            <div>
              <div className="font-medium">{t("code")}</div>
              <div className="text-gray-600">VN-24072409</div>
            </div>
            <div>
              <div className="font-medium">{t("full-name")}</div>
              <div className="text-gray-600">TRAN XUAN HANH</div>
            </div>
            <div>
              <div className="font-medium">{t("appointment-level")}</div>
              <div className="text-gray-600">-</div>
            </div>
            <div>
              <div className="font-medium">{t("region")}</div>
              <div className="text-gray-600">-</div>
            </div>
            <div>
              <div className="font-medium">{t("date-of-joining")}</div>
              <div className="text-gray-600">-</div>
            </div>
            <div>
              <div className="font-medium">{t("recommender")}</div>
              <div className="text-gray-600">-</div>
            </div>
          </div>

          <div className="bg-teal-500 text-white p-2">
            {t("business-expansion-status")}
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50">
            <div>
              <div className="font-medium">{t("expiration-date")}</div>
              <div className="text-gray-600">-</div>
            </div>
            <div>
              <div className="font-medium">{t("billing-cycle")}</div>
              <div className="text-gray-600">-</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
