import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SkillsChallengeSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center lg:text-left">
            Skills Challenges Program is built on the Umurava Talent Marketplace
            Platform
          </h2>
          <div className="space-y-4 text-gray-600 text-center lg:text-left">
            <p>
              A Project-based Learning Solution aimed at providing young and
              senior talents with an opportunity to showcase their skills to
              real-world projects and challenges from our partner companies and
              organizations.
            </p>
            <p>
              Umurava Skills Challenges enables young talents to build a
              portfolio and experience that increases their readiness to access
              job opportunities and projects.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="relative w-full flex justify-center">
          <Image
            src="/images/page.png"
            alt="Umurava platform interface"
            width={600}
            height={450}
            className="w-full max-w-[400px] h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
