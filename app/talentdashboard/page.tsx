"use client";

import React, { useState } from "react";
import Homepage from "./Homepage/Homepage";
import Hackathon from "./Hackathon/Hackathon";
import DetailsDashboard from "./Details/Details";
import Modal from "./Community/Modal";
import DashboardLayout from "../CommomComponents/DashboardLayout";

const TalentDashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (page: string) => {
    if (page === "Community") {
      setIsModalOpen(true);
    } else {
      setActivePage(page);
    }
  };

  return (
    <DashboardLayout activePage={activePage} onNavigate={handleNavigation}>
      {activePage === "Dashboard" && <Homepage />}
      {activePage === "Challenges & Hackathons" && <Hackathon />}
      {activePage === "Details" && <DetailsDashboard />}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </DashboardLayout>
  );
};

export default TalentDashboard;
