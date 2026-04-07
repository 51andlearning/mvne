# Structure

## Folder Layout

```
centurion-mvno-proposal/
├── docs/                        # Project documentation (this folder)
├── public/
│   └── images/                  # Static brand images and logos
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind + shadcn global styles
│   │   ├── layout.tsx           # Root layout (fonts, metadata)
│   │   └── page.tsx             # Main page — composes all sections
│   ├── components/
│   │   ├── sections/            # One file per proposal section
│   │   │   ├── HeroSection.tsx
│   │   │   ├── IntroSection.tsx
│   │   │   ├── WhyMvnoSection.tsx
│   │   │   ├── DsgDifferenceSection.tsx
│   │   │   ├── VasSection.tsx
│   │   │   ├── ScopeSection.tsx
│   │   │   ├── CommercialSection.tsx
│   │   │   ├── TermsSection.tsx
│   │   │   └── SignaturesSection.tsx
│   │   └── ui/                  # shadcn primitives (auto-generated)
│   ├── content/                 # Static content data (ts/json)
│   └── lib/
│       └── utils.ts             # shadcn utility (cn helper)
├── components.json              # shadcn config
├── next.config.ts
├── package.json
├── tailwind.config.ts (if present)
└── tsconfig.json
```

## Section Composition Rules

- Each section is a self-contained `.tsx` component in `src/components/sections/`.
- Sections are imported and rendered in order in `src/app/page.tsx`.
- Sections use shadcn primitives (Card, Badge, Accordion, Tabs, Separator) for layout.
- No section fetches external data — all content is inlined or imported from `src/content/`.

## Content Management

- Static content (headings, body text, table data) is co-located within each section component.
- If content needs to be updated without touching component logic, extract to `src/content/<section>.ts`.
- Images go in `public/images/` and are referenced via Next.js `<Image>` component.
