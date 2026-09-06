# Website audit — erikirgens.com

Audit date: 2026-09-06. Scope: the `main` branch of `erik-t-irgens/erik-irgens-website`, built locally on Node 22 and rendered in headless Chromium at five viewport sizes (1440x900, 1280x720, 768x1024, 390x844, 844x390). The live site could not be fetched from the audit sandbox, so everything below is based on the code and a local production build.

---

## TL;DR

1. **The section-reveal logic is broken.** Every section except Welcome only becomes visible when the mouse hovers over it. The scroll-based fallback uses a percentage formula that is wrong for the current page, so About lights up one section late, Portfolio lights up when you reach Contact, and Contact can never light up from scrolling at all. On phones and tablets (no hover) the site reads as a title over a photo with no content. This is the single biggest fix.
2. **The layout is absolutely positioned everywhere**, with vh/vw/percentage offsets tuned for one desktop size. On phones the Welcome text overlaps, on short landscape screens content bleeds into the next section, and the testimonial cards become a narrow column of justified text.
3. **The deploy "action" you remember is not in this repo.** There are no GitHub Actions workflows on any branch or anywhere in git history, and GitHub reports zero workflow runs. `erikirgens.com` resolves to Amazon CloudFront, so the site is served from S3 + CloudFront or from AWS Amplify Hosting. A ready-to-use workflow is proposed below.
4. **Testimonial photos are dead.** They point at LinkedIn CDN URLs with signed tokens that expired in March and May 2024.
5. **The toolchain is 2019-era** (react-scripts 3.2.0, React 16.13, `--openssl-legacy-provider` hack), `npm ci` fails because the lockfile is out of sync, and `npm audit` reports 233 vulnerabilities (19 critical, 69 high), nearly all in the build toolchain.
6. **12.4 MB of images ship with the page**, and a further ~21 MB of unused backgrounds sit in the repo.

---

## 1. Section activation (the "transitions" bug)

### What happens today

Each section (`Welcome`, `About`, `Portfolio`, `Contact`) starts with `sectionActive: false`. While inactive, its background is at full brightness and all of its content is at `opacity: 0`. Two things can activate it:

- `onMouseEnter` on the section wrapper (`src/global/SectionWrapper.js`).
- A scroll-position percentage passed down from `src/views/index.js`, compared against a hard-coded range per section (`minRange`/`maxRange`) inside `componentWillReceiveProps`.

The percentage is computed in `src/global/ScrollSnapView.js` as:

```
scrollTop / (docHeight * 5 - window.innerHeight) * 100
```

The `* 5` assumes five sections; there are four (Blog was removed). Measured on a 1440x900 viewport during this audit:

| Section on screen | Computed % | Range needed | Result |
|---|---|---|---|
| Welcome | 0 | -1 to 24 | activates (also forced on mount) |
| About | 19 | 24 to 49 | **stays dark** |
| Portfolio | 39 | 49 to 74 | **stays dark** (About activates here instead) |
| Contact | 56 (maximum reachable) | 99 to 100 | **can never activate** (Portfolio activates here instead) |

On desktop the user's mouse usually drifts over the section and rescues it, which is why it "mostly works" on a laptop. On touch devices there is no hover, so About, Portfolio and Contact show only their title over an undimmed photo. Two smaller bugs compound this:

- `componentWillReceiveProps` reads `this.props` (the previous props) rather than the `nextProps` argument, so each section reacts one scroll event late.
- Once a section does activate, its content fades in over `1.5s` (`transition: all 1.5s ease-in-out` in every section), so even a correct trigger feels sluggish.

### Recommended fix

Replace the percentage system entirely with an `IntersectionObserver` inside `SectionWrapper` (threshold around 0.4). Activate on first intersection, keep `onMouseEnter` as a bonus, and drop `currentPos`/`minRange`/`maxRange` from every section. Then shorten the reveal to ~400ms and transition `opacity, transform` rather than `all`. This is roughly a 40-line change and fixes the mobile experience outright.

Also remove the duplicate native `onscroll` handler in `ScrollSnapView.componentDidMount` (it sets state on every scroll frame in parallel with the React `onScroll` handler) and the `debounce` in `views/index.js`, none of which are needed once the observer exists.

---

## 2. Layout and device sizes

Root causes, visible in the contact sheets:

- **Fixed header + body offset.** `body { margin-top: 100px; overflow: hidden }` and the scroll container is `height: 100vh`, so the bottom 100px of the scroller is always off-screen. On phones the nav wraps to two lines and the 100px is no longer the right height either. The "Learn More" button (`bottom: 10vh`) lands very close to the edge.
- **Sections are 90vh inside a 100vh snap container with `scroll-snap-align: center`**, so neighbours peek in above and below and the "frame" border never lines up with the viewport.
- **Everything inside a section is `position: absolute` with vh/percentage tops** (`.welcome-statement top: 60%`, `.about-image-carousel top: 20%`, `.contact-statement top: 20vh`, `.button bottom: 10vh`, `.skillMasterWrapper top: 13%`...). Elements don't know about each other, so:
  - Phone portrait: the profile card (`.erikProfileCard { width: 30% }`) wraps "erik irgens" onto two lines and the four-line job title collides with the "Hi. i'm erik irgens" statement.
  - Phone landscape / short laptops: the testimonial card (`.section-children-wrapper` is `100vh` tall inside a `90vh` section) overflows into the Portfolio section.
  - Testimonial text is `width: 50%` with `text-align: justify`, which on a 390px screen becomes a ~150px column with large word gaps.
- **`scroll-snap-type: y mandatory`** means a section whose content is taller than the viewport can never be scrolled to; only the inner `overflow: auto` boxes (testimonial text, skills list) scroll. On short screens that traps content.
- The `@media (max-height: 570px)` block hides the skills sliders entirely, and there are two identical `@media (max-height: 420px)` blocks with conflicting `font-weight` values.
- `scroll-snap-points-y` is an obsolete property and can be removed.
- Wheel events over the fixed header do not scroll the page because the header sits outside the scroll container.

### Recommended approach

- Make the scroll container the document itself (drop `body { overflow: hidden }` and the 100px margin; give the header a real height and use `scroll-padding-top`). Use `min-height: 100svh` sections with `scroll-snap-type: y proximity` (or no snapping on `max-height: 600px`).
- Lay each section out with flexbox/grid in normal flow: title, content, call-to-action stacked with `gap`, centred with `justify-content`. Reserve `position: absolute` for the decorative borders and separators only.
- Size type with `clamp()` (e.g. `font-size: clamp(1.1rem, 2.5vw, 2rem)`) instead of `3vw`/`5.5vh`, and give the profile card a `max-width` in `rem`, not `30%`.
- Add `@media (prefers-reduced-motion: reduce)` to disable the fades and border-draw animations.

---

## 3. Deployment: the missing action

Facts established:

- No `.github/` directory exists on `main`, `dev`, `style-audit`, `github-apit` or in any commit in history. No workflow file, `buildspec.yml`, `amplify.yml`, or deploy script has ever been committed.
- GitHub's Actions API returns zero workflows and zero runs for the repository.
- `erikirgens.com` resolves to `13.227.87.x`, an Amazon CloudFront range.
- The very first commit message says the app was "explicitly created as a backbone to host on AWS".

So the pipeline you remember lives outside this repo. The two likely candidates:

1. **AWS Amplify Hosting connected to this GitHub repo.** Amplify installs its own GitHub App/webhook and builds on every push to a chosen branch with no workflow file in the repo. Check the AWS console → Amplify → Apps. If it's there, the "action" is Amplify's branch auto-build.
2. **S3 bucket + CloudFront distribution, deployed by hand** (`npm run build && aws s3 sync build/ s3://<bucket> --delete && aws cloudfront create-invalidation ...`). Check S3 for a bucket named like `erikirgens.com` and CloudFront for a distribution whose origin is that bucket or Amplify.

Either way, it's worth adding a real workflow to the repo so the deploy is reproducible. Suggested `.github/workflows/deploy.yml` for the S3 + CloudFront case (uses OIDC, so no long-lived keys in GitHub):

```yaml
name: Deploy
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ secrets.AWS_DEPLOY_ROLE_ARN }}
          aws-region: us-east-1
      - run: aws s3 sync build/ s3://${{ secrets.S3_BUCKET }} --delete
      - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
```

You'd need an IAM role trusted by GitHub's OIDC provider with `s3:PutObject/DeleteObject/ListBucket` on the bucket and `cloudfront:CreateInvalidation` on the distribution, then three repository secrets. If the site is on Amplify instead, no workflow is needed; just confirm which branch Amplify watches.

**Blocking issue for any CI deploy:** `npm ci` currently fails because `package-lock.json` is out of sync with `package.json` (see §5). It must be regenerated first.

---

## 4. Functional bugs and dead content

- **Testimonial photos**: all six `testimonialImage` URLs are `media.licdn.com` links with `e=1716422400` / `e=1711555200` expiry tokens (May and March 2024). They 403 now, so every testimonial shows an empty yellow circle. Download the photos (with permission) into `src/` or drop the photo.
- **GitHub project cards** (`src/views/components/Portfolio/components/GitHubProject.js`):
  - Five repos × two unauthenticated calls to `api.github.com` on every page load, against a limit of 60 requests/hour per IP. Two visitors behind one NAT can exhaust it, and the fallback renders `Error: undefined` because it reads `error.description` (should be `error.message`).
  - Both responses are `console.log`ged in production.
  - Consider fetching once at build time (a small script that writes `src/data/repos.json`) or caching in `localStorage`; the data changes rarely.
  - `LanguagesGraph` computes the total in a `useEffect` with an empty dependency array, so it only works because the parent waits for `isLoaded`; simpler to compute totals inline.
- **Contact form** (`EmailForm.js`): posts `FormData` to a Google Forms endpoint with `fetch`. The request does go through, but the browser then throws a CORS error, so the "success" path (`alert(...)`) never runs and the thank-you message is shown from the `catch` block. It works by accident. Use `mode: 'no-cors'` and treat completion as success, or move to a real endpoint (Formspree, SES via API Gateway, etc.). Also: every `<label>` uses `for=` (should be `htmlFor` in JSX) and all four point at the same entry id, and the inputs have no `id`s, so labels aren't associated with fields.
- **Music tab**: SoundCloud embeds only mount when `musicActive` is true, but the GitHub cards are `display: none` rather than unmounted, so both lists exist in the DOM. Fine, but the carousel's scroll position is shared, so switching tabs can land mid-way through the list.
- **Keyboard / accessibility**: nav items, social buttons and project buttons are `<div>`s with `onMouseDown` handlers that call `window.open` (`SocialButton.js`, `ProjectButton.js`). They can't be tabbed to or activated with a keyboard, and `window.open` on mousedown fires on right-click and middle-click too. Use real `<a href target="_blank" rel="noopener">` elements styled the same way.
- **Empty/dead files**: `src/global/Footer/index.js` (empty), `src/views/components/Portfolio/components/ProjectGrid.js` (empty), `src/views/components/Blog/*` (unused; `BlogPostWrapper` is an empty class that would crash if rendered), `SkillSlider.js` (only used in commented-out code), `src/App.css` and `src/logo.svg` (CRA leftovers).
- **Metadata**: `public/index.html` still has `<title>React App</title>` and the CRA description; `manifest.json` is "Create React App Sample". Helmet sets the title at runtime, but crawlers and link previews see the static HTML. Add a real title, description, Open Graph tags and a social image.
- `React.Fragment` lists with `key` on the inner element rather than the fragment (`Skill.js`, `Testimonial.js`, `LanguagesGraph.js`) will warn in dev.

---

## 5. Toolchain and dependencies

| Item | Current | Note |
|---|---|---|
| react-scripts | 3.2.0 (Oct 2019) | Needs the `--openssl-legacy-provider` flag on Node 17+. CRA is unmaintained; latest is 5.0.1. |
| react / react-dom | 16.13 | `ReactDOM.render`, `componentWillReceiveProps` (6 uses) are deprecated. |
| `npm ci` | fails | lockfile out of sync; `npm install --legacy-peer-deps` works. Both `yarn.lock` and `package-lock.json` are committed; keep one. |
| `npm audit` | 233 vulns (19 critical, 69 high) | Almost entirely webpack 4 / babel / jest transitive deps from react-scripts 3. Not runtime, but they will block any CI security gate. |
| Unused deps | `react-scroll-to-component`, `react-snap-scroll`, `@n8tb1t/use-scroll-position` | never imported (one is a commented-out import). `react-router-dom` wraps a single route and can go. `lodash` is used only for `debounce`. |
| Fonts | two `@import` lines in `index.css` | Major Mono Display is imported twice and `@import` blocks first paint. Move to `<link rel="preconnect">` + one `<link>` in `index.html`, or self-host. |

Recommended path: migrate to **Vite + React 18/19** (a few hours: move `index.html` to the root, `src/index.js` → `main.jsx`, replace `process.env.PUBLIC_URL`, delete `serviceWorker.js`). That removes the OpenSSL hack, the audit noise, and `npm ci` problems in one go. While there, convert the six class components to function components; the animation state objects collapse into CSS classes.

---

## 6. Performance

Local production build: 15 MB total, 12.4 MB of it images.

| Asset | Size | Used for |
|---|---|---|
| `5.jpg` | 3.6 MB | Portfolio background |
| `3.jpg` | 2.5 MB | Contact background |
| `erik_transparent.PNG` | 2.3 MB | 20vh circular avatar |
| `8.jpg` | 1.4 MB | Blog background (section unused, still bundled) |
| `10.jpg`, `11.jpg`, `erik.jpeg`, `erik-irgens-website-image.PNG` | 0.6 MB each | Welcome/About backgrounds, unused imports |
| `1,2,4,6,7,9.jpg` in `src/Backgrounds` | ~21.6 MB | **not referenced anywhere**; just repo weight |

Actions: convert the four used backgrounds to WebP/AVIF at ~1920px wide (expect ~150–300 KB each), export the avatar at 400px, delete the unused images from the repo (and consider `git filter-repo` if clone size matters), and remove the dead imports (`erik.jpeg`, `erik-irgens-website-image.PNG`, `word-visualizer-image.PNG`, `8.jpg`). Add `loading="lazy"`/`decoding="async"` semantics by loading non-Welcome backgrounds only once their section is near the viewport (the same `IntersectionObserver` from §1 can do this).

---

## 7. Suggested order of work

1. **Fix activation** (§1): `IntersectionObserver` in `SectionWrapper`, delete the percentage plumbing, 400ms opacity transitions. One PR, immediate mobile win.
2. **Content fixes** (§4): testimonial photos, `error.message`, remove `console.log`s, real `<a>` links, `htmlFor`/ids on the form, page title/meta.
3. **Images** (§6): compress and delete unused.
4. **Layout rework** (§2): document-level scrolling, flex/grid sections, `clamp()` type, `prefers-reduced-motion`. This is the largest change; do it after 1–3 so you can compare screenshots.
5. **Toolchain** (§5): Vite + React 18/19, drop unused deps, single lockfile, `npm ci` green.
6. **Deploy** (§3): locate the Amplify app or S3 bucket, add `deploy.yml`, wire the OIDC role and secrets, and update the README's "Setup and Use" to describe it.
