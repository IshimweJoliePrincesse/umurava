"use client";

import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Manzi Jack",
      role: "Product Designer, Kigali",
      avatarUrl: "/images/blue.png",
    },
    {
      id: 2,
      name: "Alice Uwase",
      role: "Software Engineer, Rwanda",
      avatarUrl: "/images/blue.png",
    },
    {
      id: 3,
      name: "Kwizera David",
      role: "Data Scientist, Kenya",
      avatarUrl: "/images/blue.png",
    },
  ];

  return (
    <section className="px-4 py-16 md:py-24 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Users are in Love with Skills Challenges Program
          </h2>
          <p className="text-gray-600">
            See what our clients say about working with us. Their success speaks
            for our dedication and expertise.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="gap-6 md:gap-10">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 sm:basis-2/3 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border border-gray-200 shadow-lg rounded-lg">
                  <CardContent className="p-6">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-blue-600 flex items-center justify-center mb-6">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        aria-label={`Play ${testimonial.name}'s testimonial`}
                      >
                        <Play className="w-8 h-8 text-white" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-6" />
          <CarouselNext className="hidden md:flex -right-6" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === 0 ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
