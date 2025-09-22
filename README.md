<p align="center">
  <img src="public/logo-dark.svg" alt="Logo" height="72" />
</p>

<h2 align="center">Robin's Portfolio</h2>

<p align="center">
  Modern, fast, and accessible developer portfolio built with Next.js App Router, Tailwind CSS, TypeScript, and React 19.
  <br />
  <em>Deployed on Vercel. Smooth scrolling powered by Lenis.</em>
</p>

<p align="center">
  <a href="https://nextjs.org">Next.js</a> •
  <a href="https://react.dev">React 19</a> •
  <a href="https://tailwindcss.com">Tailwind CSS v4</a> •
  <a href="https://www.typescriptlang.org/">TypeScript</a> •
  <a href="https://vercel.com/">Vercel</a> •
  <a href="https://github.com/darkroomengineering/lenis">Lenis</a>
</p>

---

## Features

- **Blazing fast**: Next.js 15 with Turbopack dev/build pipeline
- **Responsive & accessible**: Tailwind CSS v4 and sensible defaults
- **Smooth interactions**: Lenis for buttery scroll
- **Type-safe**: TypeScript across the app
- **Easy deploys**: One‑click Vercel deployment

## Quick Start

Requirements:

- Node.js ≥ 18.18
- A package manager: `pnpm` (recommended), `npm`, `yarn`, or `bun`

Clone and install:

```bash
git clone <your-repo-url> portfolio
cd portfolio
pnpm install   # or your package manager of choice
```

Run locally:

```bash
pnpm dev
```

Build and start:

```bash
pnpm build
pnpm start
```

## Project Structure

```text
app/                 # App Router pages/layouts/components
  layout.tsx         # Root layout (metadata, fonts, providers)
  page.tsx           # Home page
  globals.css        # Global styles (Tailwind setup)
public/              # Static assets (images, icons, PDFs)
next.config.ts       # Next.js configuration
tsconfig.json        # TypeScript configuration
package.json         # Scripts and dependencies
```

## License

MIT © Robin. Feel free to use this as a starting point for your own portfolio.

---
