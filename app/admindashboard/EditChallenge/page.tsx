"use client";
import React from "react";
import NavigationBar from "../../CommomComponents/NavigationBar";
import EditForm from "./EditForm";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/app/CommomComponents/DashboardLayout";

const EditChallenge: React.FC = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/admindashboard/AdminDetails/admindetails");
  };

  const handleEditChallenge = () => {
    console.log("Edit New Challenge clicked");
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
          onActionClick={handleEditChallenge}
        />
        <EditForm />
      </DashboardLayout>
    </div>
  );
};

export default EditChallenge;
