interface SkillsProps {
  className?: string;
}
const Skills: React.FC<SkillsProps> = ({ className }) => {
  return (
    <section className={`py-12 bg-white ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Skills Challenges Cover Various In-Demand Skills
          <br /> and Careers for the Digital Economy
        </h2>
        <p className="text-gray-700 mb-8 text-sm sm:text-base md:text-lg">
          Explore the projects that various talents are working on.
        </p>
        <div className="flex flex-col items-center">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                UI/UX Design
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Data Science
              </span>
            </div>
          </div>
          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Graphic Design
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Data Analysis & Research
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Animation
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Videography & Photography
              </span>
            </div>
          </div>
          {/* Third Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-customBlue hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                AI & Machine Learning
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-customBlue hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Digital Marketing & Communications
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-customBlue hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Web Development
              </span>
            </div>
            <div className="flex items-center justify-center py-4 px-6 bg-gray-200 rounded-lg hover:bg-customBlue hover:text-white transition duration-300 w-auto min-w-0">
              <span className="text-xs sm:text-sm md:text-base text-center p-2 break-words">
                Cloud Computing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
