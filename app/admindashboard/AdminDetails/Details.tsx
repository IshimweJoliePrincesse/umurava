"use client";

import Welcome from "./welcom";

import ChallengeStats from "../Homepage/ChallengeStas";
import RecentChallenges from "../Challenges/ChallengeCards";

const AdminDashboard = () => {
  return (
    <>
      <Welcome />
      <ChallengeStats />
      <RecentChallenges />
    </>
  );
};

export default AdminDashboard;
