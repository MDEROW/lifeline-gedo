import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    title: "Health & Nutrition",
    desc: "Mobile clinics, maternal care, and malnutrition treatment across Gedo's most remote communities.",
    image: "/images/field/girl-water.jpg",
    href: "/programs#health",
    color: "#1E20D8",
    bg: "#EAEBFF",
  },
  {
    title: "Food Security",
    desc: "Emergency food assistance, seeds, tools, and cash transfers for drought-affected families.",
    image: "/images/field/food-distribution.jpg",
    href: "/programs#food",
    color: "#E8173A",
    bg: "#FEF0F2",
  },
  {
    title: "WASH",
    desc: "Boreholes, latrines, and hygiene promotion delivering clean water and sanitation to thousands.",
    image: "/images/field/women-water.jpg",
    href: "/programs#wash",
    color: "#2ECC71",
    bg: "#EAFAF1",
  },
  {
    title: "Resilience",
    desc: "Savings groups, women's empowerment, and disaster risk reduction for lasting recovery.",
    image: "/images/field/shg-training.jpg",
    href: "/programs#resilience",
    color: "#0A0E28",
    bg: "#F4F7FF",
  },
];

export default function Programs() {
  return (
    <section className="py-36 bg-[#F4F7FF]">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2 className="text-[clamp(2.4rem,4vw,3.2rem)] mt-2">
              Our Core<br className="hidden md:block" /> Programs
            </h2>
          </div>
          <Link href="/programs" className="btn-outline-blue text-[14px] px-7 py-3.5 shrink-0">
            All Programs →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <Link key={p.title} href={p.href}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-transparent hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300">

              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <Image src={p.image} alt={p.title} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Accent pill */}
                <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-white"
                  style={{ backgroundColor: p.color, fontFamily: "var(--font-jakarta)" }}>
                  {p.title}
                </span>
              </div>

              {/* Body */}
              <div className="p-7">
                <div className="w-10 h-1.5 rounded-full mb-5" style={{ backgroundColor: p.color }} />
                <h3 className="text-[16px] font-extrabold text-[#0A0E28] mb-3 leading-snug group-hover:text-[#1E20D8] transition-colors"
                  style={{ fontFamily: "var(--font-jakarta)" }}>
                  {p.title}
                </h3>
                <p className="text-[13.5px] text-[#64748B] leading-relaxed mb-5">{p.desc}</p>
                <span className="text-[13px] font-bold text-[#1E20D8] group-hover:gap-2 transition-all inline-flex items-center gap-1.5">
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
