import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  title: string;
  deadline: string;
  duration: string;
  prize: string;
  contactEmail: string;
  brief: string;
  description: string;
  requirements: string;
  deliverables: string;
}

const EditForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "Design a Dashboard for Sokofund",
    deadline: "24/12/2024",
    duration: "7 days",
    prize: "$150",
    contactEmail: "talent@umurava.africa",
    brief:
      "A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.",
    description: `User Interface Design for each step
  Creating wireframes to outline the basic structure and layout of the web and mobile app.
  Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.
  Ensuring the web application works seamlessly across web, mobile, and tablet devices.
  Provide a feedback session for in-development guidance.`,
    requirements: `UX research to understand Project Requirements
  Understanding User Needs
  Understanding Business Goals
  Determine interaction between users
  Requirements Catalog.`,
    deliverables:
      "The Product Designer will provide all documents and deliverables to the client before the review meetings.",
  });

  const router = useRouter();
  const handleUpdate = () => {
    router.push("/admindashboard/AdminDetails/admindetails");
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-300 rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-3xl mx-auto mt-[4rem]"
    >
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Edit Challenge</h2>
        <p className="text-gray-600 text-lg mt-2">
          Fill out these details to build your broadcast
        </p>
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="title"
        >
          Challenge/Hackathon Title
        </label>
        <input
          className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="title"
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="deadline"
          >
            Deadline
          </label>
          <input
            className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="deadline"
            type="text"
            name="deadline"
            placeholder="Date"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="duration"
          >
            Duration
          </label>
          <input
            className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="duration"
            type="text"
            name="duration"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="prize"
          >
            Money Prize
          </label>
          <input
            className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="prize"
            type="text"
            name="prize"
            placeholder="Prize"
            value={formData.prize}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="contactEmail"
          >
            Contact Email
          </label>
          <input
            className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="contactEmail"
            type="email"
            name="contactEmail"
            placeholder="Email"
            value={formData.contactEmail}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="brief"
        >
          Project Brief
        </label>
        <textarea
          className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="brief"
          name="brief"
          placeholder="Enter text here ..."
          value={formData.brief}
          onChange={handleChange}
          rows={2}
        />
        <p className="text-gray-600 text-xs mt-2">
          Keep this simple of 50 character
        </p>
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="description"
        >
          Project Descriptionription
        </label>
        <textarea
          className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="description"
          name="description"
          placeholder="Enter text here ..."
          value={formData.description}
          onChange={handleChange}
          rows={5}
        />
        <p className="text-gray-600 text-xs mt-2">
          Keep this simple of 250 character
        </p>
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="requirements"
        >
          Requirements
        </label>
        <textarea
          className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="requirements"
          name="requirements"
          placeholder="Enter text here ..."
          value={formData.requirements}
          onChange={handleChange}
          rows={4}
        />
        <p className="text-gray-600 text-xs mt-2">
          Keep this simple of 500 character
        </p>
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="deliverables"
        >
          Deliverables
        </label>
        <textarea
          className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="deliverables"
          name="deliverables"
          placeholder="Enter text here ..."
          value={formData.deliverables}
          onChange={handleChange}
          rows={4}
        />
        <p className="text-gray-600 text-xs mt-2">
          Keep this simple of 500 character
        </p>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          className="border-2 border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          type="submit"
          onClick={handleUpdate}
        >
          Update Challenge
        </button>
      </div>
    </form>
  );
};

export default EditForm;
