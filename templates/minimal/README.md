# Minimal Next.js Template

A bare-bones Next.js 16 starter with TypeScript, Tailwind CSS 4, and shadcn/ui patterns.

## Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **UI:** shadcn/ui (cva + cn)
- **Linting:** ESLint 9 flat config
- **Formatting:** Prettier + prettier-plugin-tailwindcss

## Quick Start
```bash
npm install
npm run dev
```

## Available Scripts
- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint
- `npm run typecheck` — Run TypeScript check

## Project Structure
```
src/
├── app/
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Landing page
│   └── globals.css   # Tailwind directives
└── lib/
    └── utils.ts      # cn() utility
```
