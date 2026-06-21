import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const contacts = [
  { icon: MapPin, color: "#1E20D8", bg: "#EAEBFF", label: "Headquarters", value: "Mandera Road, Nairobi, Kenya" },
  { icon: MapPin, color: "#E8173A", bg: "#FEF0F2", label: "Field Office", value: "Luuq District, Gedo, Somalia" },
  { icon: Phone,  color: "#2ECC71", bg: "#EAFAF1", label: "Call Us", value: "+254 000 000 000" },
  { icon: Mail,   color: "#0A0E28", bg: "#F4F7FF", label: "Email", value: "info@lifelineorganisation.org" },
];

export default function ContactCTA() {
  return (
    <section className="py-32 bg-[#F4F7FF]">
      <div className="container">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(10,14,40,0.15)] border border-[#E2E8F0]">

          {/* Left — real photo */}
          <div className="relative min-h-[360px] lg:min-h-full">
            <Image
              src="/images/field/community-meeting.jpg"
              alt="Lifeline Gedo team meeting with community members in Gedo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E28]/70 via-[#0A0E28]/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
                <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-jakarta)" }}>
                  On the ground in Gedo
                </span>
              </div>
              <p className="text-white text-xl font-extrabold leading-snug max-w-sm" style={{ fontFamily: "var(--font-jakarta)" }}>
                Working alongside communities, not just for them.
              </p>
            </div>
          </div>

          {/* Right — contact content */}
          <div className="bg-white p-10 lg:p-14">
            <p className="eyebrow">Get In Touch</p>
            <h2 className="text-[clamp(2rem,3vw,2.8rem)] mb-4">
              Let&apos;s Work<br />Together
            </h2>
            <p className="text-[#64748B] text-[15px] leading-relaxed mb-10">
              Whether you want to donate, partner with us, volunteer, or simply learn
              more about our work in Gedo region — our team is ready to hear from you.
            </p>

            {/* Contact grid */}
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: c.bg }}>
                    <c.icon size={17} style={{ color: c.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-[#94A3B8] mb-0.5" style={{ fontFamily: "var(--font-jakarta)" }}>
                      {c.label}
                    </p>
                    <p className="text-[13.5px] text-[#1E293B] font-medium leading-snug break-words">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-blue text-[15px] px-8 py-4">
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link href="/donate" className="btn-outline-blue text-[15px] px-8 py-4">
                Donate Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
