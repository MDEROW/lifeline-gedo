import Link from "next/link";
import Image from "next/image";

export default function CrisisAppeal() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0D1B2A]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/field/water-trucking.jpg"
          alt="Emergency water trucking in Gedo"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-[#E8173A] animate-pulse" />
              <span className="text-[#E8173A] text-xs font-black uppercase tracking-[0.15em]">
                Emergency Appeal — 2025
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Somalia Faces Its<br />
              <span className="text-[#E8173A]">Worst Hunger Crisis</span><br />
              in a Decade
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Millions of Somalis face acute food insecurity following four consecutive failed
              rainy seasons. Gedo region — already one of Somalia&apos;s most neglected — is
              bearing the brunt. Lifeline Gedo is the last line of defence for these communities.
            </p>
            <blockquote className="border-l-4 border-[#E8173A] pl-5 mb-8">
              <p className="text-white/85 italic text-lg leading-relaxed">
                &ldquo;We will not leave until every family in Gedo has access to clean water,
                food, and healthcare. That is our promise.&rdquo;
              </p>
              <cite className="text-white/50 text-sm mt-2 block">— Executive Director, Lifeline Gedo</cite>
            </blockquote>
            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="btn-primary text-base px-8 py-4">
                Respond Now — Donate
              </Link>
              <Link href="/impact" className="btn-secondary text-base px-8 py-4">
                Read Situation Report
              </Link>
            </div>
          </div>

          {/* Urgency card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-white font-black text-xl mb-6">Your Impact Today</h3>
            <div className="flex flex-col gap-4">
              {[
                { amount: "$10", text: "Provides emergency food rations for a family for one week" },
                { amount: "$25", text: "Treats one severely malnourished child for a full month" },
                { amount: "$50", text: "Delivers clean water to a family for three months" },
                { amount: "$100", text: "Funds a mobile health clinic visit to a remote village" },
                { amount: "$500", text: "Rehabilitates a borehole serving 500 people" },
              ].map((item) => (
                <div key={item.amount} className="flex gap-4 items-start">
                  <span className="bg-[#E8173A] text-white font-black text-sm px-3 py-1.5 rounded shrink-0 min-w-[52px] text-center">
                    {item.amount}
                  </span>
                  <span className="text-white/80 text-sm leading-relaxed pt-1">{item.text}</span>
                </div>
              ))}
            </div>
            <Link href="/donate" className="btn-primary w-full text-center block mt-6 py-4">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
