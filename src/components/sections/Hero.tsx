import Link from "next/link";
import Image from "next/image";

const stats = [
  { n: "85,000+", l: "People Reached" },
  { n: "21 Years", l: "On the Ground" },
  { n: "12", l: "Districts Covered" },
  { n: "230+", l: "Projects Completed" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] flex flex-col overflow-hidden">

      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/field/women-water.jpg"
          alt="Communities in Gedo, Somalia"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E28]/95 via-[#0A0E28]/75 to-[#0A0E28]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E28]/80 via-transparent to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center">
        <div className="container py-20 lg:py-28">
          <div className="max-w-[680px]">

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2.5 mb-10">
              <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse shrink-0" />
              <span className="text-white/80 text-[12px] font-semibold tracking-widest uppercase" style={{ fontFamily: "var(--font-jakarta)" }}>
                Lifeline Gedo · Est. 2005 · Gedo Region, Somalia
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(3.2rem,7vw,5.8rem)] font-extrabold text-white leading-[1.02] tracking-tight mb-7"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              Saving Lives.<br />
              <span className="text-[#E8173A]">Rebuilding</span><br />
              Futures.
            </h1>

            {/* Tagline */}
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-11 max-w-[530px]">
              Somalia-led humanitarian response in Gedo region — delivering emergency
              health, food, water, and resilience to the most vulnerable communities
              since 2005.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="btn-donate text-[15px] px-9 py-4">
                Donate Now
              </Link>
              <Link href="/programs" className="btn-outline-white text-[15px] px-9 py-4">
                Our Work →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative bg-[#1E20D8]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.l}
                className={`py-6 px-6 text-center ${i < stats.length - 1 ? "border-r border-white/20" : ""}`}>
                <div className="text-white text-2xl md:text-3xl font-extrabold leading-none mb-1.5"
                  style={{ fontFamily: "var(--font-jakarta)" }}>
                  {s.n}
                </div>
                <div className="text-white/55 text-[11px] font-semibold uppercase tracking-widest">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
