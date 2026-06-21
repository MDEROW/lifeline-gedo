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
    image: "/images/field/shg-training.jpg",
  },
];

export default function Stories() {
  return (
    <section className="py-36 bg-white">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="eyebrow">Voices from the Field</p>
            <h2 className="text-[clamp(2.4rem,4vw,3.2rem)] mt-2">
              Stories of<br className="hidden md:block" /> Real Impact
            </h2>
          </div>
          <Link href="/impact" className="btn-outline-blue text-[14px] px-7 py-3.5 shrink-0">
            More Stories →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {stories.map((s) => (
            <div key={s.name}
              className="group flex flex-col bg-[#F4F7FF] rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] hover:-translate-y-2 transition-all duration-300">

              {/* Photo */}
              <div className="relative h-60 overflow-hidden">
                <Image src={s.image} alt={s.name} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: s.programColor, fontFamily: "var(--font-jakarta)" }}>
                  {s.program}
                </span>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <div className="text-[64px] text-[#E2E8F0] font-serif leading-none -mb-2 select-none">&ldquo;</div>
                <p className="text-[#475569] text-[15px] leading-relaxed italic flex-1">{s.quote}</p>
                <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
                  <p className="font-extrabold text-[#0A0E28] text-[14px]"
                    style={{ fontFamily: "var(--font-jakarta)" }}>
                    {s.name}
                  </p>
                  <p className="text-[12px] text-[#94A3B8] mt-0.5">{s.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
