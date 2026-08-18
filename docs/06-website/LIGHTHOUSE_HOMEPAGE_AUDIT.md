# NIRVAN Homepage Lighthouse Audit

**Audit target:** Local static production export at `http://localhost:3001/`  
**Audit tool:** Lighthouse 12.8.2  
**Audit date:** 18 August 2026  
**Scope:** Performance, Accessibility, Best Practices, SEO

## Executive summary

The production-export audit is strong overall. Nirvan scores **98 Performance, 92 Accessibility, 100 Best Practices, and 100 SEO**. The remaining bottlenecks are concentrated in accessibility polish and repeat-visit caching rather than fundamental page architecture.

The most important fixes are straightforward: remove prohibited `aria-label` attributes from plain `div` progress bars by giving them valid progressbar semantics, correct low-contrast metadata and microcopy, change the disclaimer heading from `h4` to a sequential heading level, and configure long-lived caching for hashed static assets at the deployment layer. The largest performance opportunity is approximately **29 KB of unused JavaScript**, with a smaller **13 KB legacy-JavaScript** opportunity.

## Scores and Core Web Vitals

| Category / metric | Result | Interpretation |
| --- | ---: | --- |
| Performance | **98** | Excellent local production-export result. |
| Accessibility | **92** | Good baseline, but seven contrast/semantic issues remain. |
| Best Practices | **100** | No Lighthouse best-practice failures in this run. |
| SEO | **100** | No Lighthouse SEO failures in this run. |
| First Contentful Paint | **1.0 s** | Fast first paint. |
| Largest Contentful Paint | **2.4 s** | Passes the typical 2.5 s “good” threshold narrowly; protect the hero path. |
| Speed Index | **1.0 s** | Fast visual completion. |
| Time to Interactive | **2.6 s** | Good, with some remaining JavaScript work. |
| Total Blocking Time | **60 ms** | Low main-thread blocking. |
| Cumulative Layout Shift | **0** | Excellent layout stability. |
| Root document response | **30 ms** | Local static response is fast. |

The run used the exported `out/` directory served by a static server rather than `next dev`. This avoids development-only tooling from contaminating the production measurement. Re-run the audit against the real deployed domain before launch because CDN, TLS, cache headers, analytics, font delivery, and geographic latency can change the result.

## Accessibility findings

### 1. Prohibited ARIA on progress bars

Lighthouse identified two plain `div` elements with `aria-label="Two of four activities complete"`. A label cannot be applied to an element with no valid semantic role. These should use `role="progressbar"`, `aria-valuemin="0"`, `aria-valuemax="4"`, `aria-valuenow="2"`, and an accessible name, or the label should be removed if the adjacent visible text already communicates the state.

**Locations:** `Hero.tsx` and `ProductShowcase.tsx`.

### 2. Low contrast in small supporting text

Seven elements fall below the normal-text contrast target. The affected color pairings are:

| Element | Current pair | Measured ratio | Recommended direction |
| --- | --- | ---: | --- |
| Wordmark sublabel | `#708078` on `#F8F5EF` | 3.82:1 | Use `#46514A` or increase font size/weight. |
| Date metadata | `#708078` on `#FFFFFF` | 4.16:1 | Use `#46514A`. |
| Product “Next activity” label | `#B4C6C0` on `#285B4A` | 4.38:1 | Use a lighter white value or larger/bolder text. |
| Product “YOUR GOAL” label | `#C66B4A` on `#F8F5EF` | 3.44:1 | Use `#9F4F35` or `#285B4A`. |
| Product “78% building” label | `#C66B4A` on `#F8F5EF` | 3.44:1 | Use `#9F4F35` or `#285B4A`. |
| Product “Mobility” label | `#708078` on `#EEF4EE` | 3.72:1 | Use `#46514A`. |
| Footer consent copy | `#708078` on `#F4EDE2` | 3.57:1 | Use `#46514A` or increase size. |

These are small but visible patient-facing labels. The safest solution is to darken the secondary text token for normal body and metadata copy, reserving `#708078` for large decorative or non-essential labels.

### 3. Heading order

The medical disclaimer uses an `h4` directly after the page’s higher-level sections. Change **Important Medical & Safety Disclaimer** to `h2` if it is a top-level homepage section, or restructure the page so it is nested under an appropriate heading. The current `h4` skips heading levels and makes navigation harder for screen-reader users.

## Performance findings

### 1. Unused JavaScript — highest-value opportunity

Lighthouse estimates approximately **28 KB / 29 KB** of unused JavaScript and around **150 ms** of potential savings. The homepage includes interactive client code for the header, mobile menu, pathway selector, newsletter form, and scroll reveal. The current static sections are already composed efficiently, but the next step should be to keep client boundaries narrow and avoid importing client-only behavior into static sections.

Recommended action: inspect the relevant Next.js chunks and confirm that only the interactive primitives are client components. Do not move the entire homepage or large static section tree behind a `'use client'` boundary.

### 2. Legacy JavaScript — approximately 13 KB

Lighthouse estimates approximately **13 KB** of potential legacy-JavaScript savings. This is primarily a build-target/configuration concern rather than a homepage component problem. Confirm the browser support policy and avoid shipping unnecessary transforms/polyfills to modern browsers if the deployment target allows it.

### 3. Cache lifetimes — largest repeat-visit bottleneck

Lighthouse found 12 static resources with zero cache lifetime in the local static-server run, including JavaScript chunks, CSS, fonts, and the hero SVG. The estimated wasted transfer is approximately **192 KB**. This is the most important deployment-level performance bottleneck for repeat visits.

Recommended action: configure the deployment/CDN to serve hashed `/_next/static/*` files with a long immutable cache policy such as `public, max-age=31536000, immutable`. Apply a long cache policy to versioned local SVG assets if their filenames are content-versioned; otherwise use a versioned filename or query strategy before caching them aggressively.

### 4. Offscreen image opportunity

Lighthouse reports approximately **3 KB** of avoidable offscreen image transfer for the hero illustration. The element is hidden at the measured viewport but still requested because it is marked `priority`. The hero illustration should not be priority-loaded when it is hidden on narrow screens. Use a responsive source strategy, remove `priority` from the hidden desktop-only illustration, or use CSS/markup that prevents the hidden asset from entering the initial request path.

### 5. Render-blocking CSS

Lighthouse identified the main CSS as render-blocking but estimated **0 ms** direct savings. This is expected for a small critical stylesheet and is not a priority compared with caching and JavaScript boundaries. Do not trade readability or maintainability for aggressive CSS inlining until a deployed trace shows a real LCP regression.

## SEO findings

Lighthouse returned a **100 SEO score** with no remaining SEO audit failures. The existing metadata and route structure are sufficient for the basic audit. The next SEO improvements are content and trust improvements rather than Lighthouse fixes: ensure medical pages expose reviewer/review-date metadata, add canonical and structured data where appropriate, keep pathway pages internally linked, and verify the production domain’s `robots.txt`, sitemap, and Open Graph previews.

## Priority matrix

| Priority | Action | Expected impact | Owner / area |
| --- | --- | --- | --- |
| P0 | Fix progress-bar ARIA semantics. | Removes an automatic accessibility failure. | `Hero.tsx`, `ProductShowcase.tsx` |
| P0 | Fix heading order for the medical disclaimer. | Removes an automatic accessibility failure. | `MedicalDisclaimer.tsx` |
| P0 | Darken low-contrast metadata and microcopy. | Raises accessibility score and improves readability. | Shared tokens and affected components |
| P1 | Configure immutable caching for hashed static assets. | Improves repeat visits; Lighthouse estimates ~192 KB less wasted transfer. | Deployment/CDN configuration |
| P1 | Avoid priority-loading the hero illustration when it is hidden. | Reduces initial request work on narrow screens. | `Hero.tsx` image strategy |
| P1 | Inspect client boundaries and unused JS. | Potentially saves ~29 KB and ~150 ms. | Next.js component architecture |
| P2 | Review legacy-JS target. | Potentially saves ~13 KB for modern browsers. | Next.js/browser support configuration |
| P2 | Re-run Lighthouse on the deployed domain. | Confirms real-world CDN, font, and analytics behavior. | Release validation |

## References

[1]: https://developer.chrome.com/docs/lighthouse/ "Lighthouse documentation"
[2]: https://web.dev/articles/vitals "Web Vitals"
[3]: https://www.w3.org/TR/WCAG22/ "Web Content Accessibility Guidelines (WCAG) 2.2"
[4]: https://nextjs.org/docs/app/building-your-application/optimizing/images "Next.js Image Optimization"
[5]: https://github.com/hacrex/Revia/blob/main/docs/06-website/FRONTEND_PERFORMANCE_ACCESSIBILITY.md "NIRVAN Frontend Performance, Accessibility & Illustration Review"
