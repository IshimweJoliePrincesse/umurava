"use client";
import React from "react";
import ChallengeStats from "./ChallengeStas";
import RecentChallenges from "../../CommomComponents/ChallengeCards";

const Homepage = () => {
  return (
    <div>
      <ChallengeStats />
      <RecentChallenges />
    </div>
  );
};
export default Homepage;
