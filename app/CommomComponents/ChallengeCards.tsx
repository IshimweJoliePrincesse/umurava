"use client";

import React from "react";
import ChallengeCard from "./ChallengeCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const challenges = [
  {
    description: "Design a Dashboard for SokoFund, a Fintech Product",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
  },
  {
    description: "Redesign the Landing Page for a SaaS Product",
    skills: ["UI/UX Design", "Wireframing", "Prototyping"],
    seniority: "Junior, Intermediate",
    timeline: "10 Days",
  },
  {
    description: "Build a Mobile App UI for an E-commerce Platform",
    skills: ["Figma", "User Research", "Interaction Design"],
    seniority: "Intermediate, Senior",
    timeline: "20 Days",
  },
];

const RecentChallenges: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Recent Challenges</h1>
        <Link
          href="/challenges"
          className="text-blue-600 hover:underline text-lg flex"
        >
          See all
          <ChevronRight className="h-6 w-8 flex text-lg" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>
    </div>
  );
};

export default RecentChallenges;
