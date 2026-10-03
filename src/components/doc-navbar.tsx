"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function DocNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/keploy-logo.png"
            alt="Keploy"
            width={110}
            height={28}
            className="h-7 w-auto"
            priority
          />
          <span className="hidden text-sm text-muted sm:inline">Tutorial</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-5 text-sm md:flex">
            <a
              href="https://keploy.io/docs"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-ink"
            >
              Docs
            </a>
            <a
              href="https://github.com/keploy/samples-go"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-ink"
            >
              GitHub
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
