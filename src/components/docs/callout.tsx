import { ReactNode } from "react";

type CalloutType = "info" | "warning" | "tip" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const config: Record<CalloutType, { label: string; classes: string; border: string }> = {
  info: {
    label: "Note",
    classes: "bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-200",
    border: "border-l-blue-500",
  },
  tip: {
    label: "Tip",
    classes: "bg-green-50 text-green-900 dark:bg-green-950/40 dark:text-green-200",
    border: "border-l-green-500",
  },
  warning: {
    label: "Warning",
    classes: "bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200",
    border: "border-l-amber-500",
  },
  danger: {
    label: "Danger",
    classes: "bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200",
    border: "border-l-red-500",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const { label, classes, border } = config[type];

  return (
    <div
      className={`my-6 border-l-4 px-5 py-4 text-sm leading-6 ${classes} ${border}`}
      role="note"
    >
      <p className="mb-1 font-semibold">{title ?? label}</p>
      <div className="[&>p]:mt-0">{children}</div>
    </div>
  );
}
