import Image from "next/image";
import React from "react";
import { TalentCounter } from "./talent_counter";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 py-16 space-y-10 lg:space-y-0">
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2B71F0] lg:ml-10">
          Build Work Experience through Skills Challenges Program
        </h1>
        <p className="mt-4 text-lg text-[#2B3338] lg:ml-10">
          Enhance your Employability and Accelerate your Career Growth by
          working on Hands-on projects & hackathons from various businesses &
          organizations.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition lg:ml-10">
          Get Started
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <Image
          src="/images/homepage.png"
          alt="home_page_photo"
          width={570}
          height={443}
          className="w-full max-w-[500px] md:max-w-[570px] h-auto"
        />

        {/* Talent Counter - Positioned Absolutely Over Image */}
        <div className="absolute bottom-0 md:bottom-[-50px] left-[200px] transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
          <TalentCounter />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
