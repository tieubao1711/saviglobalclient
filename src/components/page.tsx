'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Globe, Menu } from "lucide-react"

export function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <Image
              src="/placeholder.svg"
              alt="Ame Healthy Global Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link className="text-sm font-medium hover:text-primary" href="#">
              VỀ CHÚNG TÔI
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#">
              SẢN PHẨM
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#">
              TIN MỚI NHẤT
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#">
              HỘI VIÊN
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#">
              LIÊN HỆ
            </Link>
            <Button size="sm" variant="ghost">
              <Globe className="h-4 w-4 mr-2" />
              Language
            </Button>
          </div>
          <Button className="md:hidden" size="icon" variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#4A148C] text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
          </div>
          <div className="container relative py-20">
            <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 backdrop-blur-sm hover:bg-white/20">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 backdrop-blur-sm hover:bg-white/20">
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                共創愛美·共享奇蹟
              </h1>
              <p className="text-xl font-light md:text-2xl">
                Create Victory and Enjoy miracles together with us.
              </p>
            </div>
          </div>
        </section>
        <section className="container py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "公司簡介",
                subtitle: "Brief Corporation",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "産品介紹",
                subtitle: "Product Description",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "影片欣賞",
                subtitle: "Video Appreciation",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "合作項目",
                subtitle: "Cooperate Item",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((card, index) => (
              <Link
                key={index}
                href="#"
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white backdrop-blur-sm">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-sm">{card.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}