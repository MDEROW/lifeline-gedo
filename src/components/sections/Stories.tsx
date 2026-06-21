import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    name: "Halima & Family",
    location: "Qaranri, Belet-Hawa",
    program: "Resilience",
    quote: "After receiving tree seedlings and training, my family now has a nursery that provides shade, food, and income. Lifeline Gedo didn't just give us trees — they gave us a future.",
    image: "/images/field/halima-family.jpg",
    color: "#1B1FCC",
  },
  {
    name: "Community Members",
    location: "Tula-Amin, Gedo",
    program: "WASH",
    quote: "Before the borehole, we walked hours for contaminated water. Now clean water is minutes from our home. Our children are healthier and our girls stay in school.",
    image: "/images/field/women-water.jpg",
    color: "#E8173A",
  },
  {
    name: "SHG Members",
    location: "Belet-Hawa, Gedo",
    program: "Livelihoods",
    quote: "Through the savings group and skills training, I started my own tailoring business. I can now pay school fees and support my household independently.",
    image: "/images/programs/resilience.jpg",
    color: "#27AE60",
  },
];

export default function Stories() {
  return (
    <section className="py-24 bg-[#F4F4F0]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="section-eyebrow">Voices from the Field</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B2A] leading-tight">
              Stories of Impact
            </h2>
          </div>
          <Link href="/impact" className="text-sm font-bold text-[#1B1FCC] hover:underline shrink-0">
            More stories →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <div key={s.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: s.color }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 text-white"
                  style={{ backgroundColor: s.color }}
                >
                  {s.program}
                </span>
                <blockquote className="text-[#4A4A6A] text-sm leading-relaxed mb-4 italic">
                  &ldquo;{s.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-[#0D1B2A] text-sm">{s.name}</p>
                  <p className="text-xs text-[#4A4A6A]">{s.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
