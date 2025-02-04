import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-500 leading-tight">
            Accelerate Your Students and Trainees Employability and Career Growth
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We partner with Universities, Schools, and Training Institutions to build
            the work experience of their students and trainees through project-based
            learning challenges and hackathons.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 text-lg rounded-md">
              Partner with us
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 -z-10" />
          <Image
            src="/images/students.png"
            alt="Students on computers"
            width={500}
            height={250}
            className="rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
