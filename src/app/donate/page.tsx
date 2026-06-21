import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate | Lifeline Gedo",
  description: "Support life-saving work in Somalia's Gedo region. Every donation counts.",
};

const amounts = [10, 25, 50, 100, 250, 500];

const impact = [
  { amount: 10, text: "Provides emergency food rations for a family for one week" },
  { amount: 25, text: "Treats a severely malnourished child for one month" },
  { amount: 50, text: "Provides clean water access for a family for three months" },
  { amount: 100, text: "Funds a mobile health clinic visit to a remote village" },
  { amount: 250, text: "Supports a family with livelihood inputs for one season" },
  { amount: 500, text: "Funds a full borehole rehabilitation serving 500 people" },
];

export default function DonatePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#E65100] py-20 text-white">
        <div className="container text-center">
          <span className="text-white/70 text-sm font-bold uppercase tracking-widest">Make a Difference Today</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Your Donation Saves Lives
          </h1>
          <p className="text-white/85 max-w-2xl mx-auto text-lg leading-relaxed">
            Every contribution — no matter the size — goes directly to emergency programs
            for the most vulnerable people in Somalia&apos;s Gedo region.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F9F6F0]">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <div className="bg-white rounded-2xl p-8 border border-[#E0E0E0] shadow-sm">
            <h2 className="text-xl font-black text-[#1A1A2E] mb-6">Choose Your Amount</h2>

            {/* Frequency */}
            <div className="flex gap-2 mb-6 p-1 bg-[#F9F6F0] rounded-full">
              <button className="flex-1 py-2 rounded-full text-sm font-bold bg-[#E65100] text-white">
                One-time
              </button>
              <button className="flex-1 py-2 rounded-full text-sm font-bold text-[#555] hover:text-[#1A1A2E] transition-colors">
                Monthly
              </button>
            </div>

            {/* Amount buttons */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {amounts.map((a) => (
                <button
                  key={a}
                  className="py-3 rounded-xl border-2 border-[#E0E0E0] text-sm font-bold text-[#555] hover:border-[#E65100] hover:text-[#E65100] transition-colors"
                >
                  ${a}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#555] font-bold">$</span>
              <input
                type="number"
                placeholder="Other amount"
                className="flex-1 border border-[#E0E0E0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E65100] bg-[#F9F6F0]"
              />
            </div>

            {/* Stripe note */}
            <div className="bg-[#FFF8E1] border border-[#FFE082] rounded-xl p-4 mb-6 text-sm text-[#555]">
              <strong className="text-[#1A1A2E]">Secure payment via Stripe.</strong> Your card details are never stored on our servers. All transactions are encrypted.
            </div>

            <button className="w-full bg-[#E65100] hover:bg-[#BF360C] text-white font-black py-4 rounded-full text-base transition-colors">
              Donate Securely →
            </button>

            <p className="text-xs text-[#888] text-center mt-3">
              Lifeline Gedo is a registered non-profit. Donations may be tax-deductible in your country.
            </p>
          </div>

          {/* Impact Guide */}
          <div>
            <h2 className="text-xl font-black text-[#1A1A2E] mb-6">Your Impact</h2>
            <div className="flex flex-col gap-3">
              {impact.map((i) => (
                <div key={i.amount} className="flex gap-4 items-start p-4 bg-white rounded-xl border border-[#E0E0E0]">
                  <div className="bg-[#E65100] text-white font-black text-sm w-14 h-10 rounded-lg flex items-center justify-center shrink-0">
                    ${i.amount}
                  </div>
                  <p className="text-sm text-[#555] leading-relaxed pt-1">{i.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-[#E8F5E9] border border-[#A5D6A7] rounded-xl">
              <p className="text-sm font-bold text-[#1B5E20] mb-1">100% of your donation reaches the field</p>
              <p className="text-xs text-[#555]">
                Lifeline Gedo keeps administrative costs below 12%. Core operations are funded separately by institutional donors so your gift goes directly to programming.
              </p>
            </div>

            <div className="mt-4 p-5 bg-white border border-[#E0E0E0] rounded-xl">
              <p className="text-sm font-bold text-[#1A1A2E] mb-2">Other ways to give</p>
              <p className="text-xs text-[#555] mb-3">Prefer to donate by bank transfer or have a partnership inquiry?</p>
              <Link href="/contact" className="text-sm font-bold text-[#1B5E20] hover:underline">Contact us →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
