# BCAway Documentation

Official documentation for **BCAway** — real-time teacher absences and daily bell schedules for Bergen County Academies students.

Built with Next.js, React, Tailwind CSS, and MDX components, mimicking the UI/UX architecture of [Expo Docs](https://docs.expo.dev/) with the visual styling and branding of `bcaway-landing` and `bcaway-app`.

---

## Features

- **Expo Docs Layout Architecture**:
  - Sticky frosted header with brand logo, search modal (`⌘K`), and dark/light mode toggle.
  - Left navigation sidebar with categorized sections, active link highlighting, and status badges (`Beta`, `New`).
  - Right sidebar with dynamic scrollspy Table of Contents (`On this page`).
  - Mobile responsive drawer navigation.
- **Article & MDX Primitives**:
  - `<Step>`: Procedural workflow steps connected with a vertical timeline line.
  - `<Terminal>`: Interactive shell block with package manager switcher (`npm`, `pnpm`, `yarn`, `bun`) and clipboard copying.
  - `<Callout>`: Admonitions for `info`, `warning`, `danger`, and `tip` / `success`.
  - `<Tabs>`: Multi-platform segmented tab switcher.
  - `<Collapsible>`: Accordions for deep-dive technical notes.
  - `<PlatformTags>`: Platform badge indicators (`iOS`, `iPadOS`, `macOS`, `Android`, `Web`).
  - `<Badge>`: Status chips matching BCAway schedule tokens (`Beta`, `New`, `Free Period`, `In Class`, `Away`).
- **Initial Sections**:
  - `/install-beta`: Comprehensive walkthrough for installing BCAway Beta via Apple TestFlight, including device requirements, beta lifecycle, feedback reporting, and attendance disclaimers.
  - `/test`: Kitchen sink testing page demonstrating all MDX elements, typography, and responsive layouts.

---

## Getting Started

### Development Server

Run the development server:

```bash
bun dev
# or
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the docs.

### Production Build

```bash
bun run build
bun run start
```
