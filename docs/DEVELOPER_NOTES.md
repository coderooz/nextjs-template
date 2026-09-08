# Developer Notes — nextjs-template

> Internal reference for developers working on this project.
> For user-facing docs, see `README.md`.

---

## Project Overview

A curated collection of production-ready Next.js project templates. Each template provides a different feature set for rapid project initialization. The project includes a CLI tool for template scaffolding.

**Repository:** [coderooz/nextjs-template](https://github.com/coderooz/nextjs-template)
**Version:** 0.1.0
**License:** MIT

---

## Quick Start (Development)

```bash
# Clone the repo
git clone https://github.com/coderooz/nextjs-template.git
cd nextjs-template

# Install dependencies
npm install

# Build templates
npm run build

# Lint templates
npm run lint

# Validate all templates
npm test
```

---

## Architecture

```
nextjs-template/
├── cli/                    # CLI entry point (npx nextjs-template)
├── templates/              # 4 Next.js templates
│   ├── minimal/            # Simple websites
│   ├── with-auth/          # + Clerk, MongoDB
│   ├── api-only/           # API-only backend
│   └── with-ecommerce/     # + Razorpay, Cloudinary, Resend
├── scripts/                # Build, lint, validate scripts
├── .opencode/              # AI agent definitions
│   └── agents/             # 16 agent .md files
└── opencode.jsonc          # Agent configuration (11 agents)
```

### Template Structure

Each template follows the same pattern:
- `package.json` — dependencies and scripts
- `tsconfig.json` — TypeScript strict mode
- `next.config.ts` — Next.js configuration
- `postcss.config.mjs` — PostCSS/Tailwind
- `components.json` — shadcn/ui config (where applicable)
- `src/app/` — App Router layout + pages
- `src/lib/utils.ts` — cn() utility (where applicable)
- `src/middleware.ts` — Middleware (auth templates)
- `.env.example` — Environment variable template
- `README.md` — Template-specific documentation

### Agent System

The project uses a multi-agent architecture defined in `opencode.jsonc`:

- **build** — Primary agent, full access, orchestrates all work
- **plan** — Read-only analysis and planning
- **planner** — Creates architecture plans (sub-agent)
- **coder** — Implements code (sub-agent)
- **template-builder** — Scaffolds new templates (sub-agent)
- **tester** — Runs tests (sub-agent)
- **code-reviewer** — Reviews code quality (sub-agent)
- **docs-validator** — Validates against docs (sub-agent)
- **analyzer** — Analyzes for tech debt (sub-agent)
- **setup** — Configures deployment (sub-agent)
- **issue-handler** — GitHub operations (sub-agent)

Agent definitions are in `.opencode/agents/*.md`.

---

## Conventions

### TypeScript
- Strict mode — no `any`, proper generics
- Prefer `interface` over `type` for object shapes
- Use `const` over `let`, never `var`

### React / Next.js
- Server Components by default
- `'use client'` only when needed
- `next/image` with explicit `width` and `height`

### Styling
- Tailwind CSS 4
- `cva()` for component variants
- `cn()` for class merging (clsx + tailwind-merge)

### API Routes
- Zod validation for all inputs
- Proper error handling and status codes

### Code Style
- Prettier with tailwindcss plugin
- ESLint flat config (in templates)
- Conventional commits: `type(scope): message`

---

## Scripts Reference

| Script | Purpose | Command |
|--------|---------|---------|
| `npm run build` | Build templates | `node scripts/build.js` |
| `npm run lint` | Lint templates | `node scripts/lint-templates.js` |
| `npm run format` | Format code | `prettier --write "**/*.{ts,tsx,...}"` |
| `npm run format:check` | Check formatting | `prettier --check "**/*.{ts,tsx,...}"` |
| `npm test` | Validate all | `node scripts/validate-all.js` |

---

## CLI Usage

The CLI is at `cli/index.js` and published as `nextjs-template` on npm.

```bash
# Create a new template
npx nextjs-template create-template my-template "A description"

# Use an existing template
npx nextjs-template use-template minimal ./my-project

# Validate a template
npx nextjs-template validate-template with-auth
```

---

## Template Development

### Creating a New Template

1. Use `/create-template <name> <features>` command
2. Or manually create `templates/<name>/` following existing patterns
3. Run `npm run lint` and `npm test` to validate
4. Update `README.md` with template documentation
5. Update `CHANGELOG.md`

### Template Checklist

- [ ] `package.json` with correct dependencies
- [ ] `tsconfig.json` with strict mode
- [ ] `next.config.ts` is valid
- [ ] Tailwind CSS configured
- [ ] `src/app/layout.tsx` exists
- [ ] `src/app/page.tsx` exists
- [ ] `.env.example` documented
- [ ] `README.md` with setup instructions
- [ ] Passes `npm run lint`
- [ ] Passes `npm test`

---

## CI/CD

### Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| ci.yml | push/PR to master | Build and validate |
| publish.yml | release published | Publish to npm |
| release.yml | push to master | Auto-create releases |
| security.yml | schedule/PR | Security scanning |
| stale.yml | schedule | Close stale issues |
| triage.yml | issue/PR events | Auto-label and triage |
| welcome.yml | first-time contributors | Welcome message |

### Dependabot

- npm dependencies: weekly
- GitHub Actions: weekly
- Auto-merge minor/patch updates

---

## Known Issues / Notes

- `package.json` `repository` field references `anomalyco/nextjs-template` but actual repo is `coderooz/nextjs-template` — needs update
- 16 agent .md files exist in `.opencode/agents/` but only 11 are configured in `opencode.jsonc` — 6 orphaned agents
- No test framework at root level — `npm test` runs validation scripts, not unit tests
- `.mcp-runtime.json` is ephemeral and should not be committed (currently is)
- `REPORT.md` was in project root (governance violation) — moved to `.workspace/reports/`

---

## Governance

This project follows OpenCode governance rules:
- `~/.config/opencode/GOVERNANCE.md` — global rules
- `~/.config/opencode/governance/PROJECT_WORKFLOW.md` — lifecycle stages
- `~/.config/opencode/governance/PROJECT_REFERENCE_INDEX.md` — PRI standard

Project-level reference: `.opencode/reference/PROJECT_REFERENCE_INDEX.md`

---

## Useful Links

- **Repo:** https://github.com/coderooz/nextjs-template
- **npm:** https://www.npmjs.com/package/nextjs-template (pending publish)
- **Issues:** https://github.com/coderooz/nextjs-template/issues
- **Docs:** C:\Code_Works\Docs\ (offline documentation)

---

*Last updated: 2026-09-08*
