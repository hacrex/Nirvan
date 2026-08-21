# NIRVAN Brand Assets

This folder contains the NIRVAN logo lockup, PNG app icons, and portrait and landscape social-share visuals aligned with the website UI palette.

The authoritative source for every logo and brand asset is `nirvan-logo-lockup.png`, which is the supplied 1920×1920 PNG. The generated PNGs are resized or composed from that PNG source only. No SVG logo, compact-mark SVG, or SVG-to-PNG conversion is used for the NIRVAN brand assets.

| Asset | Dimensions | Intended use |
| --- | ---: | --- |
| `nirvan-logo-lockup.png` | 1920×1920 | Supplied full logo lockup source |
| `nirvan-logo-horizontal.png` | 2304×1536 | Horizontal source lockup with Buddha mark on the left and NIRVAN on the right |
| `nirvan-logo-header.png` | 2256×741 | Trimmed horizontal header/footer lockup with the larger tagline |
| `nirvan-mark-1024.png` | 1024×1024 | PNG app-icon size derived from the supplied lockup |
| `nirvan-mark-512.png` | 512×512 | Installable web-app icon and Next.js source |
| `nirvan-mark-192.png` | 192×192 | Installable web-app icon |
| `nirvan-mark-180.png` | 180×180 | Apple touch icon size |
| `nirvan-mark-32.png` | 32×32 | Browser favicon size |
| `nirvan-app-icon-1024.png` | 1024×1024 | Documentation copy of the supplied-PNG-derived app icon |
| `nirvan-social-portrait-full-hd.png` | 1080×1920 | Portrait social or story creative |
| `nirvan-social-landscape-full-hd.png` | 1920×1080 | Open Graph, social-share, and landscape brand creative |

The website uses `/brand/nirvan-logo-header.png` in the header, mobile menu, and footer home links, and `/brand/nirvan-social-landscape.png` for Open Graph and Twitter sharing. The web manifest references `/brand/nirvan-mark-192.png` and `/brand/nirvan-mark-512.png`. Next.js App Router uses `src/app/icon.png` and `src/app/apple-icon.png`, both regenerated from the supplied PNG lockup.

The unDraw SVG files in `website/public/illustrations/undraw/` are content illustrations and are intentionally retained. They are not NIRVAN logo or brand-mark assets.

The logo uses **Deep Forest** `#436444`, **Warm Cream** `#FDF9F3`, **Dark Ink** `#2D2A26`, and a small **Warm Clay** `#C0564B` accent. The logo should not be presented as religious instruction or as a claim that NIRVAN is equivalent to Buddhist nirvana.
