"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 85000, label: "People Reached", suffix: "+" },
  { value: 12, label: "Districts Covered", suffix: "" },
  { value: 14, label: "Years Operating", suffix: "+" },
  { value: 230, label: "Projects Completed", suffix: "+" },
  { value: 18, label: "Health Facilities", suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactBar() {
  return (
    <section className="bg-[#1A237E] py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm text-white/65 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
