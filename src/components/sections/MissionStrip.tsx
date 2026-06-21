import Link from "next/link";

const pillars = [
  {
    color: "#1E20D8",
    bg: "#EAEBFF",
    title: "Health & Nutrition",
    desc: "Mobile clinics and malnutrition treatment reaching Gedo's most remote communities.",
    href: "/programs#health",
  },
  {
    color: "#E8173A",
    bg: "#FEF0F2",
    title: "Food Security",
    desc: "Emergency food assistance and livelihood support for drought-affected families.",
    href: "/programs#food",
  },
  {
    color: "#2ECC71",
    bg: "#EAFAF1",
    title: "Clean Water",
    desc: "Borehole rehabilitation and hygiene promotion preventing waterborne disease.",
    href: "/programs#wash",
  },
  {
    color: "#0A0E28",
    bg: "#F4F7FF",
    title: "Resilience",
    desc: "Savings groups, women's empowerment, and disaster risk reduction.",
    href: "/programs#resilience",
  },
];

export default function MissionStrip() {
  return (
    <section className="py-0 bg-white border-b border-[#E8EDF5]">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Link key={p.title} href={p.href}
              className={`group flex items-start gap-4 py-10 px-8 hover:bg-[#F4F7FF] transition-colors duration-200
                ${i < pillars.length - 1 ? "border-r border-[#E8EDF5]" : ""}
                ${i >= 2 ? "border-t lg:border-t-0 border-[#E8EDF5]" : ""}`}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: p.bg }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold text-[#0A0E28] mb-1.5 group-hover:text-[#1E20D8] transition-colors"
                  style={{ fontFamily: "var(--font-jakarta)" }}>
                  {p.title}
                </h3>
                <p className="text-[12.5px] text-[#64748B] leading-relaxed">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
