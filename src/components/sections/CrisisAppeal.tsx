import Link from "next/link";
import Image from "next/image";

export default function CrisisAppeal() {
  return (
    <section className="relative overflow-hidden bg-[#0A0E28]">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image src="/images/field/water-trucking.jpg" alt="Emergency water trucking" fill className="object-cover opacity-15" />
      </div>

      <div className="relative container py-28">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — 3 cols */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-7">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#E8173A] animate-pulse" />
              <span className="text-[#E8173A] text-[11px] font-bold uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-jakarta)' }}>
                Emergency Appeal · 2025
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-[1.05] mb-8" style={{ fontFamily: 'var(--font-jakarta)' }}>
              Somalia&apos;s Hunger<br />
              Crisis Is Not Over.
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8 font-[family-name:var(--font-dm)] max-w-xl">
              Following four failed rainy seasons, millions of Somalis face acute food
              insecurity. Gedo region — already the most neglected — is on the brink.
              Lifeline Gedo is on the frontline, every single day.
            </p>

            <blockquote className="border-l-4 border-[#E8173A] pl-6 mb-10">
              <p className="text-white/80 text-lg italic leading-relaxed font-[family-name:var(--font-dm)]">
                &ldquo;We will not leave until every family in Gedo has clean water, food,
                and healthcare. That is our promise — and our record since 2005.&rdquo;
              </p>
              <cite className="text-white/40 text-sm mt-3 block" style={{ fontFamily: 'var(--font-jakarta)' }}>— Executive Director, Lifeline Gedo</cite>
            </blockquote>

            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="btn-donate text-[15px] px-8 py-4">
                Respond Now
              </Link>
              <Link href="/impact" className="btn-outline-white text-[15px] px-8 py-4">
                Read Report
              </Link>
            </div>
          </div>

          {/* Right — 2 cols: impact calculator */}
          <div className="lg:col-span-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-3xl p-7">
            <h3 className="text-white text-xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-jakarta)' }}>Your Donation, Your Impact</h3>
            <p className="text-white/50 text-sm mb-7">Every amount makes a real difference on the ground.</p>

            <div className="flex flex-col gap-3">
              {[
                { a: "$10", t: "Emergency food rations for one family for a week" },
                { a: "$25", t: "Treats one malnourished child for a full month" },
                { a: "$50", t: "Provides clean water to a family for three months" },
                { a: "$100", t: "Mobile health clinic visit to a remote village" },
                { a: "$250", t: "Livelihood inputs for one family for a season" },
                { a: "$500", t: "Borehole rehabilitation serving 500 people" },
              ].map((i) => (
                <div key={i.a} className="flex gap-3 items-start group cursor-pointer">
                  <span className="shrink-0 bg-[#E8173A] group-hover:bg-[#C0102E] text-white font-bold text-sm px-3 py-1.5 rounded-lg min-w-[58px] text-center transition-colors" style={{ fontFamily: 'var(--font-jakarta)' }}>
                    {i.a}
                  </span>
                  <span className="text-white/70 text-sm leading-relaxed pt-1 font-[family-name:var(--font-dm)]">{i.t}</span>
                </div>
              ))}
            </div>

            <Link href="/donate" className="btn-donate w-full justify-center mt-7 py-4 text-[15px]">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
