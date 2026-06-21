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

const socials = [
  { l: "f", title: "Facebook" },
  { l: "in", title: "LinkedIn" },
  { l: "𝕏", title: "Twitter" },
  { l: "▶", title: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0E28]">

      {/* Newsletter band */}
      <div className="bg-[#1E20D8]">
        <div className="container py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-white text-[26px] font-extrabold mb-2 leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
              Stay connected with our field teams
            </h3>
            <p className="text-white/80 text-[15px]">
              Situation reports, impact stories, and updates from Gedo — delivered monthly.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="sm:w-72 px-5 py-3.5 rounded-lg text-[14px] text-[#0A0E28] bg-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button type="submit" className="btn-donate justify-center py-3.5 px-7 shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main columns */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand — wider column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 bg-white rounded-xl p-2 shrink-0">
                <Image src="/images/logo/llg-logo.png" alt="Lifeline Gedo" fill className="object-contain p-1.5" />
              </div>
              <div>
                <p className="text-white font-extrabold text-[16px] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>Lifeline Gedo</p>
                <p className="text-[#8B93B0] text-[12px] mt-0.5">Organisation · Est. 2005</p>
              </div>
            </div>
            <p className="text-[#A8AFC7] text-[14px] leading-relaxed mb-7 max-w-sm">
              A Somalia-led humanitarian organisation delivering life-saving health, food,
              water, and resilience programs in Gedo region for over 21 years.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a key={s.l} href="#" title={s.title}
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 text-white/80 hover:bg-[#E8173A] hover:text-white text-[13px] font-bold transition-all">
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.16em] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>
              Our Programs
            </h4>
            <ul className="space-y-3.5">
              {programs.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-[14px] text-[#A8AFC7] hover:text-white transition-colors flex items-center gap-2.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8173A] shrink-0 group-hover:scale-150 transition-transform" />
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organisation */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.16em] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>
              Organisation
            </h4>
            <ul className="space-y-3.5">
              {org.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-[14px] text-[#A8AFC7] hover:text-white transition-colors flex items-center gap-2.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] shrink-0 group-hover:scale-150 transition-transform" />
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.16em] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-3.5 items-start">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-[#E8173A]" />
                </div>
                <div className="text-[14px] text-[#A8AFC7] leading-snug">
                  Mandera Road, Nairobi, Kenya
                  <span className="block text-[#6B7393] text-[12px] mt-0.5">Regional Headquarters</span>
                </div>
              </li>
              <li className="flex gap-3.5 items-start">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-[#E8173A]" />
                </div>
                <div className="text-[14px] text-[#A8AFC7] leading-snug">
                  Luuq District, Gedo, Somalia
                  <span className="block text-[#6B7393] text-[12px] mt-0.5">Field Office</span>
                </div>
              </li>
              <li className="flex gap-3.5 items-center">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-[#2ECC71]" />
                </div>
                <a href="tel:+254000000000" className="text-[14px] text-[#A8AFC7] hover:text-white transition-colors">+254 000 000 000</a>
              </li>
              <li className="flex gap-3.5 items-center">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-[#2ECC71]" />
                </div>
                <a href="mailto:info@lifelineorganisation.org" className="text-[13.5px] text-[#A8AFC7] hover:text-white transition-colors break-all">
                  info@lifelineorganisation.org
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8B93B0] text-[13px] text-center sm:text-left">
            © {new Date().getFullYear()} Lifeline Gedo Organisation. Est. 2005. Registered NGO.
          </p>
          <div className="flex gap-7 text-[13px]">
            {[
              { l: "Privacy", h: "/privacy" },
              { l: "Terms", h: "/terms" },
              { l: "Contact", h: "/contact" },
            ].map((i) => (
              <Link key={i.h} href={i.h} className="text-[#A8AFC7] hover:text-white transition-colors">{i.l}</Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
