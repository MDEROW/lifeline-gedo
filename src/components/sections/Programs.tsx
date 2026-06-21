import Link from "next/link";

const programs = [
  {
    icon: "🏥",
    title: "Health & Nutrition",
    description:
      "Providing life-saving primary healthcare, maternal care, and nutrition support to communities facing acute malnutrition and disease outbreaks.",
    color: "#E8F5E9",
    border: "#A5D6A7",
    href: "/programs#health",
  },
  {
    icon: "🌾",
    title: "Food Security",
    description:
      "Emergency food assistance, livelihood support, and agricultural inputs to help drought-affected families build sustainable food systems.",
    color: "#FFF8E1",
    border: "#FFE082",
    href: "/programs#food",
  },
  {
    icon: "💧",
    title: "WASH",
    description:
      "Water, sanitation, and hygiene programs delivering clean water access, latrines, and hygiene promotion to prevent disease and protect dignity.",
    color: "#E3F2FD",
    border: "#90CAF9",
    href: "/programs#wash",
  },
  {
    icon: "🌱",
    title: "Resilience",
    description:
      "Long-term programs building community capacity, disaster risk reduction, and economic recovery for sustainable recovery in Gedo.",
    color: "#F3E5F5",
    border: "#CE93D8",
    href: "/programs#resilience",
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-[#F9F6F0]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#E65100] font-bold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mt-2 mb-4">
            Our Core Programs
          </h2>
          <p className="text-[#555] max-w-2xl mx-auto leading-relaxed">
            We deliver integrated humanitarian and development programs addressing the root causes
            and immediate needs of vulnerable communities across Gedo region.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6 border-2 flex flex-col hover:shadow-lg transition-shadow"
              style={{ backgroundColor: p.color, borderColor: p.border }}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-[#1A1A2E] text-lg mb-3">{p.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed flex-1">{p.description}</p>
              <Link
                href={p.href}
                className="mt-5 text-sm font-bold text-[#1B5E20] hover:underline inline-flex items-center gap-1"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
