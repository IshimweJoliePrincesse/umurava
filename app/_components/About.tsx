import { BriefcaseBusiness } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#03192E] mb-4">
          Experience a New Way of Building
          <br />
          Work Experience
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join Skills Challenges Program to accelerate your career growth and
          become part of Africa's largest workforce of digital professionals.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="bg-[#2B71F0]">
          <CardContent className="p-8">
            <div className="mb-4">
              <BriefcaseBusiness className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-3 text-[#FFFFFF]">
              Build a Strong Portfolio and Hands-On Experience
            </h2>
            <p className="text-white/90">
              Tackle real-world projects through challenges and hackathons that
              mirror real-world challenges faced by businesses and
              organizations. Therefore, showcase your skills and accomplishments
              to potential employers and clients through a portfolio of
              completed projects.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-[#2B71F0] text-white">
            <CardContent className="p-8">
              <div className="mb-4">
                <BriefcaseBusiness className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-[#FFFFFF]">
                Enhance Your Employment Path
              </h2>
              <p className="text-white/90">
                Develop the in-demand skills and build a strong portfolio to
                increase your chances of landing your dream job or contract.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#2B71F0] text-white">
            <CardContent className="p-8">
              <div className="mb-4">
                <BriefcaseBusiness className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-[#FFFFFF]">
                Earn Recognition and Prizes
              </h2>
              <p className="text-white/90">
                Earn both Money and Knowledge Prizes by participating in various
                contests and competitions by working on real-world projects and
                hackathons from our partner companies & organizations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
