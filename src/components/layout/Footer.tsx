import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const programs = [
  { label: "Health & Nutrition", href: "/programs#health" },
  { label: "Food Security", href: "/programs#food" },
  { label: "Water & Sanitation", href: "/programs#wash" },
  { label: "Resilience", href: "/programs#resilience" },
];

const org = [
  { label: "About Us", href: "/about" },
  { label: "Our Impact", href: "/impact" },
  { label: "News & Updates", href: "/news" },
  { label: "Get Involved", href: "/contact" },
];

const socials = [
  { l: "f", title: "Facebook" },
  { l: "in", title: "LinkedIn" },
  { l: "𝕏", title: "Twitter" },
  { l: "▶", title: "YouTube" },
];

const trust = [
  { stat: "100%", label: "Reaches the field" },
  { stat: "21", label: "Years of service" },
  { stat: "85k+", label: "Lives reached" },
  { stat: "12%", label: "Admin costs only" },
];

export default function Footer() {
  return (
    <footer>

      {/* ─── Donate CTA band ──────────────────────────────────────────── */}
      <div className="bg-[#1E20D8]">
        <div className="container py-14">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-white/70 text-[11px] font-bold uppercase tracking-[0.18em] mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                Stand with Gedo
              </p>
              <h2 className="text-white text-[clamp(1.9rem,3.2vw,2.8rem)] font-extrabold leading-[1.12]" style={{ fontFamily: "var(--font-jakarta)" }}>
                Your support saves lives in Somalia.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/donate" className="btn-donate text-[15px] px-10 py-4">
                Donate Now <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline-white text-[15px] px-10 py-4">
                Become a Partner
              </Link>
            </div>
          </div>

          {/* Trust stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-12 pt-10 border-t border-white/15">
            {trust.map((t) => (
              <div key={t.label} className="text-center md:text-left">
                <div className="text-white text-[2rem] font-extrabold leading-none mb-1.5" style={{ fontFamily: "var(--font-jakarta)" }}>
                  {t.stat}
                </div>
                <div className="text-white/60 text-[12px] font-semibold uppercase tracking-wide">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Main footer ──────────────────────────────────────────────── */}
      <div className="bg-[#0A0E28]">
        {/* brand-colour accent line */}
        <div className="h-1 flex">
          <div className="flex-1 bg-[#1E20D8]" />
          <div className="flex-1 bg-[#E8173A]" />
          <div className="flex-1 bg-[#2ECC71]" />
        </div>

        <div className="container">
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="relative w-[190px] h-14 mb-6">
                <Image src="/images/logo/llg-logo.png" alt="Lifeline Gedo" fill className="object-contain object-left brightness-0 invert" />
              </div>
              <p className="text-white/65 text-[14.5px] leading-relaxed mb-7 max-w-sm">
                A Somalia-led humanitarian organisation delivering life-saving health,
                food, water, and resilience programs in Gedo region since 2005.
              </p>

              {/* Newsletter */}
              <p className="text-white text-[13px] font-bold mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                Subscribe to field updates
              </p>
              <form className="flex gap-2.5 mb-7 max-w-sm">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-[14px] text-[#0A0E28] bg-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1E20D8]/50"
                />
                <button type="submit" className="btn-blue justify-center py-3 px-5 shrink-0">
                  <ArrowRight size={16} />
                </button>
              </form>

              <div className="flex gap-2.5">
                {socials.map((s) => (
                  <a key={s.l} href="#" title={s.title}
                    className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/8 text-white/80 hover:bg-[#E8173A] hover:text-white text-[14px] font-bold transition-all duration-200">
                    {s.l}
                  </a>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.16em] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>
                Programs
              </h4>
              <ul className="space-y-3.5">
                {programs.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="text-[14px] text-[#A8AFC7] hover:text-white transition-colors inline-flex items-center gap-2.5 group">
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
                    <Link href={i.href} className="text-[14px] text-[#A8AFC7] hover:text-white transition-colors inline-flex items-center gap-2.5 group">
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
              <ul className="space-y-4">
                <li className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#E8173A]" />
                  </div>
                  <div className="text-[14px] text-[#A8AFC7] leading-snug pt-0.5">
                    Mandera Road, Nairobi, Kenya
                    <span className="block text-[#6B7393] text-[12px] mt-0.5">Regional Headquarters</span>
                  </div>
                </li>
                <li className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#E8173A]" />
                  </div>
                  <div className="text-[14px] text-[#A8AFC7] leading-snug pt-0.5">
                    Luuq District, Gedo, Somalia
                    <span className="block text-[#6B7393] text-[12px] mt-0.5">Field Office</span>
                  </div>
                </li>
                <li className="flex gap-3.5 items-center">
                  <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#2ECC71]" />
                  </div>
                  <a href="tel:+254000000000" className="text-[14px] text-[#A8AFC7] hover:text-white transition-colors">+254 000 000 000</a>
                </li>
                <li className="flex gap-3.5 items-center">
                  <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#2ECC71]" />
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
              © {new Date().getFullYear()} Lifeline Gedo Organisation · Est. 2005 · Registered NGO
            </p>
            <div className="flex gap-7 text-[13px]">
              {[
                { l: "Privacy Policy", h: "/privacy" },
                { l: "Terms", h: "/terms" },
                { l: "Accountability", h: "/impact" },
              ].map((i) => (
                <Link key={i.h} href={i.h} className="text-[#A8AFC7] hover:text-white transition-colors">{i.l}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
