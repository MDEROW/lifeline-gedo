import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/field/women-water.jpg" alt="Communities in Gedo, Somalia" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E28]/90 via-[#0A0E28]/60 to-transparent" />
      </div>

      <div className="relative container">
        <div className="max-w-[640px]">
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-[family-name:var(--font-jakarta)] font-extrabold text-white leading-[1.0] mb-6 tracking-tight">
            Saving Lives.<br />
            <span className="text-[#E8173A]">Rebuilding</span><br />
            Futures.
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 font-[family-name:var(--font-dm)] max-w-[520px]">
            Somalia-led humanitarian response in Gedo region — emergency health,
            food, water, and resilience for the most vulnerable communities.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link href="/donate" className="btn-donate text-[15px] px-8 py-4">
              Donate Now
            </Link>
            <Link href="/programs" className="btn-outline-white text-[15px] px-8 py-4">
              Our Work
            </Link>
          </div>

          {/* Established badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
            <div className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
            <span className="text-white/85 text-sm font-semibold" style={{ fontFamily: 'var(--font-jakarta)' }}>
              Established 2005 · Serving Gedo for 21 years
            </span>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#1E20D8]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {[
              { n: "85,000+", l: "People Reached" },
              { n: "21 Yrs", l: "On the Ground" },
              { n: "12", l: "Districts Covered" },
              { n: "230+", l: "Projects Completed" },
            ].map((s) => (
              <div key={s.l} className="py-5 text-center px-4">
                <div className="text-white text-2xl md:text-3xl font-extrabold leading-none" style={{ fontFamily: 'var(--font-jakarta)' }}>{s.n}</div>
                <div className="text-white/60 text-xs font-medium uppercase tracking-widest mt-1.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
