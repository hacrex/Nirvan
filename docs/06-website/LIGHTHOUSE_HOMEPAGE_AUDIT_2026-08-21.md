# NIRVAN Homepage Lighthouse Audit — 21 August 2026

## Executive summary

A production export of the NIRVAN homepage was audited locally with **Lighthouse 12.8.2**. The default Lighthouse run used the mobile configuration, while a second run used the desktop preset. Lighthouse is an automated audit tool for performance, accessibility, best practices, and SEO [1].

The desktop result is strong at **97 Performance, 94 Accessibility, 100 Best Practices, and 100 SEO**. The mobile result is more revealing: **73 Performance, 94 Accessibility, 100 Best Practices, and 100 SEO**. The main mobile bottleneck is the oversized PNG header logo, which is downloaded at approximately **868 KiB** while rendering at roughly **170×56 CSS pixels**. This single asset is also identified as the principal LCP/image-delivery problem.

> **Important interpretation:** Lighthouse performance scores are lab measurements and can vary with device emulation, throttling, browser state, and network conditions. Lighthouse’s overall Performance score is derived from weighted metric scores rather than directly from the Opportunities list [2].

## Test methodology

| Parameter | Value |
|---|---|
| Audited URL | `http://localhost:3002/` |
| Build | Current Next.js static production export from `website/out` |
| Lighthouse | `12.8.2` |
| Categories | Performance, Accessibility, Best Practices, SEO |
| Mobile run | Lighthouse default mobile configuration; 412px viewport observed in audit details |
| Desktop run | `--preset=desktop` |
| Reports | JSON and HTML reports saved beside this document |
| Date | 21 August 2026 |

Lighthouse’s lab metrics include LCP, CLS, and TBT, and are useful for diagnosing loading, stability, and interaction readiness; field data should be collected separately for real-user validation [3].

## Scores

| Configuration | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Mobile default | **73** | **94** | **100** | **100** |
| Desktop preset | **97** | **94** | **100** | **100** |

The desktop score is in Lighthouse’s green range. The mobile score is in the “needs improvement” range, driven primarily by image transfer size and the resulting LCP delay. Lighthouse describes scores from 90–100 as good and 50–89 as needing improvement [2].

## Core Web Vitals and loading metrics

| Metric | Mobile default | Desktop preset | Assessment |
|---|---:|---:|---|
| First Contentful Paint | 0.9 s | 0.3 s | Good |
| Largest Contentful Paint | **6.8 s** | **1.2 s** | Mobile needs urgent improvement; desktop is close to the good range |
| Speed Index | 0.9 s | 0.3 s | Good |
| Total Blocking Time | 240 ms | 60 ms | Mobile needs improvement; desktop is strong |
| Cumulative Layout Shift | 0 | 0 | Excellent visual stability |
| Time to Interactive | 6.8 s | 1.2 s | Mobile needs improvement; desktop is strong |
| Max Potential FID | 290 ms | 110 ms | Mobile needs improvement; desktop is strong |

LCP is the dominant metric issue. Lighthouse identified the largest-contentful-paint element at approximately **6,760 ms** on mobile and **1,220 ms** on desktop. The page has no CLS problem, so the issue is not layout instability; it is primarily resource size, format, and responsive delivery.

## Highest-impact findings

### 1. The header PNG is far too large for its rendered size

The asset `/brand/nirvan-logo-header.png` is approximately **868 KiB** and has intrinsic dimensions of **2256×741**, but Lighthouse observed it rendering at approximately **170×56 CSS pixels** in the mobile header and footer. Lighthouse estimates roughly **833–846 KiB** of savings from using a properly sized, compressed, next-generation image.

This asset is the highest-priority optimization because it is used in the header, is requested early, and is identified in the image-delivery and LCP audits. The exact supplied artwork can be preserved while adding a responsive derivative for the header, for example a compact WebP/AVIF or a smaller PNG fallback. The original supplied PNG should remain available as the authoritative brand asset and for documentation/social use.

### 2. The header logo is the LCP/image-delivery bottleneck on mobile

The mobile run reports **6.8 s LCP** and points to the large visual logo/header asset as the primary image-delivery concern. The hero illustration is not the main transfer bottleneck. A smaller responsive header asset, explicit `sizes`, and an optimized format should reduce both image transfer and LCP.

The logo should not be lazy-loaded when it is the first visible brand element. It should instead be loaded with a small, correctly sized responsive variant, optionally using `priority`/high fetch priority only for the true above-the-fold header asset.

### 3. Image format and responsive-image audits fail

Lighthouse estimates approximately **798 KiB** saved by serving the logo in WebP or AVIF and approximately **833 KiB** saved by serving an image sized for its rendered dimensions. The current static export uses the original PNG directly, so the browser cannot select a smaller source based on viewport size.

Recommended implementation order:

1. Generate a small header derivative at the maximum actual display width, such as 320–560 CSS pixels at 2× density.
2. Add WebP or AVIF variants while retaining PNG fallback.
3. Use `srcSet`/`sizes` or Next image optimization where compatible with the static deployment.
4. Keep the full 2256×741 PNG for downloadable/documentation use rather than for the header request.

### 4. Cache headers are not present in the local static server

Lighthouse found **13 resources** without efficient cache lifetimes and estimates roughly **1.0 MiB** of repeat-visit savings. The local `serve` process used for this audit does not represent the final production CDN configuration, so this finding should be validated against the deployed host.

For deployment, configure long-lived immutable caching for hashed Next assets and versioned brand assets. If the logo filename remains stable, use a versioned filename or query strategy before applying a long immutable cache policy.

### 5. JavaScript overhead is modest but measurable

Mobile Lighthouse estimates approximately **28 KiB** of unused JavaScript and **13 KiB** of legacy JavaScript/polyfill overhead. The desktop run reports the same unused-JavaScript opportunity but with a smaller score impact. This is lower priority than the logo image because the JavaScript cost is comparatively small.

Review whether all client components are required on the homepage, especially interactive sections that appear below the fold. Keep server-rendered content server-side where possible and defer nonessential interactive code until interaction or visibility.

## Accessibility findings

The Accessibility score is **94** in both configurations. Lighthouse reports two actionable categories:

| Finding | Evidence | Recommendation |
|---|---|---|
| Prohibited ARIA attribute | `Hero.tsx` contains a progress-like `<div aria-label="Two of four activities complete">` without a valid role | Add `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`, or remove the label if the bar is purely decorative |
| Color contrast | Several muted sage/clay text combinations fall below 4.5:1 | Darken small text colors or increase font size/weight; prioritize `#708078` and `#c66b4a` combinations identified in the report |

The affected contrast examples include the mock app’s “Wednesday, 12 June,” “Next activity,” “YOUR GOAL,” “78% building,” “Mobility,” and the footer newsletter consent text. These are visible content, not merely hidden audit nodes, so they should be corrected in the next accessibility pass.

The current audit also confirms **0 CLS**, valid SEO metadata, valid robots behavior, valid canonical data, descriptive links, and valid structured data.

## Best Practices and SEO

Best Practices and SEO both scored **100** on mobile and desktop. The audit confirms that the page has a successful HTTP status, valid document structure, valid charset, a meta description, crawlable links, indexable robots behavior, a valid canonical URL, and valid structured data.

The current Open Graph and Twitter image references are present in the exported head and point to `/brand/nirvan-social-landscape.png`. The social image is the supplied **1920×1080 PNG** and is not the mobile LCP bottleneck.

## Prioritized action plan

| Priority | Action | Expected benefit |
|---|---|---|
| P0 | Create and use a small responsive header logo derivative in WebP/AVIF with PNG fallback | Largest likely improvement to mobile LCP and transfer size |
| P1 | Add `srcSet`/`sizes` or equivalent responsive image selection for the header logo | Prevents mobile devices from downloading the 2256px source |
| P1 | Fix the remaining Hero progressbar ARIA semantics | Removes the confirmed Lighthouse Accessibility failure |
| P1 | Correct the six reported low-contrast text combinations | Raises Accessibility score and improves readability |
| P2 | Configure immutable caching for versioned static assets on the deployment host | Improves repeat visits and cache audit score |
| P2 | Review client-component boundaries and defer below-the-fold interactivity | Reduces unused JavaScript and main-thread work |
| P3 | Run Lighthouse against the deployed domain and supplement with real-user field data | Confirms CDN headers, domain behavior, and real device performance |

## Files produced

- `lighthouse-homepage-2026-08-21.report.json` — mobile-default raw report
- `lighthouse-homepage-2026-08-21.report.html` — mobile-default visual report
- `lighthouse-homepage-desktop-2026-08-21.report.json` — desktop raw report
- `lighthouse-homepage-desktop-2026-08-21.report.html` — desktop visual report

No source code was changed by this audit run.

## References

[1]: https://developer.chrome.com/docs/lighthouse/overview — Chrome for Developers, “Introduction to Lighthouse.”

[2]: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring — Chrome for Developers, “How Lighthouse calculates your overall Performance score.”

[3]: https://web.dev/articles/optimize-vitals-lighthouse — web.dev, “Optimizing Web Vitals using Lighthouse.”
