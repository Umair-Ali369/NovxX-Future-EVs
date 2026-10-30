 NovxX EV Platform — Changelog

---

## Month 3 — Platform Build

---

### Task 1 — Battery & Efficiency Analyzer Upgrade

**Files changed:**
- `src/pages/Calculator.jsx` — full rewrite
- `server/Controllers/evCalculatorController.js` — full rewrite
- `server/Models/Calculator.js` — schema update

**What changed:**

**Frontend:**
- Renamed page from "Calculate Driving Efficiency" to "Battery & Efficiency Analyzer"
- Added 5 new inputs: Battery Size (kWh), Outside Temperature (°C), Driving Style (eco/normal/aggressive), Terrain Type (flat/hilly/mountainous), Vehicle Load (kg)
- Fixed uncontrolled checkbox — added `checked={acUsage}`
- Fixed `reset()` bugs — `setPassengers` was resetting to wrong type, `setInsights` was resetting to string instead of array
- Results section redesigned as a 2-column grid layout
- Added 2 new output cards: Battery Stress Level, Energy Consumption (kWh/100km)

**Backend:**
- Added all new input fields to request body parsing
- Added Driving Style impact multipliers (eco +10%, normal 0%, aggressive -15%)
- Added Terrain impact multipliers (flat 0%, hilly -10%, mountainous -25%)
- Added Temperature impact (below 0°C: -25%, below 10°C: -10%, above 35°C: -10%)
- Added Vehicle Load impact (every 50kg = -1km range)
- Added Energy Consumption calculation (kWh per 100km)
- Added Battery Stress scoring system (weighted score → Low/Moderate/High)
- Expanded Level 1 insights to cover all new input fields
- Fixed `passangers` typo (was declared but never used)
- Fixed `error: error` in error response (now `error: error.message`)

**Schema:**
- Fixed `DrivingCondition` → `drivingCondition` (casing consistency)
- Fixed `effciciency` typo → `efficiency`
- Added fields: `batterySize`, `temperature`, `drivingStyle`, `vehicleLoad`, `terrainType`, `energyConsumption`, `batteryStress`

---

### Task 2 — Visual Analytics Dashboard

**Files changed:**
- `src/pages/Dashboard.jsx` — full rewrite
- `server/Controllers/dashboardController.js` — full rewrite

**What changed:**

**Frontend:**
- Added 4 chart panels using Recharts:
  - Range History (LineChart — range over time)
  - Efficiency Trend (LineChart — efficiency converted from string to 1/2/3 numeric score for plotting, tooltip shows real label)
  - Driving Condition Breakdown (PieChart — city/highway/mixed usage split)
  - Range Comparison (BarChart — bars colored by efficiency: red/amber/green)
- Added custom dark-themed tooltip component
- Fixed `c.DrivingCondition` → `c.drivingCondition` in table
- Fixed `statsData.data.lastFive.length` → dedicated `totalCount` from backend
- Moved loading/no-data states to full-screen centered layout
- Results table kept, moved below charts

**Backend:**
- Computes `avgRange` and `mostUsed` from all records, not just recent ones
- Added `totalCount` via `Calculator.countDocuments()`
- Bumped recent records limit from 5 to 10 for better chart data density
- Returns `totalCount` separately from `lastFive`

---

### Task 3 — Smart Insight Engine (Level 2)

**Files changed:**
- `server/Controllers/evCalculatorController.js` — added `generateSmartInsights()`
- `src/pages/Calculator.jsx` — updated results section

**What changed:**

**Backend:**
- Added `generateSmartInsights()` async function at the bottom of the controller
- Runs after saving the new calculation
- Fetches user's last 10 past records (excluding the one just saved)
- Requires minimum 3 past records before generating trend insights
- Computes historical averages: avgRange, avgEfficiencyScore, avgStressScore, avgEnergyConsumption
- Generates 6 types of comparative insights:
  - Range trend (±15% vs average triggers insight)
  - Efficiency trend (score diff > 0.5 triggers insight)
  - Battery stress trend (stress higher than average)
  - Driving style pattern (aggressive in ≥50% of recent history)
  - Temperature pattern (cold in ≥50% of recent trips)
  - Energy consumption trend (>15% above average)
- Level 1 + Level 2 insights merged into single `insights` array in response

**Frontend:**
- Added `isTrendInsight()` helper — detects Level 2 insights by keyword matching
- Splits insights into two visual groups:
  - Basic insights: plain bullet list
  - Smart Insights: purple-bordered box with 🧠 icon and "Based on your recent calculation history" subtitle

---

### Task 4 — User Profile System

**Files changed:**
- `server/Models/User.js` — schema update
- `server/Controllers/profileController.js` — new file
- `server/Routes/profileRoutes.js` — new file
- `server/Controllers/evCalculatorController.js` — vehicle type integration
- `src/pages/Register.jsx` — navigation update
- `src/pages/VehicleSetup.jsx` — new file
- `src/pages/Profile.jsx` — new file
- `src/context/AuthContext.jsx` — added `updateProfile`, `getProfile`

**What changed:**

**User model:**
- Added `vehicleType` (enum: sedan/suv/compact_ev/hatchback/truck)
- Added `vehicleName` (string, optional)
- Added `preferredDrivingStyle` (enum: eco/normal/aggressive)
- Added `preferredDrivingCondition` (enum: city/highway/mixed)
- Added `profileComplete` (boolean, default false)

**Profile controller:**
- `GET /api/profile` — returns user data without password
- `PUT /api/profile` — updates vehicle profile fields, sets `profileComplete: true`

**Calculator controller:**
- Added `const User = require("../Models/User")` at top
- Pulls `vehicleType`, `preferredDrivingStyle`, `preferredDrivingCondition` from DB if not sent in request
- Added vehicle type multipliers: compact_ev +10%, hatchback +5%, sedan 0%, suv -10%, truck -20%
- Applied multiplier after terrain block
- Added vehicle-specific insights for SUV, Truck, Compact EV
- Now saves `userId` and `vehicleType` on every calculation record

**Calculator schema:**
- Added `vehicleType` field

**Register:**
- After successful register, navigates to `/vehicle-setup` instead of `/dashboard`
- Fixed: inputs are now controlled (`value={form.name}` etc.)

**VehicleSetup (new page):**
- Card-style vehicle type picker (5 options with icons and descriptions)
- Optional vehicle name input
- Optional preferred driving style and condition selects (pre-fill calculator for returning users)
- "Skip for Now" button — doesn't block users from dashboard
- Calls `updateProfile()` from AuthContext on save

**Profile (new page):**
- Shows user avatar (first initial), name, email
- Full vehicle type card picker (same as VehicleSetup)
- Vehicle name input
- Preferred driving style and condition selects
- Pre-fills from existing `user` context data via `useEffect`
- Shows success/error state after save

**AuthContext additions:**
- `updateProfile(profileData)` — PUT to `/api/profile` with token, updates user state on success
- `getProfile()` — GET from `/api/profile`, updates user state

---

### Task 5 — Concept Vehicle Page

**Files changed:**
- `src/pages/ConceptVehicle.jsx` — new file
- `src/components/Navbar.jsx` — added Concept link
- `src/App.jsx` — added `/concept` route

**What changed:**

**ConceptVehicle page (6 sections):**
- Hero — "The EV We Are Building Toward" with CTA
- Philosophy — 3 cards: Software-First EV, Efficiency-Focused, Smart Battery Intelligence
- Cockpit Vision — split layout with placeholder visual + feature bullets
- Battery Intelligence — split layout with 4 feature tiles
- Future Mobility — split layout with roadmap bullets
- Phase Roadmap — 4-phase timeline (Phase 1 highlighted as active)
- CTA — Join NovxX + Read Our Story

**Design:** Matched existing brand: `#091413` background, `#44ACFF` accent, `border-white/10` quiet borders, consistent `py-24` section rhythm.

---

### Task 6 — Complete UI Rework

**Files changed:**
- `src/components/Hero.jsx` — full rewrite
- `src/components/WhyNovxX.jsx` — full rewrite
- `src/components/Features.jsx` — full rewrite
- `src/components/HowWork.jsx` — full rewrite
- `src/components/Try.jsx` — full rewrite
- `src/components/CTA.jsx` — full rewrite
- `src/components/Navbar.jsx` — full rewrite
- `src/components/Footer.jsx` — full rewrite

**Design system established:**
- Background: `#091413` (page base), `#0F1F1D` (card/section surface)
- Accent: `#44ACFF`
- Text: `#E8EDEC` (headlines), `gray-400` (body), `gray-500` (captions)
- Borders: `border-white/5` (section dividers), `border-white/10` (cards)
- Card hover: `hover:border-[#44ACFF]/40`
- Section padding: `py-24 px-6` throughout
- Content width: `max-w-6xl mx-auto`
- Buttons: filled (`bg-[#44ACFF] text-[#091413]`) or ghost (`border-white/15`)

**Hero:**
- Removed stock car photo background
- Added subtle CSS grid pattern (7% opacity) as technical background texture
- Added radial glow (top-right ambient light)
- Added pill badge ("Built for emerging market EV systems") with pulse dot
- Typography tightened: `leading-[1.05] tracking-tight` on headline
- Added data-readout strip (Est. Range / Efficiency / Battery Stress) connecting hero to the actual product

**WhyNovxX:**
- Replaced heavy `border-2 border-[#44ACFF]` cards with `border-white/10` quiet cards
- Added numbered eyebrows (01/02/03)
- Reduced icon size, improved text hierarchy

**Features (homepage section):**
- Reduced icon size from 80px to 40px
- Same quiet card style
- "Explore More" button now uses ghost style

**HowWork:**
- Added thin connector line between steps (desktop only)
- Same card style

**Try:**
- Background changed to `#0F1F1D` for visual alternation between sections
- CTA button now uses filled blue style

**CTA:**
- Simplified — headline, subtext, one button

**Navbar:**
- Added `backdrop-blur-sm`
- Profile as avatar circle instead of text link
- Logout styled as quiet ghost button with red hover
- Mobile menu dark-themed (`#0F1F1D`) matching rest of site

**Footer:**
- New file — 4-column grid layout: brand description, Product links, Company links
- Dynamic copyright year

---

### Task 7 — Product Experience Flow

**Implemented within Task 6 components:**
- Hero CTA → `/register` (new users) 
- Try section → `/calculator` (auth-gated with redirect to login)
- CTA → `/register`
- Footer links cover all key destinations
- Concept page CTA → `/register` + `/about`
- Each Dashboard/Calculator result surfaces next-step prompts

---

## Month 4 — Platform V2

---

### Week 1 Task 1 — Navbar Rebuild

**Files changed:**
- `src/components/Navbar.jsx` — full rewrite
- `src/assets/logo.png` — add your logo file here

**What changed:**

**Structure — 3 clear groups:**
```
[Logo]    [Features  Concept  About]    [Calculator  Dashboard | Avatar  Logout]
```

- Removed from nav: Home (accessible via logo), Stations (Coming Soon — hidden until real map/GPS built), Vehicle Setup (onboarding only, not a nav destination)
- Public center group: Features, Concept, About
- App right group (logged in only): Calculator, Dashboard
- Auth: Sign In (plain link) + Get Started (filled button) when logged out
- Profile as avatar circle showing user's first initial
- Logout as quiet ghost button with red hover state

**New features:**
- `useLocation()` — active page link highlights in `#44ACFF` automatically
- `useEffect` scroll listener — border-b opacity increases after 10px scroll
- `useEffect` location listener — mobile menu closes automatically on route change
- Logo renders actual image from `src/assets/logo.png` at `h-12` desktop / `h-10` mobile
- Mobile menu split into labeled sections: "Explore" (public) and "My Platform" (logged in)
- Spacer `div` at bottom of Navbar component prevents content from hiding behind fixed bar

**Bug fixes:**
- Fixed "Calculaor" typo → "Calculator"
- Fixed mobile menu background (was `bg-gray-300 text-black`, now `bg-[#0F1F1D] text-[#E8EDEC]`)
- Removed duplicate "Features" link that appeared in center nav
- Fixed `ggap-2` typo on logo wrapper

---
