# MacSweep showcase

Five responsive pages: overview, capabilities, developer tools, trust, and download/setup. Copy describes MacSweep 1.3.0 and is grounded in the app README.

## Preview
--
From this directory:

```sh
python3 -m http.server 4173 --directory dist --bind 127.0.0.1
```

Open http://127.0.0.1:4173. Deploy `dist/` to any static host. No package installation or compilation is required.

## Files

- `dist/assets/styles.css`: responsive design, orbital artwork, motion, and reduced-motion support.
- `dist/assets/app.js`: page initialization, navigation behavior, scroll reveals, motion controls, and clipboard sharing.
- `dist/assets/icon.svg`: vector artwork based on the app's indigo/cyan gauge-and-sparkle identity.
- `generate.py`: regenerates the five HTML entry points with page-specific metadata. Run it with `SITE_ORIGIN=https://shipiit.github.io/mac-sweep-website` locally to keep canonical URLs.
- `dist/assets/screens.js`: screenshot slots (title, caption, alt text) and the missing-image fallback.
- `IMAGE_PROMPTS.md`: paste-ready image-generation prompts for every screenshot slot, plus animated-loop prompts.

The interactive preview contains clearly labelled sample data. It does not inspect the visitor's Mac. Product descriptions are grounded in the repository README and Swift implementation. Download links open the project’s GitHub releases; no release version or download count is hard-coded.

Motion respects `prefers-reduced-motion` and can be paused using the footer control. Screenshot frames lift slightly on hover or focus and placeholders show a soft sheen; both are disabled under reduced motion and when paused. UI uses semantic landmarks, keyboard-accessible tabs, visible focus, and native FAQ disclosure controls.

Fonts are loaded from Google Fonts, with local sans-serif fallbacks. No analytics are included.

## Interactive field guide

The Capabilities page covers 67 selectable explanations across 8 areas, with 38 plain-language term definitions. Modules:

- `feature-data.js`: source-grounded product explanations, practical context, and glossary.
- `feature-page.js`: field-guide page composition.
- `feature-lab.js`: accessible per-section tabs and browser-local appearance controls.
- `lab-widgets.js`: storage drill-down, process groups, port details, and feature-specific UI illustrations.
- `companion.js`: MacBook illustration, five-view notch HUD, and menu bar popover.
- `features.css`: interactive guide and companion layouts, graph motion, responsive behavior.
- `components.js`, `icons.js`, `config.js`: shared UI, SVG symbols, and project links.
- `demo.js`: six-module overview and the start/stop scan demonstration.

The supplied app screenshots inform the illustrations. Personal screenshots, user paths, IP addresses, and usage figures are not included in the site. All displayed activity is sample data.

## Screenshot slots

Each major screen has a `<figure>` that loads `dist/assets/screens/<name>.png` (2880×1800 by default; `notch-hud` is 2400×1200 and `menu-bar` 1600×1600, set in the `sizes` map in `screens.js`, which drives each frame's aspect ratio):

`smart-scan`, `dashboard`, `storage`, `large-files`, `duplicates`, `malware-scan`, `download-protection`, `security-audit`, `developer`, `ai-usage`, `processes`, `notch-hud`, `menu-bar`, `timeline`, `junk-scan`, `cleanup-script`, `auto-clean`, `storage-forecast`, `browser-profiles`, `git-repos`, `app-footprint`, `startup-guard`.

Where they appear: Overview (Smart Scan, Dashboard, the "New in MacSweep" section with fast junk scan, Large & Hidden Files, storage forecast and weekly auto-clean, notch HUD, menu bar), Capabilities (under each chapter), For developers (Developer hub, Git Repos, cleanup script, AI Usage), Trust (Download Protection, Security Audit).

Until an image exists, the figure shows a styled window frame with the screen name and "Screenshot coming soon"; the caption and alt text are already in place. To add one, save the PNG under `dist/assets/screens/` with the exact name; no code change is needed. Keep each file small (compress with a tool such as `oxipng` or `pngquant`), and never include personal data, real paths, IP addresses, or usage figures. Alt text and captions live in `screens.js`.

`IMAGE_PROMPTS.md` holds a detailed prompt per slot, written from the app's SwiftUI views, with target file name, pixel size, and alt text, plus prompts for short animated loops. Generated images are illustrative sample-data mock-ups; replace them with real screenshots when available. The animated loops (`*.mp4` / `*.gif` with a `-poster.png`) are not referenced by any page yet; wiring them in needs a `<video>` slot that respects reduced motion and the pause control.

## Verification

Browser checks covered the original 57 capability tabs (the tabs added later, Cleanup Script, Growth Badges, Lightweight by design, Fast Junk Scan, Weekly Auto-clean, Browser Profiles, Startup Guard, Git Repos, App Footprint and Storage Forecast, are appended at the end of their chapter and use its default illustration, because illustrations are picked by tab index), storage drill-down/back/selection, expandable processes, port details, theme/accent controls, dashboard card visibility, notch/menu-bar behavior, scan start/stop/completion, navigation, FAQs, and mobile overflow. Motion honors the system preference and the footer's pause control.

## GitHub Pages

The public `shipiit/mac-sweep-website` repository contains only the contents of this directory, excluding `.openai/`. Its Actions workflow publishes `dist/` on pushes to `main`. The private Mac app source remains in `shipiit/mac-sweep`; releases and source links require repository access.

The workflow sets `SITE_ORIGIN` from GitHub Pages configuration when running `generate.py`, so canonical and social-sharing URLs work under the project subpath. Existing relative navigation and asset paths also work under that subpath.
