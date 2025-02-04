import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, FileText, Calendar, DollarSign } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectBrief() {
  const router = useRouter();
  const handleEdit = () => {
    router.push("/admindashboard/EditChallenge");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 ml-20">
      <div className="grid md:grid-cols-[1fr,400px] gap-52 mt-20 ml-2 w-[1300px]">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Header Image */}
          <div className="bg-[#2B71F0] rounded-lg p-8 flex items-center justify-center h-72">
            <div className="flex gap-4">
              <Image
                src="/images/logo2.png"
                alt="Umurava Logo"
                className=""
                width={60}
                height={20}
              />
              <h2 className="flex text-center text-white mt-5 text-2xl ">
                Umurava
              </h2>
            </div>
          </div>

          {/* Project Title */}
          <div>
            <h1 className="text-xl font-semibold mb-4">
              Project Brief : Payroll and HR Management System
            </h1>
            <p className="text-gray-600 text-sm">
              A Fintech company that is developing a Digital Financial Platform
              designed for businesses and their workforce in Africa is
              partnering with Umurava to run a Skills Challenge for Product
              Design. This Fintech Company offers Payroll Management System to
              Employers and Embedded Financial services and products to
              Employees and Gig workers across Africa.
            </p>
          </div>

          {/* Tasks Section */}
          <div>
            <h2 className="font-semibold mb-2">Tasks:</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Product Requirements</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>UX research to understand Project Requirements</li>
                  <li>Understanding User Needs</li>
                  <li>Understanding Business Goals</li>
                  <li>Determine interaction between users</li>
                  <li>Requirements Catalog</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Product Design:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>User Interface Design for each step</li>
                  <li>
                    Creating wireframes to outline the basic structure and
                    layout of the web and mobile app
                  </li>
                  <li>
                    Designing visually appealing and user-friendly interfaces
                    for the web and mobile apps focusing on usability and user
                    experience
                  </li>
                  <li>
                    Ensuring the web application works seamlessly across web,
                    mobile, and tablet devices
                  </li>
                  <li>
                    Provide a feedback session for in-development guidance
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Deliverables:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>Requirements Catalog and User Interaction Diagram</li>
                  <li>User Interface Mockups</li>
                  <li>Payroll and HR System Design Completed</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Deliverables:</h3>
                <p className="text-sm text-gray-600">
                  The Product Designer will provide all documents and
                  deliverables to the client before the review meetings.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">NOTE:</h3>
                <p className="text-sm text-gray-600">
                  Find Product Requirements Summary and Features Description for
                  Sawa Pay{" "}
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    HERE
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-6 space-y-6">
            <h2 className="font-semibold">Key Instructions:</h2>
            <p className="text-sm text-gray-600">
              You are free to schedule the clarification call with the team via
              this
            </p>

            <div className="space-y-4">
              {/* Contact Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">talent@umurava.africa</div>
                  <div className="text-sm text-gray-500">Contact Email</div>
                </div>
              </div>

              {/* Challenge Category */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Web design</div>
                  <div className="text-sm text-gray-500">
                    Challenge category
                  </div>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">7 Days</div>
                  <div className="text-sm text-gray-500">Duration</div>
                </div>
              </div>

              {/* Money Prize */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">$150 - $400</div>
                  <div className="text-sm text-gray-500">Money Prize</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="destructive"
                className="flex-1 bg-red-600 hover:bg-red-700"
              >
                Delete
              </Button>
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                onClick={handleEdit}
              >
                Edit
              </Button>
            </div>
          </div>

          {/* Participants Section */}
          <div className="bg-white rounded-lg border p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Participants</h2>
              <span className="text-xs text-white bg-blue-600 px-2 py-1 rounded-full">
                250
              </span>
            </div>

            <div className="space-y-4">
              {/* Participant Items */}
              <div className="flex items-center gap-3">
                <Image
                  src="/images/profile.png"
                  alt="participant 1"
                  width={40}
                  height={40}
                />
                <div className="flex-1">
                  <div className="font-medium">Hilaire Sh</div>
                  <div className="text-sm text-gray-500">Product Designer</div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>

              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">Christian Manzi</div>
                  <div className="text-sm text-gray-500">UI/UX Designer</div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>

              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">Jolly Mutesi</div>
                  <div className="text-sm text-gray-500">Content Creator</div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>

              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">Dr. Sandra Smith</div>
                  <div className="text-sm text-gray-500">
                    Mental Health Professional
                  </div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>

              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>LC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">Dr. Lily Chen</div>
                  <div className="text-sm text-gray-500">Dermatologist</div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>

              <Button
                variant="outline"
                className="w-full bg-blue-600 text-white"
              >
                View All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
