import type { MDXComponents } from "mdx/types";
import { ComponentPropsWithoutRef } from "react";
import { Callout } from "./callout";
import { Steps, Step } from "./step";
import { Terminal } from "./terminal";
import { FileTree, File, Folder } from "./file-tree";
import { CodeBlock, InlineCode } from "./code-block";

export function getMDXComponents(): MDXComponents {
  return {
    // Custom components available in MDX files
    Callout,
    Steps,
    Step,
    Terminal,
    FileTree,
    File,
    Folder,

    // Override default HTML elements for consistent styling
    h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => (
      <h1
        className="mt-10 mb-4 scroll-mt-20 text-3xl font-semibold tracking-tight text-ink first:mt-0"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2
        className="mt-10 mb-4 scroll-mt-20 border-b border-line pb-2 text-xl font-semibold tracking-tight text-ink"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
      <h3
        className="mt-8 mb-3 scroll-mt-20 text-base font-semibold text-ink"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
      <p className="my-4 leading-7 text-muted" {...props}>
        {children}
      </p>
    ),
    a: ({ children, href, ...props }: ComponentPropsWithoutRef<"a">) => (
      <a
        href={href}
        className="text-accent underline underline-offset-4 hover:opacity-80"
        {...props}
      >
        {children}
      </a>
    ),
    ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-muted" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-muted" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
      <li className="leading-7" {...props}>
        {children}
      </li>
    ),
    // Block code: pre wraps code with className="language-xxx"
    pre: ({ children }: ComponentPropsWithoutRef<"pre">) => {
      // children is the <code> element — extract its props
      const codeEl = children as React.ReactElement<{ className?: string; children?: string }>;
      if (codeEl?.props) {
        return (
          <CodeBlock className={codeEl.props.className ?? ""}>
            {String(codeEl.props.children ?? "").replace(/\n$/, "")}
          </CodeBlock>
        );
      }
      return <pre>{children}</pre>;
    },
    // Inline code: code without a parent pre
    code: ({ children, className, ...props }: ComponentPropsWithoutRef<"code">) => {
      // When className is set (language-xxx), it's inside a pre — skip, handled above
      if (className) {
        return <code className={className} {...props}>{children}</code>;
      }
      return <InlineCode>{String(children)}</InlineCode>;
    },
    blockquote: ({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className="my-5 border-l-4 border-line pl-5 text-muted italic"
        {...props}
      >
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-line" />,
    table: ({ children, ...props }: ComponentPropsWithoutRef<"table">) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }: ComponentPropsWithoutRef<"th">) => (
      <th
        className="border border-line bg-elevated px-4 py-2 text-left font-semibold text-ink"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: ComponentPropsWithoutRef<"td">) => (
      <td className="border border-line px-4 py-2 text-muted" {...props}>
        {children}
      </td>
    ),
  };
}
