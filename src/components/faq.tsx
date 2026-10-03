import { faqs } from "@/lib/content";
import { Details } from "@/components/ui/details";

export function Faq() {
  return (
    <section id="faq" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="text-sm font-medium text-accent">FAQ</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Questions from the program README
        </h2>
        <div className="mt-8 max-w-3xl">
          {faqs.map((item) => (
            <Details key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
