# Contributing to nextjs-template

Thank you for considering contributing! This project provides production-ready Next.js project templates, and we welcome contributions of all kinds — new templates, bug fixes, feature enhancements, documentation improvements, and more.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Creating a New Template](#creating-a-new-template)
- [Template Conventions](#template-conventions)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)

## Code of Conduct

This project follows a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/<your-username>/nextjs-template.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feat/your-feature-name`

## Development Workflow

This project uses [OpenCode](https://opencode.ai) for agent-assisted development. The project includes 11 specialized agents configured in `opencode.jsonc`.

### Using OpenCode Agents

```bash
# Validate a template
/validate-template <name>

# Analyze codebase quality
/analyze

# Create a new template
/create-template <name> <features>

# Copy template to target directory
/use-template <name> <target-dir>
```

### Manual Testing

```bash
# Validate all templates
npm test

# Type-check a specific template
cd templates/<name> && npx tsc --noEmit

# Lint a specific template
cd templates/<name> && npm run lint
```

## Creating a New Template

1. Run `npx nextjs-template create <template-name>` (once the CLI is available) or manually scaffold:
   - `templates/<name>/package.json`
   - `templates/<name>/tsconfig.json`
   - `templates/<name>/next.config.ts`
   - `templates/<name>/src/app/layout.tsx`
   - `templates/<name>/src/app/page.tsx`
   - `templates/<name>/.env.example`
   - `templates/<name>/README.md`
2. Follow the [Template Conventions](#template-conventions)
3. Run validation: `npm test`

## Template Conventions

Every template **must** follow these conventions:

### TypeScript & Configuration
- `tsconfig.json`: strict mode enabled (`strict: true`)
- No implicit `any` — use proper TypeScript types
- Path alias `@/*` mapped to `./src/*`

### React & Next.js
- Server Components by default; `'use client'` only for interactivity
- Use `cva()` from `class-variance-authority` for component variants
- Use `cn()` utility (clsx + tailwind-merge) for class merging
- Use `next/image` with explicit `width` and `height`
- Proper error boundaries and loading states

### API Routes
- Zod validation for all API request bodies
- Proper HTTP status codes and error responses

### Environment Variables
- Document every env var in `.env.example` with a comment explaining its purpose
- Group related vars with section headers

### Package Conventions
- All templates use `next` ^16.0.0 and `react` ^19.0.0
- Tailwind CSS 4 with CSS-based configuration
- `scripts`: `dev`, `build`, `start`, `lint`, `typecheck`

## Pull Request Process

1. Ensure your code follows the [Template Conventions](#template-conventions)
2. Update documentation (README, env example) if needed
3. Run template validation: `npm test`
4. Create a PR using the [pull request template](PULL_REQUEST_TEMPLATE.md)
5. A maintainer will review your PR within 5 business days

### PR Title Convention

```
<type>(<scope>): <description>
```

Types: `feat`, `fix`, `docs`, `refactor`, `chore`, `test`, `style`

Examples:
- `feat(minimal): add landing page component`
- `fix(with-auth): correct Clerk middleware paths`
- `docs: update contributing guide`

## Style Guide

We use Prettier with the following settings:

- `semi`: true
- `singleQuote`: true
- `tabWidth`: 2
- `trailingComma`: all
- `printWidth`: 100

```bash
npm run format        # Format all files
npm run format:check  # Check formatting
```

## Need Help?

- Open a [GitHub Discussion](https://github.com/anomalyco/nextjs-template/discussions)
- Check the [README](README.md) for template-specific documentation
- Review existing templates in the `templates/` directory for reference patterns
