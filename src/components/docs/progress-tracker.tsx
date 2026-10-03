"use client";

import { useState } from "react";

const STEPS = [
  "Installed Keploy CLI",
  "Cloned the samples-go repo",
  "Started MongoDB in Docker",
  "Ran keploy record",
  "Made API calls to generate test cases",
  "Ran keploy test and saw tests pass",
];

export function ProgressTracker() {
  const [checked, setChecked] = useState<boolean[]>(Array(STEPS.length).fill(false));

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const done = checked.filter(Boolean).length;

  return (
    <div className="my-8 border border-line">
      <div className="flex items-center justify-between border-b border-line bg-elevated px-5 py-3">
        <p className="text-sm font-medium text-ink">Track your progress</p>
        <span className="font-mono text-sm text-muted">
          {done}/{STEPS.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full bg-line">
        <div
          className="h-1 bg-accent transition-all duration-300"
          style={{ width: `${(done / STEPS.length) * 100}%` }}
        />
      </div>

      <ul className="divide-y divide-line">
        {STEPS.map((step, i) => (
          <li key={i}>
            <label className="flex cursor-pointer items-center gap-4 px-5 py-3 hover:bg-elevated">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => toggle(i)}
                className="h-4 w-4 accent-accent"
                aria-label={step}
              />
              <span
                className={`text-sm leading-6 ${
                  checked[i] ? "text-muted line-through" : "text-ink"
                }`}
              >
                {step}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {done === STEPS.length && (
        <div className="border-t border-line bg-elevated px-5 py-3 text-sm font-medium text-accent">
          All steps complete. You now have a working Keploy test suite.
        </div>
      )}
    </div>
  );
}
