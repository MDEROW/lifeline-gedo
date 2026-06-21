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
    <section className="py-24 bg-white">
      <div className="container">

        {/* Contained dark card — floats with breathing room on all sides */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#0A0E28] shadow-[0_32px_80px_rgba(10,14,40,0.25)]">

          {/* Background photo, clipped inside the card */}
          <div className="absolute inset-0">
            <Image
              src="/images/field/water-trucking.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E28] via-[#0A0E28]/95 to-[#0A0E28]/70" />
          </div>

          <div className="relative grid lg:grid-cols-5 gap-14 items-center p-10 md:p-16 lg:p-20">

            {/* Left — message */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2.5 bg-[#E8173A]/15 border border-[#E8173A]/30 rounded-full px-4 py-2 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#E8173A] animate-pulse shrink-0" />
                <span className="text-[#FF6B82] text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{ fontFamily: "var(--font-jakarta)" }}>
                  Emergency Appeal · 2026
                </span>
              </div>

              <h2 className="text-[clamp(2.2rem,4.5vw,3.6rem)] text-white font-extrabold leading-[1.07] mb-7"
                style={{ fontFamily: "var(--font-jakarta)" }}>
                Somalia&apos;s Hunger<br />Crisis Is Not Over.
              </h2>

              <p className="text-white/65 text-[17px] leading-relaxed mb-8 max-w-[520px]">
                Following four failed rainy seasons, millions of Somalis face acute food
                insecurity. Gedo region — already the most neglected — is on the brink.
                Lifeline Gedo is on the frontline, every single day.
              </p>

              <blockquote className="border-l-4 border-[#E8173A] pl-6 mb-10">
                <p className="text-white/80 text-[16px] italic leading-relaxed">
                  &ldquo;We will not leave until every family in Gedo has clean water, food,
                  and healthcare. That is our promise — and our record since 2005.&rdquo;
                </p>
                <cite className="text-white/45 text-[13px] mt-3 block not-italic"
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

            {/* Right — impact calculator */}
            <div className="lg:col-span-2 bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-3xl p-8">
              <h3 className="text-white text-[18px] font-extrabold mb-1.5"
                style={{ fontFamily: "var(--font-jakarta)" }}>
                Your Donation, Your Impact
              </h3>
              <p className="text-white/50 text-sm mb-7">Every amount makes a real difference on the ground.</p>

              <div className="flex flex-col gap-3">
                {impacts.map((i) => (
                  <div key={i.a} className="flex items-center gap-4 group cursor-pointer">
                    <span className="shrink-0 bg-[#E8173A] group-hover:bg-[#C0102E] text-white font-bold text-[13px] px-3.5 py-2 rounded-lg min-w-[60px] text-center transition-colors"
                      style={{ fontFamily: "var(--font-jakarta)" }}>
                      {i.a}
                    </span>
                    <span className="text-white/65 text-[13.5px] leading-snug group-hover:text-white transition-colors">
                      {i.t}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/donate" className="btn-donate w-full mt-8 py-4 text-[15px]">
                Donate Now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
