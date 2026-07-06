# NovxX EV Platform — Month 4 Changelog

---

## Month 4 — Platform V2

**Goal:** Transform NovxX from a developer project into a professional product prototype.
**Focus:** Better navigation, better UI/UX, better organization, better product experience.

---

## Week 1 — Website Restructure

---

### W1T1 — Navbar Rebuild

**File:** `src/components/Navbar.jsx` — full rewrite

**What changed:**

**Structure — 3 clear groups:**
- Removed from nav: Home, Vehicle Setup, Stations
- Public center group: Features, Concept, About
- App right group (logged in only): Calculator, Dashboard
- Auth: Sign In (plain link) + Get Started (filled button) when logged out
- Profile moved to avatar circle showing user's first initial

**New features added:**
- Logo renders actual image from `src/assets/logo.png` at `h-12` desktop / `h-10` mobile
- `useLocation()` — active page link highlights in `#44ACFF` automatically
- Scroll listener — border-b opacity increases after 10px scroll
- Location listener — mobile menu closes automatically on route change
- Mobile menu split into: "Explore" (public) and "My Platform" (logged in)
- Spacer `div` at bottom prevents content hiding behind fixed navbar
- `backdrop-blur-sm` on navbar background

**Bug fixes:**
- Fixed "Calculaor" typo → "Calculator"
- Fixed mobile menu background — was `bg-gray-300 text-black`, now `bg-[#0F1F1D] text-[#E8EDEC]`
- Fixed `ggap-2` typo on logo link wrapper
- Removed duplicate "Features" link in center nav

---

### W1T2 — Home Page Restructure

**Files changed:**
- `src/pages/Home.jsx` — restructured
- `src/components/Hero.jsx` — updated
- `src/components/WhyNoxX.jsx` — updated
- `src/components/Features.jsx` — updated
- `src/components/HowWork.jsx` — updated
- `src/components/Try.jsx` — updated
- `src/components/CTA.jsx` — updated
- `src/components/VehicleVision.jsx` — new file

**What changed:**

**Home.jsx:**
- Removed `bg-gray-800` from main wrapper
- Changed to `bg-[#091413]` matching design system
- New section order:

**Hero.jsx:**
- Fixed typos: "Intellingence" → "Intelligent", "Exlore" → "Explore", "Optimized" → "Optimize"

**WhyNoxX.jsx:**
- Fixed typos: "performence" → "performance", "AI-Powred" → "AI-Powered", "Advance" → "Advanced"
- Card background swapped for correct section rhythm

**Features.jsx (homepage section):**
- Fixed typo: "Powerfull" → "Powerful"

**HowWork.jsx:**
- Fixed grid: `md:grid-cols-3` with 4 steps → `md:grid-cols-4`
- Fixed typos: "Processs" → "The Process", "Recieve" → "Receive"
- Connector line position fixed

**Try.jsx:**
- Replaced `alert()` with inline animated message
- Message auto-dismisses after 3 seconds
- "sign in" text is a clickable link to `/login`

**CTA.jsx:**
- Added two buttons: "Join NovxX" (→ /register) and "See the Vision" (→ /concept)

**VehicleVision.jsx (new):**
- New section connecting Home → Concept page
- Left: concept vehicle placeholder visual
- Right: headline + 4 pillar tiles + animated link to /concept

---

### W1T3 — Stations Coming Soon

**File:** `src/pages/Stations.jsx` — full rewrite

**What changed:**
- Added `COMING_SOON` boolean flag at top of file — `true` by default
- When `true`: renders Coming Soon screen
- When `false`: renders full station grid (flip when backend is ready)
- Coming Soon screen: badge, headline, 3 feature tiles (Real Maps, GPS, Live Availability), two CTAs
- Full station grid improved:
  - Search input now filters fetched data (was not wired before)
  - Status badges: subtle `bg-green-600/20 text-green-400` style
  - Cards updated to design system colors and hover states
- Design matches rest of site: `#091413` background, grid pattern, ambient glow

---

## Week 2 — Page Redesign

---

### W2T4 — About Page Redesign

**File:** `src/pages/About.jsx` — full rewrite

**Structure — narrative arc:**
**What changed:**

**Hero:**
- Stock photo removed → CSS grid pattern + radial glow
- Fixed broken `<Link>` with no `to` prop → now links to `/register`
- Added pill badge with pulse dot

**Problem / Solution:**
- Now two `#0F1F1D` cards with emoji icons and hover border effect

**My Story:**
- Reformatted as flowing paragraphs
- Added two reading progress cards:
  - "How Cars Work" — Completed ✓
  - "Electric Vehicle Technology Explained" — Currently reading

**Mission:**
- Split layout: text left, image right
- Added 3 bullet points with `✦` accent marks
- Local image `our-vission.png` preserved

**Future Direction:**
- Split layout: text right, image left
- Added "See the Concept Vehicle →" link connecting About → Concept
- Local image `future.png` preserved

**CTA:**
- Two buttons: "Join Now" (→ /register) and "See the Vision" (→ /concept)

**Bug fixes:**
- "Moblity" → "Mobility"
- "Eelectric" → "Electric"
- "builidng" → "building"
- "meaningfull" → "meaningful"
- "inclcudes" → "includes"
- "Dirction" → "Direction"

---

### W2T5 — Features Page Redesign

**File:** `src/pages/Features.jsx` — full rewrite

**Structure:**

**What changed:**

**Hero:**
- Stock photo removed → CSS grid pattern + radial glow
- Plain `<button>` tags → proper `<Link>` components
- "Try Demo" → "Try Calculator" linking to `/calculator`

**Feature Cards Grid (new):**
- 6 cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Live (4): EV Range Intelligence, Battery Analysis, Driving Insights, Personal Dashboard — green "✓ Live" badge
- Coming Soon (2): Charging Station Locator, AI Route Planning — gray badge

**Live Feature Deep-dives:**
- Battery Intelligence — split layout with `battery.png`
- Smart Driving — split layout with `AI-Drive.png`
- Each has green "Live Feature" indicator + animated link to relevant page

**Coming Soon Roadmap:**
- Two cards using `charging.jpg` and `route.png`
- "On the Roadmap" framing — honest about what is not built yet

**CTA:**
- Two buttons: "Get Started" (→ /register) and "Try Calculator" (→ /calculator)

**Bug fixes:**
- "Monitory Battery" → "Monitor battery"
- "Intelligence Route" → "Intelligent Route"
- "smoothand" → "smooth and"
- All plain `<button>` tags replaced with `<Link>`
- `bg-gray-900` → design system throughout

---