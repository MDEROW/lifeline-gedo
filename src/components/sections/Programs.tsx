import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    title: "Health & Nutrition",
    short: "Mobile clinics, maternal care, and malnutrition treatment across Gedo's most remote communities.",
    image: "/images/field/girl-water.jpg",
    href: "/programs#health",
    accent: "#1E20D8",
    tag: "🏥",
  },
  {
    title: "Food Security",
    short: "Emergency food assistance, seeds, tools, and cash transfers for drought-affected families.",
    image: "/images/field/food-distribution.jpg",
    href: "/programs#food",
    accent: "#E8173A",
    tag: "🌾",
  },
  {
    title: "WASH",
    short: "Boreholes, latrines, and hygiene promotion delivering clean water and sanitation.",
    image: "/images/programs/wash.jpg",
    href: "/programs#wash",
    accent: "#2ECC71",
    tag: "💧",
  },
  {
    title: "Resilience",
    short: "Savings groups, women's empowerment, and disaster risk reduction for lasting recovery.",
    image: "/images/programs/resilience.jpg",
    href: "/programs#resilience",
    accent: "#0A0E28",
    tag: "🌱",
  },
];

export default function Programs() {
  return (
    <section className="py-36 bg-[#F8FAFF]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2 className="text-4xl md:text-5xl mt-2">Our Core<br />Programs</h2>
          </div>
          <Link href="/programs" className="btn-outline-blue shrink-0">
            All Programs →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {programs.map((p) => (
            <Link key={p.title} href={p.href} className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 text-2xl">{p.tag}</span>
              </div>
              <div className="p-7">
                <div className="w-10 h-1.5 rounded-full mb-4" style={{ backgroundColor: p.accent }} />
                <h3 className="text-[17px] font-extrabold text-[#0A0E28] mb-3 group-hover:text-[#1E20D8] transition-colors" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  {p.title}
                </h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">{p.short}</p>
                <span className="inline-block mt-6 text-[13px] font-bold text-[#1E20D8]">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
