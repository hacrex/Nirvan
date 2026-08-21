# NIRVAN Homepage Lighthouse Remediation — 21 August 2026

## Outcome

The Lighthouse findings from the baseline homepage audit were remediated and verified against a fresh production export. The final audit used Lighthouse **12.8.2** against the local static export on mobile and desktop configurations.

| Configuration | Baseline Performance | Final Performance | Baseline Accessibility | Final Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|---:|---:|
| Mobile default | 73 | **99** | 94 | **100** | 100 | 100 |
| Desktop preset | 97 | **100** | 94 | **100** | 100 | 100 |

The largest improvement came from serving responsive header-logo derivatives instead of the original approximately 868 KiB PNG. The final mobile run reports an LCP of **2.1 s**, down from **6.8 s**, while desktop LCP is **0.6 s**, down from **1.2 s**.

## Implemented fixes

### Responsive logo delivery

The authoritative `/brand/nirvan-logo-header.png` remains unchanged as the full trimmed brand lockup. A new `BrandLogo` component now uses responsive `<picture>` sources:

| View | WebP source | PNG fallback | Dimensions |
|---|---|---|---:|
| Mobile | `nirvan-logo-header-mobile.webp` | `nirvan-logo-header-mobile.png` | 340×112 |
| Desktop | `nirvan-logo-header-desktop.webp` | `nirvan-logo-header-desktop.png` | 560×184 |

The optimized WebP files are approximately **4.1 KiB** mobile and **6.8 KiB** desktop, compared with the previous approximately **868 KiB** header PNG. The header, mobile menu, and footer all use the shared component. The above-the-fold header uses eager/high-priority loading; non-header instances use lazy loading.

### Accessibility

The invalid Hero progress indicator now uses `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` values. The global `.eyebrow` rule no longer overrides section-specific foreground colors, allowing dark-panel and light-panel text choices to render as intended.

Muted sage and clay text was darkened where Lighthouse found insufficient contrast. Dark green-panel metadata was raised to a readable white opacity. Final Lighthouse Accessibility is **100** on both configurations, with no remaining color-contrast or prohibited-ARIA failures.

### JavaScript reduction

The homepage no longer wraps every section in the client-only `ScrollReveal` component. Static sections are rendered directly, removing seven unnecessary client wrappers and their IntersectionObserver/timer setup. Interactive sections such as recovery tabs, FAQ controls, mobile navigation, and newsletter forms remain client-side where behavior is required.

Lighthouse still reports approximately 28 KiB of shared unused JavaScript and 13 KiB of legacy JavaScript in the generated Next runtime. These are framework/shared chunks rather than the removed ScrollReveal wrappers; the final Performance score confirms the remaining cost is non-blocking.

### Cache lifetimes

Added deployment cache configuration for static exports:

- `website/vercel.json` applies one-year immutable caching to `/_next/static/*` and 30-day caching with stale-while-revalidate to `/brand/*`.
- `website/public/_headers` provides equivalent rules for Netlify, Cloudflare Pages, and similar static hosts.

The local static server used for Lighthouse does not apply these deployment headers, so cache audits remain partially flagged locally. The deployed host should be checked after publishing to confirm that the headers are active.

## Verification

| Check | Result |
|---|---|
| ESLint | Passed with zero errors and zero warnings |
| TypeScript | Passed with `npx tsc --noEmit` |
| Production build | Passed; all static routes generated |
| Mobile Lighthouse | 99 / 100 / 100 / 100 |
| Desktop Lighthouse | 100 / 100 / 100 / 100 |
| Mobile CLS | 0 |
| Desktop CLS | 0 |
| Final header smoke test | Passed; responsive Buddha-left/NIRVAN-right lockup renders correctly |

## Generated reports

- `lighthouse-homepage-verified-2026-08-21.report.json`
- `lighthouse-homepage-verified-2026-08-21.report.html`
- `lighthouse-homepage-verified-desktop-2026-08-21.report.json`
- `lighthouse-homepage-verified-desktop-2026-08-21.report.html`
