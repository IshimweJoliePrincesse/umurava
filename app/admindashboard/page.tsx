"use client";
import React, { useState } from "react";
import Homepage from "./Homepage/Homepage";
import Details from "./AdminDetails/Details";
import Challenges from "./Challenges/page";
import Modal from "../talentdashboard/Community/Modal";
import DashboardLayout from "../CommomComponents/DashboardLayout";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (page: string) => {
    if (page == "Community") {
      setIsModalOpen(true);
    } else {
      setActivePage(page);
    }
  };

  return (
    <DashboardLayout activePage={activePage} onNavigate={handleNavigation}>
      {activePage == "Dashboard" && <Details />}
      {activePage == "Challenges & Hackathons" && <Challenges />}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </DashboardLayout>
  );
};

export default AdminDashboard;
