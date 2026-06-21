import Image from "next/image";

const partners = Array.from({ length: 13 }, (_, i) => ({
  id: i + 1,
  src: `/partners/partner-${i + 1}.jpg`,
  alt: `Partner ${i + 1}`,
}));

export default function Partners() {
  return (
    <section className="py-16 bg-white border-t border-[#E2E2EC]">
      <div className="container">
        <p className="text-center text-xs font-black text-[#4A4A6A] uppercase tracking-[0.15em] mb-10">
          Our Partners & Donors
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {partners.map((p) => (
            <div
              key={p.id}
              className="relative h-12 w-28 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
