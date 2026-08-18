# NIRVAN Brand Migration Record

**Scope:** Visible brand migration from REVIA to NIRVAN across documentation, UI prototypes, website UI, metadata, and content labels.  
**Status:** Implemented on the homepage redesign branch; final domain and infrastructure identifiers remain pending.

## Brand rules

The official product name is **NIRVAN** and the primary tagline is **Move Forward. Live Better.** NIRVAN is positioned as a patient-focused digital recovery companion supporting physical rehabilitation and mental wellbeing across the recovery journey. The product must not be described as a cure, AI doctor, AI therapist, digital hospital, guaranteed-recovery platform, medical replacement, or doctor replacement.

Mental Wellbeing and Depression Support remain separate entities in navigation and content. The wellbeing dropdown exposes four destinations: Mental Wellbeing, Depression Support, Sleep & Rest, and Breathing & Relaxation. Wellbeing Overview is not exposed as a dropdown item.

## Files renamed

| Previous filename | New filename |
| --- | --- |
| `docs/01-product/REVIA_Brand_Story.md` | `docs/01-product/NIRVAN_Brand_Story.md` |
| `docs/REVIA_Brand_Story.md` | `docs/NIRVAN_Brand_Story.md` |
| `docs/REVIA_Language_Hinglish_UX(1).md` | `docs/NIRVAN_Language_Hinglish_UX.md` |
| `docs/REVIA_Mental_Wellbeing_Depression.md` | `docs/NIRVAN_Mental_Wellbeing_Depression.md` |
| `docs/REVIA_UIUX.md` | `docs/NIRVAN_UIUX.md` |
| `docs/REVIA_User_Acquisition_Growth_Strategy.md` | `docs/NIRVAN_User_Acquisition_Growth_Strategy.md` |
| `website/src/components/sections/WhyRevia.tsx` | `website/src/components/sections/WhyNirvan.tsx` |

## Documentation and UI HTML coverage

All tracked Markdown documentation, README content, and the 26 UI prototype HTML files under `docs/08-ui/**/code.html` were reviewed for visible REVIA branding. The UI HTML titles and visible product labels now use NIRVAN where a product context is present. The medication-tracking prototype was updated from `Medication Tracking` to `NIRVAN — Medication Tracking` so it has consistent product context.

The migration intentionally did not rename UI route folders such as `mental-health`, `depression-support`, `medication_tracking_2`, or `today_s_recovery_home`; those are functional information-architecture identifiers rather than brand names.

## Website migration

The website header, footer, mobile navigation, hero, CTA, recovery pathways, wellbeing sections, FAQ, medical disclaimer, app-download labels, article authors, page metadata, Open Graph site name, Twitter title, and organization JSON-LD name now use NIRVAN. The existing tagline remains **Move Forward. Live Better.**

The website keeps the existing health and safety boundaries. It does not claim diagnosis, prescription, emergency response, guaranteed recovery, or replacement of clinical care.

## Technical identifiers intentionally preserved

The following values remain unchanged because changing them would be an infrastructure or data migration rather than a visible brand migration:

| Identifier | Reason |
| --- | --- |
| GitHub repository `hacrex/Revia` and GitHub Pages path `hacrex.github.io/Revia` | Existing repository and deployment path. |
| Environment/project labels `REVIA-dev`, `REVIA-staging`, and `REVIA-prod` | Infrastructure identifiers require an explicit environment migration plan. |
| Existing `reviarecovery.com` site URL and `support@reviarecovery.com` / `privacy@reviarecovery.com` addresses | No final NIRVAN domain or email domain has been confirmed; inventing replacements would break links or contact channels. |
| Firebase, Firestore, storage, OAuth, analytics, package, and route identifiers | These were not present as confirmed production configuration in the website migration scope and must not be renamed blindly. |

When the final NIRVAN domain is approved, update the site URL, canonical/metadata URLs, JSON-LD URL and logo, robots sitemap URL, sitemap base URL, contact addresses, Open Graph image host, favicon/PWA references, and deployment configuration as one tested release.
