# MacSweep website: screenshot image prompts

These prompts produce mock screenshots for the marketing site. They follow the real SwiftUI source of MacSweep v1.2.0 (`Sources/MacSweep`), so labels, SF Symbols and layout match the app. Each section below fills one slot at `dist/assets/screens/<name>.png`.

## How to use

1. Copy the **style preamble** below, then paste the slot's prompt after it into ChatGPT image generation, as one message.
2. Image generators don't output 2880×1800 directly. Pick the closest aspect they offer (wide 3:2 or 16:10 for windows). Then upscale and crop or pad to the exact target size in any editor. Pad with the same plain dark desktop colour (`#0E0F11`).
3. Check every label against the prompt. Generators often misspell UI text, so regenerate or fix it by hand where it matters (sidebar items, headings, buttons).
4. Save as PNG to the target path, then optimise it so each file stays under about 600 KB:
   ```sh
   pngquant --quality 70-90 --strip --force --output dist/assets/screens/<name>.png dist/assets/screens/<name>.png
   oxipng -o 4 --strip safe dist/assets/screens/<name>.png
   ```
5. Use the alt text given for each slot as the `alt` attribute.

## Honesty note

- These images are **illustrative mockups with sample data**, not captures of the real app.
- Replace each one with a real screenshot as soon as one is available.
- Never show personal data. Every name, path, host, Wi-Fi network, IP and signer in these prompts is a generic placeholder (`Alex`, `~/Projects/app-name`, `example.com`). Keep it that way when editing.
- The accent colour is a user setting (Settings → Appearance → Accent). The app defaults to the macOS system accent. These mockups show it set to **Green (#34C759)**.

## Style preamble (prepend to every prompt)

```text
STYLE PREAMBLE — MacSweep mock screenshot

Render a pixel-crisp, straight-on (no perspective, no tilt, no 3D, no device frame unless stated) Retina screenshot of a native macOS 15 Sequoia app called MacSweep, in DARK MODE. It must look like a real SwiftUI app screenshot, not a concept render or illustration.

Typography: SF Pro Text / SF Pro Display everywhere (Apple system font); numbers in stat tiles use SF Mono (monospaced digits). Big headline numbers on tinted cards use SF Pro Rounded bold. All text sharp, correctly spelled, and exactly as quoted in the prompt. No lorem ipsum, no extra text, no watermark, no logos other than the MacSweep icon, no captions outside the window.

Colours: app accent is green #34C759 (used for the selected sidebar row, primary buttons, progress rings, key numbers). Other system colours only where the prompt says (blue #0A84FF, purple #BF5AF2, orange #FF9F0A, red #FF453A, indigo #5E5CE6, teal #40C8E0, pink #FF375F, yellow #FFD60A, mint #63E6E2). NO gradients anywhere inside the app window: every card is a flat solid fill. Page background flat dark grey (#2A2A2C); standard cards slightly darker (#1E1E1E) with a 1 px hairline border (#3A3A3C) and continuous rounded corners 12–18 pt. "Tinted" cards are a flat 8% wash of their colour (e.g. green card = #34C759 at 8% over the page) with a solid coloured 34 pt rounded-square icon badge. Small icon badges in card headers are a 12% tint square with the SF Symbol in full colour. Pills/capsules are 12% tint background with coloured text. Ring gauges: grey track, coloured arc with round caps; green under 60%, orange 60–85%, red above 85%.

Window: one macOS window, 1440×900 points (2880×1800 px), with the standard red/yellow/green traffic lights at top-left inside the sidebar, a unified toolbar over the content area (navigation title in bold 13 pt with a smaller grey subtitle beneath it, at the left of the toolbar), soft macOS window shadow. Around the window: plain flat dark desktop (#0E0F11) or none — no wallpaper art, no Dock, no other apps.

Sidebar (left, ~240 pt wide, translucent dark sidebar material, flat): pinned at the top under the traffic lights is the app header — a 38 pt app icon (a dark rounded-square icon with a 270° green gauge ring around a white four-point sparkle star), next to "MacSweep" (headline, white) and "Keep your Mac healthy" (caption, grey). Below it a scrolling list. Group headers are small semibold grey captions. Each row = SF Symbol icon (tinted green when not selected) + label in white. The SELECTED row is a solid green (#34C759) rounded rectangle (7 pt radius) with white icon, white text and white badge. Badges are small grey monospaced numbers right-aligned in the row.

Full sidebar content, in order (symbol in brackets, badge after the dash where present):
(no header) Smart Scan [sparkles.rectangle.stack] · Dashboard [gauge.with.dots.needle.67percent] · AI Usage [flame] — 2.1M
"Cleanup": Space & Junk [internaldrive] — 18.4 GB · Large & Hidden Files [doc.text.magnifyingglass] · Duplicates & Archive [doc.on.doc] · Mail Attachments [paperclip] · Trash Bins [trash] · Shredder [doc.badge.ellipsis] · Privacy [hand.raised]
"Protection": Malware Scan [shield.checkered] · Security Audit [checkmark.shield] — Secure · App Permissions [hand.raised.square] · Network Monitor [point.3.connected.trianglepath.dotted] · Sharing & Wi-Fi [person.2.wave.2] · Backups [clock.arrow.circlepath] · Extensions [puzzlepiece.extension]
"Performance": Optimization [slider.horizontal.3] · Maintenance [wrench.and.screwdriver] · Processes & Memory [memorychip] — 2 · Startup Items [power]
"Developer": Developer [hammer] · Ports [network] — 6
"Applications": Uninstaller [trash.square] · Updater [arrow.down.app] — 3 · App Usage [hourglass]
"Insights": System Info [info.circle] · Smart Alerts [bell.badge] · Timeline [chart.xyaxis.line] · What Grew [chart.bar.doc.horizontal]

The full list does not fit in 900 pt. Show it in ONE of two scroll states (the prompt says which):
- SIDEBAR-TOP: list scrolled to the top — visible from Smart Scan down to Startup Items; the "Developer" header is cut off by the window's bottom edge.
- SIDEBAR-BOTTOM: list scrolled to the bottom — the top rows are cut off just under the app header (first visible row is "Privacy", partly hidden), then the Protection, Performance, Developer, Applications and Insights groups through "What Grew" at the bottom.
Do not invent, rename, reorder or drop sidebar items.
```

---

## 1. Smart Scan (`smart-scan`)

- **Target:** `dist/assets/screens/smart-scan.png`
- **Size:** 2880×1800 (full window at 2x)
- **Alt text:** "MacSweep's Smart Scan home with a Scan My Mac button and cards for junk files, protection, performance and applications."

This is the Smart Scan home screen. The "Optimizing your Mac" run state is a separate screen, given as variant B below. It is also animated in the loops section.

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-TOP, "Smart Scan" selected (solid green row).

Toolbar: navigation title "Smart Scan". No subtitle.

Content area (padding 20 pt, flat page background), top to bottom:

1) Hero row (HStack). LEFT column:
   - "Good Afternoon, Alex 👋" in title3 grey.
   - Two lines of 34 pt bold: "Your Mac looks good," (white) and below it "but we can make it even better." (accent green).
   - "Run a smart scan to find junk files, security issues, performance bottlenecks and more, all in one go." in title3 grey, wrapping to two lines, max ~560 pt wide.
   - A row: a large solid green rounded button (14 pt radius) with a white viewfinder icon and "Scan My Mac" in semibold white. Next to it a grey clock icon with two lines: "Takes about 1 minute" (white) and "Safe and read-only until you choose" (grey).
   RIGHT, top-aligned: a 280 pt-wide card (dark, hairline border, 16 pt radius) with "MacBook Pro (14-inch, 2024)" (headline) and "Apple M4 Pro" (grey). Below: an apple.logo row "macOS 15.6", a memorychip row "24 GB Unified Memory", and a green link "System Info →".

2) Four equal TINTED cards in a row, each ~230 pt tall, 18 pt radius, flat 8% colour wash. Each has a coloured 34 pt rounded-square icon badge with a white symbol and the title in its colour, a huge rounded-bold number, a grey detail line, an optional thin meter, and a solid coloured action button with white text and a trailing arrow at the bottom:
   - GREEN "Junk Files" [trash.fill]: "18.4 GB", "Safe to remove · 9.7 GB to review", meter about 65% green, button "Review & Clean →".
   - INDIGO "Protection" [checkmark.shield.fill]: "92%", "0 to review · 0 protections off", indigo meter at 92%, button "Review →".
   - ORANGE "Performance" [gauge.with.dots.needle.67percent]: "3 tips", "Turn off 4 unused login items", no meter, button "Optimize →".
   - PURPLE "Applications" [square.stack.3d.up.fill]: "3 updates", "2 leftovers from deleted apps", no meter, button "Manage →".

3) Row of two:
   - LEFT (wide) card with header "✦ What we'll check" (sparkles icon). Below it a 2×3 or 3×2 grid of small items, each with a coloured rounded icon badge, a bold title and a grey subtitle:
     - green trash.fill "System Junk", "Caches, logs, temporary files"
     - orange square.stack.3d.up.fill "Applications", "Uninstaller, leftovers, updates"
     - indigo checkmark.shield.fill "Security", "Malware, vulnerabilities, privacy"
     - pink doc.fill "Large & Old Files", "Find and remove space hogs"
     - purple gauge "Performance", "Login items, heavy processes"
     - teal doc.on.doc.fill "Duplicates", "Photos, documents, downloads"
   - RIGHT column (380 pt) with two stacked cards:
     - "Mac Health" card: green heart.fill icon, grey label "Mac Health", value "Good", chevron.right on the right.
     - "Storage Overview" card: grey internaldrive.fill icon, "Storage Overview" headline, "612 GB of 994 GB used" in grey, chevron. Below, a thin horizontal stacked bar (blue In use, orange Cleanable, grey Free) with a legend of dots: "● In use", "● Cleanable", "● Free".

4) "Pro Tips" header in yellow with a lightbulb.fill icon. Below it three tip rows, each with a coloured icon, a title, a grey subtitle and a chevron:
   - green externaldrive.fill "Keep at least 15% free storage", "For better performance."
   - blue arrow.clockwise "Restart occasionally", "Up 6 days: clears memory and updates."
   - purple arrow.down.app.fill "Keep apps updated", "For the latest features and security."
   The bottom of this row may be cut off by the window edge.

Flat surfaces only, no gradients in the window. Crisp Retina text.
```

**Variant B: "Optimizing your Mac" (optional, `dist/assets/screens/smart-scan-optimizing.png`, 2880×1800)**
Alt text: "MacSweep cleaning up step by step under the heading Optimizing your Mac, with a green progress ring around a Stop button."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-TOP, "Smart Scan" selected.
Toolbar: navigation title "Smart Scan".

Content, centred vertically and horizontally:
- Large-title semibold heading "Optimizing your Mac…".
- Below it, a 620 pt-wide card (dark, hairline border, 16 pt radius) holding four rows separated by hairlines (inset 56 pt). Each row has a 30 pt coloured rounded-square icon with a white symbol, a medium-weight title, an optional grey caption, and a status at the right:
  1. pink trash.circle.fill "System Junk", caption "2 in use, skipped", right "6.8 GB" in grey monospaced digits (done).
  2. green trash.fill "Trash Bins", caption "Running…", small macOS spinner on the right.
  3. blue wrench.and.screwdriver.fill "Run Maintenance Scripts", no caption, grey "Waiting" with an ellipsis icon.
  4. orange memorychip.fill "Flush DNS Cache & Free Up RAM", no caption, grey "Waiting".
- Below the card, a 112 pt ring: a light grey track with a green arc filled about 40% from the top (12 o'clock) clockwise, with round caps. In its centre is a 96 pt filled circle (subtle quaternary grey) with "Stop" in title3 semibold white.

Nothing else on the page. Flat, no gradients.
```

---

## 2. Dashboard (`dashboard`)

- **Target:** `dist/assets/screens/dashboard.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Dashboard with live CPU, memory and disk rings, a two-minute activity chart and cards for storage, memory, battery, network and security."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-TOP, "Dashboard" selected.

Toolbar: title "Dashboard", subtitle "MacBook Pro". At the right, a toolbar button with a slider.horizontal.3 icon labelled "Customize".

Content (padding 20, spacing 14):
1) Header row: "Dashboard" (30 pt bold) with "Your Mac's health, performance and security at a glance." (title3 grey) below it. Right-aligned grey label with a dot.radiowaves.left.and.right icon: "Live · updates every few seconds".

2) Hero card (dark, hairline border). LEFT: a large macbook SF Symbol in accent green, then "MacBook Pro (14-inch, 2024)" bold, then grey "Apple M4 Pro · 24 GB memory · macOS 15.6". Below that, three small status chips: clock "Up 6 days" (grey), green dot "Thermal: Nominal", green dot "Memory pressure: Normal". RIGHT: three 86 pt ring gauges side by side, each with a centred percentage and a label below:
   - "CPU" 18%, green arc
   - "Memory" 64%, orange arc
   - "Disk" 62%, orange arc

3) Full-width card "System Activity" with the grey subtitle "CPU and memory usage, last 2 minutes". At the right: legend "● CPU 18%" in blue and "● Memory 64%" in purple. Below is an area+line chart about 160 pt tall. The blue CPU line wiggles between 8–30%. The purple memory line is steady around 62–65%. The areas under the lines are flat semi-transparent fills, not gradients. The y axis label is "%".

4) A 3-column grid of equal-height cards. Each card has a header: a small 12%-tint icon square, a bold title, and at the right a small capsule action button tinted in the card colour.
   - "Storage" (blue internaldrive), action "Open": big "382 GB" with "free of 994 GB" in grey, a thin usage bar, a sparkles line "18.4 GB safe to clean", and grey "Scanned 2 hours ago".
   - "Memory" (purple memorychip), action "Processes": big "8.6 GB" with "available", a stacked bar (App blue, Wired orange, Compressed purple, Free grey) with values, then lines "Pressure  Normal" (green), "Swap used  1.2 GB" and "Growing steadily  2 processes" (orange).
   - "Battery" (green battery.75percent): "86%" big rounded, "4h 12m left", lines "Health  94%", "Cycle count  132", "Temperature  31.4 °C".
   - "Network" (teal wifi), action "Test Speed": "Home-WiFi" headline, teal "↓ 1.2 MB/s" and orange "↑ 84 KB/s", line "Speed test  ↓ 412 · ↑ 38 Mbps".
   - "Security" (indigo checkmark.shield), action "Details": a 64 pt ring "Score" at 92% in green, with lines "Protections off  0" (green), "Findings  0" (green), "High-access extensions  1".
   - "Connected devices" (orange cable.connector): rows "Magic Keyboard" with a Bluetooth icon, "USB-C Hub" with a cable icon, and a display row "Studio Display  2560×1440"-style resolution caption.
   The third grid row ("Top memory", "Top CPU", "Listening ports") starts at the bottom and is cut off by the window edge.

Flat solid cards, no gradients.
```

---

## 3. Space & Junk (`storage`)

- **Target:** `dist/assets/screens/storage.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Space & Junk view: a treemap of the home folder next to cleanup recommendations grouped into Safe to remove and Review first."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-TOP, "Space & Junk" selected (white badge "18.4 GB" on the green row).

Toolbar: title "Storage", subtitle "~ · scanned 2 min ago in 41s". At the right, a "Scan" toolbar menu button with an arrow.clockwise icon.

Content (padding 20):
1) A stat strip: one wide card split into five tiles by thin vertical hairlines. Each tile has a grey callout title, a 24 pt semibold monospaced value and a grey monospaced caption:
   - "Free now" "382 GB" "of 994 GB"
   - "Free after cleanup" "386.2 GB" "+4.2 GB" (caption in green)
   - "● Safe to remove" (green dot) "18.4 GB" "12 groups"
   - "● Needs review" (orange dot) "9.7 GB" "7 groups"
   - "Not scanned" "41 GB" "system & apps"

2) A two-column row filling the rest of the height:
   LEFT (wide) "Explorer" card:
   - Header "Explorer" (headline) with the grey subtitle "Sized by space used. Click a folder to open it. Right-click for more.". At the right, a segmented control "Category | Cleanup" with "Category" selected.
   - Breadcrumb bar: a chevron.left button, then "user › Library", with "Library" semibold. At the right, monospaced grey "184,213 files · 96.4 GB".
   - A large squarified TREEMAP of nested rectangles with 1–2 pt dark gaps and small rounded corners. Each tile is a flat solid colour by category. Bigger tiles carry a white name and size label at top-left, for example "Developer 31.2 GB" (teal), "Caches 14.8 GB" (blue), "Application Support 22.6 GB" (brown), "Containers 9.1 GB" (brown), "Group Containers 4.3 GB", "Mail 3.2 GB" (orange), "pnpm 6.4 GB" (blue), "Ollama 7.9 GB" (pink). Many small unlabeled tiles fill the remainder. The colour mapping is: Documents & media orange, Code projects indigo, Dev tools & other grey, iOS & Android SDKs teal, AI models pink, Package caches blue, Apps & system brown.
   - Footer legend row with small dots: "Documents & media", "Code projects", "Dev tools & other", "iOS & Android SDKs", "AI models", "Package caches", "Apps & system".

   RIGHT (380 pt) panel:
   - A segmented control "Recommendations | Folder", with Recommendations selected. Below it in grey caption: "Known caches and build output. Nothing is selected for you."
   - Inset list, section 1: header with a green pill "Safe to remove" and "18.4 GB" right-aligned. Each row has a checkbox, a medium-weight title, a monospaced grey caption path below it, an optional small growth badge, a monospaced semibold size and a grey chevron:
     ☑ "Xcode DerivedData" — "~/Library/Developer/Xcode/DerivedData" — orange badge "↗ +1.4 GB" — "6.2 GB"
     ☑ "npm cache" — "~/.npm/_cacache" — "2.9 GB"
     ☐ "Browser caches" — "~/Library/Caches/…  +3 more" — "2.4 GB"
     ☐ "Homebrew downloads" — "~/Library/Caches/Homebrew" — "1.8 GB"
     ☐ "uv, pip & Poetry caches" — "~/Library/Caches/pip" — "1.1 GB"
     ☐ "Logs" — "~/Library/Logs" — green badge "↘ −220 MB" — "640 MB"
   - Section 2: header with an orange pill "Review first" and "9.7 GB":
     ☐ "Ollama models" — "~/.ollama/models" — "7.9 GB"
     ☐ "node_modules in idle projects" — "~/Projects/shop-web/node_modules  +4 more" — "1.3 GB"
     (the list continues and is cut off)
   - Footer pinned at the bottom of the panel: "9.1 GB selected" (headline) with "2 locations" (grey caption). Buttons in a row: "Clear", "Select Safe", a bordered "Script" button with a terminal icon, and a prominent green "Clean…" button with a trash icon.

Flat colours everywhere. The treemap tiles are flat solid fills (no gradients, no shading).
```

**Variant B: folder picker.** Use the same prompt, but select "Folder" in the right panel's segmented control. The caption reads "Tick anything inside Caches. Picks from different folders add up below.". Below it is a list of the selected folder's children, each with a checkbox, name, size and the grey caption "If deleted: Nothing breaks. Rebuilt automatically when needed.". When nothing is chosen, it shows the empty state "Pick a folder" with "Click a folder in the map to list what's inside and tick what to remove."

**Variant C: cleanup script sheet.** Use the same window, dimmed, with a sheet on top. The sheet has the title "Cleanup script" and the grey line "Uses each tool's own clean command where one exists (npm, pnpm, brew, uv, docker…). Items marked REVIEW stay commented out. Nothing has been deleted.". Below that is a monospaced shell script, for example `npm cache clean --force` and `# REVIEW: rm -rf ~/.ollama/models/…`. The buttons are "Save…", "Copy" and the default "Done".

---

## 4. Large & Hidden Files (`large-files`)

- **Target:** `dist/assets/screens/large-files.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Large & Hidden Files view grouped by kind, such as AI sessions & models and Developer files, with Safe, Think first and Keep labels and an if-deleted explanation for each item."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-TOP, "Large & Hidden Files" selected.

Toolbar: title "Large & Hidden Files". Toolbar items, left to right:
- a small segmented "Show" control "Files | Folders" with Files selected
- toggle button "Hidden only" with an eye.slash icon (off)
- toggle button "Older than 1 year" with a clock.arrow.circlepath icon (off)
- "Move to Trash" with a trash icon
- "Inspector" with a sidebar.trailing icon
- a search field with the placeholder "Name or path"

Content:
1) A thin summary row: "48 items · 63.2 GB" with grey "· 2 selected". Right-aligned grey "Files over 10 MB".

2) A native macOS Table (dark, alternating very subtle row shading, hairline column separators), sorted by Size descending. Columns: "Name", "If deleted", "Size", "Kind", "Modified", "Location". Each Name cell has a small Finder file icon. Hidden items get a small grey "Hidden" pill after the name. Two rows are highlighted with the green selection colour. Rows:
   - "Docker.raw" | "Docker's disk image. Removing it deletes all containers and images." | 18.2 GB | raw | 3 days ago | ~/Library/Containers/com.docker.docker/Data/vms/0/data
   - "ubuntu-24.04-arm64.iso" | "Installer image. Download it again if needed." | 3.1 GB | iso | 8 months ago | ~/Downloads
   - "model.gguf" [Hidden] | "AI model weights. Re-downloaded on next use." | 4.7 GB | gguf | 2 months ago | ~/.cache/models
   - "screen-recording-demo.mov" | "Depends on the owning app. Check before removing; it goes to the Trash so you can restore it." | 2.6 GB | mov | 5 months ago | ~/Movies
   - "Xcode_16.xip" | "Installer archive. Safe once Xcode is installed." | 3.4 GB | xip | 1 year ago | ~/Downloads
   - "backup-2024.zip" | "Depends on the owning app…" | 1.9 GB | zip | 1 year ago | ~/Documents/Archives
   - "simulator-runtime.dmg" [Hidden] | "Simulator runtime. Xcode downloads it again if needed." | 1.6 GB | dmg | 6 months ago | ~/Library/Developer/…
   - more rows continuing to the bottom edge, sizes decreasing (1.2 GB, 980 MB, 740 MB …)
   Sizes are right-aligned with monospaced digits. "If deleted" text is grey and truncated with an ellipsis. Location is grey and middle-truncated.

Flat, no gradients.
```

**Grouped by kind (current app, use this for the slot).** Use the SHORT SIDEBAR (see "Short sidebar and area tabs" below) with the "Cleanup" area row selected and the "Large & Hidden Files" tab selected. Group the same table into collapsible sections with a semibold header, item count and total size: "AI sessions & models", "Developer files", "App data", "Media", "Downloads & installers", "macOS assets & caches", "Documents". Add a "Label" column after Name with a pill per row: green "Safe", orange "Think first", or grey "Keep", always with its text (not colour alone). For example "model.gguf" is in "AI sessions & models" with "Safe", "Docker.raw" is in "Developer files" with "Think first", and "backup-2024.zip" is in "Documents" with "Keep". The bottom bar shows "2 selected · 7.8 GB" and a green "Review…" button that opens a review sheet listing the selected items before "Move to Trash".

---

## 5. Duplicates & Archive (`duplicates`)

- **Target:** `dist/assets/screens/duplicates.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Duplicates view showing reclaimable space and groups of identical files with a suggested copy to keep."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-TOP, "Duplicates & Archive" selected.

Toolbar: title "Duplicates & Archive", subtitle "Duplicates · 37". Centred in the toolbar is a segmented control "Duplicates | Similar Photos | Archive & Offload" with "Duplicates" selected. At the right is a toolbar button "Scan Again" with an arrow.clockwise icon.

Content (padding 20):
1) A "Searching in" grey caption followed by small capsule chips, each with a folder.fill icon and an xmark: "Downloads", "Documents", "Desktop", "Pictures". Then a small "Add Folder…" button.

2) A stat strip (one card, three tiles separated by hairlines):
   - "Reclaimable" "4.8 GB" "if you keep one of each"
   - "Duplicates" "37" "in 21 groups"
   - "Files checked" "48,302" "12 hard links skipped"

3) A vertical list of group cards (dark, hairline border). Each card has a bold file name as title, a grey subtitle, and rows for each copy. Each row has a checkbox, a Finder file icon, a path, a grey "Modified …" caption and a folder button. The first row of each group carries a small green pill "Suggested keep" and its checkbox is unticked:
   - "Q3-report-final.pdf" — "3 copies · 214 MB each":
     ~/Documents/Reports/Q3-report-final.pdf — Modified 4 months ago — [Suggested keep]
     ~/Downloads/Q3-report-final.pdf — Modified 4 months ago — ☑
     ~/Desktop/old/Q3-report-final.pdf — Modified 3 months ago — ☑
   - "product-demo.mp4" — "2 copies · 1.1 GB each":
     ~/Movies/product-demo.mp4 — [Suggested keep]
     ~/Downloads/product-demo.mp4 — ☑
   - "design-assets.zip" — "2 copies · 640 MB each" (cut off at the bottom)

4) Pinned at the bottom: a selection bar card with "3 selected" (headline) and the grey line "1.5 GB will move to the Trash" on the left. At the right is an 84 pt solid green circle button with "Remove" in white.

Flat, no gradients.
```

Similar Photos variant: in the segmented control, select "Similar Photos". The stat strip reads "Reclaimable 1.2 GB keeping the best of each", "Similar sets 14 groups of look-alikes" and "Photos analysed 3,912 all found". Show cards titled "4 similar photos" with "86 MB reclaimable" and a row of photo thumbnails. Use generic landscape or still-life thumbnails with no people. Mark the first thumbnail "Suggested keep".

Archive variant: select "Archive & Offload". The stat strip reads "Could free 22.4 GB by offloading", "Candidates 6 untouched for 6+ months" and "Build folders 7.8 GB regenerable, inside them". Each row shows a project such as "~/Projects/old-mobile-app" with "Untouched for 241 days · 18,402 files · zip ≈ 1.9 GB · node_modules, .git", a "Reveal" button and a prominent "Archive to…" button. One row already shows the green "Verified at /Volumes/Backup/old-mobile-app.zip" with a "Move Original to Trash" button.

---

## 6. Malware Scan (`malware-scan`)

- **Target:** `dist/assets/screens/malware-scan.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Malware Scan showing No threats found, the Quick, Full and Deep scan options, the XProtect definitions version and recent scan history."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-TOP, "Malware Scan" selected.

Toolbar: title "Malware Scan", subtitle "Download Protection on · 1 in quarantine". Centred is a segmented control "Scan | Download Protection | Quarantine" with "Scan" selected.

Content (padding 20, spacing 16):
1) Hero panel (dark card, 18 pt radius, padding 24):
   - LEFT: a 76 pt checkmark.shield.fill symbol in accent green.
   - Next to it: "No threats found" (30 pt bold), then the title3 grey line "Checks Downloads, Desktop, Documents, Applications and shared folders. Usually takes under a minute.".
   - RIGHT, stacked: a solid green button with a white play.fill icon and "Scan My Mac" in title3 semibold. Under it, a bordered pull-down button "Customize Scan" with a gearshape icon, shown OPEN as a native dark macOS menu listing "Quick Scan: Downloads & Desktop", "Full Scan: Common locations", "Deep Scan: Whole home folder, apps & startup folders", a separator, and "Choose Folders…".
   - Bottom of the hero: three info tiles in a row, each with a small tinted icon, a grey title and a value:
     - green checkmark.shield "Real-time protection" — "On" (green)
     - blue clock "Last scan" — "2 hours ago"
     - blue cylinder.split.1x2.fill "Apple XProtect definitions" — "v5310 · Up to date"
   - A small grey info.circle note under the tiles: "MacSweep checks for common macOS malware behaviours such as disguised programs, invalid signatures, Gatekeeper issues and known adware. It works alongside Apple's XProtect…" (truncated)

2) Four equal feature cards in a row. Each has a small tinted icon, a bold title and a grey subtitle:
   - "What we scan" (blue folder.fill), "These locations are checked for malware and suspicious items.". List with small icons: Downloads, Applications, Documents, Desktop, Shared Folders, Disk images & installers, Temporary folders.
   - "Threat checks" (blue magnifyingglass), "We look for common macOS malware behaviours, including:". List of two-line items: "Disguised programs / Apps that pretend to be documents", "Broken or invalid signatures / Apps with modified code", "Gatekeeper rejections / Not notarised or not allowed to run", "Known adware / Known adware and PUPs", "Hidden programs / Executables hidden from Finder", "Click-to-run scripts / Downloaded .command and .tool files".
   - "Protection status" (green checkmark.shield.fill), "Works alongside Apple's built-in security to keep your Mac safe.". Rows with a status on the right in green: "XProtect / Apple's malware blocking — Active", "Gatekeeper / Blocks untrusted apps — Active", "Download Protection / Checks files as you download — On", "Background monitoring / Smart Alerts for suspicious changes — Active".
   - "Recent activity" (blue clock.fill), "A summary of the latest security activity on your Mac.". Rows with small round tinted icons and relative times: "Full Scan completed — No threats found — 2 hours ago", "Downloaded item checked — Blocked and quarantined — Yesterday", "1 in quarantine — Review in Quarantine", "XProtect updated — Apple definitions v5310 — 3 days ago".

3) Bottom row:
   - Wide card "Recent scans" (blue clock.arrow.circlepath), "Your latest malware scans and results.". A small table with grey caption headers "Type  Scope  Duration  Result  When":
     Full Scan | Common locations | 48s | ✓ Clean (green) | 2 hours ago
     Deep Scan | Whole home folder, apps & startup folders | 6m 12s | ✓ Clean | 3 days ago
     Download Check | Downloads | 1s | ⚠ 1 found (orange) | Yesterday
     Quick Scan | Downloads & Desktop | 9s | ✓ Clean | 5 days ago
   - 360 pt card "Quarantine overview" (grey trash), "Isolated items are safely stored here and can't run.". It shows a lock.doc.fill icon, "1 isolated item", the grey "Restore or delete them any time." and an "Open Quarantine" button.

Flat, no gradients.
```

---

## 7. Download Protection (`download-protection`)

- **Target:** `dist/assets/screens/download-protection.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Download Protection log of recent downloads with source, signer and verdict, one disguised app blocked and quarantined."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-TOP, "Malware Scan" selected.

Toolbar: title "Malware Scan", subtitle "Download Protection on · 1 in quarantine". Centred is the segmented control "Scan | Download Protection | Quarantine" with "Download Protection" selected.

Content (padding 20):
0) A grey info.circle message line at the top: "Moved invoice.pdf.app to quarantine. It can't run there, and you can restore it."

1) Hero card: a large green checkmark.shield.fill, "Download Protection is on" (26 pt bold) and a grey paragraph: "Every new file in your Downloads folder is checked the moment it finishes downloading. Clear threats are moved to quarantine before you can open them." At the right is a large macOS switch toggled ON (green). Below are three info tiles:
   - blue arrow.down.doc "Downloads checked" — "20 recent"
   - red lock.shield "Blocked" — "1"
   - orange exclamationmark.triangle "Flagged for review" — "1"

2) "How it works" (title3 semibold). Four numbered step cards in a row, each with a small number, an SF Symbol, a bold title and a grey detail:
   1 eye "Watches Downloads"; 2 hourglass "Waits until it's finished"; 3 checklist "Checks what it is"; 4 lock.shield "Blocks or warns".

3) A card headed "Recent downloads" (clock.arrow.circlepath, title3 semibold), with the grey caption "Last 20 files · saved across restarts" at the right. Rows: a 30 pt Finder file icon, a medium-weight file name, a grey caption "kind · size · from host · signer", then at the right a relative time, a coloured verdict capsule (12% tint, icon and text), a folder button and an expand chevron:
   - "invoice.pdf.app" — "App · 2.3 MB · from files.example.net" — "2 min ago" — RED capsule "🔒 Quarantined" (lock.shield.fill). This row is expanded and shows red-grey bullet reasons indented: "• Pretends to be a document (“invoice.pdf.app”) but is a program" and "• Downloaded program with no developer signature".
   - "setup-helper.command" — "Script · 4 KB · from downloads.example.org" — "1 hour ago" — ORANGE capsule "⚠ Flagged".
   - "Editor-Installer.dmg" — "Disk image · 212 MB · from www.example.com · Developer ID: Example Software Inc." — "Yesterday" — GREEN capsule "Checked: clean" (checkmark.shield.fill).
   - "cli-tool-arm64.pkg" — "Installer · 18 MB · from github.com · Developer ID: Sample Labs" — "Yesterday" — GREEN "Checked: clean".
   - "slides-v3.key" — "Document · 46 MB · from mail.example.com" — "2 days ago" — GREEN "Safe file type" (checkmark.circle.fill).
   - "photos-export.zip" — "Archive · 380 MB" — "3 days ago" — GREEN "Safe file type".
   - more rows continuing past the bottom edge.

Flat, no gradients.
```

**Variant B: Quarantine tab (optional, `dist/assets/screens/quarantine.png`).** Select "Quarantine" in the segmented control. The hero has a white lock.shield.fill on a solid red rounded square, "1 item in quarantine" and the grey line "Files MacSweep isolates are moved out of your folders into a private quarantine and can't run. Nothing is deleted: restore anything you trust, or…". At the right is a "Show in Finder" button with a folder icon. Below is "How quarantine works" as four steps: "Moved out of reach", "Can't run", "Everything is recorded", "Your call". Then one item row: a red lock.doc.fill icon, "invoice.pdf.app", the bullet reasons, the grey "Was at ~/Downloads/invoice.pdf.app · quarantined 2 min ago · from files.example.net", and the buttons "Restore" and a red-tinted "Delete…".

---

## 8. Security Audit (`security-audit`)

- **Target:** `dist/assets/screens/security-audit.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Security Audit with a 92 percent protection score and status cards showing SIP, Gatekeeper, FileVault, Firewall and XProtect all on."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-TOP, "Security Audit" selected. The selected green row shows the white badge "Secure" at the right.

Toolbar: title "Security Audit", subtitle "Checked 3 min ago". At the right is a toolbar button "Check Now" with an arrow.clockwise icon.

Content (padding 20, spacing 14):
1) Hero card. LEFT: a ring gauge about 120 pt wide with a green arc at 92%, "92%" in 36 pt bold rounded and the grey caption "Protection Score" below it. Next to it: "Your Mac is well protected" (large bold) and the grey line "214 startup items and processes checked · 18 browser extensions". Below that, three chips: green checkmark.circle.fill "0 protections off", green checkmark.circle.fill "0 findings to review", and an orange exclamationmark.circle.fill "1 high-risk extension". Buttons: a solid green "Run Security Audit" with a magnifyingglass icon and a bordered "Review Recommendations" with a list.bullet.clipboard icon.

2) Five equal protection cards in a row (dark panels, 14 pt padding). Each has a 36 pt GREEN icon badge, a bold title, a grey caption, and at the bottom a green dot status label:
   - checkmark.shield.fill "System Integrity Protection" — "Stops anything, even admin, from modifying macOS system files." — "● On"
   - lock.app.dashed "Gatekeeper" — "Only lets apps from the App Store and identified developers open." — "● On"
   - lock.fill "FileVault" — "Encrypts your disk so a lost Mac can't be read." — "● On"
   - flame.fill "Firewall" — "Blocks unwanted incoming connections." — "● On"
   - allergens.fill "XProtect malware definitions" — "Apple's built-in malware scanner, definitions version 5310." — "● Up to date"

3) Full-width card: a blue square.stack.3d.up.fill badge, "Startup items & background processes", and the grey line "214 items scanned · login items, launch agents, daemons and running processes". At the right is a green checkmark.circle with "Nothing suspicious found" (green semibold) and "All startup items look safe." (grey).

4) Full-width card "Browser extensions" with the grey subtitle "18 extensions · 1 high risk · 4 can read all sites" and a right-aligned "All Extensions" button. One row shows a generic puzzle-piece icon, the extension "Page Helper (sample)", the browser profile "Default", and a red "High risk" pill.

5) A row of three cards (partly cut off at the bottom):
   - "Recent security activity" (blue clock): "Security audit completed — No issues found — 3 min ago", "Full Scan completed — No threats found — 2 hours ago", "XProtect definitions updated — Version 5310 — 3 days ago".
   - "Security recommendations" (yellow lightbulb.fill), subtitle "1 thing would make your Mac safer.". One row with an orange exclamationmark.triangle.fill: "Review high-risk browser extensions".
   - "Privacy & app access" (blue lock.fill), subtitle "Apps allowed to use sensitive features.". Rows with chevrons: camera.fill "Camera — 3 apps have access", mic.fill "Microphone — 4 apps have access", "Screen Recording — 2 apps have access", folder.fill "Full Disk Access — 2 apps have access".

Flat, no gradients.
```

---

## 9. Developer (`developer`)

- **Target:** `dist/assets/screens/developer.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Developer hub on the node_modules tab, listing projects by size with stale ones ready to clear."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-BOTTOM, "Developer" selected (in the "Developer" group, above "Ports — 6").

Toolbar: title "Developer", subtitle "node_modules · 23". Centred is a segmented control "Overview | Docker | Homebrew | Runtimes | Xcode | node_modules | Services" with "node_modules" selected. At the right is a "Refresh" button with an arrow.clockwise icon.

Content (padding 20):
1) A stat strip with three tiles:
   - "node_modules total" "14.8 GB" "23 projects"
   - "● Stale (90+ days)" (orange dot) "9.6 GB" "11 projects"
   - "Selected" "5.1 GB" "4 projects"

2) Controls row: a segmented control "All | Stale | Idle | Active" with All selected, a rounded search field "Search projects" (240 pt), a button "Select Stale", and a button "Clear Selected" with a trash icon.

3) A card containing a list of project rows separated by hairlines. Each row has a checkbox, the project name in medium weight, a small activity label (orange moon.zzz.fill "Stale", grey pause.circle.fill "Idle", or green bolt.fill "Active"), an optional grey "2 folders", a grey caption "path · changed …", a right-aligned monospaced size (90 pt column) and a folder button:
   ☑ "legacy-dashboard" — Stale — "~/Projects/legacy-dashboard · changed 11 months ago" — 1.9 GB
   ☑ "shop-web" — Stale — 2 folders — "~/Projects/shop-web · changed 7 months ago" — 1.4 GB
   ☑ "landing-2023" — Stale — "~/Projects/landing-2023 · changed 1 year ago" — 980 MB
   ☑ "old-mobile-app" — Stale — "~/Projects/old-mobile-app · changed 8 months ago" — 820 MB
   ☐ "api-gateway" — Idle — "~/Projects/api-gateway · changed 6 weeks ago" — 760 MB
   ☐ "app-name" — Active — "~/Projects/app-name · changed 2 hours ago" — 1.2 GB
   ☐ "docs-site" — Active — "~/Projects/docs-site · changed yesterday" — 540 MB
   (more rows continuing to the bottom)

4) A grey caption under the card: "Clearing moves node_modules to the Trash. Run npm, pnpm or yarn install in the project to bring it back."

Flat, no gradients.
```

**Variant B: Overview tab.** Show a 3-column grid of six equal cards. Each card has a bold label with its SF Symbol, a 26 pt rounded semibold headline and a grey detail:
- shippingbox "Docker": "24.1 GB", "6.3 GB reclaimable"
- mug "Homebrew": "7 outdated", "1.2 GB to clean up"
- chevron.left.forwardslash.chevron.right "Runtimes": "9 versions", "Node, Python and Ruby installs · 14 global packages"
- hammer "Xcode": "21.6 GB", "DerivedData, archives, device support · 12 simulators"
- folder.badge.gearshape "node_modules": "14.8 GB", "23 projects"
- server.rack "Services": "2 running", "5 dev services (Postgres, Redis…)"

---

## 10. AI Usage (`ai-usage`)

- **Target:** `dist/assets/screens/ai-usage.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's AI Usage view with Claude Code and Codex token cost by model, live 5-hour and weekly limits, and today's totals."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-TOP, "AI Usage" selected (white badge "2.1M").

Toolbar: title "AI Usage", subtitle "Updated 12 sec ago". Centred is a segmented control "Overview | Activity | Sessions | Storage" with "Overview" selected. At the right is a "Refresh" button with an arrow.clockwise icon.

Content (padding 20, spacing 14):
1) Service status row: two small capsule badges, each with a green checkmark.circle.fill: "Claude Code · All Systems Operational" and "Codex · All Systems Operational". Each has a tiny chevron.down.

2) Controls row: a grey line.3.horizontal.decrease.circle icon, a segmented control "All tools | Claude Code | Codex" (All tools selected), and a segmented control "Today | 7 days | 30 days | 90 days" (7 days selected).

3) Two equal cards side by side:
   LEFT "Cost" card (header icon dollarsign.circle in accent green):
   - LEFT half: a donut chart (thick ring, thin gaps between flat solid segments) with "API value" as a small grey caption and "$184.20" bold in the centre. Segments are green, teal, orange and purple.
   - RIGHT half: a list of models, each with a coloured dot, the model name, grey token count, bold cost and grey percentage:
     "Sonnet 4.5" — 61.2M tokens — $96.40 — 52%
     "Opus 4.1" — 9.8M tokens — $58.10 — 32%
     "GPT-5 Codex" — 14.6M tokens — $24.30 — 13%
     "Haiku 4.5" — 5.1M tokens — $5.40 — 3%
   - Three small insights: "Avg / active day  $26.31  7 active days", "Peak day  Oct 24  $41.80", "Per 1M tokens  $2.03  blended, incl. cache".
   - A small green bar chart captioned "Daily cost · 7 days" with seven bars of varying height.
   RIGHT "Limits" card (gauge.with.needle icon in green):
   - "Claude Code" (subheadline semibold). A row "5-hour block" with a horizontal green bar about 58% full, left text "58% of time left" and right text "Resets in 2h 06m". Below it: "This block  1.4M tokens · $11.80" and "Burn rate  412K/h".
   - A tertiary caption: "Turn on real plan limits in Settings → AI to see session and weekly %."
   - "Codex" (subheadline semibold). "Session (5h)" bar 71% with "71% left" / "Resets in 3h 40m", and "Weekly" bar 46% (orange) with "46% left" / "Resets in 2d 9h".

4) A stat strip with five tiles: "Tokens" "90.7M" "4,812 requests" · "API value" "$184.20" "at list prices" · "Output" "1.9M" "tokens generated" · "Cache hits" "91%" "of prompt tokens" · "Sessions" "64" "9 projects".

Flat solid colours only, no gradients (the donut and bars are flat fills).
```

---

## 11. Processes & Memory (`processes`)

- **Target:** `dist/assets/screens/processes.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Processes & Memory view with a memory breakdown bar, idle apps holding memory, and running apps grouped with their memory and CPU use."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-BOTTOM, "Processes & Memory" selected (white badge "2").

Toolbar: title "Processes & Memory", subtitle "412 processes · updates every 3s". Centred is a segmented control "All | Mine | Apps | Growing memory" with "All" selected. At the right: a "View" picker showing "By app" (square.stack.3d.up icon), a "Pause" button (pause.fill), "Quit Process" (xmark.octagon), "Inspector" (sidebar.trailing), and a search field "Name, PID or user".

Content (padding 20, spacing 14):
1) Memory card: "Memory" (headline) and "17.9 GB used of 24 GB" in grey. Next to it, a green checkmark.circle.fill "Pressure: Normal" and grey "Swap 1.2 GB of 2 GB". At the right is a bordered "Purge" button with a wind icon. Below, a full-width rounded stacked bar with flat segments: App (blue) 9.8 GB, Wired (orange) 3.1 GB, Compressed (purple) 2.4 GB, Cached files (teal) 2.6 GB, Free (grey) 6.1 GB. A small legend under it shows each label and value.

2) Idle apps card: "3 idle apps are holding 2.4 GB" (headline) and the grey line "Apps you haven't used for a while. Nothing quits on its own; turn on Auto-quit per app in its ⋯ menu.". At the right: a picker "Idle for: 2 hours", a "Quit All…" button and a collapse chevron.

3) Grouped process list card (dark, rounded). Each row has a disclosure chevron, an app icon (generic rounded icons), the app name, a grey "N processes · N threads" caption, an inline memory bar with a value, an inline CPU bar (teal) with a percentage, and a "Quit" or "Quit All" button:
   - "Code Editor" — "14 processes · 312 threads" — 3.2 GB — 12.4% — "Quit All"
   - "Web Browser" — "22 processes · 488 threads" — 2.9 GB — 8.1% — "Quit All"
   - "Docker" — orange chart.line.uptrend.xyaxis "Growing" icon after the name — "6 processes · 140 threads" — 2.1 GB — 4.6% — "Quit All"
   - "node" — orange growing icon — "3 processes · 41 threads" — 1.4 GB — 22.0% — "Quit All"
   - "Mail" — "1 process" — 412 MB — 0.3% — "Quit"
   - "MacSweep" — "1 process" — 186 MB — 1.1% — "Quit"
   The first group, "Code Editor", is expanded to show child rows with process names, grey "PID 4821"-style captions, a CPU % and an xmark.circle button.

Flat, no gradients.
```

---

## 12. Notch HUD (`notch-hud`)

- **Target:** `dist/assets/screens/notch-hud.png`
- **Size:** 2400×1200. The expanded notch panel is 780×420 pt in the app (1560×840 px at 2x). A 2:1 canvas fits it with the top strip of a MacBook screen around it, and suits a wide hero slot.
- **Alt text:** "MacSweep's notch HUD expanded below a MacBook's camera notch, showing System, Apps, Ports, AI and Clean tabs with CPU, memory, disk and battery rings and a live network chart."

```text
[Prepend STYLE PREAMBLE — but ignore the window/sidebar rules: there is no app window in this image.]

Canvas 2400×1200 px. It shows the top edge of a MacBook Pro display seen straight-on: a thin black macOS menu bar across the very top, with the hardware camera notch in the centre. The desktop below is plain, flat, very dark (#0E0F11), with no wallpaper art. The menu bar has a few generic white template menu bar icons at the right and a generic app menu at the left. No real app names other than MacSweep, and no clock text except "Wed 9:41".

Hanging from the notch, centred, is the expanded MacSweep notch panel: a pure black surface 1560×840 px whose top merges seamlessly into the notch, with large continuous-rounded bottom corners (26 pt) and a soft dark drop shadow. All text inside is white or white at reduced opacity, SF Pro.

Inside the panel (22 pt side padding, starting just below the notch height):
1) Tab row: five tab buttons with icons, "System" (gauge.with.dots.needle.50percent), "Apps" (square.stack.3d.up), "Ports" (network), "AI" (flame) and "Clean" (sparkles), in 13 pt semibold. The selected tab "System" sits on a white 14% rounded pill with white text; the others are white at 60%. At the right are two small icons: gearshape and arrow.up.forward.app.

2) Four ring gauges evenly spaced across (74 pt rings, 8 pt line). Each has a grey track, a coloured arc with round caps, a percentage in the centre, a label and a small caption below:
   - "CPU" 21%, green arc, caption "Nominal"
   - "Memory" 66%, orange arc, caption "15.8 GB"
   - "Disk" 62%, orange arc, caption "382 GB free"
   - "Battery" 86%, green arc, caption "Health 94%"

3) Network card: on the left, "Network" with an arrow.up.arrow.down icon (14 pt semibold) and "Home-WiFi" in grey. Below it, two rate readouts in 17 pt rounded semibold: a cyan arrow.down "1.2 MB/s" captioned "Download" and a purple arrow.up "84 KB/s" captioned "Upload". On the right is a wide line chart. The download series is a cyan line with a flat translucent cyan area under it, spiking a few times. The upload series is a thin purple line near the bottom. The y-axis labels read like "2 MB/s" and "1 MB/s" in white at 50%.

Flat colours, no gradients inside the panel (the area fill is a flat translucent colour).
```

**Variant B: collapsed "ears".** The notch stays black and small, with a 10 pt bottom radius. Two small "ears" extend left and right of the camera. The left ear shows a cpu icon with "21" and a memorychip icon with "66", coloured green and orange like the rings. The right ear shows a small flame.fill icon with "58", the Claude 5-hour percentage left.

---

## 13. Menu bar (`menu-bar`)

- **Target:** `dist/assets/screens/menu-bar.png`
- **Size:** 1600×1600. The panel is 400 pt wide and about 680 pt tall (about 800×1360 px at 2x). A square canvas fits it with the menu bar strip and some margin. A 1600×1200 canvas would crop the bottom of the panel.
- **Alt text:** "MacSweep's two-line menu bar item showing CPU and memory, with its open panel of storage, memory, battery, CPU, network and AI tiles."

```text
[Prepend STYLE PREAMBLE — but ignore the window/sidebar rules: there is no main app window in this image.]

Canvas 1600×1600 px. At the top is a straight-on strip of a dark macOS menu bar (translucent dark, flat) across the full width, with generic white template icons, "Wed 9:41" at the far right and no real app names. Just left of the system icons is the MacSweep menu bar item, highlighted (pressed state with a subtle rounded highlight). It has a small 16 pt template mark (a 270° gauge ring around a four-point sparkle) followed by TWO stacked lines of tiny 8.5 pt semibold monospaced text: "CPU 18%" on top and "MEM 64%" below, in white.

Dropping down from that item is the MacSweep panel: 800 px wide, dark macOS popover/menu material (flat dark grey), rounded corners and a soft shadow, with 14 pt padding inside. The desktop around it is plain, flat, very dark (#0E0F11).

Inside the panel, top to bottom:
1) Header: "MacSweep" (headline) with "MacBook Pro" (caption, grey) below it. At the right, a green capsule pill "Memory normal".

2) A 2-column grid of six tiles. Each tile has a flat quaternary-grey fill (no border, 12 pt radius) and is at least 104 pt tall. Each has a small tinted icon, a title, captions and an optional small tinted action button:
   - blue internaldrive "Macintosh HD": "Available: 382 GB" in orange caption, "18.4 GB safe to clean" in grey, button "Free Up".
   - purple memorychip "Memory": "Available: 8.1 GB", "Pressure: Normal" in green, button "Free Up".
   - green battery.75percent "Battery": "On battery", "86%" semibold, "Health 94% · 132 cycles".
   - cyan cpu "CPU": "Load: 18%" with a tiny flat sparkline.
   - teal wifi "Home-WiFi": "↑ 84 KB/s", "↓ 1.2 MB/s", button "Test Speed".
   - orange flame "AI today": "2.1M tokens", plus two tiny limit bars "5h  58% left  resets 4:30 PM" and "week  81% left", button "Details".

3) "Top memory" (caption semibold grey), then four rows, each with an app icon, name, memory value and a small xmark quit button: "Code Editor 3.2 GB", "Web Browser 2.9 GB", "Docker 2.1 GB", "node 1.4 GB".

4) "Listening ports" (caption semibold grey), then rows. Each row has a monospaced bold port, a process name, a lock.fill or globe icon, a safari button and a stop button: ":3000 node 🔒", ":5432 postgres 🔒", ":6379 redis-server 🔒", ":8080 java 🌐". Then a link "All 6 ports…".

5) A divider, then a footer row: a button "Open MacSweep" (⌘O), a small switch labelled "Notch" (on, green) and a "Quit" button (⌘Q).

Flat, no gradients.
```

---

## 14. Timeline (`timeline`)

- **Target:** `dist/assets/screens/timeline.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's 14-day Timeline charting CPU, memory used, free disk space and download speed, with CPU spikes listed alongside the busiest process."

```text
[Prepend STYLE PREAMBLE]

Sidebar: SIDEBAR-BOTTOM, "Timeline" selected (in the "Insights" group).

Toolbar: title "Timeline", subtitle "CPU, memory, disk and network · a point every 5 minutes". Centred is a segmented control "24h | 7d | 14d" with "14d" selected.

Content (padding 20, spacing 14): four full-width chart cards stacked vertically (dark, hairline border, 12 pt radius). Each has the title (headline) at left, the latest value right-aligned in grey monospaced digits, and below it a 120 pt line chart with smooth monotone interpolation. Each chart has a y axis on the TRAILING side, faint gridlines, and x-axis day labels over 14 days ("Oct 16", "Oct 18" … "Oct 29"). Lines are flat and single-colour with no area fill. Gaps appear where the Mac was asleep (the line breaks into segments).
   - "CPU" — "17.4 %" — accent GREEN line, mostly low (5–25%) with daily bumps and three sharp spikes to 80–95%.
   - "Memory used" — "15.8 GB" — PURPLE line, oscillating 11–19 GB.
   - "Disk free" — "382.0 GB" — TEAL line, slowly declining from 410 to 365 GB, with one jump back up (after a cleanup).
   - "Download" — "1.2 MB/s" — BLUE line, near zero with occasional spikes to 20–40 MB/s.

Below them, a card (partly visible at the bottom) titled "CPU spikes" with the grey subtitle "And what was busiest at the time". Rows show a date and time on the left, then a bold "94% CPU" and grey "· node" on the right:
   "Oct 27, 2:14 PM    94% CPU · node"
   "Oct 24, 10:02 AM   88% CPU · Docker"
   "Oct 19, 4:47 PM    81% CPU · swift-frontend"

Flat, no gradients.
```

---

## Short sidebar and area tabs (slots 15–22)

The app now uses a short sidebar: the main pages, then one row per area, and the pages of the open area appear as tabs along the top of the content. Slots 15–22 use this layout. Paste the block below after the style preamble; it replaces the preamble's "Full sidebar content" and scroll-state rules for these slots. The earlier slots (1–14) still describe the previous, longer sidebar; regenerate them with this block when you refresh them.

```text
SHORT SIDEBAR — replaces the full sidebar list and the SIDEBAR-TOP / SIDEBAR-BOTTOM states.

Sidebar content, in order (symbol in brackets): the app header as described, then three rows with no header: Smart Scan [sparkles.rectangle.stack] · Dashboard [gauge.with.dots.needle.67percent] · AI Usage [flame] — 2.1M. Then a small semibold grey group header "Tools" and one row per area: Cleanup [trash] · Protection [checkmark.shield] · Performance [gauge.with.dots.needle.67percent] · Developer [hammer] · Applications [square.stack.3d.up] · Insights [chart.line.uptrend.xyaxis]. The whole list fits; there is empty sidebar space below Insights. The area that contains the open page is the selected (solid green) row.

AREA TABS: directly under the toolbar, across the content width, a thin bar (standard toolbar material, hairline divider at its bottom) with the area's pages as capsule tabs, each an SF Symbol plus label in callout size. The open page's tab is a solid green capsule with white semibold text; the others are plain white text on no background. Tabs per area:
- Cleanup: Space & Junk [internaldrive] · Large & Hidden Files [doc.text.magnifyingglass] · Duplicates & Archive [doc.on.doc] · Browser Profiles [person.crop.rectangle.stack] · Privacy [hand.raised] · Mail Attachments [paperclip] · Trash Bins [trash] · Shredder [doc.badge.ellipsis]
- Performance: Processes & Memory [memorychip] · Optimization [slider.horizontal.3] · Maintenance [wrench.and.screwdriver] · Startup Items [power] · Startup Guard [lock.shield]
- Developer: Developer [hammer] · Git Repos [arrow.triangle.branch] · Ports [network]
- Applications: Uninstaller [trash.square] · App Footprint [square.stack.3d.down.right] · Updater [arrow.down.app] · App Usage [hourglass]
- Insights: System Info [info.circle] · Smart Alerts [bell.badge] · Timeline [chart.xyaxis.line] · What Grew [chart.bar.doc.horizontal]
Do not invent, rename, reorder or drop sidebar rows or tabs.
```

---

## 15. Fast junk scan (`junk-scan`)

- **Target:** `dist/assets/screens/junk-scan.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Space & Junk results after a fast junk scan, listing app update leftovers, unfinished Codex runtime downloads, old Claude Code CLI versions, old VS Code and Cursor extension versions, AI model caches and iPhone backups, with the Claude desktop sandbox VM under Review first."

```text
[Prepend STYLE PREAMBLE, then SHORT SIDEBAR]

Sidebar: "Cleanup" area row selected. Area tabs: Cleanup, with "Space & Junk" selected.

Toolbar: title "Storage", subtitle "~ · scanned just now". At the right, a "Scan" toolbar menu button with an arrow.clockwise icon.

Content (padding 20): the same layout as the Space & Junk slot (`storage`): stat strip on top, Explorer treemap card on the left, and the right 380 pt panel with "Recommendations" selected. Above the treemap card, a slim green-tinted info row with a bolt icon: "Junk measured in known locations" and a grey monospaced "19 s".

Right panel lists (checkbox, medium-weight title, grey monospaced path caption, monospaced semibold size, chevron):
- Green pill "Safe to remove" with "11.6 GB" right-aligned:
  ☑ "App update leftovers" — "~/Library/Caches/…/ShipIt  +2 more" — "1.2 GB"
  ☑ "Unfinished Codex runtime downloads" — "~/.codex/…" — "840 MB"
  ☑ "Old Claude Code CLI versions" — "~/.local/share/claude/versions" — "1.4 GB"
  ☐ "Old VS Code extension versions" — "~/.vscode/extensions" — "960 MB"
  ☐ "Old Cursor extension versions" — "~/.cursor/extensions" — "710 MB"
  ☐ "AI model caches" — "~/.cache/huggingface  +1 more" — "4.8 GB"
  ☐ "iPhone software updates" — "~/Library/iTunes/iPhone Software Updates" — "1.7 GB"
- Orange pill "Review first" with "14.2 GB":
  ☐ "Claude desktop sandbox VM" — "~/Library/Application Support/Claude/…" — "8.6 GB"
  ☐ "iPhone backups" — "~/Library/Application Support/MobileSync/Backup" — "5.6 GB"
Footer pinned at the bottom of the panel: "3.4 GB selected" (headline) with "3 locations" (grey caption); buttons "Clear", "Select Safe", a bordered "Script" button with a terminal icon, and a prominent green "Clean…" button with a trash icon.

All paths are generic placeholders. Flat colours, no gradients.
```

---

## 16. Cleanup script & live log (`cleanup-script`)

- **Target:** `dist/assets/screens/cleanup-script.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's cleanup script sheet with a live log showing npm cache clean, pnpm store prune and brew cleanup finishing, and Review first items listed as not run."

```text
[Prepend STYLE PREAMBLE, then SHORT SIDEBAR]

Sidebar: "Cleanup" area row selected. Area tabs: Cleanup, with "Space & Junk" selected. The Space & Junk window content is dimmed behind a sheet.

Sheet (about 760×620 pt, centered, standard macOS sheet with rounded corners and shadow):
1) Title "Cleanup script" (title3 semibold). Grey line below: "Uses each tool's own clean command where one exists (npm, pnpm, brew, uv, docker…). Items marked REVIEW stay commented out."
2) Upper box: a monospaced shell script on a slightly darker card with a hairline border, for example:
   "#!/bin/sh"
   "npm cache clean --force"
   "pnpm store prune"
   "brew cleanup --prune=all"
   "# REVIEW: rm -rf ~/Library/Application Support/Claude/…"
   The REVIEW line is grey.
3) Lower box: a live log, monospaced, on a near-black card, auto-scrolled to the bottom:
   "$ npm cache clean --force" then green "✓ done"
   "$ pnpm store prune" then green "✓ done"
   "$ brew cleanup --prune=all" then green "✓ done"
   "$ uv cache clean" then grey "– uv isn't installed, skipped"
   "Finished. Re-measuring junk…"
4) A grey caption under the log with an info icon: "Review first items are never run."
5) Button row: "Save…", "Copy" on the left; at the right a disabled bordered button "Run 4 tool commands" with a terminal icon, and the default green "Done".

Flat colours, no gradients.
```

---

## 17. Weekly auto-clean (`auto-clean`)

- **Target:** `dist/assets/screens/auto-clean.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's weekly automatic cleanup setting, switched on, explaining that only safe junk not in use is moved to the Trash and a notification is sent."

```text
[Prepend STYLE PREAMBLE]

A macOS Settings window for MacSweep (no app sidebar in this window). Toolbar tabs across the top as icon-above-label buttons: "General" (selected, green tint), "Appearance", "Dashboard", "Sidebar", "AI", "Privacy", "Shortcuts".

Content: a grouped Form (inset rounded sections on the dark background):
- Section "Startup": toggle "Open MacSweep at login" (on).
- Section "Cleanup": toggle "Clean safe junk every week" (ON, green switch). Under it, grey footnote text: "Off by default. Once a week, MacSweep moves safe junk to the Trash and sends a notification. Only items marked safe are included, and nothing that is in use." Under that, a grey line "Last weekly cleanup: 3 days ago".
- Section "Scans": grey footnote "Scheduled scans run at low priority and are skipped on battery below 30%."

In the top-right corner of the desktop, outside the window, a single macOS notification banner: MacSweep icon, title "Weekly cleanup done", body "Moved 2.3 GB of safe junk to the Trash."

Flat colours, no gradients.
```

---

## 18. Storage forecast (`storage-forecast`)

- **Target:** `dist/assets/screens/storage-forecast.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's storage forecast card with a free-space history chart and a trend line reading Full in about 9 weeks at this rate."

```text
[Prepend STYLE PREAMBLE, then SHORT SIDEBAR]

Sidebar: "Dashboard" selected. No area tabs (Dashboard is a main page).

Toolbar: title "Dashboard".

Content: the Dashboard card grid (see the `dashboard` slot), with the Storage card enlarged and in focus at top-left, spanning two columns:
- Header: a small blue-tinted icon badge with internaldrive, "Storage" (headline), and at the right a grey monospaced "Macintosh HD".
- A large SF Pro Rounded number "214 GB" with grey "available" and "free of 994 GB".
- A horizontal capacity bar (flat segments: apps, documents, developer, system, free).
- A line chart "Free space" over the last 30 days: a flat blue line drifting downward, then a dashed grey trend line continuing to the right edge where it meets zero.
- An orange-tinted capsule label with a calendar.badge.exclamationmark icon: "Full in about 9 weeks at this rate".
- A grey caption: "Estimated from recorded free-space history."
Other dashboard cards (CPU, Memory, Battery, Network) appear smaller around it, partly visible.

Flat colours, no gradients.
```

---

## 19. Browser Profiles (`browser-profiles`)

- **Target:** `dist/assets/screens/browser-profiles.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Browser Profiles page listing profiles for several browsers with cache and site data sizes, a Clear Cache button, and a note that the browser must be closed first."

```text
[Prepend STYLE PREAMBLE, then SHORT SIDEBAR]

Sidebar: "Cleanup" area row selected. Area tabs: Cleanup, with "Browser Profiles" selected.

Toolbar: title "Browser Profiles". At the right, "Refresh" with an arrow.clockwise icon.

Content (padding 20):
1) A grey caption line: "Caches are safe to clean. Site data is shown for review only. Logins, cookies and bookmarks are never touched."
2) One card per browser, stacked:
   - "Chrome" card: header with a generic globe icon (no brand logos), "Chrome", total "6.8 GB". Rows per profile, each with name, "Cache" size, "Site data" size (grey, with an orange "Review" pill), and a bordered "Clear Cache" button:
     "Default" — Cache 3.1 GB — Site data 1.4 GB — [Clear Cache]
     "Work" — Cache 1.6 GB — Site data 700 MB — [Clear Cache]
   - "Brave" card: "Default" — Cache 1.2 GB — Site data 420 MB — the "Clear Cache" button is disabled, with an orange label "Running. Quit it to clear or reset."
   - "Arc" card: "Default" — Cache 2.2 GB — Site data 900 MB — [Clear Cache]
   - "Edge" and "Vivaldi" cards collapsed at the bottom, showing only name and total ("Edge 640 MB", "Vivaldi 310 MB").
Use generic globe icons only; no browser logos.

Flat colours, no gradients.
```

---

## 20. Git Repos (`git-repos`)

- **Target:** `dist/assets/screens/git-repos.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Git Repos page listing repositories by .git folder size with Compact and Prune LFS cache buttons, one repository marked In use and skipped."

```text
[Prepend STYLE PREAMBLE, then SHORT SIDEBAR]

Sidebar: "Developer" area row selected. Area tabs: Developer, with "Git Repos" selected.

Toolbar: title "Git Repos". At the right, "Scan" with an arrow.clockwise icon.

Content (padding 20):
1) Header card "Git repositories" with the grey caption "Compact runs git gc and Prune LFS cache runs git lfs prune. Neither changes commits, branches, tags or your files." A grey monospaced line at the right: "Measured 14 of 14 repositories".
2) A list of repositories sorted by .git size, each row: a folder icon with an arrow.triangle.branch badge, repo name (medium weight), grey monospaced path below, a monospaced ".git" size, an optional grey "LFS" size, and bordered buttons "Compact" and "Prune LFS cache":
   - "design-assets" — "~/Projects/design-assets" — .git 6.4 GB — LFS 4.1 GB — [Compact] [Prune LFS cache]
   - "mobile-app" — "~/Projects/mobile-app" — .git 2.8 GB — [Compact]
   - "api-server" — "~/Projects/api-server" — .git 1.9 GB — an orange "In use" pill instead of buttons, grey caption "Skipped while a git process is running"
   - "website" — "~/Projects/website" — .git 1.1 GB — [Compact] showing "Compacting…" with a small spinner
   - "notes" — "~/Projects/notes" — .git 420 MB — [Compact]
   - more rows cut off at the bottom.

Flat colours, no gradients.
```

---

## 21. App Footprint (`app-footprint`)

- **Target:** `dist/assets/screens/app-footprint.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's App Footprint page listing apps by total size with a breakdown into app, caches, support data, containers and preferences, and Clear Cache and Reset… buttons."

```text
[Prepend STYLE PREAMBLE, then SHORT SIDEBAR]

Sidebar: "Applications" area row selected. Area tabs: Applications, with "App Footprint" selected.

Toolbar: title "App Footprint". At the right, "Refresh" with an arrow.clockwise icon.

Content (padding 20):
1) Grey caption: "Only apps you installed are listed; Apple apps are never reset."
2) A list of apps sorted by total size. Each row: a generic rounded-square app icon (flat colour, single letter, no real logos), app name, a grey "v2.4 · last used 2 days ago" line, a monospaced total size, and a thin stacked bar showing the split: App (grey), Caches (blue), Support data (indigo), Containers (teal), Preferences (yellow). Rows:
   - "Studio" — 9.4 GB
   - "Chat" — 4.1 GB — an orange label "Running. Quit it to clear or reset."
   - "Notes Pro" — 2.6 GB
   - "Editor" — 1.8 GB
   - more rows cut off.
3) The first row is expanded: a breakdown list "App 1.2 GB", "Caches 3.6 GB", "Support data 3.9 GB", "Containers 620 MB", "Preferences 84 KB", each with "Reveal" links, and two buttons: bordered "Clear Cache" and bordered red-text "Reset…". A grey caption under the buttons: "Reset moves everything except the app to the Trash. You can restore everything from the Trash until you empty it."

Flat colours, no gradients.
```

---

## 22. Startup Guard (`startup-guard`)

- **Target:** `dist/assets/screens/startup-guard.png`
- **Size:** 2880×1800
- **Alt text:** "MacSweep's Startup Guard page, switched on, with one new launch agent held for approval with Approve and Keep Blocked buttons, and a history of earlier decisions."

```text
[Prepend STYLE PREAMBLE, then SHORT SIDEBAR]

Sidebar: "Performance" area row selected. Area tabs: Performance, with "Startup Guard" selected.

Toolbar: title "Startup Guard".

Content (padding 20):
1) A card with a lock.shield icon in a green-tinted badge, "Startup Guard" (headline) and a green toggle "Startup Guard" (ON). Grey caption: "New launch agents and daemons wait for your approval. Your own agents are stopped at once; system-wide ones stop with one click."
2) Section "Held items" (semibold), one orange-tinted card:
   - "com.example.updater" (medium weight) with a grey line "Found 2 min ago · ~/Library/LaunchAgents/com.example.updater.plist"
   - Small pills: "Launch agent", "Stopped".
   - Buttons: "Details", "Keep Blocked", and the green "Approve".
3) Section "History": a plain list of earlier decisions, each with a name, a grey relative date and a pill "Approved" (green) or "Blocked" (red), with text labels (not colour alone):
   - "com.example.sync-helper" — "3 days ago" — "Approved"
   - "com.example.agent" — "1 week ago" — "Blocked"

All names and paths are generic placeholders. Flat colours, no gradients.
```

---


## Animated loops

Short loops for hero and feature sections. ChatGPT image generation makes stills. For each loop, either:

- paste the description into a video model, or
- generate each keyframe as a still (prepend the style preamble and the matching slot prompt, then change only what the keyframe says) and tween them in Keynote, After Effects or Rive. Export an MP4.

Then make the GIF from the MP4:

```sh
ffmpeg -i in.mp4 -vf "fps=15,scale=1200:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128[p];[b][p]paletteuse=dither=bayer" -loop 0 out.gif
```

Encoding settings:

- **MP4:** H.264, `-crf 23 -pix_fmt yuv420p -movflags +faststart`, no audio track.
- **Embedding:** use `<video autoplay muted loop playsinline poster="…">`.

**Reduced motion:** each loop has a static poster frame (`*-poster.png`). Under `prefers-reduced-motion: reduce`, show only the poster and never autoplay. The poster is also the `poster=` attribute.

Every loop is a straight-on screen recording, so: no camera moves, zoom-ins, cursor trails or motion blur unless the keyframes describe them. UI motion is native macOS easing (spring or ease-in-out, 200–350 ms).

### Loop 1: Smart Scan "Optimizing your Mac" with the Stop ring

- **Files:** `dist/assets/screens/smart-scan-optimize.mp4`, `dist/assets/screens/smart-scan-optimize.gif`
- **Poster:** `dist/assets/screens/smart-scan-optimize-poster.png` (the 4.0 s frame)
- **Size:** 1440×900 for the MP4 (a 1x crop of the full window is fine; 2880×1800 is optional). The GIF is 1200 px wide.
- **Duration / fps:** 8 s, 30 fps (GIF at 15 fps)
- **Loop:** seamless. The last frame cross-fades in 300 ms back into the first.
- **Base:** smart-scan Variant B. Sidebar SIDEBAR-TOP with Smart Scan selected.

Keyframes:

- **0.0 s:** "Optimizing your Mac…". All four step rows show grey "Waiting". The ring track is empty and the centre reads "Stop".
- **0.3 s:** "System Junk" switches to a small spinner with the caption "Running…". The ring arc starts growing clockwise from 12 o'clock.
- **2.0 s:** "System Junk" is done: the spinner is replaced by "6.8 GB" in grey, with the caption "2 in use, skipped". The ring is at 25%. "Trash Bins" starts spinning.
- **3.6 s:** "Trash Bins" is done with "1.3 GB". The ring is at 50%. "Run Maintenance Scripts" is spinning.
- **5.2 s:** Maintenance is done, with the caption "Rebuild Launch Services · Clear font caches". The ring is at 75%. "Flush DNS Cache & Free Up RAM" is spinning.
- **6.4 s:** The last step is done with the caption "DNS flushed · inactive memory released". The ring is full at 100%. The heading cross-fades to "Clean-up complete", a green "8.1 GB freed" line fades in below it, and the ring's centre label changes from "Stop" to "Done".
- **6.4–7.6 s:** Hold.
- **7.6–8.0 s:** Cross-fade back to the 0.0 s frame.

### Loop 2: Notch expanding on hover

- **Files:** `dist/assets/screens/notch-expand.mp4`, `dist/assets/screens/notch-expand.gif`
- **Poster:** `dist/assets/screens/notch-expand-poster.png` (the fully expanded frame at 2.0 s, the same as notch-hud.png)
- **Size:** 1600×800 for the MP4 (2:1, the same framing as notch-hud). The GIF is 1200×600.
- **Duration / fps:** 6 s, 30 fps (GIF at 15 fps)
- **Loop:** seamless (it starts and ends collapsed).
- **Base:** notch-hud and its Variant B.

Keyframes:

- **0.0 s:** Collapsed notch with its two ears: the left ear shows cpu "21" and memorychip "66"; the right ear shows flame "58". A standard macOS arrow cursor sits on the desktop below and to the left.
- **0.6 s:** The cursor glides up onto the notch.
- **0.8–1.3 s:** The notch grows downward and outward with a spring. Its black surface widens to 780×420 pt and the bottom radius goes from 10 to 26 pt. The ears fade out and the dashboard fades and scales in from 96% at the top anchor. The shadow fades in.
- **1.3–3.8 s:** Expanded, System tab. The ring numbers tick live: CPU goes 21 → 24 → 19. The network chart scrolls left by a few points, and a new cyan spike appears at the right edge.
- **3.8 s:** The cursor moves down off the panel onto the desktop.
- **4.0–4.5 s:** Reverse of the expand: the panel shrinks back into the notch and the ears fade in.
- **4.5–6.0 s:** Hold collapsed. The cursor drifts back to its start position by 6.0 s.

### Loop 3: A download is checked and quarantined

- **Files:** `dist/assets/screens/download-quarantine.mp4`, `dist/assets/screens/download-quarantine.gif`
- **Poster:** `dist/assets/screens/download-quarantine-poster.png` (the 4.5 s frame showing the red "Quarantined" row)
- **Size:** 1440×900 for the MP4. The GIF is 1200 px wide.
- **Duration / fps:** 7 s, 30 fps (GIF at 15 fps)
- **Loop:** seamless. At the end, the new row fades out and the list slides back up.
- **Base:** the download-protection prompt, but start with the "Recent downloads" list WITHOUT the invoice.pdf.app row and without the message line.

Keyframes:

- **0.0 s:** The Download Protection tab shows the switch ON and the tiles "Downloads checked 19 recent", "Blocked 0" and "Flagged for review 1". The list starts with "setup-helper.command".
- **1.0 s:** A new row slides in at the top of the list (the rows below push down over 250 ms): "invoice.pdf.app — App · 2.3 MB · from files.example.net — just now". Its verdict area shows a small grey spinner.
- **2.2 s:** The spinner is replaced by a red capsule "🔒 Quarantined" (lock.shield.fill), and the row expands with the bullets "• Pretends to be a document (“invoice.pdf.app”) but is a program" and "• Downloaded program with no developer signature". At the same moment the tiles update: "Downloads checked 20 recent" and "Blocked 1" (the red number does a brief 1.0 → 1.08 → 1.0 scale bump).
- **2.6 s:** The grey info line fades in at the top: "Moved invoice.pdf.app to quarantine. It can't run there, and you can restore it."
- **3.0 s:** A macOS notification banner slides in at the top-right of the screen, outside the window. It shows the MacSweep icon and "Blocked and quarantined: invoice.pdf.app", with the reasons below: "Pretends to be a document (“invoice.pdf.app”) but is a program · Downloaded program with no developer signature".
- **3.0–5.5 s:** Hold.
- **5.5 s:** The notification slides out.
- **6.2–7.0 s:** The new row and the message line fade out, the tiles revert, and the list slides back to the 0.0 s state.

### Loop 4: Treemap zooming into a folder

- **Files:** `dist/assets/screens/treemap-zoom.mp4`, `dist/assets/screens/treemap-zoom.gif`
- **Poster:** `dist/assets/screens/treemap-zoom-poster.png` (the 0.0 s frame, the same view as storage.png)
- **Size:** 1440×900 for the MP4. The GIF is 1200 px wide.
- **Duration / fps:** 6 s, 30 fps (GIF at 15 fps)
- **Loop:** seamless (it zooms back out).
- **Base:** the storage prompt (Explorer treemap with the Recommendations panel).

Keyframes:

- **0.0 s:** Breadcrumb "user › Library", with "184,213 files · 96.4 GB" at the right. The treemap is coloured by category.
- **0.8 s:** The cursor moves over the teal tile "Developer 31.2 GB". The tile gets a 2 pt white outline, and the footer swaps the legend for the tile detail bar: "Developer" and "31.2 GB", the grey line "1,204 files · modified 2 hours ago", and the buttons "Reveal", "Copy Path" and "Trash…".
- **1.4 s:** Click. The Developer tile expands with an ease-in-out over 450 ms to fill the whole map, while its children fade in as new tiles: "Xcode 14.2 GB", "CoreSimulator 9.6 GB", "Android SDK 5.1 GB" and smaller unlabeled tiles. The breadcrumb animates to "user › Library › Developer" (with "Developer" semibold) and the right text becomes "48,920 files · 31.2 GB".
- **2.0–3.6 s:** Hold. The right panel's "Xcode DerivedData 6.2 GB" row softly highlights to tie the map to the recommendation.
- **3.6 s:** The chevron.left back button is clicked.
- **3.6–4.1 s:** The reverse animation returns to the Library level.
- **4.1–6.0 s:** Hold. The cursor drifts back to its 0.0 s position.

### Loop 5: AI Usage updating live

- **Files:** `dist/assets/screens/ai-usage-live.mp4`, `dist/assets/screens/ai-usage-live.gif`
- **Poster:** `dist/assets/screens/ai-usage-live-poster.png` (the 0.0 s frame, the same view as ai-usage.png)
- **Size:** 1440×900 for the MP4. The GIF is 1200 px wide.
- **Duration / fps:** 6 s, 30 fps (GIF at 15 fps)
- **Loop:** seamless. Numbers ease back to their starting values during the last 0.5 s, cross-faded.
- **Base:** the ai-usage prompt.

Grounding: the README says the view "updates within seconds of each message".

Keyframes:

- **0.0 s:** Subtitle "Updated 12 sec ago". The stat strip shows "Tokens 90.7M", "API value $184.20" and "Sessions 64". The Claude Code "This block" line reads "1.4M tokens · $11.80". The sidebar badge reads "2.1M".
- **1.5 s:** The subtitle changes to "Updated just now". The digits roll up with a numeric-text transition: "Tokens 90.7M → 90.8M", "API value $184.20 → $184.62", "This block 1.4M → 1.5M tokens · $12.22", and the sidebar badge "2.1M → 2.2M". The green 5-hour block bar shrinks slightly, from 58% to 57% of time left.
- **1.5–3.5 s:** Hold. The newest (rightmost) bar in "Daily cost · 7 days" grows a few pixels.
- **3.5 s:** A second, smaller update: "$184.62 → $184.81" and "Burn rate 412K/h → 418K/h".
- **3.5–5.5 s:** Hold.
- **5.5–6.0 s:** Cross-fade back to the 0.0 s frame.

### Loop 6 (optional): Menu bar item live readings and panel opening

- **Files:** `dist/assets/screens/menu-bar-live.mp4`, `dist/assets/screens/menu-bar-live.gif`
- **Poster:** `dist/assets/screens/menu-bar-live-poster.png` (the panel-open frame at 3.0 s, the same as menu-bar.png)
- **Size:** 1200×1200 for the MP4 (scaled from the 1600×1600 menu-bar framing). The GIF is 800×800.
- **Duration / fps:** 6 s, 30 fps (GIF at 12 fps)
- **Loop:** seamless (it starts and ends with the panel closed).
- **Base:** the menu-bar prompt.

Keyframes:

- **0.0 s:** The panel is closed. Only the menu bar strip shows, and the MacSweep item reads "CPU 18%" / "MEM 64%".
- **0.7 s:** The item updates to "CPU 23%" / "MEM 64%". The digits change instantly, as in the real menu bar, with no animation.
- **1.4 s:** The item updates to "CPU 31%" / "MEM 65%".
- **1.8 s:** The cursor clicks the item. It shows the pressed highlight, and the panel drops in with a standard macOS menu fade (150 ms).
- **1.8–4.6 s:** The panel is open. The CPU tile reads "Load: 31%" and its sparkline extends by one point. The "Top memory" values tick slightly (for example "node 1.4 GB → 1.5 GB").
- **4.6 s:** The cursor clicks the desktop and the panel fades out.
- **5.2 s:** The item shows "CPU 19%" / "MEM 64%".
- **6.0 s:** It matches the 0.0 s frame again ("CPU 18%").
