export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-taupe/15 py-6">
      <div className="flex w-max animate-marquee gap-16 pr-16">
        {row.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-sm uppercase tracking-[0.35em] text-taupe/70"
          >
            {item}
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
