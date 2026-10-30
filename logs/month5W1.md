# NovxX EV Platform — Month 5 Changelog

---

## Month 5 — Product Ecosystem

**Goal:** Turn NovxX into a platform that someone can open and immediately understand.
**Focus:** Complete user experience, EV knowledge center, vehicle vision, public release prep.

---

## Week 1 — Complete User Experience

---

### M5 W1 T1 — Login + Register Polish

**Files changed:**
- `src/pages/Login.jsx` — full rewrite
- `src/pages/Register.jsx` — full rewrite
- `src/context/AuthContext.jsx` — full rewrite

---

**Login.jsx fixes:**
- `navigate('/dashboard')` fired before token was set in state — now navigate happens inside AuthContext after state updates
- `toast` imported but never used — removed
- `useContext` imported but never used — removed
- No loading state — added spinner on button while request is in flight
- No error message shown to user — added red bordered error box
- Error clears automatically when user starts typing
- Uncontrolled inputs — now controlled with `value` prop
- `bg-gray-900/800/700` → design system colors
- Added NovxX brand header above card
- Added "← Back to home" link

**Register.jsx fixes:**
- `setFrom` typo throughout — renamed to `setForm`
- Unused `token` variable — removed
- No loading state — added spinner
- No error display — added red bordered error box
- Client-side validation: empty fields + password minimum 6 characters
- Uncontrolled inputs — now controlled with `value` prop
- `bg-gray-900/800/700` → design system colors
- Added NovxX brand header above card
- Added "← Back to home" link
- Added terms note below submit button

**AuthContext.jsx fixes:**
- `login()` now navigates AFTER `setUser` and `setToken` — fixes redirect timing bug
- `login()` throws on error so `Login.jsx` can catch and display message
- `register()` throws on error so `Register.jsx` can catch and display message
- `getProfile()` was missing `await` — was silently failing on every call
- `logOut()` had `setUser(null)` called twice — second is now `setToken(null)`
- `updateProfile()` now updates localStorage so profile persists on refresh
- `setUser` exposed in context value

---

**Backend fixes (userController.js):**
- `req.User?.id` (capital U — always undefined) → `req.user?._id`
- Dashboard filter fallback `{}` removed — now returns 401 if no userId
- `r.DrivingCondition` → `r.drivingCondition` in condition count
- `aveRange` typo → `avgRange` in empty state response
- Error response now sends `error.message` string not full error object

---

### M5 W1 T2 — Profile Page + VehicleSetup Polish

**Files changed:**
- `src/pages/Profile.jsx` — full rewrite
- `src/pages/VehicleSetup.jsx` — full rewrite

---

**Profile.jsx fixes:**
- `bg-gray-900/800/700` → design system colors throughout
- `reveal` removed from outer div — was causing disappear on load
- `text center` typo → `text-center`
- `calculaor` typo → `calculator`
- Error on save failure was commented out — now shown in red bordered box
- Success message now auto-clears after 3 seconds
- Loading spinner added to Save button
- Vehicle type cards updated to design system style
- User info card updated to design system style
- Inputs and selects updated to design system style

**VehicleSetup.jsx fixes:**
- `handleSubnit` typo → `handleSubmit`
- `lassName` typo → `className` on wrapper div
- `bg-gray-900/800/700` → design system colors
- `calculaor` typo → `calculator`
- `text center` typo → `text-center`
- `compatabiliy` typo → `capability`
- `Performence` typo → `Performance`
- Gap added between Save and Skip buttons (`flex flex-col gap-3`)
- Loading spinner added to Save button
- Error shown in red bordered box
- Added NovxX brand link at top
- Vehicle type cards updated to design system style with descriptions

---

### M5 W1 T3 — Navigation Final Pass

**File changed:** `src/components/Navbar.jsx` — full rewrite

**Fixes:**
- `lable: "Profile"` typo → `label: "Profile"` — Profile was showing blank text in mobile menu
- `lazy` unused React import removed
- Mobile auth buttons had no gap — added `flex flex-col gap-3` wrapper
- Logo `h-24` desktop too tall → `h-10`, mobile `h-16` → `h-8`
- `navLinkClass` now matches sub-routes with `startsWith(path + "/")` so nested routes highlight correctly

**New additions:**
- Learn EV link added to desktop center nav and mobile Explore section (→ `/learn`, ready for Week 2)
- Spacer div (`h-[57px]`) added at bottom of nav component — pages no longer hide behind fixed navbar
- Mobile dropdown `top` adjusted to `57px` to match actual navbar height
- Mobile dropdown now has `max-h-[85vh] overflow-y-auto` — long menus scroll instead of going off screen

---

### M5 W1 T4 — Error + Empty States

**Files changed:**
- `src/context/CalculatorContext.jsx` — updated
- `src/pages/Calculator.jsx` — full rewrite
- `src/context/DashboardContext.jsx` — critical bug fix

---

**CalculatorContext.jsx fixes:**
- No error state exposed to UI — errors were silently swallowed with `console.log`
- Added `calcError` state — Calculator.jsx can now show failure messages
- Added `refetch()` call after successful calculation — Dashboard updates automatically after every new calculation
- `useNavigate` unused import removed

**Calculator.jsx fixes:**
- `import { use }` unused React import removed
- `calcError` from context now shown as error state in results panel
- `EVresult.data.battery_Stress` → `EVresult.data.batteryStress` (wrong response key)
- `EVresult.data.energy_Consumption` → `EVresult.data.energyConsumption` (wrong response key)
- `setInsights("")` in reset removed — insights come from EVresult not local state
- `DrivingCondition` state variable normalized to `drivingCondition` throughout
- Stat cards now in `grid grid-cols-2 gap-3` — were stacking vertically with no spacing
- Empty state description text fixed — had garbled "click Anal Fill the filed..." text
- `reveal` removed from outer section — was causing disappear on load
- "Enviornment" typo → "Environment"
- Loading button now shows spinner animation
- Validation error shown in red bordered box

**Three result panel states:**
- Empty state: ⚡ icon + "Run your first analysis"
- Error state: ⚠️ icon + error message + "Try Again" button
- Success state: 6 stat cards in 2-col grid + insights + smart insights + Dashboard CTA

**DashboardContext.jsx critical fix:**
- Missing `await` on `API.get("/dashboard")` — data was always `undefined`
- This caused dashboard to show loading spinner forever on first login
- `useEffect` now depends on `[user]` — re-fetches when user logs in
- Dashboard now loads correctly on first visit without needing a page refresh