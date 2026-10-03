import { ReactNode } from "react";

interface FileTreeProps {
  children: ReactNode;
}

interface FileProps {
  name: string;
  note?: string;
}

interface FolderProps {
  name: string;
  children?: ReactNode;
  defaultOpen?: boolean;
}

export function FileTree({ children }: FileTreeProps) {
  return (
    <div className="my-5 overflow-hidden border border-line font-mono text-sm">
      <div className="border-b border-line bg-elevated px-4 py-2">
        <span className="text-xs text-muted">Project Structure</span>
      </div>
      <ul className="px-4 py-3 text-ink leading-7">{children}</ul>
    </div>
  );
}

export function File({ name, note }: FileProps) {
  return (
    <li className="ml-4 flex items-baseline gap-3">
      <span className="text-muted">&#8627;</span>
      <span>{name}</span>
      {note && <span className="text-xs text-muted">{note}</span>}
    </li>
  );
}

export function Folder({ name, children }: FolderProps) {
  return (
    <li className="ml-2">
      <span className="font-medium">{name}/</span>
      {children && <ul className="ml-2">{children}</ul>}
    </li>
  );
}
