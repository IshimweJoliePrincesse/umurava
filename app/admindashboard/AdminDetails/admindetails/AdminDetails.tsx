import React from "react";
import ProjectBrief from "./projectBrief";
import DetailsNavigation from "./DetailsNavigation";
import AdminInstructions from "./InstructionsCard";
import ParticipantsPage from "./ParticipantsPage";

const AdminDetails = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col px-4 py-6 space-y-4">
        <DetailsNavigation className="h-12 bg-gray-200 rounded-lg shadow-md px-4 flex items-center" />

        <div className="flex flex-1 space-x-4">
          {/* Project Brief on the Left */}
          <div className="flex-3">
            <ProjectBrief />
          </div>

          {/* Admin Instructions on the Right */}
          <div className="flex-1">
            <AdminInstructions />
          </div>
        </div>

        {/* Participants Section under Instructions */}
        <div className="mt-6">
          <ParticipantsPage />
        </div>
      </div>
    </div>
  );
};

export default AdminDetails;
