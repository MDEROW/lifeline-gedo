"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "News", href: "/news" },
  { label: "Get Involved", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-[#1B5E20] text-lg">
          <div className="w-8 h-8 bg-[#1B5E20] rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-black">LG</span>
          </div>
          <span className="hidden sm:block">Lifeline Gedo</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#444] hover:text-[#1B5E20] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Donate Button + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="bg-[#E65100] hover:bg-[#BF360C] text-white text-sm font-bold px-5 py-2 rounded-full transition-colors"
          >
            Donate Now
          </Link>
          <button
            className="lg:hidden p-2 text-[#1B5E20]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#E0E0E0] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#444] hover:text-[#1B5E20] transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
