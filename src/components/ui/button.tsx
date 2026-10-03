import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function Button({ href, children, variant = "primary", external }: ButtonProps) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-[4px] bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink"
      : "inline-flex items-center justify-center rounded-[4px] border border-line bg-elevated px-4 py-2.5 text-sm font-medium text-ink";

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
