import Image from "next/image";

const partners = Array.from({ length: 13 }, (_, i) => ({
  id: i + 1,
  src: `/partners/partner-${i + 1}.jpg`,
  alt: `Partner organisation ${i + 1}`,
}));

export default function Partners() {
  return (
    <section className="py-32 bg-white border-t border-[#E8EDF5]">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left — heading */}
          <div className="lg:col-span-4">
            <p className="eyebrow eyebrow-blue">Trusted Worldwide</p>
            <h2 className="text-[clamp(2rem,3vw,2.6rem)] mb-5">
              Partners &amp;<br className="hidden lg:block" /> Institutional Donors
            </h2>
            <p className="text-[#64748B] text-[15px] leading-relaxed mb-8">
              For over 21 years, Lifeline Gedo has earned the trust of the world&apos;s
              leading humanitarian institutions — delivering accountable, locally-led
              programs across Somalia&apos;s Gedo region.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-3xl font-extrabold text-[#1E20D8]" style={{ fontFamily: "var(--font-jakarta)" }}>13+</div>
                <div className="text-[12px] text-[#94A3B8] font-semibold uppercase tracking-wide">Active Partners</div>
              </div>
              <div className="w-px h-12 bg-[#E2E8F0]" />
              <div>
                <div className="text-3xl font-extrabold text-[#E8173A]" style={{ fontFamily: "var(--font-jakarta)" }}>21</div>
                <div className="text-[12px] text-[#94A3B8] font-semibold uppercase tracking-wide">Years Trusted</div>
              </div>
            </div>
          </div>

          {/* Right — logo card grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[#E8EDF5] rounded-2xl overflow-hidden border border-[#E8EDF5]">
              {partners.map((p) => (
                <div key={p.id}
                  className="group relative bg-white flex items-center justify-center aspect-[3/2] p-5 hover:bg-[#F4F7FF] transition-colors duration-300">
                  <div className="relative w-[90%] h-[80%] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                    <Image src={p.src} alt={p.alt} fill className="object-contain" />
                  </div>
                </div>
              ))}
              {/* Filler cell to complete the grid */}
              <div className="hidden md:flex bg-[#0A0E28] items-center justify-center aspect-[3/2]">
                <span className="text-white text-[13px] font-bold text-center px-4 leading-snug" style={{ fontFamily: "var(--font-jakarta)" }}>
                  Partner<br />with us →
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
