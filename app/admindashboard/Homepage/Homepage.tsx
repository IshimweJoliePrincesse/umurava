"use client";
import React from "react";
import ChallengeStats from "./ChallengeStas";
import RecentChallenges from "../Challenges/ChallengeCards";
import { useRouter } from "next/navigation";

const Homepage = () => {
  return (
    <div>
      <ChallengeStats />
      <RecentChallenges />
    </div>
  );
};
export default Homepage;
