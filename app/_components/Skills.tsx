"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SkillsProps {
  className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title:
        "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce",
      image: "/images/dashboard.png",
    },
    {
      title:
        "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce",
      image: "/images/dashboard.png",
    },
    {
      title:
        "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce",
      image: "/images/dashboard.png",
    },
    {
      title:
        "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce",
      image: "/images/dashboard.png",
    },
  ];

  return (
    <section className={`py-12 bg-white ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Skills Challenges Cover Various In-Demand Skills
          <br /> and Careers for the Digital Economy
        </h2>
        <p className="text-gray-700 mb-8 text-sm sm:text-base md:text-lg">
          Explore the projects that various talents are working on.
        </p>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex items-center justify-center py-4 px-6 bg-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0 cursor-pointer">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                UI/UX Design
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Data Science
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Graphic Design
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Data Analysis & Research
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Animation
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Videography & Photography
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-customBlue hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                AI & Machine Learning
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-customBlue hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Digital Marketing & Communications
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-customBlue hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Web Development
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-customBlue hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Cloud Computing
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-3 py-20 w-full max-w-[1400px]">
        <Card className="p-6 rounded-lg bg-[#F1F1F1] overflow-hidden">
          <div className="relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <div className="h-8 w-8 bg-gray-900 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">
                          <span className="text-[#228B22]">s</span>f.
                        </span>
                      </div>
                      <p className="text-lg text-gray-800">{slide.title}</p>
                      <Button
                        variant="link"
                        className="text-blue-500 hover:text-blue-600 p-0 h-auto font-semibold"
                      >
                        Learn more →
                      </Button>
                    </div>
                    <div className="relative w-full flex justify-center">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt="Feature preview"
                        width={500}
                        height={300}
                        className="rounded-md shadow-lg w-full max-w-[500px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition ${
                index === currentSlide ? "bg-blue-500 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
