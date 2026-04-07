# Tracking Plan

## Analytics Options

### Option A — Vercel Analytics (Recommended for launch)
- Enable in Vercel dashboard → Analytics tab
- Add `@vercel/analytics` package: `npm install @vercel/analytics`
- Import in `src/app/layout.tsx`: `import { Analytics } from '@vercel/analytics/react'`
- Zero configuration, privacy-friendly, no cookie banner required

### Option B — Google Analytics 4
- Create GA4 property at analytics.google.com
- Add measurement ID to `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
- Install: `npm install @next/third-parties`
- Use `<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />` in layout

## Event Tracking Placeholders

| Event | Trigger | Label |
|-------|---------|-------|
| `proposal_viewed` | Page load / scroll past hero | — |
| `cta_accept_clicked` | "Accept Proposal" button click | hero |
| `cta_download_clicked` | "Download Proposal" button click | hero |
| `section_viewed` | Intersection observer per section | section name |
| `accordion_opened` | T&C accordion item expand | item title |
| `signature_block_viewed` | Scroll to signatures | — |

## Form Submission Tracking

- No form submissions at launch (static site).
- If a contact/accept form is added: track `form_submit` with `form_id` and `status` (success/error).

## Conversion Goals

| Goal | Description |
|------|-------------|
| Primary | "Accept Proposal" button clicked |
| Secondary | Proposal scrolled to Signatures section |
| Tertiary | "Download Proposal" clicked |
