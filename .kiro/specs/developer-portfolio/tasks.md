# Implementation Plan: Developer Portfolio

## Tasks

- [x] 1. Project Setup
  - [x] 1.1 Initialize Next.js 14 project with TypeScript and Tailwind CSS (`npx create-next-app@latest --typescript --tailwind`)
  - [x] 1.2 Install dependencies: `framer-motion`, `next-themes`, `emailjs-com`, `fast-check`, `@testing-library/react`, `vitest`
  - [x] 1.3 Configure Vitest with jsdom environment and React Testing Library setup file
  - [x] 1.4 Create directory structure: `components/sections/`, `components/ui/`, `data/`, `hooks/`, `public/`, `__tests__/unit/`, `__tests__/property/`
  - [x] 1.5 Add `public/resume.pdf` placeholder and configure `next.config.js` for static export if needed

- [x] 2. Static Data Layer
  - [x] 2.1 Create `data/projects.ts` with `Project` interface and three project constants (Automotive CRM, FSS, PAT)
  - [x] 2.2 Create `data/skills.ts` with `Skill` and `SkillCategory` interfaces and all four category data sets
  - [x] 2.3 Create `data/experience.ts` with `ExperienceEntry` interface and Aloha Technology entry
  - [x] 2.4 Create `data/achievements.ts` with `Achievement` interface and four achievement entries

- [x] 3. Theme and Layout Foundation
  - [x] 3.1 Configure `next-themes` `ThemeProvider` in `app/layout.tsx` with `defaultTheme="dark"` and `storageKey="portfolio-theme"`
  - [x] 3.2 Define Tailwind dark/light mode CSS variables in `globals.css`
  - [x] 3.3 Create `RootLayout` in `app/layout.tsx` with SEO metadata (title, description, Open Graph tags) using Next.js Metadata API
  - [x] 3.4 Add semantic HTML structure (`<header>`, `<main>`, `<footer>`) to layout

- [x] 4. Shared Hooks and Utilities
  - [x] 4.1 Create `hooks/useScrollAnimation.ts` — returns Framer Motion `ref` and `controls`, checks `prefers-reduced-motion` and returns no-op variants when active
  - [x] 4.2 Create `hooks/useScrollY.ts` — returns current scroll Y position for Navbar glassmorphism trigger

- [x] 5. Navbar Component
  - [x] 5.1 Create `components/ThemeToggle.tsx` using `useTheme` from `next-themes` with sun/moon icon swap
  - [x] 5.2 Create `components/ResumeButton.tsx` as `<a href="/resume.pdf" download target="_blank">` with visible styling at all breakpoints
  - [x] 5.3 Create `components/Navbar.tsx` with fixed positioning, all 7 nav links, `ThemeToggle`, `ResumeButton`, and glassmorphism class applied when `scrollY > heroHeight`
  - [x] 5.4 Add hamburger menu to `Navbar` that collapses nav links below 768px into a full-width dropdown overlay

- [x] 6. Section Components
  - [x] 6.1 Create `components/sections/HeroSection.tsx` with name, role, tagline, two CTA buttons, full-viewport height, and staggered Framer Motion fade-in on mount
  - [x] 6.2 Create `components/sections/AboutSection.tsx` with professional summary, React/.NET expertise, strengths list, and fade-up scroll animation
  - [x] 6.3 Create `components/sections/SkillsSection.tsx` consuming `data/skills.ts`, rendering `SkillBar` per skill grouped by category, with viewport-triggered animation
  - [x] 6.4 Create `components/sections/ExperienceSection.tsx` consuming `data/experience.ts`, timeline layout, slide-in scroll animation
  - [x] 6.5 Create `components/sections/ProjectsSection.tsx` consuming `data/projects.ts`, rendering `ProjectCard` per project, staggered fade-in scroll animation
  - [x] 6.6 Create `components/sections/AchievementsSection.tsx` consuming `data/achievements.ts`, rendering each achievement with title and description, scroll animation
  - [x] 6.7 Create `components/sections/ContactSection.tsx` with mailto link, LinkedIn link, and `ContactForm`

- [x] 7. UI Components
  - [x] 7.1 Create `components/ui/SkillBar.tsx` — animated bar from 0% to `level` on viewport entry, displays skill name and optional icon
  - [x] 7.2 Create `components/ui/ProjectCard.tsx` — displays title, description, tech stack badges, achievements list, and conditional GitHub/demo buttons; hover lift animation
  - [x] 7.3 Create `components/ui/ContactForm.tsx` — controlled form with Name, Email, Message fields; client-side validation; EmailJS submission; success/error states

- [x] 8. Responsive Design
  - [x] 8.1 Apply mobile-first Tailwind breakpoints (`sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`) across all section components
  - [x] 8.2 Ensure no horizontal overflow at 320px viewport width (test with browser devtools)
  - [x] 8.3 Reflow `SkillsSection` to single column below `md:` breakpoint
  - [x] 8.4 Set `ProjectsSection` grid to single column below `md:` and multi-column at `md:` and above
  - [x] 8.5 Set `ExperienceSection` to single-column timeline below `md:`

- [x] 9. SEO and Performance
  - [x] 9.1 Verify all SEO metadata (title, description, OG tags, canonical) is present via Next.js Metadata API in `layout.tsx`
  - [x] 9.2 Add `loading="lazy"` and explicit `width`/`height` to all `<img>` elements; use `next/image` where applicable
  - [x] 9.3 Add descriptive `alt` text to all images and icon elements
  - [x] 9.4 Audit semantic HTML — ensure `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` are used appropriately

- [x] 10. Unit Tests
  - [x] 10.1 Write unit tests for `Navbar` — assert all nav links, ThemeToggle, and ResumeButton are present; assert hamburger toggle shows/hides menu
  - [x] 10.2 Write unit tests for `HeroSection` — assert name, role, tagline, and both CTA buttons are present
  - [x] 10.3 Write unit tests for `AboutSection` — assert professional summary text and strengths list are present
  - [x] 10.4 Write unit tests for `SkillsSection` — assert all four category headings and all skill names are present
  - [x] 10.5 Write unit tests for `ExperienceSection` — assert employer name, tenure, role, and achievements are present
  - [x] 10.6 Write unit tests for `ProjectsSection` — assert three project card titles are present
  - [x] 10.7 Write unit tests for `AchievementsSection` — assert all four achievement titles are present
  - [x] 10.8 Write unit tests for `ContactSection` — assert mailto link, LinkedIn link, and form fields are present
  - [x] 10.9 Write unit tests for `ContactForm` — assert success message on valid submission; assert error messages on empty fields and invalid email
  - [x] 10.10 Write unit tests for `ThemeToggle` — assert theme class changes on `<html>` when toggled
  - [x] 10.11 Write unit tests for `ResumeButton` — assert `download` attribute and `target="_blank"` are present
  - [x] 10.12 Write unit tests for SEO metadata — assert title, description, and OG tags in document head

- [x] 11. Property-Based Tests
  - [x] 11.1 Write property test for Property 1 (skills grouped by category) — generate arbitrary skill arrays, render SkillsSection, assert each skill appears under its correct category
    <!-- Feature: developer-portfolio, Property 1: Skills are grouped by category -->
  - [x] 11.2 Write property test for Property 2 (ProjectCard renders all required fields) — generate arbitrary Project objects, render ProjectCard, assert title/description/techStack/achievements all present
    <!-- Feature: developer-portfolio, Property 2: ProjectCard renders all required fields -->
  - [x] 11.3 Write property test for Property 3 (ProjectCard action button iff URL present) — generate arbitrary Project objects with optional URLs, assert button presence matches URL presence
    <!-- Feature: developer-portfolio, Property 3: ProjectCard shows action button iff URL present -->
  - [x] 11.4 Write property test for Property 4 (Achievement renders title and description) — generate arbitrary Achievement objects, render, assert both fields present
    <!-- Feature: developer-portfolio, Property 4: Achievement renders title and description -->
  - [x] 11.5 Write property test for Property 5 (Contact form rejects invalid inputs) — generate invalid FormState objects, assert form does not submit and errors are shown
    <!-- Feature: developer-portfolio, Property 5: Contact form rejects invalid inputs -->
  - [x] 11.6 Write property test for Property 6 (Theme preference round-trip) — set theme, read localStorage, assert stored value matches; mock reload and assert theme restored
    <!-- Feature: developer-portfolio, Property 6: Theme preference round-trip -->
  - [x] 11.7 Write property test for Property 7 (All images have non-empty alt text) — render each section with arbitrary data, query all img elements, assert alt is non-empty
    <!-- Feature: developer-portfolio, Property 7: All images have non-empty alt text -->
  - [x] 11.8 Write property test for Property 8 (prefers-reduced-motion disables animations) — mock media query, render animated components, assert animation variants produce no motion
    <!-- Feature: developer-portfolio, Property 8: prefers-reduced-motion disables animations -->

- [x] 12. Final Integration and Polish
  - [x] 12.1 Wire all section components into `app/page.tsx` in correct order with section `id` attributes matching nav link hrefs
  - [x] 12.2 Verify smooth-scroll behavior works for all nav links and CTA buttons (set `scroll-behavior: smooth` in CSS or use `scrollIntoView`)
  - [x] 12.3 Test dark/light mode toggle visually and verify localStorage persistence
  - [x] 12.4 Run Lighthouse audit on desktop and address any issues to reach score ≥ 90
  - [x] 12.5 Test on mobile viewport (320px, 375px, 768px) for layout correctness and no horizontal overflow
  - [x] 12.6 Run full test suite (`vitest --run`) and ensure all unit and property tests pass
