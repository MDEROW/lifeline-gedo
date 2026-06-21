"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        const inc = value / steps;
        let cur = 0;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= value) { setCount(value); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 1400 / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return <div ref={ref}>{count.toLocaleString()}{suffix}</div>;
}

const stats = [
  { value: 85000, suffix: "+", label: "People Reached", color: "#1E20D8" },
  { value: 50000, suffix: "+", label: "Children Treated", color: "#E8173A" },
  { value: 18,    suffix: "",  label: "Health Facilities", color: "#2ECC71" },
  { value: 230,   suffix: "+", label: "Projects Done",     color: "#0A0E28" },
];

const photos = [
  { src: "/images/field/community-water-trucking.jpg", alt: "Community water trucking", cls: "absolute top-0 left-0 w-[58%] h-[50%] rounded-2xl overflow-hidden shadow-xl" },
  { src: "/images/field/shg-training.jpg",             alt: "Training session",         cls: "absolute top-0 right-0 w-[38%] h-[36%] rounded-2xl overflow-hidden shadow-xl" },
  { src: "/images/field/tree-planting.jpg",            alt: "Tree planting",            cls: "absolute bottom-0 left-0 w-[38%] h-[46%] rounded-2xl overflow-hidden shadow-xl" },
  { src: "/images/field/community-meeting.jpg",        alt: "Community meeting",        cls: "absolute bottom-0 right-0 w-[58%] h-[50%] rounded-2xl overflow-hidden shadow-xl" },
];

export default function ImpactBar() {
  return (
    <section className="py-36 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Left */}
          <div>
            <p className="eyebrow">Our Impact Since 2005</p>
            <h2 className="text-[clamp(2.4rem,4vw,3.4rem)] mt-2 mb-6">
              21 Years.<br />Thousands of Lives.
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-16 max-w-[480px]">
              Through every drought, flood, and crisis since 2005 — Lifeline Gedo has
              been present, delivering results where others cannot reach.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-14">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[2.8rem] md:text-[3.2rem] font-extrabold leading-none mb-2"
                    style={{ color: s.color, fontFamily: "var(--font-jakarta)" }}>
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-[13px] font-semibold text-[#64748B] uppercase tracking-wide">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/impact" className="btn-blue text-[15px] px-9 py-4">
              Full Impact Report →
            </Link>
          </div>

          {/* Right — mosaic */}
          <div className="relative h-[520px] hidden lg:block">
            {photos.map((p) => (
              <div key={p.src} className={p.cls}>
                <Image src={p.src} alt={p.alt} fill className="object-cover" />
              </div>
            ))}
            {/* Centre badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
              w-24 h-24 rounded-full bg-[#1E20D8] border-4 border-white shadow-2xl
              flex flex-col items-center justify-center">
              <span className="text-white text-[2rem] font-extrabold leading-none"
                style={{ fontFamily: "var(--font-jakarta)" }}>21</span>
              <span className="text-white/70 text-[9px] font-bold uppercase tracking-wider">Years</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
