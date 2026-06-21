import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate | Lifeline Gedo",
  description: "Support life-saving work in Somalia's Gedo region. Every donation goes directly to communities in need.",
};

const amounts = [10, 25, 50, 100, 250, 500];

const impact = [
  { amount: 10, text: "Provides emergency food rations for one family for a week", color: "#1E20D8" },
  { amount: 25, text: "Treats a severely malnourished child for one full month", color: "#E8173A" },
  { amount: 50, text: "Provides clean water access for a family for three months", color: "#2ECC71" },
  { amount: 100, text: "Funds a mobile health clinic visit to a remote village", color: "#0A0E28" },
  { amount: 250, text: "Supports a family with livelihood inputs for one season", color: "#1E20D8" },
  { amount: 500, text: "Funds a full borehole rehabilitation serving 500 people", color: "#E8173A" },
];

export default function DonatePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#E8173A] py-24">
        <div className="container text-center">
          <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
            Make a Difference Today
          </p>
          <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-6 leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
            Your Donation<br />Saves Lives.
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-xl leading-relaxed font-[family-name:var(--font-dm)]">
            Every contribution — no matter the size — goes directly to emergency programs
            for the most vulnerable people in Somalia's Gedo region.
          </p>
        </div>
      </section>

      <section className="py-32 bg-[#F8FAFF]">
        <div className="container grid lg:grid-cols-2 gap-16 items-start">
          {/* Donation Form */}
          <div className="bg-white rounded-2xl p-10 border border-[#E2E8F0] shadow-sm">
            <p className="eyebrow mb-2">Give Securely</p>
            <h2 className="text-2xl mb-8" style={{ fontFamily: "var(--font-jakarta)" }}>Choose Your Amount</h2>

            {/* Frequency toggle */}
            <div className="flex gap-2 mb-8 p-1 bg-[#F8FAFF] rounded-full border border-[#E2E8F0]">
              <button className="flex-1 py-2.5 rounded-full text-sm font-bold bg-[#E8173A] text-white" style={{ fontFamily: "var(--font-jakarta)" }}>
                One-time
              </button>
              <button className="flex-1 py-2.5 rounded-full text-sm font-bold text-[#64748B] hover:text-[#0A0E28] transition-colors" style={{ fontFamily: "var(--font-jakarta)" }}>
                Monthly
              </button>
            </div>

            {/* Amount buttons */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {amounts.map((a) => (
                <button key={a}
                  className="py-3.5 rounded-xl border-2 border-[#E2E8F0] text-sm font-bold text-[#475569] hover:border-[#E8173A] hover:text-[#E8173A] transition-all"
                  style={{ fontFamily: "var(--font-jakarta)" }}>
                  ${a}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="flex items-center gap-3 mb-7 border border-[#E2E8F0] rounded-xl px-4 py-3.5 focus-within:border-[#E8173A] transition-colors bg-[#F8FAFF]">
              <span className="text-[#64748B] font-bold">$</span>
              <input type="number" placeholder="Other amount"
                className="flex-1 text-sm focus:outline-none bg-transparent text-[#0A0E28]" />
            </div>

            {/* Trust badge */}
            <div className="bg-[#EAEBFF] border border-[#1E20D8]/20 rounded-xl p-4 mb-7 text-sm text-[#475569] font-[family-name:var(--font-dm)]">
              <strong className="text-[#0A0E28]" style={{ fontFamily: "var(--font-jakarta)" }}>Secure payment via Stripe.</strong>{" "}
              Your card details are never stored on our servers. All transactions are encrypted end-to-end.
            </div>

            <button className="w-full btn-donate justify-center py-4 text-[16px]">
              Donate Securely →
            </button>

            <p className="text-xs text-[#94A3B8] text-center mt-4 font-[family-name:var(--font-dm)]">
              Lifeline Gedo is a registered non-profit. Donations may be tax-deductible in your country.
            </p>
          </div>

          {/* Impact guide */}
          <div>
            <p className="eyebrow mb-2">Your Impact</p>
            <h2 className="text-2xl mb-8" style={{ fontFamily: "var(--font-jakarta)" }}>What Your Gift Does</h2>
            <div className="flex flex-col gap-4">
              {impact.map((i) => (
                <div key={i.amount} className="flex gap-4 items-start p-5 bg-white rounded-xl border border-[#E2E8F0] hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="text-white font-extrabold text-sm w-14 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: i.color, fontFamily: "var(--font-jakarta)" }}>
                    ${i.amount}
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed pt-1.5 font-[family-name:var(--font-dm)]">{i.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#EAFAF1] border border-[#2ECC71]/30 rounded-xl">
              <p className="font-bold text-[#0A0E28] mb-1.5" style={{ fontFamily: "var(--font-jakarta)" }}>100% of your donation reaches the field</p>
              <p className="text-sm text-[#64748B] font-[family-name:var(--font-dm)]">
                Lifeline Gedo keeps administrative costs below 12%. Core operations are funded separately by
                institutional donors so your gift goes directly to programming in Gedo.
              </p>
            </div>

            <div className="mt-5 p-6 bg-white border border-[#E2E8F0] rounded-xl">
              <p className="font-bold text-[#0A0E28] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>Other Ways to Give</p>
              <p className="text-sm text-[#64748B] mb-4 font-[family-name:var(--font-dm)]">Prefer bank transfer, or have a partnership inquiry?</p>
              <Link href="/contact" className="text-sm font-bold text-[#1E20D8] hover:underline">Contact us →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
