# API-Only Next.js Template

Backend-only Next.js 16 template with API routes, Zod validation, and MongoDB.

## Stack
- **Framework:** Next.js 16 (App Router)
- **Validation:** Zod
- **Database:** MongoDB + Mongoose
- **Language:** TypeScript (strict mode)

## Quick Start
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Structure
```
src/
├── app/api/
│   ├── [...route]/route.ts  # Catch-all API handler
│   └── health/route.ts      # Health check endpoint
└── lib/
    ├── db.ts              # MongoDB connection
    ├── validators.ts      # Zod schemas
    └── utils.ts           # Helpers
```
