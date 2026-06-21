import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-[#F9F6F0]">
      <div className="text-center max-w-lg mx-auto px-6 py-20">
        <div className="text-6xl mb-6">🙏</div>
        <h1 className="text-3xl font-black text-[#1A1A2E] mb-4">Thank You!</h1>
        <p className="text-[#555] text-lg leading-relaxed mb-8">
          Your donation to Lifeline Gedo has been received. You are directly helping
          save lives in Somalia&apos;s Gedo region. We will send you a receipt by email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold px-8 py-3 rounded-full transition-colors">
            Back to Home
          </Link>
          <Link href="/impact" className="border-2 border-[#1B5E20] text-[#1B5E20] font-bold px-8 py-3 rounded-full hover:bg-[#E8F5E9] transition-colors">
            See Our Impact
          </Link>
        </div>
      </div>
    </div>
  );
}
