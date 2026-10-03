# Keploy DevRel Program website

Rebuild of the public [DevRel Program](https://devrel.keploy.io/) site. Stack is Next.js 15 (App Router), TypeScript, and Tailwind CSS. Copy, stats, quotes, and photos come from the official program site and README. Apply and Slack links are the same public URLs Keploy already publishes.

This is not a v0 or Lovable export. There is no "Made with" badge in the UI.

## Local setup

You need Node.js 20 or newer.

```bash
git clone <your-fork-url>
cd Keploy_Devrel
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
npm run lint
```

## Folder structure

```text
src/app/            routes, metadata, sitemap, robots
src/components/     page sections plus navbar and footer
src/components/ui/  reusable Button, Modal, Details
src/lib/content.ts  program copy, stats, quotes, links
public/             Keploy logo and cohort photos from keploy/devrel-program
```

## What this covers

GitHub issues on [keploy/keploy](https://github.com/keploy/keploy) for the DevRel site:

- [#3065](https://github.com/keploy/keploy/issues/3065) Next.js 15 + TypeScript migration
- [#3066](https://github.com/keploy/keploy/issues/3066) UI closer to keploy.io (orange, tight type, no 2023 template look)
- [#3067](https://github.com/keploy/keploy/issues/3067) Navbar, footer, modal, details
- [#3068](https://github.com/keploy/keploy/issues/3068) Folder structure, ESLint, Prettier, EditorConfig, README
- [#3078](https://github.com/keploy/keploy/issues/3078) Light and dark theme with persistence
- [#3080](https://github.com/keploy/keploy/issues/3080) Metadata, Open Graph, JSON-LD, sitemap, robots

## Contribute / submit a PR

1. Fork [keploy/devrel-program](https://github.com/keploy/devrel-program) (or use this repo if that is what the hiring brief asked for).
2. Create a branch: `git checkout -b feat/devrel-nextjs`.
3. Keep `npm run lint` and `npm run build` clean.
4. Open a pull request against `keploy/devrel-program` and mention the issues above.
5. Do not deploy until you have confirmed there is no AI watermark on the live page. Vercel does not add one by default. If you used another host, check its project settings for a badge and turn it off before sharing the URL.

Official application form: [https://bit.ly/KeployDevRel](https://forms.gle/BmnmzSfuVydG7CoWA)
