const partners = [
  "UNHCR", "UNICEF", "WFP", "WHO", "OCHA",
  "Concern Worldwide", "Save the Children", "IRC", "NRC", "DFID",
];

export default function Partners() {
  return (
    <section className="py-16 bg-[#F9F6F0] border-t border-[#E0E0E0]">
      <div className="container">
        <p className="text-center text-sm font-bold text-[#888] uppercase tracking-widest mb-10">
          Trusted partners & donors
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((p) => (
            <div
              key={p}
              className="bg-white border border-[#E0E0E0] rounded-xl px-6 py-3 text-sm font-bold text-[#555] hover:border-[#1B5E20] hover:text-[#1B5E20] transition-colors"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
