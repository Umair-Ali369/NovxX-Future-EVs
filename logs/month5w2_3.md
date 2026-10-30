## Month 5 — Week 3 — Vision + Share

---

### M5 W3 T10 — Calculation Result Share Card

**Files changed:**
- `src/components/ShareCard.jsx` — new file

**What was built:**
- Modal overlay that opens when user clicks "Share" after a calculation
- Renders directly to `document.body` using `createPortal` — bypasses all stacking contexts
- Screenshot-ready card with NovxX branding
- Backdrop: `bg-black/70 backdrop-blur-sm` covers full viewport
- Click outside card → closes, Click Close button → closes
- `z-[9999]` ensures modal always appears above everything

**Card contents:**
- NovxX brand header with pulse dot
- Large estimated range as hero stat (e.g. "312 km")
- 4 stat tiles in 2-col grid: Efficiency, Battery Usage, Battery Stress, Energy Consumption
- Driving Condition pill
- Footer branding: "NovxX — Intelligent EV Platform"

**Actions:**
- Copy Results button — copies formatted text results to clipboard
- Close button — closes modal
- Screenshot instruction text below buttons

**How to wire into Calculator.jsx:**
1. `import ShareCard from "../components/ShareCard"`
2. `const [showShare, setShowShare] = useState(false)`
3. Share button: `onClick={() => setShowShare(true)}`
4. Render: `{showShare && <ShareCard result={EVresult?.data} onClose={() => setShowShare(false)} />}`

**Bug fixed:**
- Initial version used `fixed` positioning inside `<section>` with `useScrollReveal` transforms — created stacking context that trapped the modal
- Fixed by using `createPortal(content, document.body)` — renders outside all React component trees

---

### M5 W3 T11 — Concept Vehicle Vision Pass

**File changed:** `src/pages/ConceptVehicle.jsx` — full rewrite

**Design fixes:**
- `bg-gray-900` / `border-gray-800` → `#091413` / `#0F1F1D` / `border-white/10` throughout
- `bg-blue-500` buttons → `bg-[#44ACFF]` design system
- Hero section had `ref={ref}` with `reveal` class → removed (always visible on load)
- Added CSS grid pattern + radial glow to hero — matches rest of site
- Philosophy cards converted to mapped array — cleaner code
- Roadmap items converted to mapped array — cleaner code
- `card-lift` added to philosophy cards

**Typo fixes:**
- "Philosphy" → "Philosophy"
- "Cokpit Version" → "Cockpit Vision"
- "Adoptive" → "Adaptive"
- "Eocsystem" → "Ecosystem"
- "infrastructre" → "infrastructure"
- "servers the software" → "serves the software"
- "build for" → "built for"
- "maximum its lifespan" → "maximize its lifespan"
- "border-gray-800" → "border-white/10"

**Scroll reveal:**
- Hero: no reveal (always visible)
- Philosophy, Cockpit, Battery, Mobility, Roadmap, CTA: each has own `useScrollReveal` ref

---

### M5 W3 T12 — Footer Final Pass

**File changed:** `src/components/Footer.jsx` — updated

**Changes:**
- Brand section: plain "NovxX" text → actual logo image at `h-10`
- Added "Platform Live" pulse dot under logo (matches navbar style)
- Learn EV link added to Product column (added in T3 navbar — now consistent in footer)
- Dashboard link added to Product column (was missing)
- GitHub repo link added to Company column → `https://github.com/Umair-Ali369/NovxX-Future-EVs`
- "Built by Umair Ali" credit added to bottom right → links to GitHub profile
- Copyright text: added `sm:text-left` for proper alignment on larger screens
- Stations link removed from footer (hidden from main nav — consistent)