"use client";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/app/CommomComponents/DashboardLayout";
import NavigationBar from "@/app/CommomComponents/NavigationBar";
import ProjectBrief from "./projectBrief";

const AdminDetails: React.FC = () => {
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
          actionText="Design a dashboard for SokoFund"
          onActionClick={handleCreateChallenge}
        />
        <ProjectBrief />
      </DashboardLayout>
    </div>
  );
};

export default AdminDetails;
