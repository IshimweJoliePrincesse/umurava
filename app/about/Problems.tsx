import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness } from "lucide-react";

export default function ProblemCards() {
  return (
    <div className="container mx-auto px-4 py-12 bg-[#F9FAFB]">
      <h1 className="text-3xl font-bold text-center mb-8">
        Why we are solving this problem
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {/* First card spans the full width on small screens */}
        <Card className="bg-[#3B82F6] text-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <BriefcaseBusiness className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-semibold mb-3">
              Bridging the Experience Gap
            </h2>
            <p className="text-white/90">
              Many talents acquired theoretical knowledge and are rejected from
              jobs because they lack work experience and are not able to put in
              actions what they acquired in the schools.
            </p>
          </CardContent>
        </Card>

        {/* Second card */}
        <Card className="bg-[#3B82F6] text-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <BriefcaseBusiness className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-semibold mb-3">
              Bridging Education and Employment
            </h2>
            <p className="text-white/90">
              Traditional education doesn't always prepare talents for the
              demands of the tech and digital economy and we are providing
              in-demand skills through Skills Challenges.
            </p>
          </CardContent>
        </Card>

        {/* Third card */}
        <Card className="bg-[#3B82F6] text-white">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <BriefcaseBusiness className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-semibold mb-3">
              Preparing Talents for Global Job Markets
            </h2>
            <p className="text-white/90">
              We are ensuring that African talents shine globally and that's why
              we are equipping them with global technical experience and
              standout globally.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
