import Link from "next/link";
import Image from "next/image";
import { ImageCarousel } from "@/components/image-carousel";

export default function Home() {
  return (
    <main className="px-2">
      <ImageCarousel />
      <section className="flex justify-center py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "公司簡介",
              subtitle: "Brief Corporation",
              image: "/brief-corporation.jpg?height=400&width=600",
            },
            {
              title: "産品介紹",
              subtitle: "Product Description",
              image: "/product-description.jpg?height=400&width=600",
            },
            {
              title: "影片欣賞",
              subtitle: "Video Appreciation",
              image: "/video-appreciation.jpg?height=400&width=600",
            },
            {
              title: "合作項目",
              subtitle: "Cooperate Item",
              image: "/cooperate-item.jpg?height=400&width=600",
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
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
