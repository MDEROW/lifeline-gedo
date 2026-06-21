import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Get Involved | Lifeline Gedo",
  description: "Contact Lifeline Gedo or find out how to get involved.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#1B5E20] py-20 text-white">
        <div className="container">
          <span className="text-white/60 text-sm font-bold uppercase tracking-widest">Reach Us</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">Get Involved</h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Whether you want to donate, partner with us, volunteer, or simply learn more —
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F9F6F0]">
        <div className="container grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 border border-[#E0E0E0]">
            <h2 className="text-xl font-black text-[#1A1A2E] mb-6">Send Us a Message</h2>
            <form className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#555] uppercase tracking-wide mb-1 block">First Name</label>
                  <input type="text" placeholder="Mohamed" className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B5E20] bg-[#F9F6F0]" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#555] uppercase tracking-wide mb-1 block">Last Name</label>
                  <input type="text" placeholder="Ahmed" className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B5E20] bg-[#F9F6F0]" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-[#555] uppercase tracking-wide mb-1 block">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B5E20] bg-[#F9F6F0]" />
              </div>
              <div>
                <label className="text-xs font-bold text-[#555] uppercase tracking-wide mb-1 block">I am interested in</label>
                <select className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B5E20] bg-[#F9F6F0] text-[#555]">
                  <option>Making a donation</option>
                  <option>Partnership / Funding</option>
                  <option>Volunteering</option>
                  <option>Media / Press inquiry</option>
                  <option>General information</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-[#555] uppercase tracking-wide mb-1 block">Message</label>
                <textarea rows={4} placeholder="Tell us how you&apos;d like to get involved..." className="w-full border border-[#E0E0E0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B5E20] bg-[#F9F6F0] resize-none" />
              </div>
              <button type="submit" className="bg-[#E65100] hover:bg-[#BF360C] text-white font-bold px-6 py-3 rounded-full transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E0E0E0]">
              <h3 className="font-bold text-[#1A1A2E] mb-4">Kenya Office (HQ)</h3>
              <ul className="flex flex-col gap-3 text-sm text-[#555]">
                <li className="flex gap-2 items-start"><MapPin size={14} className="shrink-0 mt-0.5 text-[#1B5E20]" />Mandera Road, Nairobi, Kenya</li>
                <li className="flex gap-2 items-center"><Phone size={14} className="shrink-0 text-[#1B5E20]" /><a href="tel:+254000000000" className="hover:text-[#1B5E20]">+254 000 000 000</a></li>
                <li className="flex gap-2 items-center"><Mail size={14} className="shrink-0 text-[#1B5E20]" /><a href="mailto:info@lifelineorganisation.org" className="hover:text-[#1B5E20]">info@lifelineorganisation.org</a></li>
                <li className="flex gap-2 items-start"><Clock size={14} className="shrink-0 mt-0.5 text-[#1B5E20]" />Mon–Fri, 8:00 AM – 5:00 PM EAT</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E0E0E0]">
              <h3 className="font-bold text-[#1A1A2E] mb-4">Somalia Field Office</h3>
              <ul className="flex flex-col gap-3 text-sm text-[#555]">
                <li className="flex gap-2 items-start"><MapPin size={14} className="shrink-0 mt-0.5 text-[#1B5E20]" />Luuq District, Gedo Region, Somalia</li>
                <li className="flex gap-2 items-center"><Mail size={14} className="shrink-0 text-[#1B5E20]" /><a href="mailto:field@lifelineorganisation.org" className="hover:text-[#1B5E20]">field@lifelineorganisation.org</a></li>
              </ul>
            </div>

            <div className="bg-[#FFF8E1] rounded-2xl p-6 border border-[#FFE082]">
              <h3 className="font-bold text-[#1A1A2E] mb-2">For Media Inquiries</h3>
              <p className="text-sm text-[#555] mb-3">Journalists and media professionals can reach our communications team directly.</p>
              <a href="mailto:media@lifelineorganisation.org" className="text-sm font-bold text-[#E65100] hover:underline">media@lifelineorganisation.org</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
