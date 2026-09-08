# Roadmap

## Phase 1 — Foundation (Current)

- [x] Project architecture and agent system
- [x] Four template categories (minimal, with-auth, api-only, with-ecommerce)
- [x] OpenCode integration with 11 sub-agents
- [x] GitHub repository setup (CI, community files, templates)
- [x] npm package configuration
- [ ] CLI tool MVP (`npx create-nextjs-template`)
- [ ] Template validation scripts

## Phase 2 — Hardening

- [ ] Production testing for all templates
- [ ] E2E tests with Playwright for `minimal` and `with-auth`
- [ ] Unit tests for shared utilities (cn, db, api handlers)
- [ ] Security audit of all templates
- [ ] Performance benchmarking

## Phase 3 — Expansion

- [ ] **`with-content`** template — MDX, Contentlayer, blog/cms setup
- [ ] **`with-realtime`** template — WebSockets, Socket.io, live collaboration
- [ ] **`with-ai`** template — Vercel AI SDK, OpenAI, streaming
- [ ] **`enterprise`** template — Monorepo, Turborepo, RBAC, audit logging
- [ ] PWA support for applicable templates
- [ ] i18n / localization support

## Phase 4 — Ecosystem

- [ ] Interactive CLI with prompts (template selection, features toggling)
- [ ] VSCode extension for template preview
- [ ] Template versioning and migration guides
- [ ] Community template registry
- [ ] Automated template updates via Renovate / Dependabot

## Phase 5 — Polish

- [ ] Full documentation site (docs.nextjs-template.dev)
- [ ] Video tutorials for each template
- [ ] Integration examples (Vercel, Railway, Docker)
- [ ] Benchmark dashboards

---

> **Note:** This roadmap is a living document. Priorities may shift based on community feedback and technological changes.
