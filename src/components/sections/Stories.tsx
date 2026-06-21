import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    name: "Halima & Family",
    location: "Qaranri, Belet-Hawa",
    program: "Resilience",
    programColor: "#2ECC71",
    quote: "After receiving seedlings and training, my family now has a nursery. Lifeline Gedo didn't just give us trees — they gave us a future.",
    image: "/images/field/halima-family.jpg",
  },
  {
    name: "Community Members",
    location: "Tula-Amin, Gedo",
    program: "WASH",
    programColor: "#1E20D8",
    quote: "Before the borehole, we walked hours for contaminated water. Now clean water is minutes from our home and our children are healthier.",
    image: "/images/field/women-water.jpg",
  },
  {
    name: "SHG Members",
    location: "Belet-Hawa, Gedo",
    program: "Livelihoods",
    programColor: "#E8173A",
    quote: "Through the savings group and skills training, I started my own tailoring business. I now support my household independently.",
    image: "/images/programs/resilience.jpg",
  },
];

export default function Stories() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">Voices from the Field</p>
            <h2 className="text-4xl md:text-5xl">Stories of<br />Real Impact</h2>
          </div>
          <Link href="/impact" className="btn-outline-blue shrink-0">More Stories →</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <div key={s.name} className="group flex flex-col bg-[#F8FAFF] rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-52 overflow-hidden">
                <Image src={s.image} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className="absolute top-4 left-4 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: s.programColor, fontFamily: 'var(--font-jakarta)' }}
                >
                  {s.program}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="text-5xl text-[#E2E8F0] font-serif leading-none mb-2 select-none">&ldquo;</div>
                <p className="text-[#475569] text-[15px] leading-relaxed italic flex-1 font-[family-name:var(--font-dm)]">{s.quote}</p>
                <div className="mt-5 pt-5 border-t border-[#E2E8F0]">
                  <p className="font-bold text-[#0A0E28] text-sm" style={{ fontFamily: 'var(--font-jakarta)' }}>{s.name}</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">{s.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
