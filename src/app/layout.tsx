import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { DocNavbar } from "@/components/doc-navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devrel.keploy.io"),
  title: "Testing a Go API with Keploy — Gin + MongoDB Tutorial",
  description:
    "A step-by-step tutorial: use Keploy to automatically record and replay API tests for a Go application built with Gin and MongoDB.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <DocNavbar />
          {children}
          <footer className="border-t border-line mt-16">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 text-xs text-muted">
              <span>
                Tutorial by{" "}
                <a
                  href="https://keploy.io"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink underline"
                >
                  Keploy
                </a>
              </span>
              <div className="flex gap-5">
                <a
                  href="https://github.com/keploy/keploy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  GitHub
                </a>
                <a
                  href="https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  Slack
                </a>
                <a
                  href="https://keploy.io/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  Docs
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
