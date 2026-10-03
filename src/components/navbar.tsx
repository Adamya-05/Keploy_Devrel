"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { APPLY_URL, navLinks } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src="/keploy-logo.png"
            alt="Keploy"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="text-sm font-medium text-muted">DevRel Program</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="text-sm text-ink">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="text-sm text-ink">
                {link.label}
              </a>
            )
          )}
          <ThemeToggle />
          <Button href={APPLY_URL} external>
            Apply
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="border border-line px-3 py-2 text-sm"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <Button href={APPLY_URL} external>
              Apply
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
