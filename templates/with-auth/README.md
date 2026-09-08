# Next.js with Auth Template

Next.js 16 template with Clerk authentication, MongoDB database, and Redis caching.

## Stack
- **Framework:** Next.js 16 (App Router)
- **Auth:** Clerk (middleware, components, webhooks)
- **Database:** MongoDB + Mongoose
- **Caching:** Redis (ioredis)
- **Styling:** Tailwind CSS 4
- **UI:** shadcn/ui patterns

## Quick Start
```bash
npm install
# Copy .env.example to .env.local and fill in values
cp .env.example .env.local
npm run dev
```

## Environment Variables
| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `MONGODB_URI` | MongoDB connection string |
| `REDIS_URL` | Redis connection URL |
| `NEXT_PUBLIC_APP_URL` | Application URL |

## Auth Flow
- **Middleware**: Protected routes via Clerk middleware
- **Sign-in/up**: Clerk components in `(auth)` route group
- **Protected**: Dashboard requires authentication
- **Webhooks**: Clerk webhook handler for user management

## Project Structure
```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── dashboard/page.tsx
│   ├── layout.tsx        # With ClerkProvider
│   ├── page.tsx          # Public landing
│   └── globals.css
├── middleware.ts          # Clerk middleware
└── lib/
    ├── db.ts             # MongoDB connection
    ├── redis.ts          # Redis client
    └── utils.ts          # cn() utility
```
