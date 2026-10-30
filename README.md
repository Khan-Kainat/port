# Kainat — Personal Portfolio Website

A clean, modern, responsive single-page portfolio for **Kainat**, first-year AI & Data Science student at Nexcore Institute of Technology, Mumbai.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

---

## 🚀 How to Run

### Development (live-reload, instant changes)

```bash
cd port
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
cd port
npm run build
npm run start
```

---

## 📁 Project Structure

```
port/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (fonts, metadata, head)
│   │   ├── page.tsx            ← Main single-page portfolio
│   │   ├── globals.css         ← Base Tailwind + custom CSS
│   │   └── projects/[slug]/    ← Individual project detail pages
│   ├── components/
│   │   ├── navigation/         ← Sticky navbar + mobile menu
│   │   ├── hero/               ← Hero section + visual card
│   │   ├── about/              ← About me + info blocks
│   │   ├── skills/             ← Skills by category
│   │   ├── projects/           ← Project cards + modal + graphics
│   │   ├── journey/            ← Learning timeline
│   │   ├── approach/           ← 3 working principles
│   │   ├── contact/            ← Contact form + social links
│   │   ├── footer/             ← Footer
│   │   └── common/             ← Monogram logo, brand icons
│   └── data/
│       └── portfolioData.ts    ← ⭐ All your content lives here
└── public/
    └── favicon.svg             ← SVG favicon (K monogram)
```

---

## ✏️ How to Customize

### Update Personal Details

Open **`src/data/portfolioData.ts`** — everything you need to change is in one file:

- **`personalInfo.contacts.email`** → replace `kainat.student@example.com` with your real email
- **`personalInfo.contacts.github`** → replace with your GitHub profile URL
- **`personalInfo.contacts.linkedin`** → replace with your LinkedIn profile URL

### Add or Edit Projects

In `portfolioData.ts`, edit the `projects` array. Each project has:
- `title`, `shortDescription`, `fullDescription`
- `tags` — technology / tool labels
- `badge` — e.g. `"Front-End Concept"` or `"Coursework Project"`
- `conceptNotes.problem`, `conceptNotes.approach`, `conceptNotes.learnings[]`
- `demoUrl` and `githubUrl` — set to real links when available

### Add a Real Photo

Replace the `HeroVisual` component in `src/components/hero/HeroVisual.tsx` with an `<Image>` tag pointing to your photo in `public/`. The component uses Next.js's `<Image>` for optimized delivery.

### Update Project Preview Graphics

Each project card visual is defined in `src/components/projects/ProjectPreviewGraphic.tsx`. You can swap the CSS-drawn mockups for real screenshots by adding images to `public/projects/` and using `<Image>` tags.

---

## 🎨 Color Palette

| Token | Hex | Usage |
|---|---|---|
| Pure White | `#FFFFFF` | Main background |
| Soft White | `#F7F9FC` | Alternate sections, card backgrounds |
| Primary Blue | `#2563EB` | Buttons, links, active states |
| Light Blue | `#DBEAFE` | Soft accents, icon backgrounds |
| Charcoal | `#242B36` | Headings, important text |
| Slate Gray | `#64748B` | Secondary text, descriptions |
| Light Border | `#E2E8F0` | Card outlines, dividers |

---

## 📡 Connect the Contact Form to Real Email

Right now the form validates inputs client-side and shows a success state. To wire it up to actually send email, choose one of these free student-friendly services:

- **[Formspree](https://formspree.io/)** — free tier, just add your email and use their `<form action="...">` endpoint
- **[EmailJS](https://www.emailjs.com/)** — free tier, works with any email provider, no backend needed
- **[Resend](https://resend.com/)** — free tier with developer API

Update `src/components/contact/ContactSection.tsx` → `handleSubmit` to POST to your chosen endpoint.

---

## 🌐 Publishing (Free Options)

### Vercel (Recommended — 1 command)

```bash
npx vercel
```

Follow the prompts. Your site will be live at `https://your-project.vercel.app` in minutes.

### Netlify

Push to GitHub, then connect your repo at [app.netlify.com](https://app.netlify.com). Set build command to `npm run build` and publish directory to `.next`.

---

## 🔤 Fonts

- **Headings:** [Sora](https://fonts.google.com/specimen/Sora) — loaded from Google Fonts
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) — loaded from Google Fonts

Fonts load via a `<link>` in `src/app/layout.tsx`. No build step required.

---

*Designed and built while learning. — Kainat, 2026*
