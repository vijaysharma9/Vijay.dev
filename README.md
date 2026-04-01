# HireDeveloperShop Website (Next.js)

This repository contains the `hiredevelopershop.com` marketing website built with Next.js, React, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 14 (`app/` router)
- React 18 + TypeScript
- Tailwind CSS + PostCSS
- React Hook Form + Zod (form handling and validation)
- Vitest (unit tests)

## Project Structure

- `app/` - App Router pages, layout, global styles, and SEO routes (`robots`, `sitemap`).
- `app/(sections)/` - Section-oriented app content organization.
- `components/sections/` - Reusable landing page sections (hero, services, pricing, contact, etc.).
- `constants/` - Static content and configuration constants.
- `lib/` and `utils/` - Shared helpers (including schema/SEO utilities).
- `public/` and `assets/` - Static files and media.

## Main Homepage Sections

The home page (`app/page.tsx`) renders:

- Hero
- About
- Services
- Tech Stack
- Why Us
- Portfolio
- Pricing
- Testimonials
- CTA
- Contact

## SEO and Metadata

- Metadata is generated in `app/page.tsx`.
- JSON-LD schema is injected for organization, website, and services.
- `app/robots.ts` and `app/sitemap.ts` provide crawl/indexing metadata.

## Run Locally

Install dependencies:

```bash
npm install
```

Create a local env file:

```bash
cp .env.example .env.local
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start local development server.
- `npm run build` - Create production build.
- `npm run start` - Run production server.
- `npm run lint` - Run lint checks.
- `npm test` - Run unit tests once (Vitest).
- `npm run test:watch` - Run unit tests in watch mode (Vitest).

## Deployment

This project is ready for deployment on Vercel or any platform that supports Next.js.

For Vercel:

1. Import the repository in Vercel.
2. Keep default Next.js build settings.
3. Configure environment variables in project settings if needed.

## Contact form and FormSubmit.co

### API routes

- `POST /api/contact`: Validates a basic contact payload (`name`, `email`, `message`, optional `projectType`, `budgetRange`) and applies a simple IP rate-limit (default: 3/minute).
- `POST /api/contact/submit`: Validates an alternate contact payload used by some forms (`formType: "contact"`, `fullName`, `email`, `message`, optional phone/company fields).
- `GET /api/contact/health`: Returns `{ "success": true, "message": "API is healthy" }`.

### Email delivery

The contact sender (`lib/contact.ts`) uses:

- **Resend (preferred)** when `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `RESEND_TO_EMAIL` are set (or when `CONTACT_FORM_PROVIDER=resend` is set).
- **FormSubmit.co (fallback)** when `FORM_SUBMIT_TO_EMAIL` is set (or when `CONTACT_FORM_PROVIDER=formsubmit` is set).

See `.env.example` for the full list of env vars.

**FormSubmit one-time activation:** The first time you use an email address with FormSubmit, you must confirm it. Submit the contact form once from your live site (or send a test POST), then open that inbox and click the activation link in FormSubmit’s email. Until the address is activated, AJAX submissions may fail or return `success: "false"`. Set `NEXT_PUBLIC_SITE_URL` to your production origin so FormSubmit accepts the request headers.

**Health check:** `GET /api/contact/health` returns `{ "success": true, "message": "API is healthy" }` so you can confirm the App Router API is live on Vercel.

