"use client";

import React from "react";
import Sidebar from "@/app/CommomComponents/Sidebar";
import Header from "../../CommomComponents/Header";
import Navigation from "./Navigation";
import ProjectBrief from "../../CommomComponents/ProjectBrief";
import Instructions from "./Instructions";

interface DetailsProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
  className: string;
}

const Details: React.FC<DetailsProps> = ({
  children,
  activePage,
  onNavigate,
  
}) => {
  return (
    <div className="flex h-screen">
      <div className="flex h-full">
        <div className="w-70 bg-[#2B71F0] text-white p-5 flex flex-col justify-between">
          <Sidebar activePage={activePage} onNavigate={onNavigate} />
        </div>
        <div className="flex-1 flex flex-col">
          <Header className="h-16 bg-blue-600 text-white px-4 flex items-center" />
          <div className="flex-1 flex flex-col px-4 py-6 space-y-4">
            <Navigation className="h-12 bg-gray-200 rounded-lg shadow-md px-4 flex items-center" />
            <div className="flex flex-1">
              <ProjectBrief className="flex-1 mr-4" />
              {/* <Instructions className="w-1/4" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
