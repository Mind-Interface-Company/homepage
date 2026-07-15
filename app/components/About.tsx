const values = [
  {
    icon: "🧠",
    title: "Non-Invasive by Design",
    description:
      "No implants, no surgery. Our EEG headset reads brain activity from the scalp — designed for daily, comfortable use outside a lab.",
  },
  {
    icon: "🔗",
    title: "Decoder + Device, Co-Designed",
    description:
      "We build the decoding algorithm and the headset hardware together, each making the other stronger — rather than fitting software to off-the-shelf equipment.",
  },
  {
    icon: "💬",
    title: "Built for Real Patients",
    description:
      "Designed with and for people who can no longer speak or move — our first goal is restoring communication for locked-in, ALS, and stroke patients, in partnership with leading Singapore hospitals and research institutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-28 px-6 overflow-hidden">
      {/* Halftone texture overlay */}
      <div className="absolute inset-0 halftone opacity-[0.035] pointer-events-none" />

      {/* Aqua accent circle — decorative */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full
                   border border-aqua/20 pointer-events-none"
      />
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full
                   border border-aqua/10 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-tangerine font-bold uppercase tracking-widest text-sm mb-4">
            Our Mission
          </p>
          <h2
            className="font-display font-bold text-4xl md:text-6xl text-navy
                       leading-tight mb-6"
          >
            Turning Thought
            <br />
            <span className="text-tangerine">Into Communication.</span>
          </h2>
          <p className="text-navy/70 text-lg leading-relaxed max-w-2xl">
            Millions of people with locked-in syndrome, ALS, muscular dystrophy, or
            stroke retain a fully active mind — but lose the ability to speak or
            move. Mind Interface Company is building a non-invasive EEG headset
            paired with a decoding algorithm that reads intended speech and
            movement directly from brain activity, turning it into text and
            device control. No implants. No surgery.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((card) => (
            <div
              key={card.title}
              className="bg-teal-deep rounded-2xl p-8 group
                         hover:shadow-glow-aqua transition-shadow duration-300"
            >
              <div
                className="w-12 h-1 bg-aqua rounded-full mb-6
                           group-hover:w-16 transition-all duration-300"
              />
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3
                className="font-display font-bold text-lg text-canary
                           uppercase tracking-wide mb-3"
              >
                {card.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
