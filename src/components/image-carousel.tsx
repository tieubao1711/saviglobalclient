"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ImageCarousel() {
  const slides = [
    {
      id: 1,
      imageUrl: "/slides/1.mp4?height=600&width=1200",
      alt: "Image-1",
    },
    {
      id: 2,
      imageUrl: "/slides/2.mp4?height=600&width=1200",
      alt: "Image-2",
    },
    {
      id: 3,
      imageUrl: "/slides/3.mp4?height=600&width=1200",
      alt: "Image-3",
    },
    {
      id: 4,
      imageUrl: "/slides/4.mp4?height=600&width=1200",
      alt: "Image-4",
    },
  ];

  return (
    <section className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative md:aspect-[24/7] w-full">
                <video
                  id="main-video"
                  className="w-full h-[110px] md:h-[400px] aspect-video"
                  src={slide.imageUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-black/40 text-white hover:bg-black/70 hover:text-white" />
        <CarouselNext className="right-4 bg-black/40 text-white hover:bg-black/70 hover:text-white" />
      </Carousel>
    </section>
  );
}
