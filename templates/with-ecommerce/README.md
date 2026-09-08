# With E-Commerce — Full E-Commerce Template

A full-featured e-commerce platform built on Next.js 16 with Clerk authentication, Razorpay payments, Cloudinary media, Resend email, and Tiptap editor.

## Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Auth** | Clerk |
| **Database** | MongoDB + Mongoose |
| **Cache** | Redis (ioredis) |
| **Payments** | Razorpay |
| **Media** | Cloudinary |
| **Email** | Resend |
| **Editor** | Tiptap |
| **Forms** | react-hook-form + Zod |
| **Styling** | Tailwind CSS 4 + shadcn/ui |

## Quick Start

```bash
cp -r templates/with-ecommerce ./my-store
cd ./my-store
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values:

```bash
cp .env.example .env.local
```

See `.env.example` for all required environment variables with documentation.

## Features

- Product catalog with search and filters
- Shopping cart with Redis persistence
- Secure checkout with Razorpay
- Order management dashboard
- Admin panel for product management
- Rich product descriptions with Tiptap editor
- Image upload and optimization with Cloudinary
- Transactional emails (order confirmation, shipping updates)
- Clerk authentication with role-based access control
- Webhook handling for payment and email events
