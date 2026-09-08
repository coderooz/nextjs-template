# nextjs-template — Agent Architecture

## Project Overview
A curated collection of Next.js project templates for rapid project initialization. Each template provides a production-ready foundation with different feature sets.

## Template Categories

| Template | Stack | Use Case |
|----------|-------|----------|
| `minimal/` | Next.js 16, React 19, Tailwind CSS 4, TypeScript | Simple websites, landing pages |
| `with-auth/` | + Clerk, MongoDB/Mongoose, Redis | Apps requiring authentication |
| `with-ecommerce/` | + Razorpay, Cloudinary, Resend, Tiptap | E-commerce platforms |
| `api-only/` | Minimal API routes, Zod validation | Backend-only services |

## Tech Stack (Shared)
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui patterns (cva + cn)
- **Linting:** ESLint 9 flat config
- **Formatting:** Prettier + prettier-plugin-tailwindcss

## Agent Architecture

```
┌───────────────────────────────────────────────────┐
│               build (PRIMARY)                      │
│  Default agent — full tool access, 50 steps        │
│  Task delegation to all sub-agents                 │
├───────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐     │
│  │ planner  │  │  coder   │  │ template-bld  │     │
│  │(SUBAGENT)│  │(SUBAGENT)│  │ (SUBAGENT)   │     │
│  └──────────┘  └──────────┘  └──────────────┘     │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐     │
│  │ tester   │  │code-rev. │  │ docs-val     │     │
│  │(SUBAGENT)│  │(SUBAGENT)│  │ (SUBAGENT)   │     │
│  └──────────┘  └──────────┘  └──────────────┘     │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐     │
│  │ analyzer │  │  setup   │  │issue-handler │     │
│  │(SUBAGENT)│  │(SUBAGENT)│  │ (SUBAGENT)   │     │
│  └──────────┘  └──────────┘  └──────────────┘     │
└───────────────────────────────────────────────────┘
```

## Available Sub-agents
- `@planner` — Creates feature/architecture plans
- `@coder` — Implements code following plans
- `@template-builder` — Creates new templates from specs
- `@tester` — Runs tests, adds coverage
- `@code-reviewer` — Reviews code quality, types, patterns
- `@docs-validator` — Validates code against offline docs
- `@analyzer` — Analyzes codebase for tech debt
- `@setup` — Configures deployment, env, CI/CD
- `@issue-handler` — GitHub issues and PRs

## Commands
- `/create-template <name> <features>` — Scaffold a new template
- `/use-template <name> <target-dir>` — Copy template to target
- `/validate-template <name>` — Validate template completeness
- `/check` — Typecheck + lint
- `/gh-issue`, `/gh-pr` — GitHub operations

## Conventions
- TypeScript strict mode — no `any`, proper generics
- Server Components by default; `'use client'` only for interactivity
- `cva()` for component variants, `cn()` for class merging
- `next/image` with explicit `width` and `height`
- Zod validation for all API routes
- Proper error boundaries and loading states
