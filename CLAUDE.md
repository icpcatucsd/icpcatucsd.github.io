# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing/info site for the Competitive Programming Club at UC San Diego. Vue 3 (`<script setup>` SFCs) + vue-router + Vite, no backend, no test suite. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main` (`npm ci` → `npm run build` → upload `dist/`).

## Commands

```sh
npm install      # setup (Node ^20.19 || >=22.12)
npm run dev      # dev server with HMR + vue-devtools plugin
npm run build    # production build to dist/
npm run preview  # serve the built dist/ locally
npm run format   # prettier --write src/  (no semicolons, single quotes, printWidth 100)
```

There is no linter and no tests; `npm run build` is the only correctness gate.

## Architecture

- `src/main.js` — calls `initTheme()` **before** mounting, then mounts `App.vue` with the router.
- `src/App.vue` — the entire layout: `<Navbar /> <RouterView /> <Footer />`.
- `src/router/index.js` — flat, eagerly-imported route table using **`createWebHashHistory`** (URLs are `/#/resources`). This is deliberate: GitHub Pages can't rewrite unknown paths to `index.html`. Don't switch to web history without adding a 404 fallback, and don't hand-write links — use `RouterLink`.
- `src/views/*.vue` — one component per route, each rendering a `<section class="page">`.
- `src/components/*.vue` — presentational, prop-driven cards and nav pieces. `XLink` is the standard external link; `CtaBtn`, `InfoCard`, `EventTypeCard`, `MemberCard`, `TeamCard`, `HistoryCard` are the reusable shells views compose.
- `src/data/*.js` — plain exported constants that hold nearly all site content. Views import from `@/data/...` and iterate.
- `@` is aliased to `src/` in both `vite.config.js` and `jsconfig.json` (keep them in sync).

### Styling

Global stylesheet `src/assets/main.css` defines everything in CSS custom properties on `:root`, with a `[data-theme='dark']` block overriding only the tokens that change. Layout/typography utility classes (`.page`, `.section`, `.section--first`, `.card`, `.card-grid`, `.card-grid--col2`, `.card-title`, …) live there too; responsive behavior is mostly done by redefining the tokens inside `@media` blocks rather than per-component breakpoints.

Component styles are `<style scoped>` and should consume the tokens, never hardcode colors. When adding a color, add it as a token in both the `:root` and dark blocks.

`src/theme.js` owns theming: reads `localStorage['theme']`, falls back to `prefers-color-scheme`, and writes `document.documentElement.dataset.theme`. `ThemeToggle.vue` is the only caller of `toggleTheme()`. The embedded Google Calendar is inverted in dark mode via the `--calendar-filter` token.

Icons come from `@mdi/js` as path strings bound into inline `<svg><path :d="…" /></svg>`.

Images and PDFs live in `public/assets/**` and are referenced by absolute runtime paths (`/assets/teams/leadership/x.jpg`), not imports.

## Content updates

Most requests to "update the site" are data edits, not code edits:

| What | Where | Cadence |
| --- | --- | --- |
| Slack invite link | `src/data/links.js` | **expires every 30 days** |
| Weekly meeting time/place/quarter | `src/data/schedule.js` (`WEEKLY_MEETING`) | quarterly |
| Leadership roster + bios | `src/data/teams.js` (`LEADERSHIP`), images in `public/assets/teams/leadership/` | quarterly |
| Lecture slides & practice contests | `src/data/resources.js` (`SLIDES_BY_TERM`, `CONTESTS_BY_TERM`), PDFs in `public/assets/slides/` | quarterly |
| Team selection / SoCal regional dates | `src/data/schedule.js` (`TEAM_SELECTION`) | annual |
| Competing teams | `src/data/teams.js` (`COMPETING_TEAMS`), images in `public/assets/teams/competing/` | annual |
| Club history | `src/data/history.js`, images in `public/assets/history/` | annual |

`SLIDES_BY_TERM` and `CONTESTS_BY_TERM` are grouped by term and must stay ordered newest → oldest (comments in the file say so); `COMPETING_TEAMS` follows the same convention.

Not everything is in `src/data`: some dated copy is inline in views (e.g. the UCSD Cup date in `src/views/Schedule.vue` and `src/views/UcsdCup.vue`). Grep the year/date before assuming a data file covers it.
