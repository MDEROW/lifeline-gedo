import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const programs = [
  { label: "Health & Nutrition", href: "/programs#health" },
  { label: "Food Security", href: "/programs#food" },
  { label: "WASH", href: "/programs#wash" },
  { label: "Resilience", href: "/programs#resilience" },
];

const org = [
  { label: "About Us", href: "/about" },
  { label: "Our Impact", href: "/impact" },
  { label: "News & Updates", href: "/news" },
  { label: "Get Involved", href: "/contact" },
  { label: "Donate", href: "/donate" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#070B1F" }}>

      {/* Donate CTA band */}
      <div className="bg-[#1E20D8]">
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-extrabold mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>
              Every donation saves a life in Gedo.
            </h3>
            <p className="text-white/55 text-sm">Join our community of supporters — making a difference since 2005.</p>
          </div>
          <Link href="/donate" className="btn-donate shrink-0 text-[15px] px-9 py-4">
            Donate Now →
          </Link>
        </div>
      </div>

      {/* Newsletter */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-[15px] mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>
              Stay connected with our field teams
            </p>
            <p className="text-white/35 text-sm">Situation reports and impact stories — monthly.</p>
          </div>
          <form className="flex gap-2.5 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-4 py-3 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            />
            <button type="submit" className="btn-donate shrink-0 py-3 px-6">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Main columns */}
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 bg-white rounded-xl p-1.5 shrink-0">
              <Image src="/images/logo/llg-logo.png" alt="LLG" fill className="object-contain p-1" />
            </div>
            <div>
              <p className="text-white font-extrabold text-[14px]" style={{ fontFamily: "var(--font-jakarta)" }}>Lifeline Gedo</p>
              <p className="text-white/30 text-[11px]">Organisation · Est. 2005</p>
            </div>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Somalia-led humanitarian organisation delivering life-saving assistance
            in Gedo region for over 21 years.
          </p>
          <div className="flex gap-2">
            {[
              { l: "f", title: "Facebook" },
              { l: "𝕏", title: "Twitter" },
              { l: "in", title: "LinkedIn" },
              { l: "▶", title: "YouTube" },
            ].map((s) => (
              <a key={s.l} href="#" title={s.title}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-[#1E20D8] text-[11px] font-bold transition-all"
                style={{ background: "rgba(255,255,255,0.07)" }}>
                {s.l}
              </a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.18em] mb-6"
            style={{ fontFamily: "var(--font-jakarta)" }}>
            Our Programs
          </h4>
          <ul className="space-y-3.5">
            {programs.map((i) => (
              <li key={i.href}>
                <Link href={i.href}
                  className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#E8173A] shrink-0 group-hover:scale-150 transition-transform" />
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Organisation */}
        <div>
          <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.18em] mb-6"
            style={{ fontFamily: "var(--font-jakarta)" }}>
            Organisation
          </h4>
          <ul className="space-y-3.5">
            {org.map((i) => (
              <li key={i.href}>
                <Link href={i.href}
                  className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#2ECC71] shrink-0 group-hover:scale-150 transition-transform" />
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.18em] mb-6"
            style={{ fontFamily: "var(--font-jakarta)" }}>
            Contact
          </h4>
          <ul className="space-y-5">
            <li className="flex gap-3 items-start">
              <MapPin size={13} className="text-[#E8173A] shrink-0 mt-0.5" />
              <div className="text-[13px] text-white/45">
                Mandera Road, Nairobi, Kenya
                <span className="block text-white/25 text-[11px] mt-0.5">Regional Headquarters</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={13} className="text-[#E8173A] shrink-0 mt-0.5" />
              <div className="text-[13px] text-white/45">
                Luuq District, Gedo, Somalia
                <span className="block text-white/25 text-[11px] mt-0.5">Field Office</span>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={13} className="text-[#2ECC71] shrink-0" />
              <a href="tel:+254000000000" className="text-[13px] text-white/45 hover:text-white transition-colors">+254 000 000 000</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={13} className="text-[#2ECC71] shrink-0" />
              <a href="mailto:info@lifelineorganisation.org" className="text-[12px] text-white/45 hover:text-white transition-colors break-all">
                info@lifelineorganisation.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[12px]">
            © {new Date().getFullYear()} Lifeline Gedo Organisation. Est. 2005. Registered NGO.
          </p>
          <div className="flex gap-6 text-[12px] text-white/25">
            {[
              { l: "Privacy", h: "/privacy" },
              { l: "Terms", h: "/terms" },
              { l: "Contact", h: "/contact" },
            ].map((i) => (
              <Link key={i.h} href={i.h} className="hover:text-white transition-colors">{i.l}</Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
