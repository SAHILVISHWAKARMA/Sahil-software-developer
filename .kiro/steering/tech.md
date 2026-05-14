# Tech Stack

## Framework & Language
- Next.js 14 (static export mode via `output: 'export'`)
- React 18, TypeScript 5 (strict mode)

## Styling
- Tailwind CSS v3 with `darkMode: "class"`
- CSS custom properties for theming — always use `var(--token)` for colors, never hardcode
- Available tokens: `--background`, `--foreground`, `--card`, `--card-foreground`, `--border`, `--muted`, `--accent`

## Key Libraries
- `framer-motion` — animations and scroll-triggered transitions
- `next-themes` — theme management (storageKey: `portfolio-theme`, no system theme)
- `@emailjs/browser` — contact form email sending
- `firebase` — hosting/deployment target

## Testing
- Vitest + jsdom + React Testing Library
- `fast-check` for property-based tests
- Unit tests in `__tests__/unit/`, property tests in `__tests__/property/`

## Common Commands
```bash
npm run dev        # start dev server
npm run build      # production build (static export to /out)
npm run test       # run all tests once (vitest --run)
npm run lint       # ESLint
npm run deploy     # build + firebase deploy
```

## Deployment
- Static export — no server-side features (no SSR, no API routes, no Next.js Image optimization)
- Images must use `unoptimized: true`
