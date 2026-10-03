"use client";

import { useState } from "react";
import { ReactNode } from "react";

interface TerminalProps {
  children: ReactNode;
  title?: string;
}

export function Terminal({ children, title = "Terminal" }: TerminalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text =
      typeof children === "string"
        ? children
        : (document.querySelector(`[data-terminal="${title}"] code`)?.textContent ?? "");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="my-5 overflow-hidden rounded-none border border-line font-mono text-sm"
      data-terminal={title}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-line bg-elevated px-4 py-2">
        <span className="text-xs text-muted">{title}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs text-muted transition-colors hover:text-ink"
          aria-label="Copy to clipboard"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="bg-footer px-4 py-4 text-green-400 overflow-x-auto">{children}</div>
    </div>
  );
}
