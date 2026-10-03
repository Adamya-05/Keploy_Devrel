import { APPLY_URL, SLACK_URL } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Join() {
  return (
    <section id="join" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-3xl font-semibold tracking-tight">
          Join the API community
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Meet students, mentors, and educators who care about APIs and testing. There is
          no fake newsletter form here. Updates happen on Slack and the application form
          is the same public Google Form used by the program.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={APPLY_URL} external>
            Apply to the next cohort
          </Button>
          <Button href={SLACK_URL} variant="secondary" external>
            Join Slack
          </Button>
        </div>
      </div>
    </section>
  );
}
