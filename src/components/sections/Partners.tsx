import Image from "next/image";

const partners = Array.from({ length: 13 }, (_, i) => ({
  id: i + 1,
  src: `/partners/partner-${i + 1}.jpg`,
  alt: `Partner organisation ${i + 1}`,
}));

export default function Partners() {
  return (
    <section className="py-28 bg-[#F4F7FF] border-t border-[#E8EDF5]">
      <div className="container">

        <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] mb-16"
          style={{ fontFamily: "var(--font-jakarta)" }}>
          Trusted Partners & Institutional Donors
        </p>

        {/* Row 1 — 7 logos */}
        <div className="grid grid-cols-4 md:grid-cols-7 gap-6 place-items-center mb-8">
          {partners.slice(0, 7).map((p) => (
            <div key={p.id}
              className="relative h-14 w-full max-w-[120px] grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer">
              <Image src={p.src} alt={p.alt} fill className="object-contain" />
            </div>
          ))}
        </div>

        {/* Row 2 — 6 logos */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
          {partners.slice(7).map((p) => (
            <div key={p.id}
              className="relative h-14 w-full max-w-[120px] grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer">
              <Image src={p.src} alt={p.alt} fill className="object-contain" />
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-[#C8D1E0] mt-12">
          Hover to view logos in colour
        </p>
      </div>
    </section>
  );
}
