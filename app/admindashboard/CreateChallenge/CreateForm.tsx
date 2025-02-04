import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  title: string;
  deadline: string;
  duration: string;
  prize: string;
  contactEmail: string;
  description: string;
  brief: string;
  tasks: string;
}

const CreateForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    deadline: "",
    duration: "",
    prize: "",
    contactEmail: "",
    description: "",
    brief: "",
    tasks: "",
  });
  const router = useRouter();
  const createdChallenge = () => {
    router.push("/admindashboard/AdminDetails/admindetails");
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-300 rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-3xl mx-auto mt-[4rem]"
    >
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Create New Challenge
        </h2>
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
          htmlFor="description"
        >
          Project Description
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
          Keep this simple, up to 250 characters
        </p>
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
          Keep it simple, up to 50 characters
        </p>
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="tasks"
        >
          Project Tasks & Description
        </label>
        <textarea
          className="appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="tasks"
          name="tasks"
          placeholder="Enter text here ..."
          value={formData.tasks}
          onChange={handleChange}
          rows={6}
        />
        <p className="text-gray-600 text-xs mt-2">
          Describe the tasks, keep it under 500 characters
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
          onClick={createdChallenge}
        >
          Create Challenge
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
