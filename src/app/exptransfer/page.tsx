import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Component() {
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
          <h1 className="text-2xl text-blue-900">Chuyển đổi điểm</h1>

          {/* Header Navigation */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-blue-500">
                  Trang chủ
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-blue-500">
                  Khu vực hội viên
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>Lịch sử điểm</BreadcrumbPage>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>Chuyển đổi điểm</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="min-h-screen bg-background">
          <div className="max-w-4xl mx-auto p-6 border rounded-sm shadow-md my-4">
            {/* Welcome Message */}
            <div className="space-y-2">
              <h2 className="text-lg font-medium">TRAN XUAN HANH Xin chào</h2>
              <p className="text-muted-foreground">
                Chào mừng bạn đến với Chuyển giá trị điểm
              </p>
            </div>

            {/* Points Selection Form */}
            <form className="space-y-6 mt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Vui lòng chọn loại điểm bạn muốn chuyển ra
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="註冊分(ĐIỂM KÍCH HOẠT)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="activation">
                        註冊分(ĐIỂM KÍCH HOẠT)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Hiện tại số điểm của bạn là
                  </label>
                  <div className="text-lg font-medium">0.00</div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="memberId" className="text-sm font-medium">
                    Vui lòng nhập mã số thành viên muốn chuyển tiền
                  </label>
                  <Input id="memberId" type="text" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Vui lòng chọn loại điểm bạn muốn chuyển vào
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="註冊分(ĐIỂM KÍCH HOẠT) - Tỷ lệ100 %" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="activation-100">
                        註冊分(ĐIỂM KÍCH HOẠT) - Tỷ lệ100 %
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="points" className="text-sm font-medium">
                    Vui lòng nhập số điểm bạn muốn chuyển đi
                  </label>
                  <Input id="points" type="number" className="w-full" />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="w-32">
                  Bước tiếp theo
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
