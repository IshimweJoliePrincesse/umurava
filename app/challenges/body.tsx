"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function ChallengesPage() {
  const router = useRouter();

  const goToChallengesPage = () => {
    router.push("/talentdashboard");
  };

  const goBackToHomePage = () => {
    router.push("/"); //go back to home page
  };

  const challenges = Array(12).fill({
    title: "Design a Dashboard for SokuFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    seniority: ["Junior", "Intermediate", "Senior"],
    timeline: "15 Days",
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 mb-8 text-sm ml-14">
        <button
          onClick={goBackToHomePage}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>
        <span className="text-gray-400"></span>
        <Link href="#" className="text-blue-600 hover:text-blue-700">
          Challenges & Hackthons
        </Link>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 ml-14 mr-12">
        {challenges.map((challenge, index) => (
          <Card
            key={index}
            className="p-4 bg-white border border-gray-300 rounded-xl shadow-lg"
          >
            <Card className="relative overflow-hidden bg-white border border-gray-200 shadow-md rounded-lg">
              <Badge
                variant="secondary"
                className="absolute right-4 top-4 bg-[#0F973D] text-white hover:bg-[#0F973D]"
              >
                Open
              </Badge>

              <CardHeader className="p-4 bg-[#2B71F0] flex justify-center items-center h-56">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/logo1.png"
                    alt="Umurava logo"
                    width={40}
                    height={40}
                  />
                  <h2 className="text-white font-bold text-lg">Umurava</h2>
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-2">
                  {challenge.title}
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm mb-1 font-bold text-black">
                      Skills Needed:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {challenge.skills.map((skill: string, i: string) => (
                        <Button
                          key={i}
                          variant="outline"
                          className="text-blue-600 border-blue-600 whitespace-nowrap text-xs px-2 py-1 hover:bg-blue-700 rounded-full"
                        >
                          {skill}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-black mb-1">
                      Seniority Level:
                    </p>

                    <p className="text-sm">
                      (
                      {Array.isArray(challenge.seniority)
                        ? challenge.seniority.join(", ")
                        : challenge.seniority}
                      )
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-black mb-1">
                      Timeline:
                    </p>
                    <p className="text-sm">{challenge.timeline}</p>
                  </div>
                </div>
                <hr className="mt-5 w-full border-t-2 text-muted-foreground" />
              </CardContent>
              <CardFooter className="p-4">
                <Button
                  className="w-40 rounded-lg bg-[#2B71F0] hover:bg-[#3158d0] text-white text-sm"
                  onClick={goToChallengesPage}
                >
                  View Challenge
                </Button>
              </CardFooter>
            </Card>
          </Card>
        ))}
      </div>
    </div>
  );
}
