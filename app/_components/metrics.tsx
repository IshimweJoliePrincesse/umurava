export default function MetricsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <div className="bg-blue-600 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full opacity-30 translate-x-16 translate-y-16" />
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-30 translate-y-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-1">1</div>
            <div className="text-sm md:text-base opacity-90">Year</div>
          </div>

          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-1">500+</div>
            <div className="text-sm md:text-base opacity-90">Challenges Completed</div>
          </div>

          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-1">10K+</div>
            <div className="text-sm md:text-base opacity-90">Users</div>
          </div>

          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-1">6+</div>
            <div className="text-sm md:text-base opacity-90">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
}
