"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { File, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface ChallengeProps {
  title: string;
  count: number;
  isActive?: boolean;
}

const Challenge: React.FC<ChallengeProps> = ({
  title,
  count,
  isActive = false,
}) => {
  return (
    <div
      className={`flex items-center gap-4 p-6 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer border border-gray-300 w-80 h-20 text-lg font-semibold ${
        isActive ? "bg-blue-100" : ""
      }`}
    >
      <File className="text-2xl" />
      <span>{title}</span>
      <span className="ml-auto text-md font-bold">{count}</span>
    </div>
  );
};

const IntroStats: React.FC = () => {
  const router = useRouter();

  const navigatetoCreateChallenge = () => {
    router.push("/admindashboard/CreateChallenge");
  };
  return (
    <div className="flex flex-col space-y-8">
      <div className="text-left">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4 ml-10 mt-12">
          Challenges
        </h2>
        <p className="text-xl text-gray-600 ml-10">
          Join a challenge or a hackathon to gain valuable work experience.
        </p>
      </div>
      <div className="flex items-center gap-6 p-6 h-[120px]">
        <Button
          variant="ghost"
          className="bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 text-lg py-4 px-6 h-16"
        >
          <File className="w-12 h-12 mr-3 rounded-lg" />
          All Challenge
          <Badge
            variant="secondary"
            className="ml-3 bg-blue-600 text-white hover:bg-blue-600 text-sm py-2 px-3"
          >
            0
          </Badge>
        </Button>

        <Button
          variant="ghost"
          className="bg-gray-50 hover:bg-gray-100 text-lg py-4 px-6 h-16"
        >
          <File className="w-6 h-6 mr-3" />
          Completed Challenge
          <span className="ml-3 text-gray-600 text-md">0</span>
        </Button>

        <Button
          variant="ghost"
          className="bg-gray-50 hover:bg-gray-100 text-lg py-4 px-6 h-16"
        >
          <File className="w-6 h-6 mr-3" />
          Open Challenge
          <span className="ml-3 text-gray-600 text-md">0</span>
        </Button>

        <Button
          variant="ghost"
          className="bg-gray-50 hover:bg-gray-100 text-lg py-4 px-6 h-16"
        >
          <File className="w-6 h-6 mr-3" />
          Ongoing Challenge
          <span className="ml-3 text-gray-600 text-md">0</span>
        </Button>

        <div className="ml-auto" onClick={navigatetoCreateChallenge}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg py-4 px-6 h-16">
            <Plus className="w-6 h-6 mr-3" />
            Create New Challenge
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroStats;
