# Solo Queue — Landing

Public marketing site + waitlist capture. No auth, no secrets.

Design system: `../docs/design.md` (Espresso Collage tokens, landing scale ramp)
+ `../docs/design.html` (mirror). Mockups: `../docs/SoloQueue-landing-web.html`.
Backend: the shared solo-queue Convex deployment (`waitlist:join`, `waitlist:count`).

## Getting Started

```bash
cp .env.example .env.local   # set NEXT_PUBLIC_CONVEX_URL to the prod deployment
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose | Where |
|---|---|---|
| `NEXT_PUBLIC_CONVEX_URL` | Shared backend URL for the waitlist form + count | Vercel env (prod Convex URL) |
| `NEXT_PUBLIC_PRICE` | Monthly price shown on the pricing card | Vercel env (replace `[PRICE]` before launch) |

## Deploy

Import this directory as its own Vercel project, add the two vars above,
deploy. No Deployment Protection needed — the whole site is public by design.
