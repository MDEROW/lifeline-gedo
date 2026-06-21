import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    title: "Health & Nutrition",
    description: "Mobile clinics, maternal care, and treatment for acute malnutrition reaching communities with no prior health access.",
    image: "/images/field/girl-water.jpg",
    href: "/programs#health",
    color: "#1B1FCC",
  },
  {
    title: "Food Security",
    description: "Emergency food assistance, agricultural inputs, and livelihood support for drought-affected families.",
    image: "/images/field/food-distribution.jpg",
    href: "/programs#food",
    color: "#E8173A",
  },
  {
    title: "WASH",
    description: "Boreholes, latrines, hygiene kits, and clean water access preventing waterborne disease outbreaks.",
    image: "/images/programs/wash.jpg",
    href: "/programs#wash",
    color: "#27AE60",
  },
  {
    title: "Resilience",
    description: "Community savings groups, women's empowerment, and disaster risk reduction for long-term recovery.",
    image: "/images/programs/resilience.jpg",
    href: "/programs#resilience",
    color: "#0D1B2A",
  },
];

export default function Programs() {
  return (
    <section className="py-24 bg-[#FAFAF7]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="section-eyebrow">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B2A] leading-tight">
              Our Core Programs
            </h2>
          </div>
          <Link href="/programs" className="text-sm font-bold text-[#1B1FCC] hover:underline shrink-0">
            View all programs →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <Link key={p.title} href={p.href} className="group block">
              <div className="relative h-56 rounded-lg overflow-hidden mb-4">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div
                  className="absolute top-3 left-3 w-1 h-6 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
              </div>
              <h3 className="font-black text-[#0D1B2A] text-lg mb-2 group-hover:text-[#1B1FCC] transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-[#4A4A6A] leading-relaxed">{p.description}</p>
              <span className="inline-block mt-3 text-sm font-bold text-[#1B1FCC] group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
