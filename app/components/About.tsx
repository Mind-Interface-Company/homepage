const values = [
  {
    icon: "🤝",
    title: "Human-First",
    description:
      "Built for real people, not lab conditions. Our interfaces adapt to your unique neural patterns — not the other way around.",
  },
  {
    icon: "🔒",
    title: "Zero Compromise",
    description:
      "Privacy, accuracy, and comfort. All three. No exceptions. Your brain data belongs to you and is encrypted end-to-end.",
  },
  {
    icon: "🔬",
    title: "Open Science",
    description:
      "We publish our research. The future is too important to keep closed. Science advances when knowledge is shared.",
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
            Closing the Gap Between
            <br />
            <span className="text-tangerine">Intention and Action.</span>
          </h2>
          <p className="text-navy/70 text-lg leading-relaxed max-w-2xl">
            We started Mind Interface because the next great leap in human capability
            isn&apos;t about faster chips or bigger models. It&apos;s about closing the gap
            between what you think and what your technology does. We&apos;re building the
            bridge.
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
