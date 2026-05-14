# Project Structure

```
app/                    # Next.js app router
  layout.tsx            # Root layout with metadata and Providers wrapper
  page.tsx              # Single page — composes all sections in order
  providers.tsx         # Client-side ThemeProvider wrapper
  globals.css           # Tailwind directives + CSS custom property tokens

components/
  sections/             # Full-page sections (HeroSection, AboutSection, etc.)
  ui/                   # Reusable UI primitives (ProjectCard, SkillBar, ContactForm)
  Navbar.tsx            # Fixed top nav with scroll-aware styling + mobile menu
  ThemeToggle.tsx       # Dark/light toggle button
  ResumeButton.tsx      # Resume PDF download link

data/                   # Static typed data arrays (projects, skills, experience, achievements)
hooks/                  # Custom React hooks (useScrollY, useScrollAnimation)
lib/                    # Firebase config
public/                 # Static assets (resume.pdf)

__tests__/
  unit/                 # Component unit tests (*.test.tsx)
  property/             # Property-based tests using fast-check (*.property.test.tsx)
```

## Conventions

- Section components live in `components/sections/`, named `<Name>Section.tsx`
- Reusable UI components live in `components/ui/`
- Static content/data lives in `data/` as typed TypeScript exports — not hardcoded in components
- Custom hooks live in `hooks/`, prefixed with `use`
- All interactive/animated components use `'use client'` directive
- Path alias `@/` maps to the project root
- Components use named exports (not default exports)
- Animations use `framer-motion`; always respect `prefers-reduced-motion` (see `useScrollAnimation`)
- Theming via CSS variables only — never hardcode color values
