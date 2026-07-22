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

**Changes:**
- Logo replaced plain text with actual `NovxX` logo image from `src/assets/logo.png`
- Removed from nav: Home, Vehicle Setup, Stations
- Public center group: Features, Concept, About
- App right group (logged in only): Calculator, Dashboard
- Profile moved to avatar circle (first initial) — cleaner, matches real product pattern
- Auth: Sign In (plain link) + Get Started (filled button) when logged out
- Added `useLocation()` — active page link highlights in `#44ACFF`
- Added scroll listener — border opacity increases after 10px scroll
- Added location listener — mobile menu closes on route change
- Mobile menu split into "Explore" and "My Platform" labeled sections
- Added spacer div to prevent content hiding behind fixed navbar
- Added `backdrop-blur-sm`

**Bug fixes:**
- "Calculaor" typo → "Calculator"
- Mobile menu was `bg-gray-300 text-black` → now `bg-[#0F1F1D] text-[#E8EDEC]`
- `ggap-2` typo on logo wrapper removed
- Duplicate "Features" link removed from center nav

---

### W1T2 — Home Page Restructure

**Files changed:**
- `src/pages/Home.jsx`
- `src/components/Hero.jsx`
- `src/components/WhyNoxX.jsx`
- `src/components/Features.jsx` (homepage section)
- `src/components/HowWork.jsx`
- `src/components/Try.jsx`
- `src/components/CTA.jsx`
- `src/components/VehicleVision.jsx` — new file

**Changes:**
- `Home.jsx`: removed `bg-gray-800` wrapper, changed to `bg-[#091413]`
- `Hero.jsx`: fixed typos — "Intellingence", "Exlore", "Optimized"
- `WhyNoxX.jsx`: fixed typos — "performence", "AI-Powred", "Advance"
- `Features.jsx`: fixed typo — "Powerfull"
- `HowWork.jsx`: fixed grid `md:grid-cols-3` with 4 steps → `md:grid-cols-4`, fixed typos — "Processs", "Recieve"
- `Try.jsx`: replaced `alert()` with inline animated message, auto-dismisses after 3 seconds
- `CTA.jsx`: added two buttons — "Join NovxX" and "See the Vision"
- `VehicleVision.jsx`: new section connecting Home → Concept page with 4 pillar tiles and animated link

---

### W1T3 — Stations Coming Soon

**File:** `src/pages/Stations.jsx` — full rewrite

**Changes:**
- Added `COMING_SOON` boolean flag — set `true` to show Coming Soon screen, `false` for live grid
- Coming Soon screen: badge, headline, 3 feature tiles (Real Maps, GPS, Live Availability), two CTAs
- Live grid: search input now filters data, status badges updated to design system style, cards updated
- Design matches site: `#091413` background, grid pattern, ambient glow

---

## Week 2 — Page Redesign

---

### W2T4 — About Page Redesign

**File:** `src/pages/About.jsx` — full rewrite
**Changes:**
- Stock photo hero removed → CSS grid pattern + radial glow
- Fixed broken `<Link>` with no `to` prop
- Problem/Solution redesigned as two `#0F1F1D` cards
- My Story: added two reading progress cards (How Cars Work ✓, EV Technology Explained — reading)
- Mission: split layout with local image
- Future Direction: split layout with local image, added "See the Concept Vehicle →" link
- CTA: two buttons — "Join Now" and "See the Vision"

**Bug fixes:** "Moblity", "Eelectric", "builidng", "meaningfull", "inclcudes", "Dirction" all fixed

---

### W2T5 — Features Page Redesign

**File:** `src/pages/Features.jsx` — full rewrite

**Changes:**
- Stock photo hero removed → CSS grid pattern
- All plain `<button>` tags replaced with `<Link>` components (were going nowhere)
- 6 feature cards with Live/Coming Soon badges
- Live (4): EV Range Intelligence, Battery Analysis, Driving Insights, Personal Dashboard
- Coming Soon (2): Charging Station Locator, AI Route Planning
- Deep-dive sections for two live features using local images
- Coming Soon roadmap section for unbuilt features

**Bug fixes:** "Monitory" → "Monitor", "Intelligence Route" → "Intelligent Route", "smoothand" → "smooth and"

---

### W2T6 — Calculator Redesign + Smart Insights

**Files changed:**
- `src/pages/Calculator.jsx` — full rewrite
- `server/Controllers/evCalculatorController.js` — full rewrite

**Frontend changes:**
- Two-column layout: inputs left, results right
- Inputs organized into 4 labeled groups: Battery, Conditions, Environment, Load
- AC Usage replaced plain checkbox with toggle switch
- Results panel: empty state before calculation, 6 stat cards after, insights split into basic + smart
- Smart insights in purple-bordered box with 🧠 icon
- "View Full Dashboard →" CTA connecting Calculator → Dashboard
- Button text: "Calculate" → "Analyze"

**Backend fixes:**
- `passangers` typo → `passengers` (was undeclared variable)
- Energy consumption formula: `(energyConsumption / baseRange)` → `(energyUsed / baseRange)`
- Response keys: `battery_Stress` → `batteryStress`, `energy_Consumption` → `energyConsumption`
- Removed dead `insights` destructuring from `req.body`
- Added `generateSmartInsights()` — Level 2 trend-based insights comparing against user history

---

### W2T7 — Dashboard Redesign

**File:** `src/pages/Dashboard.jsx` — full rewrite

**Changes:**
- Design system colors throughout
- Stat cards with icons (📏 🛣️ ⚡) and hover effects
- Spinner loading state replaced with skeleton loader
- Empty state with CTA when no data
- "+ New Analysis" button in header
- "Ready for another analysis?" CTA banner at bottom
- Efficiency in table shows colored badge (green/amber/red)
- Row hover effects on table

**Bug fixes:**
- Tooltip never showed: `payload.length` → `!payload.length`
- Efficiency line was empty: `dataKey="efficiencyScore"` → `dataKey="efficiency"`
- Y axis labels missing: `tick={}` → `ticks={}`
- Green line broken: `stroke="##22c55e"` → `stroke="#22c55e"`
- Bar colors wrong: `EFFICIENCY_COLORS[entry.name]` → `EFFICIENCY_COLORS[entry.efficiencyLabel]`
- Field name: `c.DrivingCondition` → `c.drivingCondition`
- Unused imports removed

---

## Week 3 — Design System

---

### W3T8 — Design System (`theme.js`)

**File:** `src/theme.js` — new file

**Token groups:**
- `colors` — backgrounds, accent, text, borders, status colors
- `typography` — h1-h4, body, eyebrow, caption class strings
- `spacing` — section padding, container widths
- `btn` — primary, primarySm, ghost, ghostSm, danger, link
- `card` — base, hover, padded, paddedHover, inner, innerPadded
- `badge` — pill, live, soon, success, warning, error, purple
- `input` — base, select
- `divider` — subtle, default
- `section` — base, surface
- `chartTheme` — grid, axis, fontSize, tooltip, colors

**Usage:** `import { btn, card, badge, input, chartTheme } from "../theme"`

---

### W3T9 — Animation Pass

**Files changed:**
- `src/index.css` — animation keyframes added
- `src/hooks/useScrollReveal.js` — new file
- `src/App.jsx` — page fade transition
- `src/components/Hero.jsx` — counter animation on data strip
- `src/components/WhyNoxX.jsx` — scroll reveal example

**Animations added:**
- `page-fade` — soft opacity fade on every page navigation
- `reveal` / `reveal-child` — sections fade up when scrolled into view
- `card-lift` — cards lift 2px on hover
- `btn-press` — buttons scale 3% on click
- `skeleton` — shimmer pulse for loading states
- `count-up` — number entrance animation
- Hero data strip (312 km) counts up from 0 on mount

**Note:** Do not use `reveal` on Dashboard or Calculator — data pages should show immediately. Use `reveal` on marketing/content pages only (Home sections, About, Features, Concept).

---

### W3T10 — Theme Application + Bug Fixes

**Changes:**
- Theme tokens applied to Hero, WhyNovxX, Features (section), HowWork, Try, CTA, Navbar, Footer
- Dashboard: removed `reveal` from outer wrapper (was hiding content on load)
- Dashboard: fixed `reveal` applied to same `ref` on two different divs
- Dashboard: replaced spinner loading with skeleton cards
- Dashboard: `if (!statsData.data)` crash → `if (!statsData || !statsData.data)`
- ScrollToTop component added — pages now start from top on navigation

---

## Backend Review — Month 4

---

### Backend Fixes Applied

**`userController.js`:**
- `req.User?.id` (capital U — always undefined) → `req.user?._id`
- `filter = userId ? { userId } : {}` fallback removed — now returns 401 if unauthorized
- `r.DrivingCondition` → `r.drivingCondition` in condition count (schema was renamed)
- `aveRange` typo → `avgRange` in empty state response
- Error response now sends `error.message` string not full error object

**`calculatorController.js`:**
- `passangers` undeclared variable → `passengers`
- Energy consumption bug fixed
- Response key names normalized to camelCase
- Vehicle type multipliers added
- Smart insight engine (`generateSmartInsights`) added

**`authMiddleware.js`:** ✅ Correct — sets `req.user` from DB lookup properly

**`userRoutes.js`:** ✅ Correct — all routes protected with `protect` middleware

**`User.js`:** ✅ Correct — schema matches all features built

---
