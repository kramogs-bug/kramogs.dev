# John Mark Valdez — OJT Portfolio

A responsive portfolio for John Mark R. Valdez, a fourth-year Computer Engineering student focused on full-stack web development and automation.

## Highlights

- OJT-focused profile, availability, education, and work background
- Four selected projects with live links and available source repositories
- Technical skills and Cisco Networking Academy course certificates
- Downloadable resume and direct contact links
- Responsive desktop and mobile layouts

## Tech stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npx tsc --noEmit
npm run build
```

## Content

Portfolio data is maintained in `data/portfolio.ts`. Project screenshots, the profile photo, and the downloadable resume are stored under `public/`.

## Deployment

The project is configured for Vercel and deploys as a statically rendered Next.js portfolio.
