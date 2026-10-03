import { benefits, pillars } from "@/lib/content";

export function Program() {
  return (
    <section id="program" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="text-sm font-medium text-accent">Program</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight">
          What it is like to be a DevRel here
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Once you join, you learn Keploy&apos;s community, understand the product, and
          show your contributions. You meet other contributors and take ownership of public
          work.
        </p>
        <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="bg-elevated p-6">
              <h3 className="text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
        <h3 className="mt-12 text-xl font-semibold">What people get from the month</h3>
        <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
          {benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
