export default function Team() {
  return (
    <section id="team" className="relative bg-ivory py-28 px-6 overflow-hidden">
      {/* Halftone texture overlay */}
      <div className="absolute inset-0 halftone opacity-[0.035] pointer-events-none" />

      {/* Aqua accent circle — decorative */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full
                   border border-aqua/20 pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-tangerine font-bold uppercase tracking-widest text-sm mb-4">
            The Team
          </p>
          <h2
            className="font-display font-bold text-4xl md:text-6xl text-navy
                       leading-tight mb-6"
          >
            Meet the
            <br />
            <span className="text-tangerine">Founder.</span>
          </h2>
        </div>

        {/* Founder card */}
        <div className="bg-teal-deep rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div
            className="w-24 h-24 rounded-full bg-aqua/20 border border-aqua/30
                       flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <span className="font-display font-bold text-3xl text-canary">JT</span>
          </div>

          <div>
            <h3 className="font-display font-bold text-2xl text-canary uppercase tracking-wide mb-1">
              Jackie Tan Yen
            </h3>
            <p className="text-aqua text-sm uppercase tracking-widest font-bold mb-4">
              Founder &amp; CEO
            </p>
            <p className="text-white/60 leading-relaxed">
              Jackie is a 4x founder with 2 exits and holds a PhD in data
              science and biology from Nanyang Technological University. He
              served as an Associate Professor in NTU&apos;s Biomedical Data
              Science Program from 2020 to 2024 before founding Mind Interface
              Company to bring non-invasive brain-computer interfaces to
              patients who can no longer speak or move.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
