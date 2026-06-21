import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Lifeline Gedo",
  description: "Learn about Lifeline Gedo's mission, history, and values — a Somalia-led humanitarian organisation operating since 2005.",
};

const values = [
  { color: "#1E20D8", title: "Accountability", desc: "We are fully accountable to the communities we serve and to every donor who trusts us with their support." },
  { color: "#E8173A", title: "Humanity", desc: "Human dignity sits at the centre of every decision. We respond to needs without discrimination." },
  { color: "#2ECC71", title: "Locally Led", desc: "Somali-led and community-driven — we believe lasting change must come from within." },
  { color: "#0A0E28", title: "Transparency", desc: "We publish our reports and financial statements openly so stakeholders can hold us accountable." },
];

const milestones = [
  { year: "2005", event: "Lifeline Gedo founded by Somali humanitarians in Luuq, Gedo region." },
  { year: "2010", event: "Scaled health programs to reach 3 additional districts during famine response." },
  { year: "2015", event: "Launched WASH programme; constructed first boreholes in Dolow & Belet Hawa." },
  { year: "2017", event: "Established women's savings groups reaching 2,000+ women across Gedo." },
  { year: "2022", event: "Emergency drought response — largest single operation in LLG history." },
  { year: "2026", event: "21 years of service. 85,000+ people reached. Still on the ground." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0A0E28] py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/field/community-meeting.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative container">
          <p className="eyebrow" style={{ color: "#2ECC71" }}>Who We Are</p>
          <h1 className="text-5xl md:text-6xl text-white font-extrabold mt-3 mb-6 leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
            Somalia-Led.<br />
            <span style={{ color: "#1E20D8" }}>21 Years.</span><br />
            Still Here.
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl font-[family-name:var(--font-dm)]">
            Founded in 2005 by Somali humanitarian workers, Lifeline Gedo has been present
            through every drought, flood, and conflict — delivering results where others cannot reach.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-l-4 border-[#1E20D8] pl-8">
              <p className="eyebrow">Our Mission</p>
              <h2 className="text-3xl mb-5 mt-2">Why We Exist</h2>
              <p className="text-[#64748B] leading-relaxed text-lg font-[family-name:var(--font-dm)]">
                To provide life-saving humanitarian assistance and promote sustainable development
                for the most vulnerable populations in Somalia's Gedo region — with a focus on
                women, children, and displaced communities.
              </p>
            </div>
            <div className="border-l-4 border-[#E8173A] pl-8">
              <p className="eyebrow" style={{ color: "#E8173A" }}>Our Vision</p>
              <h2 className="text-3xl mb-5 mt-2">Where We're Headed</h2>
              <p className="text-[#64748B] leading-relaxed text-lg font-[family-name:var(--font-dm)]">
                A Gedo region where every community has access to quality healthcare, food
                security, clean water, and the tools to build sustainable livelihoods — free
                from crisis and driven by local leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-[#F8FAFF]">
        <div className="container">
          <div className="text-center mb-20">
            <p className="eyebrow">What Drives Us</p>
            <h2 className="text-4xl mt-2">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-[#E2E8F0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: v.color + "18" }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: v.color }} />
                </div>
                <h3 className="text-lg font-extrabold text-[#0A0E28] mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>{v.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed font-[family-name:var(--font-dm)]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <p className="eyebrow">Our Journey</p>
            <h2 className="text-4xl mt-2">21 Years of Impact</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-8 mb-10 last:mb-0">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-sm text-white shrink-0"
                    style={{ backgroundColor: ["#1E20D8","#E8173A","#2ECC71","#0A0E28","#1E20D8","#E8173A"][i], fontFamily: "var(--font-jakarta)" }}>
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-[#E2E8F0] my-2" />}
                </div>
                <div className="pt-3 pb-8">
                  <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>{m.year}</p>
                  <p className="text-[#1E293B] leading-relaxed font-[family-name:var(--font-dm)]">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1E20D8]">
        <div className="container text-center">
          <h2 className="text-4xl text-white font-extrabold mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
            Stand with Gedo's Communities
          </h2>
          <p className="text-white/70 text-lg mb-10 font-[family-name:var(--font-dm)]">
            Join 21 years of impact. Every contribution matters.
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
