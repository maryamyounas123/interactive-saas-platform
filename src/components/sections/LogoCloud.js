import Container from "@/components/ui/Container";

const logos = [
  "Northwind",
  "Fieldstone",
  "Ledger Labs",
  "Vantree",
  "Cobalt & Co",
  "Havenly",
  "Driftline",
];

export default function LogoCloud() {
  const loop = [...logos, ...logos];

  return (
    <section className="border-y border-edge/10 bg-surface/60 py-10">
      <Container>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {loop.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-display text-lg font-medium text-ink-soft/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
