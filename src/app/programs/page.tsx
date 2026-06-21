import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Programs | Lifeline Gedo",
  description: "Health, food security, WASH, and resilience programs in Somalia's Gedo region.",
};

const programs = [
  {
    id: "health",
    icon: "🏥",
    color: "#E8F5E9",
    border: "#A5D6A7",
    title: "Health & Nutrition",
    description:
      "We operate mobile health clinics and static health posts across Gedo, providing primary healthcare, maternal and child health services, and treatment for acute malnutrition. Our teams respond to disease outbreaks including cholera and measles.",
    activities: [
      "Mobile health clinics reaching remote communities",
      "Treatment for Severe Acute Malnutrition (SAM)",
      "Maternal and child health services",
      "Vaccination campaigns",
      "Disease outbreak response",
    ],
  },
  {
    id: "food",
    icon: "🌾",
    color: "#FFF8E1",
    border: "#FFE082",
    title: "Food Security & Livelihoods",
    description:
      "Combining emergency food assistance with long-term livelihood support, we help communities survive immediate crises while building the capacity to feed themselves sustainably through agriculture, livestock, and income generation.",
    activities: [
      "Emergency food assistance (unconditional cash transfers)",
      "Agricultural input distribution (seeds, tools)",
      "Livestock support and veterinary care",
      "Cash-for-work programs",
      "Market and value chain development",
    ],
  },
  {
    id: "wash",
    icon: "💧",
    color: "#E3F2FD",
    border: "#90CAF9",
    title: "Water, Sanitation & Hygiene (WASH)",
    description:
      "Access to clean water is a matter of life and death. We rehabilitate boreholes, construct latrines, distribute hygiene kits, and run community hygiene promotion to prevent waterborne disease outbreaks.",
    activities: [
      "Borehole rehabilitation and construction",
      "Latrine construction in schools and communities",
      "Hygiene kit distribution",
      "Community hygiene promotion",
      "Water quality testing and treatment",
    ],
  },
  {
    id: "resilience",
    icon: "🌱",
    color: "#F3E5F5",
    border: "#CE93D8",
    title: "Resilience & Early Recovery",
    description:
      "Beyond emergency response, we invest in long-term community resilience through disaster risk reduction, community savings groups, women&apos;s empowerment, and support for durable solutions for displaced populations.",
    activities: [
      "Disaster risk reduction (DRR) training",
      "Community savings and loan groups (VSLAs)",
      "Women's leadership and protection programs",
      "Durable solutions for IDPs",
      "Community infrastructure rehabilitation",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#1B5E20] py-20 text-white">
        <div className="container">
          <span className="text-white/60 text-sm font-bold uppercase tracking-widest">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">Our Programs</h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Integrated humanitarian response across health, food, water, and resilience —
            reaching the most vulnerable communities in Gedo region.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-[#F9F6F0]">
        <div className="container flex flex-col gap-16">
          {programs.map((p, i) => (
            <div key={p.id} id={p.id} className="scroll-mt-24 grid md:grid-cols-2 gap-8 items-start">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div
                  className="rounded-2xl p-8 border-2 h-full"
                  style={{ backgroundColor: p.color, borderColor: p.border }}
                >
                  <div className="text-5xl mb-4">{p.icon}</div>
                  <h2 className="text-2xl font-black text-[#1A1A2E] mb-4">{p.title}</h2>
                  <p className="text-[#555] leading-relaxed">{p.description}</p>
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="font-bold text-[#1A1A2E] mb-4 text-lg">Key Activities</h3>
                <ul className="flex flex-col gap-3">
                  {p.activities.map((a) => (
                    <li key={a} className="flex gap-3 items-start text-[#444] text-sm">
                      <span className="text-[#1B5E20] font-black mt-0.5">✓</span>
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/donate"
                    className="inline-block bg-[#E65100] hover:bg-[#BF360C] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors"
                  >
                    Support This Program →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
