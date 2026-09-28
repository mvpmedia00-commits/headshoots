# MVP Media — Chicago headshots and portraits

Public company site for Matthew Phillips / MVP Media.

Corporate headshots, personal branding, portraits, couples and families, and events. Chicago first.

## Run

```bash
npm install
npm run dev -- --port 4743 --hostname 127.0.0.1
```

Open [http://127.0.0.1:4743](http://127.0.0.1:4743).

## Pages

- `/` — work home
- `/gallery` — headshots, branding, portraits, couples, events, Chicago
- `/about` — Matthew Phillips
- `/contact` and `/booking` — inquiry form opens mail to `mvpmedia00@gmail.com`

Gallery frames are lighting and direction samples. Client galleries stay private. Nothing is stored on the server.

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui.

Deploy on Vercel by importing `github.com/mvpmedia00-commits/headshoots`. Optional: set `NEXT_PUBLIC_SITE_URL` to the production domain so sitemap and Open Graph use the right host.
