"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import logo from "../../../../public/images/logo.png";
import ProjectBrief from "./ProjectBrief";

interface ChallengeCardProps {
  description: string;
  skills: string[];
  seniority: string;
  timeline: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  description,
  skills,
  seniority,
  timeline,
}) => {
  const router = useRouter();
  const handleViewChallenge = () => {
    router.push("/talentdashboard/projectBrief");
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-6 w-full max-w-[420px] bg-white mx-4 flex flex-col justify-between">
      <div>
        <div className="relative bg-[#2B71F0] w-full h-64 mb-5 rounded-t-lg flex flex-col justify-center items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo2.png"
              alt="Umurava Logo"
              width={64}
              height={64}
            />
            <span className="text-white font-bold text-3xl">Umurava</span>
          </div>
          <div className="absolute top-3 right-3 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium">
            Open
          </div>
        </div>
        <p className="text-gray-700 text-lg font-bold mb-5">{description}</p>
        <div className="mb-5">
          <h3 className="text-base font-medium text-gray-600 mb-3">
            Skills Needed:
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-sm text-blue-700 border border-blue-700 px-3 py-1 rounded"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <p className="text-base text-gray-600">
            <strong>Seniority Level:</strong> {seniority}
          </p>
          <p className="text-base text-gray-600">
            <strong>Timeline:</strong> {timeline}
          </p>
        </div>
      </div>
      <div className="mt-5 border-t border-gray-300 pt-3">
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
          onClick={handleViewChallenge}
        >
          View Challenge
        </button>
      </div>
    </div>
  );
};

export default ChallengeCard;
