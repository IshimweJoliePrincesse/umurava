import Image from "next/image";

export default function SkillsIntegration() {
  const integrationMethods = [
    { id: 1, text: "As Career Development and Job Readiness Program" },
    { id: 2, text: "As Skills Assessments Method after a course or a team" },
    {
      id: 3,
      text: "As extracurricular activities to complement academic courses",
    },
    { id: 4, text: "As the portfolios of the Students" },
    { id: 5, text: "As part of Capstone Projects or final-year assignments" },
  ];

  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl bg-[#F9FAFB]">
      <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-900 mb-12 mx-auto max-w-3xl">
        How Skills Challenges Program can be Integrated into your Learning
        Institution
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          {integrationMethods.map((method) => (
            <div key={method.id} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold">
                {method.id}
              </div>
              <p className="text-gray-700 text-lg">{method.text}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <Image
            src="/images/banner.png"
            alt="Umurava Banner"
            width={500}
            height={350}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
