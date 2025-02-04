export default function CTASection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mb-10">
      <div className="relative overflow-hidden bg-[#3B82F6] rounded-3xl p-8 md:p-16">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 max-w-[280px] md:max-w-[400px] h-auto aspect-square bg-[#4F8BF7] rounded-full opacity-50 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 max-w-[320px] md:max-w-[450px] h-auto aspect-square bg-[#4F8BF7] rounded-full opacity-50 -translate-x-1/3 translate-y-1/3" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold max-w-xl mb-6 md:mb-8 leading-tight">
            Ready to transform your learning institution?
          </h2>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3 bg-white text-[#3B82F6] font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-colors w-full sm:w-auto"
          >
            Let's Partner
          </a>
        </div>
      </div>
    </div>
  );
}
