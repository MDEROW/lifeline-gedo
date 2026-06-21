const stories = [
  {
    name: "Fatuma A.",
    location: "Luuq District, Gedo",
    program: "Health & Nutrition",
    quote:
      "My daughter was severely malnourished. Lifeline Gedo's health workers came to our village and gave her treatment for three months. Today she is healthy and back in school.",
    initial: "F",
    color: "#E8F5E9",
  },
  {
    name: "Ahmed M.",
    location: "Beled Hawo, Gedo",
    program: "Food Security",
    quote:
      "After two seasons of drought, we had nothing left. The food assistance and seeds we received allowed my family to survive and plant again this year.",
    initial: "A",
    color: "#FFF8E1",
  },
  {
    name: "Halima I.",
    location: "Dolow District, Gedo",
    program: "WASH",
    quote:
      "Before the new borehole, our children were drinking contaminated water and getting sick constantly. Now we have clean water and the children are healthy.",
    initial: "H",
    color: "#E3F2FD",
  },
];

export default function Stories() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#E65100] font-bold text-sm uppercase tracking-widest">Voices from the Field</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mt-2 mb-4">
            Stories of Impact
          </h2>
          <p className="text-[#555] max-w-xl mx-auto leading-relaxed">
            Behind every statistic is a family whose life has changed. Here are their stories.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <div key={s.name} className="rounded-2xl p-7 border border-[#E0E0E0] hover:shadow-md transition-shadow" style={{ backgroundColor: s.color }}>
              {/* Quote icon */}
              <div className="text-4xl text-[#1B5E20]/20 font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-[#444] leading-relaxed text-sm mb-6 italic">{s.quote}</p>

              {/* Person */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ backgroundColor: "#1B5E20" }}
                >
                  {s.initial}
                </div>
                <div>
                  <p className="font-bold text-[#1A1A2E] text-sm">{s.name}</p>
                  <p className="text-xs text-[#888]">{s.location}</p>
                </div>
                <span className="ml-auto text-xs font-semibold text-[#1B5E20] bg-white px-3 py-1 rounded-full border border-[#A5D6A7]">
                  {s.program}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
