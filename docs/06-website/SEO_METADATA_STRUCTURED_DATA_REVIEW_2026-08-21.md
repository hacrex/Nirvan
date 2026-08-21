# NIRVAN SEO Metadata and Structured Data Review — 21 August 2026

## Executive summary

The NIRVAN website was reviewed across the complete static export, including route metadata, canonical URLs, Open Graph and Twitter previews, robots directives, sitemap coverage, and JSON-LD. The review applied Google Search Central guidance that every page should have a concise, descriptive title, that page-specific descriptions are preferred over repeated boilerplate, and that canonical links should be absolute and self-referential where appropriate [1] [2] [4].

The exported site now has complete SEO metadata on all indexable routes. The homepage and representative blog article both receive **Lighthouse SEO 100**, and the built HTML reports valid canonical links and valid structured data. The sitemap now includes all live wellbeing routes, and 404 responses are explicitly marked `noindex`.

## Coverage audit

| Signal | Result |
|---|---:|
| Exported routes inspected | **36** |
| Routes with title | **36 / 36** |
| Routes with meta description | **36 / 36** |
| Routes with canonical | **34 / 36**; the two exceptions are intentional 404/not-found routes |
| Routes with Open Graph title/description/image | **36 / 36** |
| Routes with Twitter card/image | **36 / 36** |
| Routes with JSON-LD | **36 / 36** |
| Blog articles with article JSON-LD | **5 / 5** |
| Lighthouse SEO | **100 homepage; 100 representative article** |

The two routes without canonicals are generated 404 pages. They now emit `noindex` and `nofollow` rather than creating duplicate or indexable error content.

## Changes implemented

### Shared canonical and social metadata

Added `createPageMetadata()` in `website/src/lib/metadata.ts`. Static route metadata now supplies an absolute self-referential canonical URL, route-specific Open Graph title and description, the supplied `1920×1080` landscape PNG, and Twitter `summary_large_image` metadata. The helper preserves route-specific keywords and supports article-specific Open Graph properties.

The root metadata now defines `metadataBase` from the deployment-aware `siteUrl` helper. This allows Next.js to resolve social images correctly for the production domain or the GitHub Pages base path. The social image is emitted once through the standard Next metadata system rather than through duplicate manual head tags.

Google’s canonical guidance recommends absolute canonical URLs and consistent signals between canonical links and sitemaps [4]. The final homepage output contains:

```html
<link rel="canonical" href="https://reviarecovery.com/" />
<meta property="og:title" content="NIRVAN — Move Forward. Live Better." />
<meta property="og:image" content="https://reviarecovery.com/brand/nirvan-social-landscape.png" />
<meta name="twitter:image" content="https://reviarecovery.com/brand/nirvan-social-landscape.png" />
```

### Blog hub and article pages

The blog hub now has a dedicated server layout because its interactive page component cannot export metadata directly. Dynamic articles now receive canonical URLs, unique Open Graph/Twitter titles and descriptions, article publication metadata, and category keywords.

The article JSON-LD was upgraded from `MedicalWebPage` to `BlogPosting`, with `headline`, `description`, `url`, `mainEntityOfPage`, `datePublished`, `dateModified`, `author`, `publisher`, `image`, `articleSection`, and clinician reviewer data where available. Google documents `BlogPosting` as a supported Article structured-data type and recommends author, headline, publication date, modification date, and representative image properties [3].

### Organization structured data

The shared organization schema remains a `MedicalOrganization` and now references the valid PNG mark at `/brand/nirvan-mark-512.png` rather than the previously nonexistent `/logo.png`. It also includes the landscape brand image, slogan, audience, and support contact point. No invented social profiles or unverified claims were added.

### Sitemap and crawl directives

The sitemap now includes the previously omitted wellbeing pages:

- `/wellbeing/connection`
- `/wellbeing/goals`
- `/wellbeing/journal`
- `/wellbeing/mood`
- `/wellbeing/sleep`
- `/wellbeing/stress`

Robots continues to allow public pages, disallow `/api/`, and points to the deployment-aware sitemap. The custom not-found page emits `noindex, nofollow`, preventing error pages from becoming duplicate search results.

## Validation

| Check | Result |
|---|---|
| ESLint | Passed with zero errors and zero warnings |
| TypeScript | Passed with `npx tsc --noEmit` |
| Production build | Passed; all routes prerendered successfully |
| Homepage Lighthouse SEO | **100** |
| Representative article Lighthouse SEO | **100** |
| Structured data audit | Valid `MedicalOrganization`, `FAQPage`, and `BlogPosting` JSON-LD detected |
| Sitemap audit | All live wellbeing routes present |
| 404 audit | `noindex` and `nofollow` present |

## Deployment recommendations

The configured canonical base remains `https://reviarecovery.com` in production and `https://hacrex.github.io/Revia` for GitHub Pages builds. Before launch, confirm that the final public domain is set through `NEXT_PUBLIC_SITE_URL`; this single value controls canonicals, sitemap URLs, robots sitemap output, and absolute social metadata.

After deployment, submit `/sitemap.xml` in Google Search Console and use URL Inspection on the homepage, the wellbeing hub, and at least one blog article. Google notes that structured data can improve how it understands content and may enable richer search appearances, but it does not guarantee that a rich result will be shown [3].

## References

[1]: https://developers.google.com/search/docs/appearance/title-link — Google Search Central, “Influencing your title links in search results.”

[2]: https://developers.google.com/search/docs/appearance/snippet — Google Search Central, “Control your snippets in search results.”

[3]: https://developers.google.com/search/docs/appearance/structured-data/article — Google Search Central, “Article structured data.”

[4]: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls — Google Search Central, “How to specify a canonical URL with rel=canonical and other methods.”
