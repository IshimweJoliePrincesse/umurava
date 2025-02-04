import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { name: "TORI", logo: "/images/tori.png" },
    { name: "GIDG Kigali", logo: "/images/gdg.png" },
    { name: "The Education Collaborative", logo: "/images/education.png" },
    { name: "Kepler", logo: "/images/kepler.png" },
    { name: "HILL", logo: "/images/hill.png" },
    { name: "CIBA", logo: "/images/CIBA1.png" },
    { name: "ARED", logo: "/images/Ared1.png" },
    { name: "IGIHE", logo: "/images/igihe.png" },
    { name: "VIAMO", logo: "/images/viamo1.png" },
    { name: "KEPLER", logo: "/images/kepler.png" },
    { name: "Laterite", logo: "/images/laterite.png" },
    { name: "SokoFund", logo: "/images/SokoFund.png" },
  ];

  return (
    <section className="py-12 px-4 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-12 text-[#03192E]">
          Join a few Educational Institutions understanding
          <br />
          Skills Challenges by Umurava
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={140}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
