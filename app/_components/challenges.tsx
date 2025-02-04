"use client";
import Image from "next/image";
import ChallengeCard from "../CommomComponents/ChallengeCard";

export default function ChallengePage() {
  const challenges = [
    {
      description: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: "Junior, Intermediate, Senior",
      timeline: "15 Days",
    },
    {
      description: "Build an AI-Powered Chatbot",
      skills: ["AI & Machine Learning", "Natural Language Processing"],
      seniority: "Intermediate, Senior",
      timeline: "30 Days",
    },
    {
      description: "Create a Mobile App for E-Learning",
      skills: ["Mobile Development", "UI/UX Design"],
      seniority: "Junior, Intermediate",
      timeline: "20 Days",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Explore Challenges & Hackathons
        </h1>
        <p className="text-gray-600">
          Join Skills Challenges Program to accelerate your career growth and
          become part of Africa's largest workforce of digital professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>
    </div>
  );
}
