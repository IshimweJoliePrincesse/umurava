"use client";

import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Manzi Jack",
      role: "Product Designer, Kigali",
      avatarUrl: "/images/blue.png",
    },
    {
      id: 2,
      name: "Manzi Jack",
      role: "Product Designer, Kigali",
      avatarUrl: "/images/blue.png",
    },
    {
      id: 3,
      name: "Manzi Jack",
      role: "Product Designer, Kigali",
      avatarUrl: "/images/blue.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Users are in Love with Skills
            <br />
            Challenges Program
          </h2>
          <p className="text-gray-600">
            See what our clients say about working with us. Their success speaks
            for our dedication and expertise.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / 2.5)}%)`,
              width: `${(testimonials.length / 2.5) * 100}%`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[calc(40%-12px)] min-w-[380px] px-3 flex-shrink-0"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
                  <div className="aspect-[16/9] bg-[#4169E1] relative flex items-center justify-center">
                    <button
                      className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center transition-transform hover:scale-105"
                      aria-label="Play testimonial"
                    >
                      <Play className="w-6 h-6 text-white" />
                    </button>
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-white">
                      <AvatarImage src={testimonial.avatarUrl} />
                      <AvatarFallback className="bg-[#4169E1]">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#4169E1] w-6" : "bg-gray-200 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
