# nextjs-template — Project Report

## Purpose
A curated collection of production-ready Next.js project templates. Designed to be the single starting point for all future Next.js projects — pick the template that matches your requirements, scaffold it, and start building immediately.

## Architecture

```
nextjs-template/
├── AGENTS.md               # Agent architecture & conventions
├── opencode.jsonc           # OpenCode configuration (11 agents, 12 commands)
├── REPORT.md                # This file
├── .opencode/agents/        # 9 sub-agent definitions
├── scripts/
│   └── use-template.ps1     # Template deployment script
└── templates/               # Project templates
    ├── minimal/             # Basic Next.js 16 + TS + Tailwind
    ├── with-auth/           # + Clerk + MongoDB + Redis
    ├── api-only/            # Backend-only with Zod + MongoDB
    └── with-ecommerce/      # (Draft) Full e-commerce stack
```

## Template Catalog

### 1. `minimal` — Lightweight Starter
**Use when:** Building a simple website, landing page, or blog
**Stack:** Next.js 16, React 19, TypeScript (strict), Tailwind CSS 4, shadcn/ui patterns
**Files:** 12 production-ready files
- Full TypeScript strict mode config
- Tailwind CSS 4 with theme tokens (dark/light mode)
- `cn()` utility with tailwind-merge + clsx
- shadcn/ui components.json pre-configured
- PostCSS with @tailwindcss/postcss

### 2. `with-auth` — Authentication Ready
**Use when:** Building an app that needs user accounts, authentication, and database
**Stack:** Minimal stack + Clerk, MongoDB/Mongoose, Redis, Resend
**Files:** 12 files including:
- Clerk middleware with route protection
- Sign-in / Sign-up pages with Clerk components
- Protected dashboard page
- MongoDB connection utility
- Redis client setup
- All required environment variables documented

### 3. `api-only` — Backend Service
**Use when:** Building an API service without a frontend
**Stack:** Next.js API routes, Zod validation, MongoDB/Mongoose
**Features:**
- Catch-all API route handler with Zod validation
- Health check endpoint
- MongoDB connection setup
- Minimal dependencies, fast builds

### 4. `with-ecommerce` — Full Commerce (Draft)
**Status:** Structure scaffolded, awaiting implementation
**Planned:** Clerk auth, Razorpay payments, Cloudinary media, Resend email, Tiptap editor

## How to Use

### Manual Copy
```bash
# Copy a template to a new project
cp -r templates/minimal /path/to/new-project
cd /path/to/new-project
npm install
npm run dev
```

### Using the Script
```powershell
.\scripts\use-template.ps1 -TemplateName minimal -TargetDir C:\Projects\my-new-app -AppName my-new-app
```

### Using OpenCode
```
/create-template <name> <features>   # Scaffold a new template
/use-template <name> <target-dir>    # Deploy template to target
/validate-template <name>            # Check template completeness
```

## Agent System
The project includes 11 agents configured through opencode.jsonc:

| Agent | Role |
|-------|------|
| `build` (primary) | Default development agent, full tool access |
| `plan` (primary) | Read-only planning and analysis |
| `planner` | Architecture and implementation plans |
| `coder` | Production code implementation |
| `template-builder` | Scaffold new templates from specs |
| `tester` | Playwright + Vitest test management |
| `code-reviewer` | TypeScript/React code quality review |
| `docs-validator` | Cross-reference against offline docs |
| `analyzer` | Codebase architecture and tech debt analysis |
| `setup` | Deployment, CI/CD, and environment config |
| `issue-handler` | GitHub issues and PRs via gh CLI |

## Design Decisions
- **TypeScript strict mode** enforced across all templates — no implicit `any`
- **Server Components by default** — client boundary only where needed
- **shadcn/ui patterns** — cva() for variants, cn() for class merging
- **Tailwind CSS 4** with CSS-based configuration (no tailwind.config.js needed)
- **Atomic template design** — each template is independent and self-contained
- **OpenCode integration** — full agent automation for template management
