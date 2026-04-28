export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-ivory/90 backdrop-blur-md border-b border-tangerine/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5">
          <span
            className="font-display font-bold text-xl tracking-widest uppercase text-navy"
          >
            Mind
          </span>
          <span className="text-tangerine font-bold text-xl">·</span>
          <span
            className="font-display font-bold text-xl tracking-widest uppercase text-navy"
          >
            Interface
          </span>
        </a>
        <a
          href="#waitlist"
          className="bg-tangerine text-white px-5 py-2.5 rounded-full text-sm font-bold
                     uppercase tracking-widest hover:bg-tangerine-dark transition-colors"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
