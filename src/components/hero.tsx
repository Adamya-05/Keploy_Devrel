"use client";

import { useState } from "react";
import { APPLY_URL, SLACK_URL } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="home" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
        <div>
          <p className="text-sm font-medium tracking-wide text-accent">
            Keploy Developer Relations Program
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Spend one month doing the actual work of a DevRel at an open source testing
            company.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Learn Keploy, write technical content, and work with the community. Shortlisted
            applicants join a contribution period that generally lasts a month.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={APPLY_URL} external>
              Apply on the form
            </Button>
            <Button href="#program" variant="secondary">
              Read the program
            </Button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[4px] border border-line px-4 py-2.5 text-sm font-medium"
              onClick={() => setOpen(true)}
            >
              How selection works
            </button>
          </div>
        </div>
        <aside className="border border-line bg-elevated p-6">
          <p className="text-sm font-medium">What you will do</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            <li>Work through weekly tasks on product, APIs, and testing.</li>
            <li>Publish technical writing that other developers can follow.</li>
            <li>Show up in Slack and GitHub the same way a DevRel would.</li>
          </ul>
          <p className="mt-6 text-sm">
            Questions go to{" "}
            <a className="underline" href={SLACK_URL} target="_blank" rel="noreferrer">
              Keploy Slack
            </a>
            .
          </p>
        </aside>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Application process">
        <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-muted">
          <li>Submit the public application form.</li>
          <li>You typically hear back within a week or two.</li>
          <li>
            If you are shortlisted, you are invited to a contribution period that generally
            lasts a month.
          </li>
        </ol>
        <div className="mt-6">
          <Button href={APPLY_URL} external>
            Open application form
          </Button>
        </div>
      </Modal>
    </section>
  );
}
