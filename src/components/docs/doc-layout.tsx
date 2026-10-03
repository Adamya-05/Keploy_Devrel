"use client";

import { useEffect, useRef, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface DocLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  readingTime?: string;
  badge?: string;
}

function TableOfContents({ items, active }: { items: TocItem[]; active: string }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
        On this page
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
          >
            <a
              href={`#${item.id}`}
              className={`block py-0.5 leading-5 transition-colors hover:text-ink ${
                active === item.id ? "font-medium text-accent" : "text-muted"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function DocLayout({
  children,
  title,
  description,
  readingTime,
  badge,
}: DocLayoutProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const headings = Array.from(
      contentRef.current.querySelectorAll("h2, h3")
    ) as HTMLHeadingElement[];
    setToc(
      headings.map((h) => ({
        id: h.id,
        text: h.textContent ?? "",
        level: parseInt(h.tagName[1]),
      }))
    );
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    const headings = Array.from(
      contentRef.current.querySelectorAll("h2, h3")
    ) as HTMLHeadingElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [toc]);

  return (
    <>
      {/* Hero section */}
      <section className="border-b border-line bg-elevated">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          {badge && (
            <p className="mb-3 font-mono text-xs font-medium tracking-wide text-accent">
              {badge}
            </p>
          )}
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-line pt-5 text-sm text-muted">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest">Stack</span>
              <span className="border border-line bg-bg px-2 py-0.5 font-mono text-xs">
                Go
              </span>
              <span className="border border-line bg-bg px-2 py-0.5 font-mono text-xs">
                Gin
              </span>
              <span className="border border-line bg-bg px-2 py-0.5 font-mono text-xs">
                MongoDB
              </span>
            </div>
            {readingTime && (
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest">Read</span>
                <span>{readingTime}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest">Sample</span>
              <a
                href="https://github.com/keploy/samples-go/tree/main/gin-mongo"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-ink"
              >
                keploy/samples-go/gin-mongo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
          {/* Article */}
          <article>
            <div ref={contentRef} className="min-w-0">
              {children}
            </div>
          </article>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={toc} active={activeId} />

              <div className="mt-10 border-t border-line pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                  Resources
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://keploy.io/docs"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted hover:text-ink"
                    >
                      Keploy Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/keploy/samples-go"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted hover:text-ink"
                    >
                      samples-go
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted hover:text-ink"
                    >
                      Keploy Slack
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
