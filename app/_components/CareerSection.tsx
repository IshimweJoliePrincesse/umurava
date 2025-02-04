import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CareerSection() {
  return (
    <section className="relative overflow-hidden bg-[#2B71F0] text-white rounded-xl mx-8 lg:mx-20 mb-12">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-400 opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 items-center max-w-6xl mx-auto lg:gap-16 gap-8">
          <div className="flex justify-center">
            <Image
              src="/images/footer1.png"
              alt="Student with a laptop"
              width={398}
              height={395}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Ready to Unlock Your Career Potential Today!
            </h2>
            <p className="text-blue-50 text-lg">
              Join a challenge or a hackathon to gain valuable work experience,
              build an impressive portfolio, and increase your chances to land
              job opportunities and accelerate your career growth.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-200"
            >
              View Challenge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
