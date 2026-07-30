const STATS = [
  { value: "12k+", label: "Properties Listed" },
  { value: "38", label: "Cities Covered" },
  { value: "9,400", label: "Happy Buyers" },
  { value: "4.8/5", label: "Average Rating" },
];

export default function About() {
  return (
    <section id="about" className="py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              About Porchlight
            </span>

            <h2 className="mt-7 font-display text-5xl font-semibold leading-tight text-ink">
              Helping Australians<br />find the perfect place
              <span className="text-primary"> to call home.</span>
            </h2>

            <div className="mt-8 h-1 w-24 rounded-full bg-secondary" />

            <p className="mt-8 text-lg leading-8 text-ink-soft">
              Porchlight was built with a simple vision — make buying property feel effortless.
              Every listing is verified, every search is meaningful, and every feature is designed
              to help buyers make confident decisions.
            </p>

            <p className="mt-6 text-lg leading-8 text-ink-soft">
              Whether you&apos;re looking for a beachfront apartment in Sydney, a family home in
              Melbourne, or an investment property in Brisbane, Porchlight connects you with trusted
              listings and experienced local agents.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label}
                className="group rounded-3xl border border-line bg-panel p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
              >
                <div className="mb-5 h-1.5 w-14 rounded-full bg-primary transition-all duration-300 group-hover:w-20" />
                <h3 className="font-display text-4xl font-bold text-primary">{stat.value}</h3>
                <p className="mt-3 text-sm font-medium tracking-wide text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}