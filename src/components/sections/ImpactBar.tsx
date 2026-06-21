"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 1800 / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <div ref={ref}>{count.toLocaleString()}{suffix}</div>;
}

export default function ImpactBar() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-[480px] hidden lg:block">
            <div className="absolute top-0 left-0 w-[58%] h-[55%] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/field/community-water-trucking.jpg" alt="Water trucking" fill className="object-cover" />
            </div>
            <div className="absolute top-[10%] right-0 w-[38%] h-[42%] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/field/shg-training.jpg" alt="Community training" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-[8%] w-[45%] h-[40%] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/field/tree-planting.jpg" alt="Tree planting" fill className="object-cover" />
            </div>
            <div className="absolute bottom-[5%] right-[2%] w-[40%] h-[42%] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/programs/resilience.jpg" alt="Resilience program" fill className="object-cover" />
            </div>
            {/* Blue badge */}
            <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#1B1FCC] text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-2xl z-10">
              <span className="font-black text-xl leading-none">14+</span>
              <span className="text-[9px] font-bold uppercase tracking-wide opacity-80">Years</span>
            </div>
          </div>

          {/* Stats + text */}
          <div>
            <span className="section-eyebrow">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B2A] leading-tight mb-6">
              Real Numbers.<br />Real Lives Changed.
            </h2>
            <p className="text-[#4A4A6A] leading-relaxed mb-10">
              Since 2010, Lifeline Gedo has been the frontline humanitarian responder in
              Somalia&apos;s Gedo region — delivering emergency assistance and building
              long-term community resilience where others cannot reach.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { value: 85000, suffix: "+", label: "People Reached", color: "#1B1FCC" },
                { value: 50000, suffix: "+", label: "Children Treated", color: "#E8173A" },
                { value: 18, suffix: "", label: "Health Facilities", color: "#27AE60" },
                { value: 230, suffix: "+", label: "Projects Done", color: "#0D1B2A" },
              ].map((s) => (
                <div key={s.label} className="border-l-4 pl-4" style={{ borderColor: s.color }}>
                  <div className="text-3xl font-black text-[#0D1B2A]">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-[#4A4A6A] font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <Link href="/impact" className="btn-blue">
              See Full Impact Report →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
