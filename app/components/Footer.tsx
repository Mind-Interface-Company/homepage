export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold text-lg tracking-widest uppercase text-white">
              Mind
            </span>
            <span className="text-tangerine font-bold text-lg">·</span>
            <span className="font-display font-bold text-lg tracking-widest uppercase text-white">
              Interface
            </span>
          </div>
          <p className="text-white/40 text-sm">Making the invisible interface visible.</p>
        </div>

        <div className="flex items-center gap-6 text-white/40 text-sm">
          <a href="#" className="hover:text-white/70 transition-colors">
            Privacy Policy
          </a>
          <a href="#about" className="hover:text-white/70 transition-colors">
            About
          </a>
          <span>© 2026 Mind Interface Company.</span>
        </div>
      </div>
    </footer>
  );
}
