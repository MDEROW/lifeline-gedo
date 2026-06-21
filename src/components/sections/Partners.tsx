import Image from "next/image";

const partners = Array.from({ length: 13 }, (_, i) => ({
  id: i + 1,
  src: `/partners/partner-${i + 1}.jpg`,
  alt: `Partner organisation ${i + 1}`,
}));

export default function Partners() {
  return (
    <section className="py-20 bg-[#F8FAFF] border-t border-[#E2E8F0]">
      <div className="container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#94A3B8] mb-12" style={{ fontFamily: 'var(--font-jakarta)' }}>
          Our Partners & Institutional Donors
        </p>

        {/* Row 1 — 7 logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {partners.slice(0, 7).map((p) => (
            <div key={p.id} className="relative h-16 w-36 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <Image src={p.src} alt={p.alt} fill className="object-contain" />
            </div>
          ))}
        </div>

        {/* Row 2 — 6 logos */}
        <div className="flex flex-wrap justify-center gap-8">
          {partners.slice(7).map((p) => (
            <div key={p.id} className="relative h-16 w-36 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <Image src={p.src} alt={p.alt} fill className="object-contain" />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#CBD5E1] mt-10">
          Hover to view partner logos in colour
        </p>
      </div>
    </section>
  );
}
