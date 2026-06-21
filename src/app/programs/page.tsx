import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Programs | Lifeline Gedo",
  description: "Health, food security, WASH, and resilience programs in Somalia's Gedo region.",
};

const programs = [
  {
    id: "health",
    color: "#1E20D8",
    bg: "#EAEBFF",
    title: "Health & Nutrition",
    image: "/images/field/girl-water.jpg",
    lead: "Mobile clinics, maternal care, and malnutrition treatment reaching the most remote communities in Gedo.",
    activities: [
      "Mobile health clinics reaching remote communities weekly",
      "Treatment for Severe Acute Malnutrition (SAM & MAM)",
      "Maternal and child health services",
      "Vaccination campaigns and disease surveillance",
      "Rapid response to cholera and measles outbreaks",
    ],
  },
  {
    id: "food",
    color: "#E8173A",
    bg: "#FEF0F2",
    title: "Food Security & Livelihoods",
    image: "/images/field/food-distribution.jpg",
    lead: "Emergency food assistance and long-term livelihood support so communities survive crises and build back stronger.",
    activities: [
      "Unconditional cash transfers for drought-affected families",
      "Agricultural seed and tool distribution",
      "Livestock restocking and veterinary support",
      "Cash-for-work community infrastructure programs",
      "Market system strengthening and value chain development",
    ],
  },
  {
    id: "wash",
    color: "#2ECC71",
    bg: "#EAFAF1",
    title: "Water, Sanitation & Hygiene",
    image: "/images/field/women-water.jpg",
    lead: "Access to clean water is life or death in Gedo. We rehabilitate boreholes, build latrines, and prevent waterborne disease.",
    activities: [
      "Borehole rehabilitation and new construction",
      "Latrine construction in schools and communities",
      "Hygiene kit distribution to vulnerable households",
      "Community hygiene promotion campaigns",
      "Water quality testing and treatment",
    ],
  },
  {
    id: "resilience",
    color: "#0A0E28",
    bg: "#F8FAFF",
    title: "Resilience & Early Recovery",
    image: "/images/field/shg-training.jpg",
    lead: "Beyond emergency response — building long-term resilience through savings groups, women's empowerment, and disaster risk reduction.",
    activities: [
      "Disaster risk reduction (DRR) training in villages",
      "Village Savings and Loan Associations (VSLAs)",
      "Women's leadership and protection programs",
      "Durable solutions for internally displaced people",
      "Community infrastructure rehabilitation",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0A0E28] py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/field/community-water-trucking.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative container">
          <p className="eyebrow" style={{ color: "#2ECC71" }}>What We Do</p>
          <h1 className="text-5xl md:text-6xl text-white font-extrabold mt-3 mb-6 leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
            Integrated<br />
            <span style={{ color: "#1E20D8" }}>Humanitarian</span><br />
            Response.
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl font-[family-name:var(--font-dm)]">
            Health, food security, water, and resilience — delivered together for the most
            vulnerable communities across Somalia's Gedo region.
          </p>
          {/* Jump links */}
          <div className="flex flex-wrap gap-3 mt-10">
            {programs.map((p) => (
              <a key={p.id} href={`#${p.id}`}
                className="text-white/70 hover:text-white border border-white/20 hover:border-white/60 rounded-full px-5 py-2 text-sm font-semibold transition-all"
                style={{ fontFamily: "var(--font-jakarta)" }}>
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <div className="bg-white">
        {programs.map((p, i) => (
          <section key={p.id} id={p.id} className={`py-32 scroll-mt-24 ${i % 2 === 1 ? "bg-[#F8FAFF]" : "bg-white"}`}>
            <div className="container">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Image */}
                <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: p.color }} />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider mb-6"
                    style={{ backgroundColor: p.bg, color: p.color, fontFamily: "var(--font-jakarta)" }}>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                    {p.title}
                  </div>
                  <h2 className="text-3xl md:text-4xl mb-5" style={{ fontFamily: "var(--font-jakarta)" }}>{p.title}</h2>
                  <p className="text-[#64748B] text-lg leading-relaxed mb-8 font-[family-name:var(--font-dm)]">{p.lead}</p>

                  <ul className="space-y-3 mb-10">
                    {p.activities.map((a) => (
                      <li key={a} className="flex gap-3 items-start text-[#475569] font-[family-name:var(--font-dm)]">
                        <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <Link href="/donate" className="btn-donate">
                    Support This Program →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-24 bg-[#0A0E28]">
        <div className="container text-center">
          <h2 className="text-4xl text-white font-extrabold mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
            Help Fund Our Programs
          </h2>
          <p className="text-white/60 text-lg mb-10 font-[family-name:var(--font-dm)]">
            Your contribution directly funds the programs above in Gedo region.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/donate" className="btn-donate text-[15px] px-10 py-4">Donate Now</Link>
            <Link href="/contact" className="btn-outline-white text-[15px] px-10 py-4">Partner With Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
