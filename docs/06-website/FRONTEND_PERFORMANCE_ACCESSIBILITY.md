# NIRVAN Frontend Performance, Accessibility & Illustration Review

**Review scope:** Homepage redesign branch `manus/nirvan-homepage-redesign`  
**Review date:** 18 August 2026

## Executive summary

The homepage implementation is structurally sound and the production build passes. The most important issues found were not large rendering failures but quality risks that could become expensive later: scroll-reveal content was hidden until JavaScript ran, reduced-motion handling was incomplete, shared button/input tokens still used the previous palette, local image elements lacked responsive `sizes` hints, and the new illustration assets needed an explicit source record.

The first optimization pass addresses those issues while keeping the page architecture unchanged. The remaining recommendations below should be handled before a public launch or during the next frontend hardening sprint.

## Changes applied in this pass

| Area | Change | Expected benefit |
| --- | --- | --- |
| Progressive enhancement | Scroll reveal now leaves content visible by default, prepares animation only after hydration, and reveals immediately for reduced-motion users. | Prevents invisible sections when JavaScript fails or motion is disabled. |
| Animation cleanup | IntersectionObserver timers are cleared during cleanup. | Prevents delayed callbacks after unmount and reduces avoidable work. |
| Image delivery | Hero, human-benefit, and trust illustrations now use local SVGs with responsive `sizes` hints. | Helps the image component select appropriate dimensions by viewport. |
| Control consistency | Button and Input primitives now use the Nirvan semantic palette, visible focus rings, minimum touch sizes, and invalid-state semantics. | Improves contrast consistency and keyboard/form feedback. |
| Human-centered visuals | Added recolored official unDraw assets for Walking Together, Active Support, and Progress Overview. | Gives the page a more human visual language without introducing raster weight. |

## Remaining performance recommendations

### Keep static sections server-rendered

The homepage should continue to render static sections as Server Components wherever possible. Only interactive elements such as the pathway selector, the early-access form, the mobile menu, and scroll reveal need client-side behavior. Avoid adding a page-level `'use client'` directive; it would increase the client JavaScript boundary for the entire homepage.

### Review ScrollReveal usage after content changes

The current page wraps several sections in `ScrollReveal`. This is acceptable for the first pass, but future sections should not be wrapped automatically. Prefer one reveal wrapper per meaningful group, keep entrance motion below 300–500ms, and remove reveals that do not improve comprehension. The default non-JavaScript state must remain fully visible.

### Avoid eager loading below-the-fold imagery

Only the hero illustration should use `priority`. All below-the-fold unDraw illustrations should remain lazy-loaded through the image component. If a section is moved above the fold in a future redesign, review whether its loading priority should change rather than marking all images as priority.

### Keep SVGs optimized and bounded

The current unDraw assets are small SVGs, approximately 6–12 KB each before compression. Preserve them as SVG rather than converting to PNG. Before launch, add an SVG optimization step such as SVGO to remove editor metadata and redundant path attributes, but do not flatten or rasterize the assets. Do not place large photographs in `website/public` without checking the project’s deployment and caching strategy.

### Add loading and error states to the early-access form

The form already includes submitting, success, and error states. The next hardening step should add a timeout or abort controller for stalled requests, prevent duplicate submission through a stable submit state, and verify the no-CORS Google Form behavior in production. If the form provider changes, move submission behind the existing `/api/newsletter` route so the external endpoint is not hardcoded in the browser bundle.

### Measure the deployed page

Run Lighthouse or PageSpeed Insights against the deployed URL after the next deployment. Capture LCP, CLS, INP, total JavaScript transfer, image bytes, and unused CSS. The review target should be a stable hero layout with explicit image dimensions, no layout shift from late fonts, and no large third-party script blocking the first interaction.[1] [2]

## Remaining accessibility recommendations

### Use real heading order on all homepage sections

The homepage should have one `h1` in the hero, followed by `h2` section headings and `h3` card headings. Audit reused sections such as Education, FAQ, and the footer because their current heading hierarchy predates the redesign.

### Add keyboard behavior to the pathway tabs

The pathway selector currently exposes `role="tab"` and selected state. The next refinement should implement roving `tabIndex`, ArrowLeft/ArrowRight navigation, Home/End support, and a correctly associated tabpanel. If the tabs remain simple buttons in a future version, remove the ARIA tab roles rather than keeping incomplete tab semantics.

### Verify mobile menu focus management

The mobile menu should trap focus while open, return focus to the trigger on close, expose `aria-expanded` and `aria-controls`, and close on Escape. The current menu has a visible close button and labelled trigger; focus restoration is the remaining important improvement.

### Do not rely on CSS-generated status alone

Progress, selection, success, warning, and error states should continue to pair text and icon with color. The new product previews are marketing examples, so labels such as “Preview” and “Today’s recovery” should remain visible rather than being communicated through color or decoration alone.

### Check link and button semantics

Links that navigate should remain links. Buttons that change pathway content or submit the form should remain buttons. Avoid wrapping buttons inside links. Confirm every icon-only control has an accessible name and every form input has a programmatic label, including the compact footer form.

### Test zoom, dynamic text, and reduced motion

Test at 200% browser zoom, text-only enlargement, keyboard navigation, screen-reader reading order, and `prefers-reduced-motion: reduce`. WCAG 2.2 requires content to remain operable and understandable across these presentation changes; the Nirvan mobile design system also calls for readable type, captions or alternatives for media, visible labels, and no gesture-only interaction.[3] [4]

## Illustration inventory and license record

The homepage now uses official unDraw illustrations downloaded from the published unDraw CDN and recolored only in the primary brand accent/dark ink tokens:

| Local asset | Official source | Homepage use | Alt-text approach |
| --- | --- | --- | --- |
| `public/illustrations/undraw/walking-together.svg` | [Walking Together](https://undraw.co/illustration/walking-together_2u0k) | Hero support/recovery visual | Describe two people walking together and the recovery meaning. |
| `public/illustrations/undraw/active-support.svg` | [Active support](https://undraw.co/illustration/active-support_v6g0) | Human benefit section | Describe people supporting one another through recovery. |
| `public/illustrations/undraw/progress-overview.svg` | [Progress overview](https://undraw.co/illustration/progress-overview_wl8n) | Trust/progress module | Describe a person reviewing progress over time. |

The official [unDraw license](https://undraw.co/license) permits free commercial and personal use without attribution, while prohibiting redistribution in packs, replication of the service, and use for AI or machine-learning training. The asset sources should remain documented even though attribution is not required.

## Recommended next sprint

The next frontend hardening sprint should focus on mobile-menu focus management, roving keyboard behavior for pathway tabs, request cancellation for the early-access form, SVG optimization, and a deployed Lighthouse baseline. These changes are more valuable before launch than adding more motion or more decorative assets.

## References

[1]: https://nextjs.org/docs/app/building-your-application/optimizing/images "Next.js Image Optimization"
[2]: https://web.dev/articles/vitals "Web Vitals"
[3]: https://www.w3.org/TR/WCAG22/ "Web Content Accessibility Guidelines (WCAG) 2.2"
[4]: https://github.com/hacrex/Revia/blob/main/docs/03-mobile/DESIGN_SYSTEM.md "NIRVAN Shared Design System"
