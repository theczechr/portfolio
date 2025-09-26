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
public/              # Static assets (images, icons, PDFs) and Hyprfolio (embedded project)
next.config.ts       # Next.js configuration
tsconfig.json        # TypeScript configuration
package.json         # Scripts and dependencies
```

## Forking

Although I've done my best to make it easy to fork and use, this is my personal portfolio, so I've embedded one of my projects, [Hyprfolio](https://github.com/theczechr/hyprfolio), under the `/hyprfolio` route, you might wanna remove it ;). If you wanted to use it, it's included as a Git submodule, so you will need to initialize it after cloning (`git submodule update --init --recursive`).

Feel free to fork this repository and use it as a starting point for your own portfolio.

## License

MIT © Robin.

---
