import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-black text-xl mb-1">Stay informed. Stay connected.</h3>
            <p className="text-white/60 text-sm">Field updates, situation reports, and stories from Gedo — straight to your inbox.</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 px-4 py-3 rounded text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50"
            />
            <button type="submit" className="btn-primary shrink-0">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-12 h-12">
              <Image src="/images/logo/llg-logo.png" alt="LLG Logo" fill className="object-contain" />
            </div>
            <div>
              <p className="font-black text-base leading-tight">Lifeline Gedo</p>
              <p className="text-white/50 text-xs">Organisation</p>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            A Somali-led humanitarian organization delivering life-saving assistance and building
            community resilience in Somalia&apos;s Gedo region since 2010.
          </p>
          <div className="flex gap-3">
            {[
              { label: "FB", href: "#" },
              { label: "TW", href: "#" },
              { label: "LI", href: "#" },
              { label: "YT", href: "#" },
            ].map((s) => (
              <a key={s.label} href={s.href}
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#1B1FCC] flex items-center justify-center text-xs font-bold transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Our Work */}
        <div>
          <h4 className="font-black text-sm uppercase tracking-widest text-white/40 mb-5">Our Work</h4>
          <ul className="flex flex-col gap-3">
            {[
              { l: "Health & Nutrition", h: "/programs#health" },
              { l: "Food Security", h: "/programs#food" },
              { l: "WASH", h: "/programs#wash" },
              { l: "Resilience", h: "/programs#resilience" },
              { l: "All Programs", h: "/programs" },
            ].map((i) => (
              <li key={i.h}>
                <Link href={i.h} className="text-sm text-white/65 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-black text-sm uppercase tracking-widest text-white/40 mb-5">Organisation</h4>
          <ul className="flex flex-col gap-3">
            {[
              { l: "About Us", h: "/about" },
              { l: "Our Impact", h: "/impact" },
              { l: "News & Updates", h: "/news" },
              { l: "Get Involved", h: "/contact" },
              { l: "Donate", h: "/donate" },
            ].map((i) => (
              <li key={i.h}>
                <Link href={i.h} className="text-sm text-white/65 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-black text-sm uppercase tracking-widest text-white/40 mb-5">Contact</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/65">
            <li className="flex gap-3 items-start">
              <MapPin size={14} className="shrink-0 mt-0.5 text-[#E8173A]" />
              <span>Mandera Road, Nairobi, Kenya<br /><span className="text-white/40 text-xs">Regional Headquarters</span></span>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={14} className="shrink-0 mt-0.5 text-[#E8173A]" />
              <span>Luuq District, Gedo Region, Somalia<br /><span className="text-white/40 text-xs">Field Office</span></span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={14} className="shrink-0 text-[#E8173A]" />
              <a href="tel:+254000000000" className="hover:text-white">+254 000 000 000</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={14} className="shrink-0 text-[#E8173A]" />
              <a href="mailto:info@lifelineorganisation.org" className="hover:text-white text-xs">info@lifelineorganisation.org</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} Lifeline Gedo Organisation. All rights reserved. Registered NGO.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
