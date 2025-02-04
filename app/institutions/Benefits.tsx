import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness, Car } from "lucide-react";

export default function KeyOfferings() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-8 text-[#03192E]">
        Key Offerings & Benefits:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-32 mr-32">
        <Card className="bg-blue-500 text-white">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <BriefcaseBusiness className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">
              Employability and Career Development Opportunities
            </h3>
            <p className="text-sm text-white/80">
              Students gain hands-on experience solving real-world challenges
              and help them build confidence, enhance their resilience of making
              job applications and find their dream opportunities in the tech
              industry.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-500 text-white">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <BriefcaseBusiness className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">
              Practical Application of Classroom Knowledge
            </h3>
            <p className="text-sm text-white/80">
              The Skills Challenge helps the gap between theoretical learning
              and practical application, allowing students to apply concepts
              from their courses.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-500 text-white">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <BriefcaseBusiness className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">
              Students & Trainees Engagement
            </h3>
            <p className="text-sm text-white/80">
              Our gamified learning approach lets your students to give students
              and trainees hands-on experience in practicing skills through
              their learning journey. The project-based challenges keep students
              motivated and actively engaged in their learning journey.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-500 text-white md:col-span-2">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <BriefcaseBusiness className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">
              Access to the Industry Experts & Mentors
            </h3>
            <p className="text-sm text-white/80">
              Skills Challenge provide students to identify experts and mentors
              who offer guidance, support and insights on the trends of digital
              careers. This can help students gain a deep understanding pf their
              chosen field.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-500 text-white">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <BriefcaseBusiness className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Skills Assessment</h3>
            <p className="text-sm text-white/80">
              Embed our projects based tests and skills assessments directly
              into your curriculum.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
