"use client";
import NavigationBar from "@/app/CommomComponents/NavigationBar";
import React, { useState } from "react";
import Modal from "../Community/Modal";
import ProjectBrief from "./project";
import DashboardLayout from "@/app/CommomComponents/DashboardLayout";
import { useRouter } from "next/navigation";

const Projects = () => {
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

export default Projects;
