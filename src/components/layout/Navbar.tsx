"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Our Work",
    href: "/programs",
    children: [
      { label: "Health & Nutrition", href: "/programs#health" },
      { label: "Food Security", href: "/programs#food" },
      { label: "WASH", href: "/programs#wash" },
      { label: "Resilience", href: "/programs#resilience" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Our Impact", href: "/impact" },
  { label: "News", href: "/news" },
  { label: "Get Involved", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white"}`}>
      {/* Top bar */}
      <div className="bg-[#0D1B2A] text-white/70 text-xs py-1.5">
        <div className="container flex justify-between items-center">
          <span>Lifeline Gedo Organisation — Humanitarian Aid in Somalia</span>
          <div className="flex gap-4">
            <Link href="/news" className="hover:text-white transition-colors">Latest News</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo/llg-logo.png" alt="Lifeline Gedo Logo" width={48} height={48} className="object-contain" />
          <div className="hidden sm:block">
            <p className="font-black text-[#1B1FCC] text-sm leading-tight">Lifeline Gedo</p>
            <p className="text-[10px] text-[#4A4A6A] font-medium">Organisation</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[#1A1A2E] hover:text-[#1B1FCC] transition-colors rounded"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
                onClick={() => !link.children && setActiveDropdown(null)}
              >
                <Link href={link.href}>{link.label}</Link>
                {link.children && <ChevronDown size={14} />}
              </button>

              {/* Dropdown */}
              {link.children && (
                <div
                  className="absolute top-full left-0 w-52 bg-white shadow-xl border border-[#E2E2EC] rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-3 text-sm text-[#4A4A6A] hover:bg-[#E8E9FF] hover:text-[#1B1FCC] transition-colors border-b border-[#F0F0F8] last:border-none font-medium"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Donate + mobile */}
        <div className="flex items-center gap-3">
          <Link href="/donate" className="btn-primary hidden sm:inline-block">
            Donate Now
          </Link>
          <button className="lg:hidden p-2 text-[#1B1FCC]" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#E2E2EC]">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block px-6 py-3 text-sm font-semibold text-[#1A1A2E] border-b border-[#F4F4F0] hover:text-[#1B1FCC]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-10 py-2.5 text-sm text-[#4A4A6A] border-b border-[#F4F4F0] hover:text-[#1B1FCC]"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="p-4">
            <Link href="/donate" className="btn-primary w-full text-center block" onClick={() => setOpen(false)}>
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
