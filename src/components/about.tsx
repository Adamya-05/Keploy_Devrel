import { stats } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="text-sm font-medium text-accent">About</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">We are Keploy</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
          Keploy is a functional testing toolkit for developers. As an open source
          organization, we believe work should be community-driven. This program is how
          people join us for a month, learn what DevRel looks like here, and leave with
          public work they can point to.
        </p>
        <p className="mt-6 text-xs uppercase tracking-wide text-muted">
          Figures published on the existing DevRel program site
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="bg-elevated p-6">
              <dt className="text-sm text-muted">{item.label}</dt>
              <dd className="mt-2 text-3xl font-semibold">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
