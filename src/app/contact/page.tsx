import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Get Involved | Lifeline Gedo",
  description: "Contact Lifeline Gedo or find out how to partner, donate, or volunteer.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A0E28] py-32">
        <div className="container">
          <p className="eyebrow" style={{ color: "#2ECC71" }}>Reach Us</p>
          <h1 className="text-5xl md:text-6xl text-white font-extrabold mt-3 mb-6 leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
            Get<br />
            <span style={{ color: "#1E20D8" }}>Involved</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-xl font-[family-name:var(--font-dm)]">
            Whether you want to donate, partner with us, volunteer, or ask a question —
            we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-32 bg-[#F8FAFF]">
        <div className="container grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white rounded-2xl p-10 border border-[#E2E8F0] shadow-sm">
            <p className="eyebrow mb-2">Send a Message</p>
            <h2 className="text-2xl mb-8" style={{ fontFamily: "var(--font-jakarta)" }}>We'll Respond Within 48 Hours</h2>
            <form className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2 block" style={{ fontFamily: "var(--font-jakarta)" }}>First Name</label>
                  <input type="text" placeholder="Mohamed"
                    className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#1E20D8] bg-[#F8FAFF] transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2 block" style={{ fontFamily: "var(--font-jakarta)" }}>Last Name</label>
                  <input type="text" placeholder="Ahmed"
                    className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#1E20D8] bg-[#F8FAFF] transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2 block" style={{ fontFamily: "var(--font-jakarta)" }}>Email Address</label>
                <input type="email" placeholder="you@example.com"
                  className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#1E20D8] bg-[#F8FAFF] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2 block" style={{ fontFamily: "var(--font-jakarta)" }}>I Am Interested In</label>
                <select className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#1E20D8] bg-[#F8FAFF] transition-colors text-[#475569]">
                  <option>Making a donation</option>
                  <option>Institutional partnership / Funding</option>
                  <option>Volunteering</option>
                  <option>Media / Press inquiry</option>
                  <option>General information</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2 block" style={{ fontFamily: "var(--font-jakarta)" }}>Message</label>
                <textarea rows={4} placeholder="Tell us how you'd like to get involved..."
                  className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#1E20D8] bg-[#F8FAFF] resize-none transition-colors" />
              </div>
              <button type="submit" className="btn-donate w-full justify-center py-4 text-[15px]">
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EAEBFF] flex items-center justify-center">
                  <MapPin size={16} className="text-[#1E20D8]" />
                </div>
                <h3 className="font-extrabold text-[#0A0E28]" style={{ fontFamily: "var(--font-jakarta)" }}>Kenya Office (Headquarters)</h3>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-[#64748B] font-[family-name:var(--font-dm)]">
                <li className="flex gap-2 items-start"><MapPin size={13} className="shrink-0 mt-0.5 text-[#E8173A]" />Mandera Road, Nairobi, Kenya</li>
                <li className="flex gap-2 items-center"><Phone size={13} className="shrink-0 text-[#2ECC71]" /><a href="tel:+254000000000" className="hover:text-[#1E20D8] transition-colors">+254 000 000 000</a></li>
                <li className="flex gap-2 items-center"><Mail size={13} className="shrink-0 text-[#2ECC71]" /><a href="mailto:info@lifelineorganisation.org" className="hover:text-[#1E20D8] transition-colors">info@lifelineorganisation.org</a></li>
                <li className="flex gap-2 items-start"><Clock size={13} className="shrink-0 mt-0.5 text-[#2ECC71]" />Mon–Fri, 8:00 AM – 5:00 PM EAT</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#FEF0F2] flex items-center justify-center">
                  <MapPin size={16} className="text-[#E8173A]" />
                </div>
                <h3 className="font-extrabold text-[#0A0E28]" style={{ fontFamily: "var(--font-jakarta)" }}>Somalia Field Office</h3>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-[#64748B] font-[family-name:var(--font-dm)]">
                <li className="flex gap-2 items-start"><MapPin size={13} className="shrink-0 mt-0.5 text-[#E8173A]" />Luuq District, Gedo Region, Somalia</li>
                <li className="flex gap-2 items-center"><Mail size={13} className="shrink-0 text-[#2ECC71]" /><a href="mailto:field@lifelineorganisation.org" className="hover:text-[#1E20D8] transition-colors">field@lifelineorganisation.org</a></li>
              </ul>
            </div>

            <div className="bg-[#EAEBFF] rounded-2xl p-8 border border-[#1E20D8]/20">
              <h3 className="font-extrabold text-[#0A0E28] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>For Media & Press Inquiries</h3>
              <p className="text-sm text-[#64748B] mb-4 font-[family-name:var(--font-dm)]">Journalists and media professionals can reach our communications team directly.</p>
              <a href="mailto:media@lifelineorganisation.org" className="text-sm font-bold text-[#1E20D8] hover:underline">media@lifelineorganisation.org</a>
            </div>

            <div className="bg-[#0A0E28] rounded-2xl p-8">
              <h3 className="font-extrabold text-white mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>Institutional Partnerships</h3>
              <p className="text-white/60 text-sm mb-4 font-[family-name:var(--font-dm)]">UN agencies, NGOs, and donors — let's discuss how we can work together in Gedo region.</p>
              <a href="mailto:partnerships@lifelineorganisation.org" className="text-sm font-bold text-[#2ECC71] hover:underline">partnerships@lifelineorganisation.org</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
