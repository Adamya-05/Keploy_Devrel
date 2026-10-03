"use client";

import { useState } from "react";

type Phase = "record" | "test";

const RECORD_STEPS = [
  {
    label: "Your App",
    sub: "go run main.go handler.go",
    color: "bg-blue-100 text-blue-900 border-blue-300 dark:bg-blue-950/50 dark:text-blue-200 dark:border-blue-800",
  },
  {
    label: "Keploy",
    sub: "intercepts syscalls via eBPF",
    color: "bg-[#e35134]/10 text-[#e35134] border-[#e35134]/30",
  },
  {
    label: "MongoDB",
    sub: "real database",
    color: "bg-green-100 text-green-900 border-green-300 dark:bg-green-950/50 dark:text-green-200 dark:border-green-800",
  },
  {
    label: "YAML Files",
    sub: "test-1.yaml + mocks.yaml",
    color: "bg-elevated text-ink border-line",
  },
];

const TEST_STEPS = [
  {
    label: "Your App",
    sub: "same binary, no changes",
    color: "bg-blue-100 text-blue-900 border-blue-300 dark:bg-blue-950/50 dark:text-blue-200 dark:border-blue-800",
  },
  {
    label: "Keploy",
    sub: "replays HTTP + stubs DB",
    color: "bg-[#e35134]/10 text-[#e35134] border-[#e35134]/30",
  },
  {
    label: "Mocked DB",
    sub: "no real MongoDB needed",
    color: "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/50 dark:text-amber-200 dark:border-amber-800",
  },
  {
    label: "Pass / Fail",
    sub: "response diff against YAML",
    color: "bg-green-100 text-green-900 border-green-300 dark:bg-green-950/50 dark:text-green-200 dark:border-green-800",
  },
];

function Arrow() {
  return (
    <div className="flex shrink-0 items-center">
      <svg width="28" height="16" viewBox="0 0 28 16" aria-hidden="true">
        <line x1="0" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" className="text-muted" />
        <polyline points="14,3 20,8 14,13" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted" />
      </svg>
    </div>
  );
}

export function WorkflowDiagram() {
  const [phase, setPhase] = useState<Phase>("record");
  const steps = phase === "record" ? RECORD_STEPS : TEST_STEPS;

  return (
    <div className="my-8 border border-line">
      <div className="flex items-center justify-between border-b border-line bg-elevated px-5 py-3">
        <p className="text-sm font-medium text-ink">Keploy workflow</p>
        <div className="flex border border-line text-xs font-medium">
          <button
            type="button"
            onClick={() => setPhase("record")}
            className={`px-3 py-1.5 transition-colors ${
              phase === "record" ? "bg-accent text-white" : "text-muted hover:text-ink"
            }`}
          >
            Record
          </button>
          <button
            type="button"
            onClick={() => setPhase("test")}
            className={`border-l border-line px-3 py-1.5 transition-colors ${
              phase === "test" ? "bg-accent text-white" : "text-muted hover:text-ink"
            }`}
          >
            Test
          </button>
        </div>
      </div>

      {/* Diagram */}
      <div className="overflow-x-auto px-5 py-8">
        <div className="flex min-w-max items-center gap-1">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className={`rounded-none border px-4 py-3 text-center ${step.color}`}>
                <p className="text-sm font-semibold">{step.label}</p>
                <p className="mt-0.5 text-xs opacity-75">{step.sub}</p>
              </div>
              {i < steps.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="border-t border-line bg-elevated px-5 py-3 text-sm text-muted">
        {phase === "record" ? (
          <>
            <strong className="text-ink">Record mode:</strong> Keploy wraps your process and uses eBPF to intercept both the inbound HTTP requests and all outbound MongoDB calls. Every interaction is serialized to YAML.
          </>
        ) : (
          <>
            <strong className="text-ink">Test mode:</strong> Keploy replays the recorded HTTP requests against your app. When your app calls MongoDB, Keploy intercepts and returns the recorded response instead. No real database involved.
          </>
        )}
      </div>
    </div>
  );
}
