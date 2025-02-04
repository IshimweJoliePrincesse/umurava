"use client";
import React from "react";
import { useRouter } from "next/navigation";
import NavigationBar from "../../CommomComponents/NavigationBar";
import CreateForm from "./CreateForm";
import DashboardLayout from "@/app/CommomComponents/DashboardLayout";
const CreateChallenge: React.FC = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/admindashboard");
  };

  const handleCreateChallenge: () => void = () => {
    console.log("Create New Challenge clicked");
  };

  return (
    <div>
      <DashboardLayout
        activePage="Challenges & Hackathons"
        onNavigate={handleGoBack}
      >
        <NavigationBar
          onGoBack={handleGoBack}
          title="Challenges & Hackathons"
          actionText="Create New Challenge"
          onActionClick={handleCreateChallenge}
        />
        <CreateForm />
      </DashboardLayout>
    </div>
  );
};

export default CreateChallenge;
