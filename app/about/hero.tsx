import Image from "next/image";

export default function StorySection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B71F0] text-center md:text-left">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed text-center md:text-left">
              With 3 years of experience matching African digital talents to
              local and global job markets, we still remain with a big number of
              jobs that remain unfilled due to the lack of experienced African
              Talents.
            </p>
            <p className="leading-relaxed text-center md:text-left">
              Driven by our mission to place skilled and professional digital
              talent, we created Skills Challenges as a project-based learning
              solution for talents to gain real-world experience, solve
              problems, and build portfolios so that they become ready for
              global job markets.
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#2B71F0] p-4 mx-auto md:mx-0 w-full max-w-[350px] h-[350px]">
          <video className="object-cover w-full h-full rounded-2xl" controls>
            <source src="images/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
