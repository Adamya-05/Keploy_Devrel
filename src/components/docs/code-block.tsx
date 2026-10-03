"use client";

import { highlight } from "sugar-high";
import { useState } from "react";

interface CodeBlockProps {
  children: string;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // className from MDX is like "language-bash"
  const lang = className?.replace("language-", "") ?? "";
  const highlighted = highlight(children.trim());

  const handleCopy = () => {
    navigator.clipboard.writeText(children.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-5 overflow-hidden border border-line">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-line bg-elevated px-4 py-2">
        <span className="font-mono text-xs text-muted">{lang || "code"}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs text-muted transition-colors hover:text-ink"
          aria-label="Copy code"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      {/* Code content */}
      <pre className="overflow-x-auto px-5 py-4 text-sm leading-6">
        <code
          dangerouslySetInnerHTML={{ __html: highlighted }}
          className="font-mono"
        />
      </pre>
    </div>
  );
}

export function InlineCode({ children }: { children: string }) {
  return (
    <code className="rounded-sm border border-line bg-elevated px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
      {children}
    </code>
  );
}
