import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/field/women-water.jpg"
          alt="Women fetching clean water at Tula-Amin water point"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/70 via-transparent to-transparent" />
      </div>

      <div className="relative container pb-20 pt-32 md:pt-0 md:pb-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-0.5 bg-[#E8173A]" />
            <span className="text-white/80 text-xs font-bold uppercase tracking-[0.15em]">
              Humanitarian Aid · Gedo, Somalia
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Saving Lives.<br />
            <span className="text-[#E8173A]">Building</span><br />
            Futures.
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Lifeline Gedo delivers emergency health, food, water, and resilience
            programs to Somalia&apos;s most neglected communities. Every crisis, we show up.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/donate" className="btn-primary text-base px-8 py-4">
              Donate Now
            </Link>
            <Link href="/programs" className="btn-secondary text-base px-8 py-4">
              Our Work →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#1B1FCC]/90 backdrop-blur-sm">
        <div className="container py-4 grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/20">
          {[
            { n: "85,000+", l: "People Reached" },
            { n: "14+ Yrs", l: "On the Ground" },
            { n: "12", l: "Districts Covered" },
            { n: "230+", l: "Projects Completed" },
          ].map((s) => (
            <div key={s.l} className="text-center px-4 first:pl-0">
              <div className="text-white font-black text-xl md:text-2xl">{s.n}</div>
              <div className="text-white/65 text-xs font-medium uppercase tracking-wide mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
