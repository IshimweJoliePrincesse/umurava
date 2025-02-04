import Image from "next/image";
import { BriefcaseBusiness, Award, BarChart2, Medal } from "lucide-react";

export default function SkillsBenefits() {
  const benefits = [
    {
      icon: <BriefcaseBusiness className="w-6 h-6 text-white" />,
      title: "Enhance Your Employment Path",
      description:
        "Network with other talented individuals and learn from their experiences.",
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Earn Recognition and Prizes",
      description:
        "Gain valuable experience and knowledge to advance your career in the digital economy.",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: "Personal Growth",
      description:
        "Challenge yourself, learn new skills, and expand your professional network.",
    },
    {
      icon: <Medal className="w-6 h-6 text-white" />,
      title: "Learn from Industry Experts",
      description:
        "Access valuable insights and guidance from experienced professionals in the digital careers field.",
    },
  ];

  return (
    <div className="bg-[#F9FAFB] p-6 md:p-12 rounded-lg shadow-sm w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        What else can I gain from participating in Skills Challenges?
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Join Skills Challenges Program to accelerate your career growth and
        become part of Africa's largest workforce of digital professionals.
      </p>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 md:p-6"
            >
              <div className="bg-blue-600 p-3 rounded-lg mb-3">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            src="/images/banner.png"
            alt="Skill section banner"
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
