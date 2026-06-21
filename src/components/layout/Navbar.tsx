"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, AlertCircle } from "lucide-react";

const navLinks = [
  {
    label: "Our Work",
    href: "/programs",
    children: [
      { label: "Health & Nutrition", href: "/programs#health" },
      { label: "Food Security & Livelihoods", href: "/programs#food" },
      { label: "WASH", href: "/programs#wash" },
      { label: "Resilience", href: "/programs#resilience" },
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
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Emergency alert banner */}
      <div className="bg-[#E8173A] text-white text-center py-2 px-4 text-xs font-semibold z-50 relative" style={{ fontFamily: 'var(--font-jakarta)' }}>
        <AlertCircle size={12} className="inline mr-1.5 mb-0.5" />
        <strong>EMERGENCY APPEAL:</strong> Somalia drought crisis — millions need urgent support.{" "}
        <Link href="/donate" className="underline font-bold hover:no-underline ml-1">
          Donate now →
        </Link>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"} border-b border-[#E2E8F0]`}>
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/images/logo/llg-logo.png" alt="Lifeline Gedo" width={44} height={44} className="object-contain" />
            <div className="hidden sm:block leading-tight">
              <p className="font-[family-name:var(--font-jakarta)] font-800 text-[#1E20D8] text-sm font-extrabold tracking-tight">Lifeline Gedo</p>
              <p className="text-[10px] text-[#64748B] font-medium">Organisation</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-[13px] font-semibold text-[#1E293B] hover:text-[#1E20D8] transition-colors"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {link.label}
                  {link.children && <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-200" />}
                </Link>
                {link.children && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-2xl border border-[#E2E8F0] rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 -translate-y-1 group-hover:translate-y-0 pt-1">
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        className="flex items-center gap-2 px-4 py-3 text-[13px] text-[#475569] hover:bg-[#EAEBFF] hover:text-[#1E20D8] transition-colors font-medium border-b border-[#F1F5F9] last:border-none"
                        style={{ fontFamily: 'var(--font-jakarta)' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8173A] shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/donate" className="btn-donate hidden sm:inline-flex">
              Donate Now
            </Link>
            <button className="lg:hidden p-2 text-[#1E20D8] rounded-lg hover:bg-[#EAEBFF]" onClick={() => setOpen(!open)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-[#E2E8F0] max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link href={link.href} onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-6 py-3.5 text-[14px] font-bold text-[#1E293B] border-b border-[#F1F5F9] hover:bg-[#F8FAFF]"
                  style={{ fontFamily: 'var(--font-jakarta)' }}>
                  {link.label}
                </Link>
                {link.children?.map((c) => (
                  <Link key={c.href} href={c.href} onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-10 py-3 text-[13px] text-[#475569] border-b border-[#F1F5F9] hover:bg-[#F8FAFF]"
                    style={{ fontFamily: 'var(--font-jakarta)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8173A]" />{c.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="p-5">
              <Link href="/donate" className="btn-donate w-full justify-center" onClick={() => setOpen(false)}>
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
