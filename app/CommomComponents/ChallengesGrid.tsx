"use client";

import React, { useState } from "react";
import ChallengeCard from "./ChallengeCard";

const challengesData = [
  {
    title: "Design a Dashboard for SokoFund, Fintech Product",
    description:
      "Create a dashboard that meets user needs and is visually appealing.",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
  },
  {
    title: "Develop an E-commerce App",
    description: "Build a scalable and user-friendly e-commerce application.",
    skills: ["React", "Node.js"],
    seniority: "Intermediate, Senior",
    timeline: "30 Days",
  },
  {
    title: "AI-Powered Resume Screener",
    description:
      "Develop an AI tool that screens resumes based on job descriptions.",
    skills: ["Machine Learning", "Python", "NLP"],
    seniority: "Intermediate, Senior",
    timeline: "45 Days",
  },
  {
    title: "Redesign a SaaS Product Landing Page",
    description: "Enhance the user experience and increase conversions.",
    skills: ["UI/UX Design", "Webflow", "SEO"],
    seniority: "Junior, Intermediate",
    timeline: "20 Days",
  },
  {
    title: "Blockchain-Based Voting System",
    description: "Develop a secure voting system using blockchain technology.",
    skills: ["Blockchain", "Solidity", "React"],
    seniority: "Senior",
    timeline: "60 Days",
  },
  {
    title: "Healthcare Appointment Booking App",
    description:
      "Build a mobile app for scheduling doctor appointments seamlessly.",
    skills: ["React Native", "Firebase", "Node.js"],
    seniority: "Intermediate, Senior",
    timeline: "40 Days",
  },
  {
    title: "Healthcare Appointment Booking App",
    description:
      "Build a mobile app for scheduling doctor appointments seamlessly.",
    skills: ["React Native", "Firebase", "Node.js"],
    seniority: "Intermediate, Senior",
    timeline: "40 Days",
  },
  {
    title: "Healthcare Appointment Booking App",
    description:
      "Build a mobile app for scheduling doctor appointments seamlessly.",
    skills: ["React Native", "Firebase", "Node.js"],
    seniority: "Intermediate, Senior",
    timeline: "40 Days",
  },
  {
    title: "Healthcare Appointment Booking App",
    description:
      "Build a mobile app for scheduling doctor appointments seamlessly.",
    skills: ["React Native", "Firebase", "Node.js"],
    seniority: "Intermediate, Senior",
    timeline: "40 Days",
  },
  {
    title: "Healthcare Appointment Booking App",
    description:
      "Build a mobile app for scheduling doctor appointments seamlessly.",
    skills: ["React Native", "Firebase", "Node.js"],
    seniority: "Intermediate, Senior",
    timeline: "40 Days",
  },
  {
    title: "Healthcare Appointment Booking App",
    description:
      "Build a mobile app for scheduling doctor appointments seamlessly.",
    skills: ["React Native", "Firebase", "Node.js"],
    seniority: "Intermediate, Senior",
    timeline: "40 Days",
  },
  {
    title: "Healthcare Appointment Booking App",
    description:
      "Build a mobile app for scheduling doctor appointments seamlessly.",
    skills: ["React Native", "Firebase", "Node.js"],
    seniority: "Intermediate, Senior",
    timeline: "40 Days",
  },
];

const ChallengesGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const challengesPerPage = 6;
  const totalPages = Math.ceil(challengesData.length / challengesPerPage);

  const paginatedChallenges = challengesData.slice(
    (currentPage - 1) * challengesPerPage,
    currentPage * challengesPerPage
  );

  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedChallenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ChallengesGrid;
