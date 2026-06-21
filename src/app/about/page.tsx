import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Lifeline Gedo",
  description: "Learn about Lifeline Gedo's mission, history, and leadership team.",
};

const team = [
  { name: "To be updated", title: "Executive Director", bio: "Placeholder — add real bio here." },
  { name: "To be updated", title: "Programs Director", bio: "Placeholder — add real bio here." },
  { name: "To be updated", title: "Finance Manager", bio: "Placeholder — add real bio here." },
];

const values = [
  { icon: "🤝", title: "Accountability", desc: "We are accountable to the communities we serve and our donors." },
  { icon: "❤️", title: "Humanity", desc: "We put human dignity at the centre of every decision we make." },
  { icon: "🌍", title: "Locally Led", desc: "Somali-led, community-driven response for lasting impact." },
  { icon: "📊", title: "Transparency", desc: "We publish our reports and financials openly." },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#1B5E20] py-20 text-white">
        <div className="container">
          <span className="text-white/60 text-sm font-bold uppercase tracking-widest">Who We Are</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">About Lifeline Gedo</h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            A Somali-led humanitarian organization dedicated to saving lives and building resilience
            in Somalia&apos;s most neglected region since 2010.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F9F6F0]">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-[#E65100] text-sm font-bold uppercase tracking-widest">Our Mission</span>
            <h2 className="text-2xl font-black text-[#1A1A2E] mt-2 mb-4">Why We Exist</h2>
            <p className="text-[#555] leading-relaxed">
              To provide life-saving humanitarian assistance and promote sustainable socio-economic
              development for the most vulnerable populations in Somalia&apos;s Gedo region, with a
              focus on women, children, and displaced communities.
            </p>
          </div>
          <div>
            <span className="text-[#1B5E20] text-sm font-bold uppercase tracking-widest">Our Vision</span>
            <h2 className="text-2xl font-black text-[#1A1A2E] mt-2 mb-4">Where We&apos;re Headed</h2>
            <p className="text-[#555] leading-relaxed">
              A Gedo region where every community has access to quality health care, food security,
              clean water, and the tools to build sustainable livelihoods — free from crisis and
              driven by local leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-[#E65100] text-sm font-bold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-3xl font-black text-[#1A1A2E] mt-2">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border border-[#E0E0E0] bg-[#F9F6F0]">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-[#1A1A2E] mb-2">{v.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#F9F6F0]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-[#E65100] text-sm font-bold uppercase tracking-widest">Leadership</span>
            <h2 className="text-3xl font-black text-[#1A1A2E] mt-2">Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 border border-[#E0E0E0]">
                <div className="w-16 h-16 rounded-full bg-[#1B5E20] flex items-center justify-center text-white font-black text-xl mb-4">
                  {member.name[0]}
                </div>
                <h3 className="font-bold text-[#1A1A2E]">{member.name}</h3>
                <p className="text-[#E65100] text-sm font-semibold mb-2">{member.title}</p>
                <p className="text-sm text-[#555] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
