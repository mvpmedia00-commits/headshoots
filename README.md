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

- `/` — home: services, packages, process, FAQ
- `/gallery` — filterable gallery with full-screen viewer (`/gallery?category=Headshots`)
- `/pricing` — packages; "Book this" links to `/booking?package=<slug>`
- `/about` — Matthew Phillips
- `/booking` and `/contact` — request form opens mail to `mvpmedia00@gmail.com`

## Edit your packages and prices

Everything lives in `src/data/photo.ts`. Set each package's `price` (for example `"$250"`)
to show "From $250"; leave it empty to show "Custom quote".

Gallery frames are placeholders — swap in your own work under `public/photo/` and update `photoGallery`. Nothing is stored on the server.

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui.

Deploy on Vercel by importing `github.com/mvpmedia00-commits/headshoots`. Optional: set `NEXT_PUBLIC_SITE_URL` to the production domain so sitemap and Open Graph use the right host.
