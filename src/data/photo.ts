export const PHOTO_EMAIL = "mvpmedia00@gmail.com"
export const PHOTO_BRAND = "MVP Media"
export const PHOTO_CITY = "Chicago / Chicagoland"

export const photoHero = {
  src: "/photo/mvp-headshot-vest.jpg",
  alt: "Headshot on a dark background with warm bokeh, plaid vest and chain necklace",
}

export const photoOgImage = "/photo/mvp-headshot-vest.jpg"

export const photoSessions = [
  {
    slug: "headshots",
    title: "Headshots",
    category: "Headshots",
    image: "/photo/mvp-headshot-blazer.jpg",
    alt: "Headshot in a cream blazer and gold earrings against a dark background",
    blurb:
      "LinkedIn, company bios, press, and casting. Clean light, a relaxed expression, and a crop that still reads at thumbnail size.",
  },
  {
    slug: "branding",
    title: "Personal branding",
    category: "Branding",
    image: "/photo/branding-speaker.jpg",
    alt: "Personal branding portrait of a smiling woman in an office",
    blurb:
      "A set of images for your website, speaker page, and social — photographed where you work, so it looks like you.",
  },
  {
    slug: "portraits",
    title: "Portraits",
    category: "Portraits",
    image: "/photo/mvp-portrait-brick.jpg",
    alt: "Portrait in a green pleated top against a glazed brick wall",
    blurb:
      "Studio or on location around Chicago. Fully directed, so you never have to guess what to do with your hands.",
  },
] as const

export const photoExtras = ["Team days on site", "Couples and families", "Events"] as const

export type PhotoPackage = {
  slug: string
  name: string
  /** Shown as "From $___". Leave empty to show "Custom quote". */
  price: string
  bestFor: string
  features: readonly string[]
  popular?: boolean
}

export const photoPackages: readonly PhotoPackage[] = [
  {
    slug: "express",
    name: "Express headshot",
    price: "",
    bestFor: "A fast, polished LinkedIn or bio photo",
    features: [
      "30-minute session",
      "1 outfit, 1 backdrop",
      "3 retouched images",
      "Online proofing gallery",
    ],
  },
  {
    slug: "signature",
    name: "Signature headshot",
    price: "",
    bestFor: "Professionals who want options",
    features: [
      "60-minute session",
      "Up to 3 outfits and looks",
      "8 retouched images",
      "LinkedIn-ready crops included",
      "Posing and wardrobe guidance",
    ],
    popular: true,
  },
  {
    slug: "portrait",
    name: "Portrait & branding",
    price: "",
    bestFor: "Websites, speakers, and creatives",
    features: [
      "90-minute session",
      "Studio or one Chicago location",
      "15 retouched images",
      "Print-ready and web files",
      "Pre-session planning call",
    ],
  },
  {
    slug: "team",
    name: "Team on site",
    price: "",
    bestFor: "Companies that need a consistent look",
    features: [
      "Portable studio at your office",
      "Matching light and backdrop for everyone",
      "Retouched image per person",
      "Priced by headcount",
    ],
  },
]

export const photoTrust = [
  "Proofs in a few days",
  "Guided posing, start to finish",
  "Studio or on site in Chicagoland",
] as const

export const photoProcess = [
  {
    step: "01",
    title: "Brief",
    body: "Where the pictures live — LinkedIn, a site, a press kit, a wall — and who has to recognize you.",
  },
  {
    step: "02",
    title: "Wardrobe",
    body: "Two or three options. I tell you what the camera will punish before you pack it.",
  },
  {
    step: "03",
    title: "Session",
    body: "Guided posing, 30–90 minutes depending on the set. Solo, team, or a small family.",
  },
  {
    step: "04",
    title: "Delivery",
    body: "A curated gallery, color that holds up on a phone and in print, plus a LinkedIn crop if you need one.",
  },
] as const

export const photoFaqs = [
  {
    q: "How long is a headshot session?",
    a: "Most corporate sets are 30–45 minutes. Branding and portrait sets run 60–90. Teams are quoted by headcount.",
  },
  {
    q: "What should I wear?",
    a: "Solid colors, fitted, no tiny logos. Bring a second option. Glasses stay on if you wear them to work.",
  },
  {
    q: "Studio or on site?",
    a: "Both. Offices, hotels, and homes in Chicago and the suburbs. Destination days are quoted in writing.",
  },
  {
    q: "How fast do files come back?",
    a: "Headshot selects in a few days. Full portrait and event galleries on the date we put in the agreement.",
  },
  {
    q: "I'm awkward in photos. Will this work?",
    a: "That describes most people who book. I direct every pose and expression, and we review shots on the back of the camera as we go.",
  },
  {
    q: "How do I reserve a date?",
    a: "Send a request through the booking form. I reply with availability and a quote, then a short written agreement locks your date.",
  },
] as const

export const photoGallery = [
  { src: "/photo/mvp-headshot-vest.jpg", category: "Headshots", alt: "Headshot on a dark background with warm bokeh, plaid vest and chain necklace" },
  { src: "/photo/mvp-headshot-blazer.jpg", category: "Headshots", alt: "Headshot in a cream blazer and gold earrings against a dark background" },
  { src: "/photo/mvp-headshot-glasses.jpg", category: "Headshots", alt: "Headshot with glasses and a dark green shirt on a charcoal backdrop" },
  { src: "/photo/mvp-headshot-smile.jpg", category: "Headshots", alt: "Smiling headshot in a brown sleeveless turtleneck against a textured backdrop" },
  { src: "/photo/mvp-headshot-satin.jpg", category: "Headshots", alt: "Headshot in a copper satin shirt on a gray painted backdrop" },
  { src: "/photo/mvp-headshot-gold.jpg", category: "Headshots", alt: "Over-the-shoulder headshot with wavy blonde hair and gilded frames behind" },
  { src: "/photo/mvp-headshot-glitter.jpg", category: "Headshots", alt: "Close-up headshot with backlit curls, silver glitter makeup, and purple lips" },
  { src: "/photo/mvp-portrait-brick.jpg", category: "Portraits", alt: "Portrait in a green pleated top against a glazed brick wall" },
  { src: "/photo/mvp-portrait-curls.jpg", category: "Portraits", alt: "Editorial portrait with voluminous curls, red lips, and a sequined gown" },
  { src: "/photo/branding-speaker.jpg", category: "Branding", alt: "Personal branding portrait in an office" },
  { src: "/photo/branding-lifestyle.jpg", category: "Branding", alt: "Brand lifestyle still of a working conversation" },
  { src: "/photo/branding-team.jpg", category: "Branding", alt: "Lifestyle portrait of a small group at sunset" },
  { src: "/photo/portrait-couple.jpg", category: "Couples", alt: "Couple celebrating after their ceremony" },
  { src: "/photo/event-stage.jpg", category: "Events", alt: "Audience at a conference in low light" },
] as const

export type PhotoGalleryCategory = "All" | (typeof photoGallery)[number]["category"]

export const photoGalleryCategories = [
  "All",
  ...Array.from(new Set(photoGallery.map((item) => item.category))),
] as PhotoGalleryCategory[]

export const photoNav = [
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const
