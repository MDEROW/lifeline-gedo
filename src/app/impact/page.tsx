import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact | Lifeline Gedo",
  description: "See the measurable impact of Lifeline Gedo's programs across Somalia's Gedo region.",
};

const stats = [
  { value: "85,000+", label: "People Reached Annually", icon: "👥" },
  { value: "12", label: "Districts Covered", icon: "📍" },
  { value: "14+", label: "Years of Operations", icon: "📅" },
  { value: "230+", label: "Projects Completed", icon: "✅" },
  { value: "18", label: "Health Facilities Supported", icon: "🏥" },
  { value: "50,000+", label: "Children Treated for Malnutrition", icon: "👶" },
];

const reports = [
  { title: "Annual Report 2023", type: "Annual Report", size: "PDF, 4.2MB" },
  { title: "Somalia Drought Response Report", type: "Situation Report", size: "PDF, 1.8MB" },
  { title: "Gedo Region Needs Assessment 2024", type: "Assessment", size: "PDF, 2.1MB" },
  { title: "Financial Statements 2023", type: "Financial", size: "PDF, 890KB" },
];

export default function ImpactPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#1A237E] py-20 text-white">
        <div className="container">
          <span className="text-white/60 text-sm font-bold uppercase tracking-widest">Results</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">Our Impact</h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Real numbers. Real lives changed. Here&apos;s what your support has made possible.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#F9F6F0]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-8 border border-[#E0E0E0] text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-[#1B5E20] mb-2">{s.value}</div>
                <div className="text-sm text-[#555] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-[#E65100] text-sm font-bold uppercase tracking-widest">Transparency</span>
            <h2 className="text-3xl font-black text-[#1A1A2E] mt-2">Publications & Reports</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {reports.map((r) => (
              <div key={r.title} className="flex items-center gap-4 p-5 rounded-xl border border-[#E0E0E0] bg-[#F9F6F0] hover:border-[#1B5E20] transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-[#1B5E20] rounded-lg flex items-center justify-center text-white text-lg shrink-0">
                  📄
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1A1A2E] text-sm truncate group-hover:text-[#1B5E20] transition-colors">{r.title}</p>
                  <p className="text-xs text-[#888]">{r.type} · {r.size}</p>
                </div>
                <span className="text-[#1B5E20] text-xs font-bold">↓</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
