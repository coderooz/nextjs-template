<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fnext-logo.png&w=3840&q=75">
  <img alt="Next.js" src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnext-logo.png&w=3840&q=75" width="400">
</picture>

# nextjs-template

[![CI](https://github.com/anomalyco/nextjs-template/actions/workflows/ci.yml/badge.svg)](https://github.com/anomalyco/nextjs-template/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/nextjs-template)](https://www.npmjs.com/package/nextjs-template)
[![npm downloads](https://img.shields.io/npm/dm/nextjs-template)](https://www.npmjs.com/package/nextjs-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**A curated collection of production-ready Next.js 16 project templates.**
Scaffold a full-stack app in seconds — pick your stack, copy, build.

---

## Quick Start

```bash
# Using npx (coming soon)
npx create-nextjs-template use minimal ./my-app

# Manual copy
cp -r templates/minimal ./my-app
cd ./my-app
npm install
npm run dev
```

## Available Templates

| Template | Stack | Use Case | Status |
|----------|-------|----------|--------|
| [`minimal`](templates/minimal/) | Next.js 16, React 19, Tailwind CSS 4, TypeScript | Simple websites, landing pages | Stable |
| [`with-auth`](templates/with-auth/) | + Clerk, MongoDB/Mongoose, Redis, Resend | Apps requiring authentication | Stable |
| [`api-only`](templates/api-only/) | Zod validation, MongoDB/Mongoose, API routes | Backend-only services | Stable |
| [`with-ecommerce`](templates/with-ecommerce/) | Clerk, Razorpay, Cloudinary, Resend, Tiptap | E-commerce platforms | Draft |

### template: minimal

The fundamental building block — a lightweight, production-ready Next.js app with TypeScript strict mode, Tailwind CSS 4, and shadcn/ui utilities.

```
features/
├── TypeScript strict mode
├── Tailwind CSS 4 with CSS-based config
├── cva() + cn() component utilities
├── PostCSS with @tailwindcss/postcss
├── ESLint 9 flat config
├── Prettier with tailwindcss plugin
└── Dark/light mode ready
```

### template: with-auth

Everything from `minimal`, plus a complete authentication system using Clerk, MongoDB for data persistence, Redis for caching/sessions, and Resend for transactional emails.

```
features/
├── All minimal template features
├── Clerk authentication (sign-in, sign-up, dashboard)
├── Protected routes via Clerk middleware
├── MongoDB/Mongoose connection utility
├── Redis client (ioredis)
├── Webhook handler (Svix)
├── Zod validation for API routes
└── Full .env.example documentation
```

### template: api-only

Minimal, fast API service built on Next.js route handlers. No frontend overhead — just endpoints, validation, and database.

```
features/
├── Catch-all API route with Zod validation
├── Health check endpoint
├── MongoDB/Mongoose connection
├── Minimal dependency footprint
└── Optimized for server deployment
```

### template: with-ecommerce

Full-featured e-commerce foundation (draft). Planned integrations include payment processing, media management, email automation, and rich content editing.

---

## CLI Usage

When installed globally or via `npx`:

```bash
# List available templates
npx nextjs-template list

# Show detailed info about a template
npx nextjs-template info <name>

# Copy a template to a target directory
npx nextjs-template use <name> <target-dir>
```

### Manual Template Usage

```powershell
# PowerShell
.\scripts\use-template.ps1 -TemplateName minimal -TargetDir C:\Projects\my-app -AppName my-app
```

```bash
# Bash / macOS / Linux
cp -r templates/minimal ./my-project
cd ./my-project
npm install
npm run dev
```

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5.7 (strict mode) |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | shadcn/ui patterns (cva + cn) |
| **Linting** | ESLint 9 flat config |
| **Formatting** | Prettier + prettier-plugin-tailwindcss |
| **Package Manager** | npm |

## Project Structure

```
nextjs-template/
├── cli/                    # CLI entry point (npx)
│   └── index.js
├── scripts/                # Build, validation, deployment
│   ├── build.js
│   ├── lint-templates.js
│   ├── use-template.ps1
│   └── validate-all.js
├── templates/              # Project templates
│   ├── minimal/
│   ├── with-auth/
│   ├── api-only/
│   └── with-ecommerce/
├── .github/                # GitHub config
│   ├── workflows/          # CI, release, publish
│   ├── ISSUE_TEMPLATE/
│   ├── dependabot.yml
│   ├── FUNDING.yml
│   └── settings.yml
├── package.json            # npm package config
├── AGENTS.md               # OpenCode agent architecture
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── ROADMAP.md
├── SECURITY.md
└── README.md
```

## OpenCode Agent System

This project is managed by [OpenCode](https://opencode.ai) with 11 specialized agents for development, testing, code review, and deployment.

| Agent | Role |
|-------|------|
| `build` | Default agent, full tool access |
| `plan` | Read-only planning and analysis |
| `planner` | Architecture and implementation plans |
| `coder` | Production code implementation |
| `template-builder` | Scaffold new templates |
| `tester` | Playwright + Vitest test management |
| `code-reviewer` | TypeScript/React quality review |
| `docs-validator` | Cross-reference against docs |
| `analyzer` | Architecture and tech debt analysis |
| `setup` | Deployment, env, CI/CD config |
| `issue-handler` | GitHub issues and PRs |

```bash
/validate-template <name>   # Check template completeness
/create-template <name> ... # Scaffold a new template
/use-template <name> <dir>  # Deploy template
/check                      # Full validation
/analyze                    # Codebase analysis
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- [Bug Reports](.github/ISSUE_TEMPLATE/bug_report.md)
- [Feature Requests](.github/ISSUE_TEMPLATE/feature_request.md)
- [Pull Requests](PULL_REQUEST_TEMPLATE.md)

## Security

Report security vulnerabilities via [GitHub Security Advisories](https://github.com/anomalyco/nextjs-template/security/advisories/new). See [SECURITY.md](SECURITY.md) for details.

## License

This project is [MIT licensed](LICENSE).

---

<p align="center">
  <sub>Built with ❤️ by <a href="https://github.com/anomalyco">Anomalyco</a></sub>
</p>
