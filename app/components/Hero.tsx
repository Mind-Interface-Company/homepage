function NodeNetwork() {
  const nodes = [
    { cx: 200, cy: 60 },
    { cx: 310, cy: 105 },
    { cx: 355, cy: 215 },
    { cx: 305, cy: 325 },
    { cx: 195, cy: 365 },
    { cx: 90, cy: 325 },
    { cx: 45, cy: 215 },
    { cx: 90, cy: 105 },
    { cx: 200, cy: 200 },
    { cx: 155, cy: 140 },
    { cx: 248, cy: 140 },
    { cx: 270, cy: 258 },
    { cx: 135, cy: 258 },
  ];

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
    [8, 9], [8, 10], [8, 11], [8, 12],
    [0, 9], [1, 10], [2, 11], [3, 11], [4, 12], [5, 12], [6, 9], [7, 9],
    [9, 10], [10, 11], [11, 12], [12, 9],
  ];

  return (
    <svg
      viewBox="0 0 400 420"
      width="400"
      height="420"
      className="absolute top-0 right-0 pointer-events-none opacity-20"
      aria-hidden="true"
    >
      <circle
        cx="200"
        cy="215"
        r="185"
        stroke="#FF6B35"
        strokeWidth="0.75"
        fill="none"
        strokeDasharray="4 6"
      />
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="#00BCD4"
          strokeWidth="0.75"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={i === 8 ? 7 : 4}
          fill={i === 8 ? "#FF6B35" : "#00BCD4"}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center
                 px-6 pt-24 pb-20 overflow-hidden bg-navy bg-hero-gradient"
    >
      {/* Halftone dot overlay — top-left quadrant */}
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2 halftone opacity-[0.04] pointer-events-none"
      />

      {/* Node-network electrode map — top-right */}
      <div className="absolute top-0 right-0 w-[400px] h-[420px]">
        <NodeNetwork />
      </div>

      {/* Bottom ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40
                   bg-tangerine/10 blur-3xl rounded-full pointer-events-none"
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Eyebrow badge */}
        <span
          className="inline-block bg-canary text-navy text-xs font-bold uppercase
                     tracking-widest px-4 py-1.5 rounded-full mb-8"
        >
          Early Access — 2026
        </span>

        {/* Headline */}
        <h1
          className="font-display font-bold text-6xl md:text-8xl leading-none
                     tracking-tight uppercase text-tangerine mb-6"
        >
          Your Mind.
          <br />
          The Interface.
        </h1>

        {/* Subheadline */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Brain-computer interfaces built for the real world. No sci-fi promises
          — just technology that listens.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-20">
          <a
            href="#waitlist"
            className="bg-tangerine text-white px-8 py-4 rounded-2xl font-bold
                       uppercase tracking-widest text-sm hover:bg-tangerine-dark
                       transition-colors shadow-glow"
          >
            Reserve Your Spot
          </a>
          <a
            href="#about"
            className="border border-aqua text-aqua px-8 py-4 rounded-2xl font-bold
                       uppercase tracking-widest text-sm hover:bg-aqua/10
                       transition-colors"
          >
            Our Mission ↓
          </a>
        </div>

        {/* Stat strip */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          {[
            { value: "10ms", label: "Neural Response Time" },
            { value: "99.2%", label: "Signal Accuracy" },
            { value: "< 5g", label: "Device Weight" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-teal-deep rounded-2xl px-8 py-5 text-center min-w-[160px]"
            >
              <div className="font-display font-bold text-3xl text-canary leading-none mb-1">
                {value}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-widest">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
