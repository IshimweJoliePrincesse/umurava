"use client";
import React from "react";
import IntroStats from "./Introduction";
import ChallengesGrid from "./ChallengesGrid";
import DashboardLayout from "@/app/CommomComponents/DashboardLayout";

const Challenges = () => {
  return (
    <>
      <IntroStats />
      <ChallengesGrid />
    </>
  );
};

export default Challenges;
