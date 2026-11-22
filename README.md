# Pixelforge Studio: Design Agency Homepage

A responsive, single-page design agency website built for the Next.js Developer Internship task.

**Live demo:** https://agency-site-one-taupe.vercel.app
**Repository:** https://github.com/Hafiz12112003/agency-site

## Sections

1. **Hero:** agency name, tagline, call-to-action buttons, and a geometric tile composition.
2. **Services:** 4 cards with custom SVG icons, titles and short descriptions.
3. **Portfolio:** bento grid of 6 projects with image thumbnails, titles, tags and hover effects.
4. **Contact:** name, email and message fields with validation and a success message.

## Tech Stack

- Next.js 16 (App Router)
- React 19 (functional components only)
- Tailwind CSS v4
- next/font (Space Grotesk and Instrument Serif)
- next/image for image optimization

## Setup Instructions

    git clone https://github.com/Hafiz12112003/agency-site.git
    cd agency-site
    npm install
    npm run dev

Open http://localhost:3000 in your browser.

Production build:

    npm run build
    npm start

## Folder Structure

    app/
      layout.js        Root layout, fonts, SEO metadata, theme script
      page.js          Home page that composes all sections
      globals.css      Tailwind import, theme tokens, animations
    components/
      Navbar.js        Sticky nav with mobile menu
      ThemeToggle.js   Dark mode toggle (saved in localStorage)
      Hero.js
      Marquee.js
      Services.js
      Portfolio.js
      Contact.js
      Footer.js
      Reveal.js        Scroll-reveal wrapper (IntersectionObserver)
      Icons.js         Custom SVG icon set
    public/portfolio/  Project thumbnails (SVG)

## Bonus Features Included

- Tailwind CSS
- Scroll-reveal, marquee and hover animations (respects prefers-reduced-motion)
- SEO metadata (title, description, keywords, Open Graph)
- Dark mode toggle with saved preference and no flash on load
- Image optimization with next/image

## Assumptions and Notes

- The contact form has no backend. Submission is simulated with a short delay and a success message after client-side validation.
- Project thumbnails are original SVG artworks created for this task, so there are no external image dependencies or copyright concerns.
- Agency name, clients and statistics are fictional placeholder content.
- No templates were used. All components and styles are written from scratch.

