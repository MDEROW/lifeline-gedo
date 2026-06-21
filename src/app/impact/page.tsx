import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Impact | Lifeline Gedo",
  description: "21 years of measurable impact — lives saved, communities strengthened, Gedo region served.",
};

const stats = [
  { value: "85,000+", label: "People Reached Annually", color: "#1E20D8" },
  { value: "50,000+", label: "Children Treated for Malnutrition", color: "#E8173A" },
  { value: "18", label: "Health Facilities Supported", color: "#2ECC71" },
  { value: "230+", label: "Projects Completed", color: "#0A0E28" },
  { value: "12", label: "Districts Covered", color: "#1E20D8" },
  { value: "21", label: "Years on the Ground", color: "#E8173A" },
];

const sectors = [
  {
    title: "Health & Nutrition",
    color: "#1E20D8",
    bg: "#EAEBFF",
    image: "/images/field/girl-water.jpg",
    results: [
      "50,000+ children treated for severe acute malnutrition",
      "18 health facilities rehabilitated and equipped",
      "Maternal mortality reduced in target communities",
      "Disease outbreaks contained through rapid response",
    ],
  },
  {
    title: "Food Security",
    color: "#E8173A",
    bg: "#FEF0F2",
    image: "/images/field/food-distribution.jpg",
    results: [
      "Emergency food assistance to 15,000+ families",
      "Agricultural input support for 4,000 households",
      "Cash transfer programmes benefiting 8,000+ families",
      "Livestock restocking for 1,200 pastoralist households",
    ],
  },
  {
    title: "WASH",
    color: "#2ECC71",
    bg: "#EAFAF1",
    image: "/images/field/women-water.jpg",
    results: [
      "45 boreholes rehabilitated across Gedo region",
      "Clean water access for 120,000+ people",
      "12,000 latrines constructed in schools and communities",
      "Waterborne disease incidence reduced by 60%",
    ],
  },
  {
    title: "Resilience",
    color: "#0A0E28",
    bg: "#F8FAFF",
    image: "/images/field/shg-training.jpg",
    results: [
      "2,400 women in savings and loan groups",
      "1,800 households with diversified income sources",
      "Disaster risk reduction training in 60 villages",
      "IDP durable solutions for 3,000 displaced families",
    ],
  },
];

const reports = [
  { title: "Annual Report 2023", type: "Annual Report", size: "PDF, 4.2MB" },
  { title: "Somalia Drought Response Report", type: "Situation Report", size: "PDF, 1.8MB" },
  { title: "Gedo Region Needs Assessment 2024", type: "Assessment", size: "PDF, 2.1MB" },
  { title: "Financial Statements 2023", type: "Financial", size: "PDF, 890KB" },
];

export default function ImpactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0A0E28] py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/field/community-water-trucking.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative container">
          <p className="eyebrow" style={{ color: "#2ECC71" }}>Our Results</p>
          <h1 className="text-5xl md:text-6xl text-white font-extrabold mt-3 mb-6 leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
            Real Numbers.<br />
            <span style={{ color: "#E8173A" }}>Real Lives</span><br />
            Changed.
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl font-[family-name:var(--font-dm)]">
            Since 2005, Lifeline Gedo has delivered measurable results in one of Africa's
            most neglected humanitarian theatres. Here is the evidence.
          </p>
        </div>
      </section>

      {/* Stats grid */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <p className="eyebrow">By the Numbers</p>
            <h2 className="text-4xl mt-2">Impact Since 2005</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl p-8 border border-[#E2E8F0] bg-[#F8FAFF] text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold mb-3" style={{ color: s.color, fontFamily: "var(--font-jakarta)" }}>
                  {s.value}
                </div>
                <div className="text-sm text-[#64748B] font-semibold font-[family-name:var(--font-dm)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector results */}
      <section className="py-32 bg-[#F8FAFF]">
        <div className="container">
          <div className="text-center mb-20">
            <p className="eyebrow">Program by Program</p>
            <h2 className="text-4xl mt-2">What We've Achieved</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-52">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-5 text-white font-extrabold text-xl" style={{ fontFamily: "var(--font-jakarta)" }}>{s.title}</span>
                  <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: s.color }} />
                </div>
                <div className="p-7">
                  <ul className="space-y-3">
                    {s.results.map((r) => (
                      <li key={r} className="flex gap-3 items-start text-sm text-[#475569] font-[family-name:var(--font-dm)]">
                        <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <p className="eyebrow">Transparency</p>
            <h2 className="text-4xl mt-2">Publications & Reports</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {reports.map((r, i) => (
              <div key={r.title}
                className="flex items-center gap-5 p-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFF] hover:border-[#1E20D8] hover:shadow-md transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-lg"
                  style={{ backgroundColor: ["#1E20D8","#E8173A","#2ECC71","#0A0E28"][i] }}>
                  ↓
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#0A0E28] text-sm group-hover:text-[#1E20D8] transition-colors" style={{ fontFamily: "var(--font-jakarta)" }}>{r.title}</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">{r.type} · {r.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#E8173A]">
        <div className="container text-center">
          <h2 className="text-4xl text-white font-extrabold mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
            Help Us Reach More People
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto font-[family-name:var(--font-dm)]">
            Every donation extends our reach into Gedo's most remote communities.
          </p>
          <Link href="/donate" className="btn-outline-white text-[15px] px-10 py-4">Donate Now →</Link>
        </div>
      </section>
    </div>
  );
}
