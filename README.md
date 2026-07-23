# Automation Portfolio

Premium personal portfolio website built as an "Automation Control Center" — a dark, futuristic dashboard that positions you as an Automation Engineer, not just a student.

## Tech Stack

- **Next.js 15** — App Router
- **TypeScript** — Full type safety
- **Tailwind CSS** — Custom design tokens
- **Framer Motion** — Smooth animations
- **Lucide React** — Icon system

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Customize your content

All content is in **`data/portfolio.ts`** — edit this file to update:
- Your name, email, GitHub
- Stats (automations built, hours saved, etc.)
- Projects
- AMYT features
- Capabilities
- Testimonials
- Process steps

### 4. Replace placeholder images

Project preview cards use SVG-generated placeholders. To replace with real screenshots:
- Add screenshots to `/public/projects/`
- Update the `ProjectPreview` component in `components/sections/ProjectsSection.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect the repo in [vercel.com](https://vercel.com).

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AmytSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── SectionHeader.tsx
│       └── StatusBadge.tsx
├── data/
│   └── portfolio.ts      # ← EDIT THIS FILE for all content
├── lib/
│   └── utils.ts
├── styles/
│   └── globals.css
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Customization Tips

- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors`
- **Fonts**: Change Google Fonts import in `styles/globals.css`
- **Sections**: Each section is a standalone component in `components/sections/`
- **Animations**: Framer Motion variants are inline per component
