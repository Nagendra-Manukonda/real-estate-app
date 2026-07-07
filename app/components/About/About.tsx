const STATS = [
  { value: "12k+", label: "Properties listed" },
  { value: "38", label: "Cities covered" },
  { value: "9,400", label: "Happy buyers" },
  { value: "4.8/5", label: "Average agent rating" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">About Porchlight</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
            We built the listings site we wished existed.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Porchlight started in 2021 with a simple idea: house hunting shouldn&apos;t mean fifteen
            open tabs and a spreadsheet. We verify every listing, keep filters honest, and give agents
            tools that actually help buyers decide — not just scroll.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Today our team works with independent agents and property owners across the country to keep
            listings current, accurate, and easy to compare.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-card border border-line bg-panel p-5">
              <p className="font-mono text-2xl font-semibold text-ink">{s.value}</p>
              <p className="mt-1 text-xs text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
