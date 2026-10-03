import { ReactNode } from "react";

interface StepsProps {
  children: ReactNode;
}

interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
}

export function Steps({ children }: StepsProps) {
  return (
    <div className="my-8 space-y-0">
      {children}
    </div>
  );
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="relative flex gap-6 pb-10 last:pb-0">
      {/* Vertical connector line */}
      <div className="flex flex-col items-center">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
          {number}
        </div>
        <div className="mt-2 w-px flex-1 bg-line last:hidden" />
      </div>
      {/* Content */}
      <div className="flex-1 pt-0.5">
        <h3 className="mb-3 text-base font-semibold text-ink">{title}</h3>
        <div className="text-sm leading-7 text-muted [&>pre]:my-4">{children}</div>
      </div>
    </div>
  );
}
