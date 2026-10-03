import Image from "next/image";
import { testimonials } from "@/lib/content";

export function Community() {
  return (
    <section id="community" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="text-sm font-medium text-accent">Community</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          What previous participants said
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
          Quotes and photos come from the public DevRel program site. These are named
          people who went through earlier cohorts.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure key={item.name} className="border border-line bg-elevated p-6">
              <figcaption className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </figcaption>
              <blockquote className="mt-4 text-sm leading-6 text-muted">
                {item.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
