"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const nav = [
  {
    label: "Our Work",
    href: "/programs",
    sub: [
      { label: "Health & Nutrition", href: "/programs#health", desc: "Mobile clinics, maternal care" },
      { label: "Food Security", href: "/programs#food", desc: "Emergency assistance, livelihoods" },
      { label: "WASH", href: "/programs#wash", desc: "Water, sanitation & hygiene" },
      { label: "Resilience", href: "/programs#resilience", desc: "Savings groups, risk reduction" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "News", href: "/news" },
  { label: "Get Involved", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Emergency banner */}
      <div className="bg-[#E8173A] text-white text-center py-2.5 px-4 text-[12px] font-semibold z-50 relative tracking-wide" style={{ fontFamily: "var(--font-jakarta)" }}>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse mr-2 mb-0.5" />
        <strong>EMERGENCY APPEAL:</strong> Somalia drought crisis — millions need urgent support.{" "}
        <Link href="/donate" className="underline font-bold hover:no-underline ml-1">Donate now →</Link>
      </div>

      {/* Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/97 backdrop-blur-lg shadow-[0_1px_0_0_#E2E8F0] shadow-md" : "bg-white border-b border-[#E8EDF5]"
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-[#E2E8F0] p-1 group-hover:border-[#1E20D8] transition-colors">
                <Image src="/images/logo/llg-logo.png" alt="Lifeline Gedo" fill className="object-contain p-0.5" />
              </div>
              <div className="hidden md:block">
                <p className="text-[#0A0E28] font-extrabold text-[15px] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>Lifeline Gedo</p>
                <p className="text-[#94A3B8] text-[11px] font-medium tracking-wide">Organisation · Est. 2005</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2.5 text-[13.5px] font-semibold text-[#374151] hover:text-[#1E20D8] rounded-lg hover:bg-[#F4F7FF] transition-all duration-150"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {item.label}
                    {item.sub && (
                      <ChevronDown size={13} className="opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.sub && (
                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-2 group-hover:translate-y-0">
                      <div className="p-2">
                        {item.sub.map((child) => (
                          <Link key={child.href} href={child.href}
                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-[#F4F7FF] transition-colors group/item">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E8173A] shrink-0 mt-1.5" />
                            <div>
                              <p className="text-[13px] font-bold text-[#0A0E28] group-hover/item:text-[#1E20D8] transition-colors" style={{ fontFamily: "var(--font-jakarta)" }}>
                                {child.label}
                              </p>
                              <p className="text-[11px] text-[#94A3B8] mt-0.5">{child.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <Link href="/donate" className="btn-donate hidden sm:inline-flex text-[13px] px-6 py-3">
                Donate Now
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-[#0A0E28] hover:bg-[#F4F7FF] transition-colors"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden bg-white border-t border-[#E8EDF5] max-h-[80vh] overflow-y-auto">
            <div className="container py-4">
              {nav.map((item) => (
                <div key={item.label} className="mb-1">
                  <Link href={item.href} onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-bold text-[#0A0E28] hover:bg-[#F4F7FF] transition-colors"
                    style={{ fontFamily: "var(--font-jakarta)" }}>
                    {item.label}
                  </Link>
                  {item.sub && (
                    <div className="ml-4 mt-1 mb-2">
                      {item.sub.map((c) => (
                        <Link key={c.href} href={c.href} onClick={() => setOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] text-[#64748B] hover:bg-[#F4F7FF] hover:text-[#1E20D8] transition-colors"
                          style={{ fontFamily: "var(--font-jakarta)" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8173A] shrink-0" />
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2">
                <Link href="/donate" className="btn-donate w-full justify-center" onClick={() => setOpen(false)}>
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
