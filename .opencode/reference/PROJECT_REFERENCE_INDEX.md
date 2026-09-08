# Project Reference Index — nextjs-template

```yaml
reference:
  name: PROJECT_REFERENCE_INDEX
  version: 1.0
  status: active
  last_verified: 2026-09-08
  verification_scope: full
  created: 2026-09-08
  last_updated: 2026-09-08
```

---

## 1. Project Identity

| Field | Value |
|-------|-------|
| Name | nextjs-template |
| Version | 0.1.0 |
| Type | npm package (CLI + template collection) |
| License | MIT |
| Author | Anomalyco |
| Repository | `coderooz/nextjs-template` (GitHub, public) |
| Package Manager | npm |
| Node Requirement | >=18.17.0 |
| Module System | ESM (`"type": "module"`) |

---

## 2. Technology Stack

| Layer | Technology |
|-------|-----------|
| Language | TypeScript (strict mode) |
| Runtime | Node.js >=18.17.0 |
| Framework | Next.js 16 (App Router) — in templates |
| Styling | Tailwind CSS 4 — in templates |
| UI | shadcn/ui patterns (cva + cn) — in templates |
| Auth | Clerk — in with-auth template |
| Database | MongoDB/Mongoose — in with-auth template |
| Payments | Razorpay — referenced in with-ecommerce |
| Email | Resend — referenced in with-ecommerce |
| Formatting | Prettier + prettier-plugin-tailwindcss |
| Linting | ESLint (in templates) |
| Model | deepseek-v4-flash-free (opencode) |

---

## 3. Root Structure

```
nextjs-template/
├── .editorconfig
├── .github/                    # GitHub configuration
├── .gitignore
├── .mcp-runtime.json           # MCP runtime state (ephemeral)
├── .npmignore
├── .nvmrc                      # Node version: 22
├── .opencode/                  # OpenCode agent configuration
│   ├── agents/                 # 16 agent definitions
│   ├── OPENCODE_STATE.md       # State report
│   ├── reference/              # Project Reference Index (this file)
│   └── package.json            # OpenCode package config
├── cli/                        # CLI entry point
├── docs-repo.project-mcp.json  # MCP project config
├── nextjs-template.project-mcp.json  # MCP project config
├── opencode.jsonc              # OpenCode agent/command config
├── package.json                # npm package manifest
├── scripts/                    # Build, lint, validate scripts
├── templates/                  # 4 project templates
├── .opencode/reference/        # PRI directory
├── .workspace/                 # Governance workspace (excluded from git)
├── AGENTS.md                   # Agent architecture docs
├── CHANGELOG.md                # Version changelog
├── CODE_OF_CONDUCT.md          # Community guidelines
├── CONTRIBUTING.md             # Contribution guide
├── LICENSE                     # MIT license
├── PULL_REQUEST_TEMPLATE.md    # PR template (root duplicate)
├── README.md                   # Project documentation
├── ROADMAP.md                  # Project roadmap
├── SECURITY.md                 # Security policy
└── package.json
```

---

## 4. Directory Reference

### `.github/`

Type: GitHub configuration directory

Purpose: Repository configuration, CI/CD, community templates

Contains:
- `workflows/` — 7 workflow files (ci, publish, release, security, stale, triage, welcome)
- `ISSUE_TEMPLATE/` — bug_report.md, feature_request.md, config.yml
- `PULL_REQUEST_TEMPLATE.md`
- `CODEOWNERS` — `* @coderooz`
- `FUNDING.yml` — github: anomalyco, buy_me_a_coffee: coderooz
- `dependabot.yml` — npm + github-actions weekly updates
- `settings.yml` — repo settings, branch protection, labels

Related: GitHub Actions, Dependabot

### `.opencode/`

Type: OpenCode agent configuration directory

Purpose: Agent definitions, state tracking, project reference

Contains:
- `agents/` — 16 agent definition files (.md)
- `OPENCODE_STATE.md` — project state report
- `reference/` — PROJECT_REFERENCE_INDEX.md (this file)
- `package.json` — OpenCode package config

Related: `opencode.jsonc`, `AGENTS.md`

### `cli/`

Type: CLI entry point

Purpose: npm-published CLI for template scaffolding

Contains:
- `index.js` — CLI entry point (MVP implementation)

Related: `package.json` bin field, `scripts/`

### `scripts/`

Type: Build and validation scripts

Purpose: Template building, linting, validation, and user-facing template copy

Contains:
- `build.js` — Template build script
- `lint-templates.js` — Template linting
- `validate-all.js` — Template validation
- `use-template.ps1` — PowerShell template copy script

Related: `package.json` scripts, `cli/`

### `templates/`

Type: Template collection directory

Purpose: Production-ready Next.js project templates

Contains:
- `minimal/` — Simple Next.js + Tailwind CSS
- `with-auth/` — + Clerk, MongoDB/Mongoose, Redis
- `api-only/` — API-only routes with Zod validation
- `with-ecommerce/` — + Razorpay, Cloudinary, Resend, Tiptap

Related: `cli/`, `scripts/`, README.md

### `templates/minimal/`

Type: Template — Minimal Next.js

Purpose: Simple websites, landing pages

Stack: Next.js 16, React 19, Tailwind CSS 4, TypeScript

Contains:
- `src/app/` — App Router (layout.tsx, page.tsx, globals.css)
- `src/lib/utils.ts` — cn() utility
- `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`
- `components.json` — shadcn/ui config
- `.env.example`, `.gitignore`, `README.md`

### `templates/with-auth/`

Type: Template — Authentication

Purpose: Apps requiring authentication

Stack: + Clerk, MongoDB/Mongoose, Redis

Contains:
- `src/app/(auth)/` — login/page.tsx, register/page.tsx (route groups)
- `src/app/dashboard/page.tsx` — protected route
- `src/middleware.ts` — Clerk middleware
- Standard config files + `.env.example`

### `templates/api-only/`

Type: Template — API Backend

Purpose: Backend-only services

Stack: Minimal Next.js + Zod validation

Contains:
- `src/app/api/[...route]/route.ts` — catch-all API route
- `src/app/api/health/route.ts` — health check endpoint
- Standard config files + `.env.example`

### `templates/with-ecommerce/`

Type: Template — E-commerce

Purpose: E-commerce platforms

Stack: + Razorpay, Cloudinary, Resend, Tiptap

Contains:
- `src/app/` — App Router (layout.tsx, page.tsx, globals.css)
- `src/middleware.ts` — middleware
- `src/lib/utils.ts` — cn() utility
- Standard config files + `.env.example`

---

## 5. File Reference

### `package.json`

Type: npm package manifest

Purpose: Package metadata, dependencies, scripts, bin entries

Important Fields:
- `name`: nextjs-template
- `version`: 0.1.0
- `bin`: nextjs-template → ./cli/index.js
- `scripts`: build, lint, format, test, prepare, prepublishOnly
- `files`: cli/, templates/, scripts/, README.md, LICENSE
- `publishConfig`: public, npmjs registry

### `opencode.jsonc`

Type: OpenCode configuration

Purpose: Agent definitions, commands, permissions, tooling config

Important Sections:
- `model`: deepseek-v4-flash-free
- `agent`: 11 named agents (build, plan, planner, coder, template-builder, tester, code-reviewer, docs-validator, analyzer, setup, issue-handler)
- `command`: 12 named commands (create-template, use-template, validate-template, analyze, plan, code, review, validate-docs, check, setup, gh-issue, gh-pr)
- `formatter`: prettier config
- `lsp`: typescript-language-server
- `shell`: powershell

### `AGENTS.md`

Type: Agent architecture documentation

Purpose: Describes the multi-agent system for template development

Contains:
- Agent hierarchy diagram (build primary → sub-agents)
- Available sub-agents list
- Commands reference
- Conventions (TypeScript strict, Server Components, cva/cn patterns)

### `CHANGELOG.md`

Type: Version changelog

Purpose: Track version changes

Current State: [0.1.0] Unreleased — 21 lines, covers initial release

### `README.md`

Type: Project documentation

Purpose: User-facing documentation

Contains:
- Project description
- Template categories
- Quick start instructions
- CLI usage
- Contributing guidelines link

---

## 6. Scripts & Commands

| Command | Script | Purpose |
|---------|--------|---------|
| `npm run build` | `node scripts/build.js` | Build templates |
| `npm run lint` | `node scripts/lint-templates.js` | Lint templates |
| `npm run format` | `prettier --write ...` | Format code |
| `npm run format:check` | `prettier --check ...` | Check formatting |
| `npm run prepare` | `node scripts/build.js` | Pre-install build |
| `npm run prepublishOnly` | `npm run lint` | Pre-publish lint |
| `npm test` | `node scripts/validate-all.js` | Validate all templates |

CLI commands (via `npx nextjs-template`):
- `/create-template <name> <features>` — Scaffold new template
- `/use-template <name> <target-dir>` — Copy template to target
- `/validate-template <name>` — Validate template completeness

---

## 7. Agent System

### Primary Agents (in opencode.jsonc)

| Agent | Mode | Purpose |
|-------|------|---------|
| build | primary | Default agent — full tool access, 50 steps |
| plan | primary | Read-only analysis and planning |

### Sub-Agents (in opencode.jsonc)

| Agent | Purpose |
|-------|---------|
| planner | Creates architecture plans |
| coder | Implements production code |
| template-builder | Scaffolds new templates |
| tester | Runs tests, adds coverage |
| code-reviewer | Reviews code quality |
| docs-validator | Validates against offline docs |
| analyzer | Analyzes for tech debt |
| setup | Configures deployment/env |
| issue-handler | GitHub issues and PRs |

### Agent Definition Files (.opencode/agents/)

16 .md files defining agent behavior:
analyzer, architect, bug-fixer, code-reviewer, coder, devops, docs-validator, documentor, issue-handler, planner, project-lead, researcher, reviewer, setup, template-builder, tester

Note: opencode.jsonc defines 11 agents; .opencode/agents/ has 16 .md files. Some .md files (architect, bug-fixer, devops, documentor, project-lead, researcher, reviewer) are not referenced in opencode.jsonc.

---

## 8. Configuration

### `.editorconfig`

Purpose: Editor formatting consistency

### `.prettierrc`

Purpose: Prettier formatting config

### `.nvmrc`

Purpose: Node version pinning (Node 22)

### `.npmignore`

Purpose: Files excluded from npm publish

### `.gitignore`

Purpose: Files excluded from git

Currently excludes: node_modules, .next, dist, build, env files, logs, coverage, tmp

Missing: `.workspace/` (governance workspace — needs to be added)

### `.mcp-runtime.json`

Purpose: MCP runtime state (ephemeral, port 47000, project: docs-repo)

### `docs-repo.project-mcp.json`

Purpose: MCP project configuration for docs-repo

### `nextjs-template.project-mcp.json`

Purpose: MCP project configuration for nextjs-template

---

## 9. GitHub Configuration

| Item | Status |
|------|--------|
| Repository | coderooz/nextjs-template (public) |
| Default Branch | master |
| CODEOWNERS | `* @coderooz` |
| Dependabot | npm + github-actions, weekly |
| Funding | GitHub Sponsors + Buy Me a Coffee |
| Issue Templates | bug_report, feature_request |
| PR Template | PULL_REQUEST_TEMPLATE.md |
| Workflows | ci, publish, release, security, stale, triage, welcome |

---

## 10. Known Structural Notes

- No test framework configured at root level (templates have their own)
- No CI/CD pipeline for the root project (workflows exist but are template-focused)
- REPORT.md was in project root (governance violation) — moved to `.workspace/reports/`
- `docs/` directory does not exist (Developer Notes will be created here)
- `.workspace/` directory does not exist (will be created per governance)
- package.json `repository` field references `anomalyco/nextjs-template` but repo is `coderooz/nextjs-template`
- 16 agent .md files exist but only 11 are configured in opencode.jsonc

---

## 11. Reference Maintenance Log

### 2026-09-08

Change: Initial PRI creation

Classification: ADDED

Updated:
- Created full project reference index
- Documented all directories, files, scripts, agents, and configuration
- Verified all paths against actual repository

Verification: FULL
