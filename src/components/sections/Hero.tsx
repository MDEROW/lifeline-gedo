import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1B5E20]">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20] via-[#2E7D32]/90 to-[#1A237E]/80" />

      <div className="relative container text-white text-center pt-20 pb-16">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#E65100] animate-pulse" />
          Responding to Somalia&apos;s humanitarian crisis
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
          Saving Lives in
          <br />
          <span className="text-[#FFF8E1]">Somalia&apos;s Most</span>
          <br />
          Neglected Region
        </h1>

        {/* Sub */}
        <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Lifeline Gedo delivers emergency health, food, water, and resilience
          programs to the most vulnerable communities in Gedo, Somalia.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="bg-[#E65100] hover:bg-[#BF360C] text-white font-bold px-8 py-4 rounded-full text-base transition-colors shadow-lg"
          >
            Donate Now — Save a Life
          </Link>
          <Link
            href="/programs"
            className="bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            See Our Work ↓
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-white/60 text-xs">
          <span>🤝 Partnered with UN Agencies</span>
          <span>📋 Registered NGO</span>
          <span>🌍 Operating since 2010</span>
          <span>🏥 10+ Districts Reached</span>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 30C1200 70 960 10 720 40C480 70 240 10 0 30L0 80Z" fill="#F9F6F0"/>
        </svg>
      </div>
    </section>
  );
}
