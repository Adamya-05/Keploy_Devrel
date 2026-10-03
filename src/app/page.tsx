import type { Metadata } from "next";
import { DocLayout } from "@/components/docs/doc-layout";
import Content from "./tutorial/content.mdx";

export const metadata: Metadata = {
  metadataBase: new URL("https://devrel.keploy.io"),
  title: "Testing a Go API with Keploy — Gin + MongoDB Tutorial",
  description:
    "A step-by-step tutorial: use Keploy to automatically record and replay API tests for a Go application built with Gin and MongoDB. No test code required.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Testing a Go API with Keploy — Gin + MongoDB Tutorial",
    description:
      "Use Keploy to automatically record and replay API tests for a Go + Gin + MongoDB app. No test code required.",
    type: "article",
  },
};

export default function HomePage() {
  return (
    <DocLayout
      title="Testing a Go API with Keploy"
      description="How to automatically record and replay API tests for a Go application built with Gin and MongoDB — without writing a single line of test code."
      readingTime="12 min"
      badge="Keploy × Go — Tutorial"
    >
      <Content />
    </DocLayout>
  );
}
