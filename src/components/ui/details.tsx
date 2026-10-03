"use client";

import { useId, useState } from "react";

type DetailsProps = {
  question: string;
  answer: string;
};

export function Details({ question, answer }: DetailsProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-line py-4">
      <h3>
        <button
          type="button"
          className="flex w-full items-start justify-between gap-6 text-left text-base font-medium text-ink"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {question}
          <span aria-hidden="true" className="text-muted">
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div id={panelId} hidden={!open} className="pt-3 text-sm leading-6 text-muted">
        {answer}
      </div>
    </div>
  );
}
