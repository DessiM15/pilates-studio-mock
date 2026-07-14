# FORME — Boutique Pilates Studio (Mock)

A high-end, editorial marketing site for a fictional multi-location Reformer
Pilates studio. Built with **Next.js 16 (App Router) + React 19 + Tailwind v4**.
Warm, "quietly expensive" aesthetic — designed both as social-media content and
as a real, production-shaped foundation a studio could ship.

> Brand, copy, palette and imagery are all placeholders — everything a studio
> would rebrand lives in a handful of data files (see below).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Full editorial homepage — hero video, method, classes, intro offer, membership, teachers, studios, testimonials, gallery |
| `/classes` | Full weekly schedule with a **Drop In** button on every class + class library |
| `/membership` | Intro offer, Unlimited / Class Pack / Drop-In tiers, FAQ |
| `/studios/[location]` | Per-location page — hours, address, embedded map, location schedule |
| `/about` | The method, story, values, teachers |

## Architecture — built for automation & scale

Everything a non-developer would change is isolated so it can be lifted into a
CMS (Sanity/Contentful) with no component changes.

```
lib/
  site.ts              Brand, nav, contact, intro offer
  data/                "CMS-shaped" content (swap for CMS queries later)
    assets.ts          ← the ONLY place image/video URLs live
    classes.ts         Class types + weekly schedule
    instructors.ts     Teachers
    locations.ts       Studios (drives /studios/[location])
    memberships.ts     Pricing tiers
    testimonials.ts    Social proof + press logos
  booking/             Pluggable booking provider (the key scale seam)
    types.ts           BookingProvider interface — the whole app depends on THIS
    mock-provider.ts   Demo data (active)
    momence-provider.ts Skeleton adapter for Momence / Walla
    index.ts           Resolves the active provider
```

### Connecting a real booking platform (Momence / Walla / Mindbody)

The entire site talks to the `BookingProvider` interface, never a vendor
directly. To go live:

1. Implement `getClassTypes()`, `getSchedule()`, and `getDropInUrl()` in
   `lib/booking/momence-provider.ts` against the studio's API/widget.
2. Swap the export in `lib/booking/index.ts`:
   ```ts
   export const booking = new MomenceProvider(process.env.MOMENCE_HOST_ID!, process.env.MOMENCE_KEY!)
   ```
3. Nothing else changes — every "Drop In" button and schedule view updates
   automatically. The buttons already route through `booking.getDropInUrl()`,
   so they become real checkout deep-links.

### Adding a studio location

Add one entry to `lib/data/locations.ts`. It automatically generates
`/studios/<id>`, a footer link, a homepage card, and its own SEO metadata via
`generateStaticParams` + `generateMetadata`.

### Design tokens

Palette + type live as Tailwind v4 tokens in `app/globals.css` (`@theme`).
Rebrand = change the token values. Fonts: **Fraunces** (display) + **Jost** (UI).

## Automation hooks a studio would wire next

- **Booking**: Momence/Walla adapter (seam already in place)
- **Email**: newsletter form → Klaviyo/Mailchimp (intro-offer nurture flow)
- **CMS**: move `lib/data/*` into Sanity for staff-editable content
- **Analytics/retargeting**: Meta Pixel + GA4 for drop-in → member funnels
- **Deploy**: Vercel (static + SSG; all routes prerender today)

## Deploy

Optimised for [Vercel](https://vercel.com/new). All routes are static/SSG.
Remote images are allowed from Unsplash/Pexels in `next.config.ts`.
