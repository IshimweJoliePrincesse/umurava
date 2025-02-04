"use client";
import NavigationBar from "./Navigation";
import React, { useState } from "react";
import Modal from "../Community/Modal";
import ProjectBrief from "@/app/CommomComponents/ProjectBrief";
import DashboardLayout from "@/app/CommomComponents/DashboardLayout";
import { useRouter } from "next/router";
import exp from "constants";

const DetailsDashboard = () => {
  const router = useRouter();
  const handlegoBack = () => {
    router.push("/talentdashboard");
  };

  return (
    <DashboardLayout
      activePage="Challenges & Hackathans"
      onNavigate={handlegoBack}
    >
      <NavigationBar
        onGoBack={handlegoBack}
        title="Challenges & Hackathons"
        actionText="Design a dashboard for SokoFund"
        onActionClick={() => router.push("/admindashboard/createchallenge")}
      />
      <ProjectBrief />
    </DashboardLayout>
  );
};

export default DetailsDashboard;

// const handleGoBack = () => {
//   router.push("/admindashboard");
// };

// const handleCreateChallenge: () => void = () => {
//   console.log("Create New Challenge clicked");
// };

// return (
//   <div>
//     <DashboardLayout
//       activePage="Challenges & Hackathons"
//       onNavigate={handleGoBack}
//     >
//       <NavigationBar
//         onGoBack={handleGoBack}
//         title="Challenges & Hackathons"
//         actionText="Create New Challenge"
//         onActionClick={handleCreateChallenge}
//       />
//       <CreateForm />
//     </DashboardLayout>
//   </div>
// );
// };

// export default CreateChallenge;
