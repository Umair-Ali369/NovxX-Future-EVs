# NovxX EV Platform — Month 5 Changelog

---

## Month 5 — Product Ecosystem

**Goal:** Turn NovxX into a platform that someone can open and immediately understand.
**Focus:** Complete user experience, share functionality, vision polish, public release prep.

---

## Week 1 — Complete User Experience

---

### M5 W1 T1 — Login + Register Polish

**Files changed:**
- `src/pages/Login.jsx` — full rewrite
- `src/pages/Register.jsx` — full rewrite
- `src/context/AuthContext.jsx` — full rewrite
- `server/Controllers/userController.js` — bug fixes

**Login.jsx:**
- Navigate fired before token set in state → now fires inside AuthContext after state updates
- `toast` and `useContext` unused imports → removed
- No loading state → added spinner on button
- No error message → added red bordered error box
- Error clears when user starts typing
- Uncontrolled inputs → controlled with `value` prop
- `bg-gray-900/800/700` → design system colors
- Added NovxX brand header above card
- Added "← Back to home" link

**Register.jsx:**
- `setFrom` typo → `setForm` throughout
- Unused `token` variable → removed
- No loading state → added spinner
- No error display → added red bordered error box
- Client-side validation: empty fields + password minimum 6 characters
- Uncontrolled inputs → controlled with `value` prop
- `bg-gray-900/800/700` → design system colors
- Added NovxX brand header, "← Back to home" link, terms note

**AuthContext.jsx:**
- `login()` navigates AFTER `setUser` and `setToken` → fixes redirect timing bug
- `login()` throws on error so Login.jsx can catch and display message
- `register()` throws on error so Register.jsx can catch and display message
- `getProfile()` missing `await` → was silently failing
- `logOut()` had `setUser(null)` twice → second is now `setToken(null)`
- `updateProfile()` now updates localStorage so profile persists on refresh
- `setUser` exposed in context value

**userController.js:**
- `req.User?.id` (capital U) → `req.user?._id`
- Dashboard filter fallback `{}` → now returns 401 if no userId
- `r.DrivingCondition` → `r.drivingCondition` in condition count
- `aveRange` typo → `avgRange` in empty state response
- Error response now sends `error.message` not full error object

---

### M5 W1 T2 — Profile + VehicleSetup Polish

**Files changed:**
- `src/pages/Profile.jsx` — full rewrite
- `src/pages/VehicleSetup.jsx` — full rewrite

**Profile.jsx:**
- `bg-gray-900/800/700` → design system colors
- `reveal` removed from outer div → was causing disappear on load
- `text center` typo → `text-center`
- `calculaor` typo → `calculator`
- Error on save failure was commented out → now shown in red bordered box
- Success message auto-clears after 3 seconds
- Loading spinner added to Save button
- All cards, inputs, selects → design system style

**VehicleSetup.jsx:**
- `handleSubnit` typo → `handleSubmit`
- `lassName` typo → `className`
- `bg-gray-900/800/700` → design system colors
- `calculaor` typo → `calculator`
- `text center` typo → `text-center`
- `compatabiliy` typo → `capability`
- `Performence` typo → `Performance`
- Gap added between Save and Skip buttons
- Loading spinner added to Save button
- Error shown in red bordered box
- NovxX brand link added at top

---

### M5 W1 T3 — Navigation Final Pass

**File changed:** `src/components/Navbar.jsx` — full rewrite

**Bug fixes:**
- `lable: "Profile"` typo → `label: "Profile"` — Profile was blank in mobile menu
- `lazy` unused import → removed
- Mobile auth buttons had no gap → `flex flex-col gap-3` added
- Logo `h-24` desktop → `h-10`, mobile `h-16` → `h-8`

**New additions:**
- Learn EV link added to desktop nav and mobile Explore section (→ `/learn`)
- Spacer div `h-[57px]` added — pages no longer hide behind fixed navbar
- Mobile dropdown `top` adjusted to `57px`
- Mobile dropdown `max-h-[85vh] overflow-y-auto` — scrollable on long menus
- `navLinkClass` matches sub-routes with `startsWith(path + "/")`

---

### M5 W1 T4 — Error + Empty States

**Files changed:**
- `src/context/CalculatorContext.jsx` — updated
- `src/pages/Calculator.jsx` — full rewrite
- `src/context/DashboardContext.jsx` — critical bug fix

**CalculatorContext.jsx:**
- No error state exposed to UI → added `calcError` state
- Added `refetch()` call after successful calculation → Dashboard auto-updates
- `useNavigate` unused import → removed

**Calculator.jsx:**
- `import { use }` unused → removed
- `calcError` now shown as error state in results panel
- `EVresult.data.battery_Stress` → `EVresult.data.batteryStress`
- `EVresult.data.energy_Consumption` → `EVresult.data.energyConsumption`
- `setInsights("")` in reset → removed (insights come from EVresult)
- `DrivingCondition` → `drivingCondition` normalized throughout
- Stat cards now in `grid grid-cols-2 gap-3`
- Empty state description text fixed
- `reveal` removed from outer section
- "Enviornment" → "Environment"
- Loading spinner on Analyze button

**Three result panel states:**
- Empty: ⚡ icon + "Run your first analysis"
- Error: ⚠️ icon + error message + "Try Again" button
- Success: 6 stat cards + insights + smart insights + Dashboard CTA

**DashboardContext.jsx critical fix:**
- Missing `await` on `API.get("/dashboard")` → data was always undefined
- Dashboard was stuck on loading spinner forever on first login
- `useEffect` now depends on `[user]` → re-fetches when user logs in

---

## Week 2 — Learn EV (Skipped)

Skipped — moved to Month 6 Week 1.
Reason: NET test preparation. Content will be written from actual EV studying.

---

## Week 3 — Vision + Share

---

### M5 W3 T10 — Calculation Result Share Card

**File:** `src/components/ShareCard.jsx` — new file

**What was built:**
- Modal overlay using `createPortal(content, document.body)`
- Renders directly to document.body — bypasses all stacking contexts
- `z-[9999]` ensures modal always above everything
- Click outside → closes, Close button → closes
- Screenshot-ready card with NovxX branding

**Card contents:**
- NovxX brand header with pulse dot
- Large range as hero stat
- 4 stat tiles: Efficiency, Battery Usage, Battery Stress, Energy Consumption
- Driving Condition pill
- Footer branding

**Actions:**
- Copy Results → clipboard formatted text
- Close → closes modal
- Screenshot instruction text

**Bug fixed:**
- Initial version used `fixed` inside `<section>` with `useScrollReveal` transforms
- Created stacking context that trapped the modal
- Fixed with `createPortal(content, document.body)`

**Wired into Calculator.jsx:**
- `import ShareCard from "../components/ShareCard"`
- `const [showShare, setShowShare] = useState(false)`
- Share button next to ✓ Complete badge
- `{showShare && <ShareCard result={EVresult?.data} onClose={() => setShowShare(false)} />}`

---

### M5 W3 T11 — Concept Vehicle Vision Pass

**File:** `src/pages/ConceptVehicle.jsx` — full rewrite

**Design fixes:**
- `bg-gray-900/border-gray-800` → design system throughout
- `bg-blue-500` buttons → `bg-[#44ACFF]`
- Hero `reveal` class removed → always visible on load
- CSS grid pattern + radial glow added to hero
- Philosophy and roadmap items converted to mapped arrays
- `card-lift` added to philosophy cards
- Each section has own `useScrollReveal` ref

**Typo fixes:**
- "Philosphy" → "Philosophy"
- "Cokpit Version" → "Cockpit Vision"
- "Adoptive" → "Adaptive"
- "Eocsystem" → "Ecosystem"
- "infrastructre" → "infrastructure"
- "servers the software" → "serves the software"
- "build for" → "built for"
- "maximum its lifespan" → "maximize its lifespan"

---

### M5 W3 T12 — Footer Final Pass

**File:** `src/components/Footer.jsx` — updated

**Changes:**
- Plain "NovxX" text → actual logo image at `h-10`
- "Platform Live" pulse dot added under logo
- Learn EV link added to Product column
- Dashboard link added to Product column
- GitHub repo link added → `https://github.com/Umair-Ali369/NovxX-Future-EVs`
- "Built by Umair Ali" credit added → links to GitHub profile
- Copyright `sm:text-left` added
- Stations link removed (hidden from main nav — consistent)

---

## Week 4 — Public Release Prep

---

### M5 W4 T13 — SEO Basics

**File:** `index.html` — updated

**Added:**
- Primary meta tags: title, description, keywords, author, robots
- Open Graph tags: type, url, title, description, image, site_name, locale
- Twitter Card tags: card, url, title, description, image
- Favicon link
- Apple touch icon
- Theme color `#091413` (browser tab color on mobile)

---

### M5 W4 T14 — Performance Audit

**No files changed — manual checklist applied:**
- Removed unused imports across Calculator, Dashboard, AuthContext
- Added `lazy` + `Suspense` to App.jsx routes
- Removed all `console.log` statements from controllers and contexts
- Checked `package.json` for duplicate/unused dependencies

---

### M5 W4 T15 — Mobile Responsive Audit

**Files changed:**
- `src/pages/Calculator.jsx` — mobile padding fixes
- `src/pages/Dashboard.jsx` — chart height fix

**Calculator.jsx mobile fixes:**
- Outer section: `px-6` → `px-4 md:px-6`
- Page header margin: `mb-12` → `mb-8 md:mb-12`
- H1 size: `text-3xl` → `text-2xl md:text-5xl`
- Two column gap: `gap-8` → `gap-6 md:gap-8`
- Form panel padding: `p-8` → `p-5 md:p-8`
- Results panel padding: `p-8` → `p-5 md:p-8`
- Stat cards gap: `gap-3` → `gap-2 md:gap-3`
- Input group gap: `gap-8` → `gap-6 md:gap-8`

**Dashboard.jsx mobile fix:**
- All 4 chart heights: `height={220}` → `height={180}`

---

### M5 W4 T16 — Final Review

**Manual checklist completed:**
- Logged-out visitor flow: Home → Features → Concept → About → Register → VehicleSetup → Dashboard ✅
- Logged-in user flow: Calculator → Analyze → Share → Dashboard → Profile → Logout ✅
- Mobile audit: Navbar, Hero, Calculator, Dashboard, ShareCard, Footer ✅
- Content check: No placeholder text, no broken links, no console errors ✅
- GitHub link in footer verified ✅

---

## Month 5 — Final State