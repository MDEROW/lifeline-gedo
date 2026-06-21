import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Lifeline Gedo",
  description: "Latest news, field updates, and situation reports from Lifeline Gedo.",
};

const articles = [
  {
    date: "June 2025",
    tag: "Field Update",
    tagColor: "#E8F5E9",
    tagText: "#1B5E20",
    title: "Lifeline Gedo Responds to Renewed Drought in Gedo Region",
    excerpt: "As Somalia faces its fourth consecutive failed rainy season, our teams have scaled up food and water assistance to over 12,000 families across Luuq and Dolow districts.",
  },
  {
    date: "May 2025",
    tag: "Health",
    tagColor: "#E3F2FD",
    tagText: "#1565C0",
    title: "Mobile Clinics Reach 8,000 Children in Remote Gedo Villages",
    excerpt: "Our expanded mobile health program has delivered primary care and nutrition screening to communities with no previous access to health services.",
  },
  {
    date: "April 2025",
    tag: "Partnership",
    tagColor: "#FFF8E1",
    tagText: "#E65100",
    title: "Lifeline Gedo and UNHCR Sign New Cooperation Agreement",
    excerpt: "A new three-year partnership will support durable solutions for internally displaced persons in Gedo region, including shelter and livelihood assistance.",
  },
  {
    date: "March 2025",
    tag: "WASH",
    tagColor: "#F3E5F5",
    tagText: "#6A1B9A",
    title: "New Boreholes Bring Clean Water to 5,000 Residents in Beled Hawo",
    excerpt: "Working with community leaders, our WASH teams have completed six new boreholes and hygiene promotion activities across three villages.",
  },
];

export default function NewsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#1B5E20] py-20 text-white">
        <div className="container">
          <span className="text-white/60 text-sm font-bold uppercase tracking-widest">Latest Updates</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">News & Field Updates</h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Stories and updates from our teams on the ground in Gedo region.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F9F6F0]">
        <div className="container grid md:grid-cols-2 gap-6">
          {articles.map((a) => (
            <article key={a.title} className="bg-white rounded-2xl p-7 border border-[#E0E0E0] hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: a.tagColor, color: a.tagText }}
                >
                  {a.tag}
                </span>
                <span className="text-xs text-[#888]">{a.date}</span>
              </div>
              <h2 className="font-black text-[#1A1A2E] text-lg mb-3 group-hover:text-[#1B5E20] transition-colors leading-snug">
                {a.title}
              </h2>
              <p className="text-sm text-[#555] leading-relaxed mb-4">{a.excerpt}</p>
              <span className="text-sm font-bold text-[#1B5E20] hover:underline">Read More →</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
