export default function ProgressIndicator({ sections, activeSection }) {
  return (
    <nav
      className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-plum/55 px-3 py-2 shadow-glow backdrop-blur-2xl md:bottom-auto md:left-auto md:right-4 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:flex-col"
      aria-label="Surprise progress"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`group relative h-3 w-3 rounded-full transition ${
            activeSection === section.id
              ? "bg-roseGold shadow-[0_0_18px_rgba(246,179,127,0.9)]"
              : "bg-white/35 hover:bg-petal"
          }`}
          aria-label={`Go to ${section.label}`}
        >
          <span className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-plum px-3 py-1 text-xs font-semibold text-cream opacity-0 shadow-lg transition group-hover:opacity-100 md:bottom-auto md:left-auto md:right-5 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:group-hover:block">
            {section.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
