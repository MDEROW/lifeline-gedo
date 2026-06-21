import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const programs = [
  { label: "Health & Nutrition", href: "/programs#health" },
  { label: "Food Security", href: "/programs#food" },
  { label: "WASH", href: "/programs#wash" },
  { label: "Resilience", href: "/programs#resilience" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Impact", href: "/impact" },
  { label: "Latest News", href: "/news" },
  { label: "Get Involved", href: "/contact" },
  { label: "Donate", href: "/donate" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A237E] text-white">
      {/* Donate CTA Band */}
      <div className="bg-[#E65100] py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-xl">Every contribution saves a life in Gedo.</p>
            <p className="text-white/85 text-sm mt-1">Join hundreds of supporters making a difference today.</p>
          </div>
          <Link
            href="/donate"
            className="bg-white text-[#E65100] font-bold px-8 py-3 rounded-full hover:bg-[#FFF3E0] transition-colors shrink-0"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#1B5E20] text-sm font-black">LG</span>
            </div>
            <span className="font-bold text-lg">Lifeline Gedo</span>
          </div>
          <p className="text-white/75 text-sm leading-relaxed mb-5">
            A Somali-led humanitarian organization working to deliver life-saving assistance and build resilience in Somalia&apos;s Gedo region.
          </p>
          <div className="flex gap-3">
            {["facebook", "twitter", "linkedin", "youtube"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors text-xs font-bold"
                aria-label={s}
              >
                {s[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Our Programs</h3>
          <ul className="flex flex-col gap-2">
            {programs.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Contact Us</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/80">
            <li className="flex gap-2 items-start">
              <MapPin size={14} className="shrink-0 mt-0.5 text-[#E65100]" />
              <span>Mandera Road, Nairobi, Kenya</span>
            </li>
            <li className="flex gap-2 items-start">
              <MapPin size={14} className="shrink-0 mt-0.5 text-[#E65100]" />
              <span>Luuq District, Gedo Region, Somalia</span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone size={14} className="shrink-0 text-[#E65100]" />
              <a href="tel:+254000000000" className="hover:text-white transition-colors">+254 000 000 000</a>
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={14} className="shrink-0 text-[#E65100]" />
              <a href="mailto:info@lifelineorganisation.org" className="hover:text-white transition-colors">info@lifelineorganisation.org</a>
            </li>
            <li className="flex gap-2 items-start">
              <Clock size={14} className="shrink-0 mt-0.5 text-[#E65100]" />
              <span>Mon – Fri: 8:00 AM – 5:00 PM EAT</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">Subscribe to our newsletter for updates from the field.</p>
          <form className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-64 px-4 py-2 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
            />
            <button
              type="submit"
              className="bg-[#E65100] hover:bg-[#BF360C] text-white text-sm font-bold px-5 py-2 rounded-full transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Lifeline Gedo Organisation. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
