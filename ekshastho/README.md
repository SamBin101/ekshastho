# EkShastho Landing Page

Professional bilingual (English + Bangla) landing page for EkShastho – Health in One Platform by Bindulogic Limited.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Client-side language toggle

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo
3. Deploy
4. In Project Settings → Domains → Add `ekshastho.com`
5. Update DNS at your domain registrar (see below)

## Connect your domain (ekshastho.com)

After deploying on Vercel:

1. In Vercel → Project → Settings → Domains → Add `ekshastho.com` and `www.ekshastho.com`
2. Vercel will show the required DNS records (usually A record to 76.76.21.21 or CNAME to `cname.vercel-dns.com`)
3. Go to your domain registrar (where you bought ekshastho.com)
4. Update the DNS records as instructed by Vercel
5. Wait 5–30 minutes for DNS propagation

## Customization

- Edit content in `src/app/page.tsx` (both English and Bangla)
- Colors in `tailwind.config.ts`
- Contact info already set to:
  - Email: contact@bindulogic.com
  - Phone: +88 01302606005
  - Address: House 7, Road 2, Block B, Mirpur 10, Dhaka 1216

