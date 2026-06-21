"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Counter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 50;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 1600 / steps);
        }
      }, { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function ImpactBar() {
  return (
    <section className="py-28 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: text + stats */}
          <div>
            <p className="eyebrow">Our Impact Since 2005</p>
            <h2 className="text-4xl md:text-5xl mb-6">21 Years.<br />Thousands of Lives.</h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-12 font-[family-name:var(--font-dm)]">
              Since our founding in 2005, Lifeline Gedo has been present in Gedo region through
              every drought, flood, and crisis — delivering results where others cannot reach.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { value: 85000, suffix: "+", label: "People Reached", color: "#1E20D8" },
                { value: 50000, suffix: "+", label: "Children Treated", color: "#E8173A" },
                { value: 18, suffix: "", label: "Health Facilities", color: "#2ECC71" },
                { value: 230, suffix: "+", label: "Projects Done", color: "#0A0E28" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-4xl md:text-5xl font-extrabold mb-1"
                    style={{ color: s.color, fontFamily: 'var(--font-jakarta)' }}
                  >
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-[#64748B] font-semibold">{s.label}</div>
                </div>
              ))}
            </div>

            <Link href="/impact" className="btn-blue">
              Full Impact Report →
            </Link>
          </div>

          {/* Right: mosaic of real photos */}
          <div className="relative h-[520px] hidden lg:block">
            {/* Large top-left */}
            <div className="absolute top-0 left-0 w-[60%] h-[52%] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/field/community-water-trucking.jpg" alt="Community water trucking" fill className="object-cover" />
            </div>
            {/* Top right */}
            <div className="absolute top-0 right-0 w-[36%] h-[36%] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/field/shg-training.jpg" alt="Training session" fill className="object-cover" />
            </div>
            {/* Bottom left */}
            <div className="absolute bottom-0 left-0 w-[36%] h-[44%] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/field/tree-planting.jpg" alt="Tree planting" fill className="object-cover" />
            </div>
            {/* Bottom right large */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[46%] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/field/community-meeting.jpg" alt="Community meeting" fill className="object-cover" />
            </div>
            {/* Center badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#1E20D8] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-2xl border-4 border-white">
              <span className="text-3xl font-extrabold leading-none" style={{ fontFamily: 'var(--font-jakarta)' }}>21</span>
              <span className="text-[9px] font-bold uppercase tracking-wider opacity-80">Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
