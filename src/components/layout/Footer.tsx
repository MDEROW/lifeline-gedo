import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0E28]">
      {/* Donate CTA strip */}
      <div className="bg-[#1E20D8] py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-extrabold mb-1" style={{ fontFamily: 'var(--font-jakarta)' }}>
              Every donation saves a life in Gedo.
            </h3>
            <p className="text-white/65 text-sm">Join our community of supporters making a difference since 2005.</p>
          </div>
          <Link href="/donate" className="btn-donate bg-[#E8173A] hover:bg-[#C0102E] shrink-0 text-[15px] px-8 py-4">
            Donate Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-white/8">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-jakarta)' }}>Stay connected with our field teams</p>
            <p className="text-white/45 text-sm">Situation reports, impact stories, and updates from Gedo — monthly.</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-4 py-3 rounded-lg text-sm bg-white/8 border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-[#1E20D8] transition-colors"
            />
            <button type="submit" className="btn-donate shrink-0">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 bg-white rounded-xl p-1.5">
              <Image src="/images/logo/llg-logo.png" alt="LLG Logo" fill className="object-contain p-1" />
            </div>
            <div>
              <p className="font-extrabold text-white text-[15px]" style={{ fontFamily: 'var(--font-jakarta)' }}>Lifeline Gedo</p>
              <p className="text-white/40 text-xs">Organisation · Est. 2005</p>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-7 font-[family-name:var(--font-dm)]">
            Somalia-led humanitarian organisation delivering life-saving assistance in
            Gedo region for over 21 years.
          </p>
          <div className="flex gap-2.5">
            {[
              { l: "f", href: "#" },
              { l: "𝕏", href: "#" },
              { l: "in", href: "#" },
              { l: "▶", href: "#" },
            ].map((s) => (
              <a key={s.l} href={s.href}
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#1E20D8] text-white/60 hover:text-white flex items-center justify-center text-xs font-bold transition-all">
                {s.l}
              </a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-[0.14em] mb-6" style={{ fontFamily: 'var(--font-jakarta)' }}>Our Programs</h4>
          <ul className="space-y-3">
            {[
              { l: "Health & Nutrition", h: "/programs#health" },
              { l: "Food Security", h: "/programs#food" },
              { l: "WASH", h: "/programs#wash" },
              { l: "Resilience", h: "/programs#resilience" },
            ].map((i) => (
              <li key={i.h}>
                <Link href={i.h} className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-2 group font-[family-name:var(--font-dm)]">
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform text-[#E8173A]" />
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Org */}
        <div>
          <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-[0.14em] mb-6" style={{ fontFamily: 'var(--font-jakarta)' }}>Organisation</h4>
          <ul className="space-y-3">
            {[
              { l: "About Us", h: "/about" },
              { l: "Our Impact", h: "/impact" },
              { l: "News & Updates", h: "/news" },
              { l: "Get Involved", h: "/contact" },
              { l: "Donate", h: "/donate" },
            ].map((i) => (
              <li key={i.h}>
                <Link href={i.h} className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-2 group font-[family-name:var(--font-dm)]">
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform text-[#2ECC71]" />
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-[0.14em] mb-6" style={{ fontFamily: 'var(--font-jakarta)' }}>Contact</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin size={14} className="text-[#E8173A] shrink-0 mt-0.5" />
              <div className="text-sm text-white/55 font-[family-name:var(--font-dm)]">
                Mandera Road, Nairobi, Kenya<br />
                <span className="text-white/30 text-xs">Regional Headquarters</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={14} className="text-[#E8173A] shrink-0 mt-0.5" />
              <div className="text-sm text-white/55 font-[family-name:var(--font-dm)]">
                Luuq District, Gedo, Somalia<br />
                <span className="text-white/30 text-xs">Field Office</span>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={14} className="text-[#2ECC71] shrink-0" />
              <a href="tel:+254000000000" className="text-sm text-white/55 hover:text-white transition-colors">+254 000 000 000</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={14} className="text-[#2ECC71] shrink-0" />
              <a href="mailto:info@lifelineorganisation.org" className="text-xs text-white/55 hover:text-white transition-colors">info@lifelineorganisation.org</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-[family-name:var(--font-dm)]">
            © {new Date().getFullYear()} Lifeline Gedo Organisation. Est. 2005. Registered NGO.
          </p>
          <div className="flex gap-5 text-xs text-white/30">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
