import Link from "next/link";

export default function CrisisAppeal() {
  return (
    <section className="py-20 bg-[#1A237E] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#E65100] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Emergency Appeal
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            Somalia Faces Its Worst
            <span className="text-[#FFF8E1]"> Humanitarian Crisis</span>
            <br />in a Decade
          </h2>

          <blockquote className="text-white/85 text-lg md:text-xl italic leading-relaxed mb-4 border-l-4 border-[#E65100] pl-5 text-left max-w-2xl mx-auto">
            &ldquo;Millions of Somalis are facing acute food insecurity. Gedo region remains one of
            the most neglected areas — your support makes Lifeline Gedo the last line of defence
            for these communities.&rdquo;
          </blockquote>
          <p className="text-white/60 text-sm mb-10 text-left max-w-2xl mx-auto pl-5">
            — Executive Director, Lifeline Gedo Organisation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-[#E65100] hover:bg-[#BF360C] text-white font-bold px-10 py-4 rounded-full text-base transition-colors shadow-xl"
            >
              Respond to the Crisis — Donate
            </Link>
            <Link
              href="/impact"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              Read Situation Report
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
