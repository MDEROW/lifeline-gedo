import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News & Updates | Lifeline Gedo",
  description: "Latest field updates, situation reports, and news from Lifeline Gedo in Somalia's Gedo region.",
};

const featured = {
  date: "June 2026",
  tag: "Emergency",
  tagColor: "#E8173A",
  title: "Lifeline Gedo Scales Up Response to Renewed Drought Across Gedo Region",
  excerpt: "As Somalia faces its fourth consecutive failed rainy season, our teams have scaled up food and water assistance to over 12,000 families across Luuq, Dolow, and Belet Hawa districts. Emergency water trucking is now reaching communities with no other source of clean water.",
  image: "/images/field/water-trucking.jpg",
};

const articles = [
  {
    date: "May 2026",
    tag: "Health",
    tagColor: "#1E20D8",
    title: "Mobile Clinics Reach 8,000 Children in Remote Gedo Villages",
    excerpt: "Our expanded mobile health program has delivered primary care and nutrition screening to communities with no previous access to health services.",
    image: "/images/field/girl-water.jpg",
  },
  {
    date: "April 2026",
    tag: "Partnership",
    tagColor: "#2ECC71",
    title: "Lifeline Gedo and UNHCR Sign New Cooperation Agreement",
    excerpt: "A new three-year partnership will support durable solutions for internally displaced persons in Gedo region, including shelter and livelihood assistance.",
    image: "/images/field/community-meeting.jpg",
  },
  {
    date: "March 2026",
    tag: "WASH",
    tagColor: "#1E20D8",
    title: "New Boreholes Bring Clean Water to 5,000 Residents in Beled Hawo",
    excerpt: "Working with community leaders, our WASH teams have completed six new boreholes and hygiene promotion activities across three villages.",
    image: "/images/field/women-water.jpg",
  },
  {
    date: "February 2026",
    tag: "Resilience",
    tagColor: "#0A0E28",
    title: "Women's Savings Groups Graduate 400 Members in Luuq District",
    excerpt: "Village Savings and Loan Associations supported by LLG have helped 400 women establish small businesses and build household financial resilience.",
    image: "/images/field/shg-training.jpg",
  },
  {
    date: "January 2026",
    tag: "Food Security",
    tagColor: "#E8173A",
    title: "Emergency Cash Transfers Reach 3,200 Drought-Affected Families",
    excerpt: "Unconditional cash transfers enabled families to purchase food during the lean season, preventing acute malnutrition in target districts.",
    image: "/images/field/food-distribution.jpg",
  },
];

export default function NewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A0E28] py-32">
        <div className="container">
          <p className="eyebrow" style={{ color: "#2ECC71" }}>Latest Updates</p>
          <h1 className="text-5xl md:text-6xl text-white font-extrabold mt-3 mb-6 leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
            News &<br />
            <span style={{ color: "#1E20D8" }}>Field Updates</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-xl font-[family-name:var(--font-dm)]">
            Stories and situation reports from our teams on the ground in Gedo region.
          </p>
        </div>
      </section>

      {/* Featured story */}
      <section className="py-20 bg-white">
        <div className="container">
          <p className="eyebrow mb-8">Featured Story</p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl">
              <Image src={featured.image} alt={featured.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-5 left-5 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                style={{ backgroundColor: featured.tagColor, fontFamily: "var(--font-jakarta)" }}>
                {featured.tag}
              </span>
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] font-semibold mb-3 uppercase tracking-widest" style={{ fontFamily: "var(--font-jakarta)" }}>{featured.date}</p>
              <h2 className="text-3xl md:text-4xl mb-5 leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>{featured.title}</h2>
              <p className="text-[#64748B] text-lg leading-relaxed mb-8 font-[family-name:var(--font-dm)]">{featured.excerpt}</p>
              <Link href="/contact" className="btn-blue">Read Full Report →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-20 bg-[#F8FAFF]">
        <div className="container">
          <p className="eyebrow mb-12">More Updates</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {articles.map((a) => (
              <article key={a.title} className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ backgroundColor: a.tagColor, fontFamily: "var(--font-jakarta)" }}>
                    {a.tag}
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-xs text-[#94A3B8] font-semibold mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-jakarta)" }}>{a.date}</p>
                  <h2 className="font-extrabold text-[#0A0E28] text-[17px] mb-3 leading-snug group-hover:text-[#1E20D8] transition-colors" style={{ fontFamily: "var(--font-jakarta)" }}>{a.title}</h2>
                  <p className="text-sm text-[#64748B] leading-relaxed font-[family-name:var(--font-dm)]">{a.excerpt}</p>
                  <span className="inline-block mt-5 text-sm font-bold text-[#1E20D8]">Read More →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-[#0A0E28]">
        <div className="container text-center">
          <p className="eyebrow text-center justify-center mb-4">Stay Informed</p>
          <h2 className="text-4xl text-white font-extrabold mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
            Get Field Updates by Email
          </h2>
          <p className="text-white/60 text-lg mb-10 font-[family-name:var(--font-dm)]">
            Monthly situation reports and impact stories from our teams in Gedo.
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1E20D8] transition-colors" />
            <button type="submit" className="btn-donate shrink-0 py-3.5">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
