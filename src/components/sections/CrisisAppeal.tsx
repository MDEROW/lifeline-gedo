import Link from "next/link";
import Image from "next/image";

const impacts = [
  { a: "$10",  t: "Emergency food rations for one family for a week" },
  { a: "$25",  t: "Treats one malnourished child for a full month" },
  { a: "$50",  t: "Clean water for a family for three months" },
  { a: "$100", t: "Mobile health clinic visit to a remote village" },
  { a: "$250", t: "Livelihood inputs for one family for a season" },
  { a: "$500", t: "Full borehole rehabilitation serving 500 people" },
];

export default function CrisisAppeal() {
  return (
    <section className="relative overflow-hidden bg-[#0A0E28]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/field/water-trucking.jpg" alt="" fill className="object-cover opacity-12" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E28] via-[#0A0E28]/95 to-[#0A0E28]/80" />
      </div>

      <div className="relative container py-36">
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left — 3 cols */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2.5 mb-8">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#E8173A] animate-pulse shrink-0" />
              <span className="text-[#E8173A] text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ fontFamily: "var(--font-jakarta)" }}>
                Emergency Appeal · 2026
              </span>
            </div>

            <h2 className="text-[clamp(2.4rem,5vw,4rem)] text-white font-extrabold leading-[1.06] mb-8"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              Somalia's Hunger<br />Crisis Is Not Over.
            </h2>

            <p className="text-white/65 text-lg leading-relaxed mb-9 max-w-[520px]">
              Following four failed rainy seasons, millions of Somalis face acute food
              insecurity. Gedo region — already the most neglected — is on the brink.
              Lifeline Gedo is on the frontline, every single day.
            </p>

            <blockquote className="border-l-4 border-[#E8173A] pl-7 mb-12">
              <p className="text-white/75 text-[17px] italic leading-relaxed">
                &ldquo;We will not leave until every family in Gedo has clean water, food,
                and healthcare. That is our promise — and our record since 2005.&rdquo;
              </p>
              <cite className="text-white/40 text-sm mt-3 block not-italic"
                style={{ fontFamily: "var(--font-jakarta)" }}>
                — Executive Director, Lifeline Gedo
              </cite>
            </blockquote>

            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="btn-donate text-[15px] px-9 py-4">
                Respond Now
              </Link>
              <Link href="/impact" className="btn-ghost-white text-[15px] px-9 py-4">
                Read Report →
              </Link>
            </div>
          </div>

          {/* Right — 2 cols: calculator */}
          <div className="lg:col-span-2 bg-white/6 backdrop-blur-md border border-white/12 rounded-3xl p-8">
            <h3 className="text-white text-[18px] font-extrabold mb-1.5"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              Your Donation, Your Impact
            </h3>
            <p className="text-white/45 text-sm mb-8">Every amount makes a real difference on the ground.</p>

            <div className="flex flex-col gap-3.5">
              {impacts.map((i) => (
                <div key={i.a} className="flex items-center gap-4 group cursor-pointer">
                  <span className="shrink-0 bg-[#E8173A] group-hover:bg-[#C0102E] text-white font-bold text-[13px] px-3.5 py-2 rounded-lg min-w-[60px] text-center transition-colors"
                    style={{ fontFamily: "var(--font-jakarta)" }}>
                    {i.a}
                  </span>
                  <span className="text-white/60 text-[13.5px] leading-snug group-hover:text-white/90 transition-colors">
                    {i.t}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/donate" className="btn-donate w-full mt-9 py-4 text-[15px]">
              Donate Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
