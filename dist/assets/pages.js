import { companionShowcase } from "./companion.js";
import { features } from "./feature-page.js";
import { icon } from "./icons.js";
import { REPO, RELEASES } from "./config.js";
import { cta, sectionHead, shieldArt } from "./components.js";
import { demo, panels } from "./demo.js";
import { shot, gallery } from "./screens.js";
const capabilityCards = [
  [
    "disk",
    "Room for what’s next.",
    "Smart Scan checks junk, security, speed, and apps, then cleans up step by step; the junk check takes about 20 seconds. A treemap, large and hidden files, exact duplicates, similar photos, and verified archives show where the space went.",
    "features.html#cleanup",
    '<div class="storage-bars">' +
      [32, 50, 39, 75, 60, 95, 72, 50, 69, 38, 54, 27]
        .map((h) => `<i style="--h:${h}%"></i>`)
        .join("") +
      "</div>",
  ],
  [
    "shield",
    "Know what needs attention.",
    "Quick, Full, and Deep malware scans, a check on every finished download, and a Security Audit with a protection score. Plus app permissions, network, sharing, backups, and extensions.",
    "features.html#protection",
    '<div class="check-lines"><span>Gatekeeper <b>Enabled ✓</b></span><span>FileVault <b>Encrypted ✓</b></span><span>Download checks <b>Watching ✓</b></span><span>Security Audit <b>Secure ✓</b></span></div>',
  ],
  [
    "pulse",
    "Keep your flow going.",
    "Activity-Monitor-accurate CPU and memory, a leak flag for steadily growing apps, idle apps, a ranked optimization advisor, maintenance tasks, and startup items.",
    "features.html#performance",
    '<svg viewBox="0 0 280 55" width="100%" height="55" aria-hidden="true"><path d="M0 35h25l10-7 10 12 10-29 12 39 10-19h40l10-8 10 16 10-29 10 35 10-15h43l10-12 10 18 10-8h25" stroke="#8da7ff" stroke-width="1.5" fill="none"/></svg>',
  ],
  [
    "code",
    "Built for the builders.",
    "Docker, Homebrew, runtimes, Xcode storage, every node_modules in your home folder, dev services, and ports. Bring order to your dev machine.",
    "developers.html",
    '<div class="mini-code"><span>~/projects</span> → listening on :3000<br><span>✓</span> Every port has a story.</div>',
  ],
  [
    "ai",
    "See your AI footprint.",
    "Claude Code and Codex tokens and API-equivalent cost by model, project, and session, with live 5-hour and weekly limits and service status.",
    "developers.html#ai",
    '<div class="check-lines"><span>Claude Code <b>By project & session</b></span><span>Codex <b>Tokens & estimates</b></span><span>Limits <b>5-hour & weekly</b></span></div>',
  ],
  [
    "chart",
    "Understand what changed.",
    "Smart Alerts, a 14-day Timeline with spikes explained, and What Grew disk comparisons turn system activity into useful context.",
    "features.html#insights",
    '<div class="storage-bars">' +
      [20, 25, 35, 26, 55, 47, 40, 75, 62, 90, 60, 55, 40, 58, 30, 25]
        .map((h) => `<i style="--h:${h}%"></i>`)
        .join("") +
      "</div>",
  ],
];
const newFeatures = [
  ["spark", "Junk in about 20 seconds", "Smart Scan and Space & Junk measure known junk locations instead of the whole disk. They find app update leftovers, unfinished Codex runtime downloads, old Claude Code CLI versions, old VS Code and Cursor extension versions, AI model caches, and iPhone backups and firmware. The Claude desktop sandbox VM is listed for review."],
  ["terminal", "Tool clean commands, with a live log", "From the cleanup script sheet, run npm cache clean, pnpm store prune, brew cleanup and other tools’ own commands, and watch the output as it happens. Review first items are never run."],
  ["pulse", "Weekly auto-clean, if you want it", "Off by default. Turn it on and, once a week, safe junk that is not in use moves to the Trash, followed by a notification."],
  ["chart", "A storage forecast", "From your recorded free-space history: “Full in about N weeks at this rate.” A trend, so you can act before the disk is full."],
  ["disk", "Large files, sorted by kind", "AI sessions & models, Developer files, App data, Media, Downloads & installers, macOS assets, and Documents. Each item is labelled Safe, Think first, or Keep, says what happens if deleted, and goes through a review sheet before the Trash."],
  ["code", "Git Repos", "Find repositories with big .git folders. Compact runs git gc and keeps reflogs; Prune LFS cache clears Git LFS objects. Repositories in use are skipped."],
  ["layers", "App Footprint", "Each app’s total size with caches, support data, containers, and preferences. Clear cache, or Reset app to move everything except the app to the Trash. Refuses while the app runs; never touches Apple apps."],
  ["shield", "Browser Profiles", "Per-profile sizes for Chrome, Brave, Edge, Arc, and Vivaldi. Clean caches while the browser is closed; site data is shown for review. Logins, cookies, and bookmarks are never touched."],
  ["lock", "Startup Guard", "Opt-in. New launch agents and daemons wait for your approval. Your own agents are stopped instantly; system-wide ones with one click."],
  ["arrow", "A shorter sidebar", "The main pages, then one row per area. An area’s pages open as tabs along the top. Named AI sessions are always kept by old-session cleanup."],
];
const home = `<section class="hero"><div class="starfield" aria-hidden="true"></div><div class="container hero-grid"><div class="hero-copy"><div class="eyebrow">Your Mac. In its element.</div><h1>A clearer Mac.<br><span>A better flow.</span></h1><p>Clean up the clutter. Understand the activity.<br>Take control of your Mac with one thoughtfully powerful, native app.</p><div class="actions"><a href="download.html" class="btn primary">Get MacSweep ${icon("download")}</a><a href="#explore" class="btn">Explore the app <span aria-hidden="true">↓</span></a></div><div class="micro">Built for macOS 15+ · Apple Silicon</div><div class="hero-note"><span>On-device by design</span><span>Built in Swift</span><span>Native SwiftUI</span></div></div><div class="orb-stage" aria-label="Animated MacSweep system illustration" role="img"><div class="orb-glow"></div><div class="orbit"></div><div class="orbit two"></div><div class="orb"></div><div class="orb-core"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true"><circle cx="60" cy="60" r="42" stroke="#b7cbff" stroke-opacity=".16" stroke-width="7"/><path d="M60 18a42 42 0 1 1-42 42" stroke="#d5e2ff" stroke-width="7" stroke-linecap="round"/><path d="m60 37 6.5 16.5L83 60l-16.5 6.5L60 83l-6.5-16.5L37 60l16.5-6.5Z" fill="#dce8ff"/></svg></div><div class="float-label first"><span class="symbol">✧</span><div><b>A little more breathing room.</b><small>Cleanup with context</small></div></div><div class="float-label second">${icon("shield")}<div><b>Built around your privacy.</b><small>Your data stays on your Mac</small></div></div><div class="float-label third"><span class="status-dot"></span>100% native</div><div class="orb-caption">Clarity, from the inside out.</div></div></div></section><div class="ribbon"><div class="container"><span class="ribbon-label">Thoughtfully built.<br>Deeply capable.</span><span><b>SwiftUI</b>Native from the first click</span><span><b>On-device</b>Your files stay yours</span><span><b>Zero dependencies</b>Built on macOS APIs</span><span><b>Pure Swift core</b>Made for macOS</span></div></div><section class="section container" id="explore">${sectionHead("Meet your Mac, again", "Everything happening.<br>One place to understand it.", "A cleaner desktop is only the beginning. Explore the tools that bring your whole system into focus.")}${demo}</section><section class="section container" style="padding-top:0">${sectionHead("Screen by screen", "Start with one button.<br>Go deeper from there.", "Smart Scan checks everything at once and cleans up step by step, with a progress ring that doubles as a Stop button. The Dashboard keeps the cards you care about in view.")}<div class="shot-pair">${shot("smart-scan")}${shot("dashboard")}</div></section><section class="section container" style="padding-top:0" id="new">${sectionHead("New in MacSweep", "Faster scans.<br>More ways to stay tidy.", "Quicker junk finding, a forecast for your disk, and new pages for repositories, apps, browser profiles, and startup items. Everything that removes files still uses the Trash.")}<div class="two-grid">${newFeatures.map(([i, t, p]) => `<article class="card reveal"><div class="card-icon">${icon(i)}</div><h3>${t}</h3><p>${p}</p></article>`).join("")}</div><div class="shot-feature">${gallery(["junk-scan", "large-files", "storage-forecast", "auto-clean"], "New feature screenshots")}</div></section><section class="section container" style="padding-top:0">${sectionHead("Beyond a cleaner", "A little less chaos.<br>A lot more capability.", "From forgotten caches to the port you can’t find. MacSweep connects the details that matter.")}<div class="grid">${capabilityCards.map(([i, t, p, l, v], n) => `<article class="card reveal"><div class="card-icon">${icon(i)}</div><span class="feature-number">0${n + 1}</span><h3>${t}</h3><p>${p}</p><div class="mini-viz" aria-hidden="true">${v}</div><a class="text-link" href="${l}">Explore ${["cleanup", "protection", "performance", "developer tools", "AI usage", "insights"][n]} →</a></article>`).join("")}</div></section><section class="band"><div class="container section split"><div class="reveal"><div class="eyebrow">Power with a little restraint</div><h2>Your files deserve<br>a thoughtful approach.</h2><p>Cleanup should come with explanations. MacSweep separates safe recommendations from items that need a closer look, protects sensitive paths, and uses the Trash by default.</p><a class="text-link" href="trust.html">How MacSweep protects your files →</a></div>${shieldArt}</div></section><section class="container section split"><div class="terminal reveal"><div class="demo-top"><div class="traffic" aria-hidden="true"><i></i><i></i><i></i></div>Under the hood</div><div class="terminal-body"><div class="comment">// Built for the system it runs on.</div><br><div><span class="prompt">interface</span> &nbsp;SwiftUI</div><div><span class="prompt">logic</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MacSweepCore</div><div><span class="prompt">foundation</span> macOS APIs</div><div><span class="prompt">dependencies</span> 0</div><br><div class="comment">// fts · libproc · Security · FSEvents</div><div class="output">Native tools. A clearer picture.<span class="cursor"> ▌</span></div></div></div><div class="reveal"><div class="eyebrow">Built around native foundations</div><h2>Made for macOS.<br>Built around native APIs.</h2><p>A SwiftUI interface backed by a pure Swift core. Explore the documented safeguards and understand how the tools work together.</p><a class="text-link" href="trust.html">Read about safeguards →</a></div></section>${companionShowcase}<section class="section container" style="padding-top:0">${sectionHead("Always there", "In the notch.<br>In the menu bar.", "A two-line menu bar item, a notch HUD that expands on hover with System, Apps, Ports, AI, and Clean tabs, and a live Dock icon. The sidebar is short, one row per area with its pages as tabs along the top; it folds, and any page can be hidden in Settings → Sidebar.")}<div class="shot-pair">${shot("notch-hud")}${shot("menu-bar")}</div><div class="reveal" style="margin-top:40px"><div class="eyebrow">Lightweight by design</div><h3>Quiet when you are not looking.</h3><p class="micro" style="max-width:640px">Live process sampling runs every 3 seconds only while a page that shows it is open, otherwise every 10. AI usage reads only new transcript lines and wakes on file changes instead of polling. Big scans release memory as they go.</p><div class="light-stats"><span><b>~100 MB</b> memory, typical idle</span><span><b>1–3%</b> CPU idle, window open</span><span><b>0</b> third-party dependencies</span></div></div></section>${cta}`;
const devFeatures = [
  [
    "layers",
    "Docker & Homebrew",
    "See Docker storage and available prune actions. Review outdated Homebrew packages and run cleanup.",
  ],
  [
    "code",
    "Runtimes & Xcode",
    "Inspect Node, Python, and Ruby versions. Find Xcode DerivedData and simulator storage.",
  ],
  [
    "disk",
    "Every node_modules",
    "Discover every node_modules folder across your home directory and decide what you can rebuild.",
  ],
  [
    "terminal",
    "Services & ports",
    "Manage dev services such as Postgres and Redis with start, stop, and logs. Trace every listening port to the project folder and command that started it.",
  ],
  [
    "spark",
    "A cleanup script that knows your tools",
    "Turn a Space & Junk selection into a shell script to read, copy, or save. It uses each tool’s own clean command where one exists (npm, pnpm, brew, uv, docker…), and keeps Review first items commented out. Or run the tool commands from the same sheet and watch a live log; Review first items are never run.",
  ],
  [
    "layers",
    "Junk developer tools leave behind",
    "The fast junk scan finds unfinished Codex runtime downloads, old Claude Code CLI versions, old VS Code and Cursor extension versions, and AI model caches. The Claude desktop sandbox VM is listed for review, not removed automatically.",
  ],
  [
    "code",
    "Git Repos",
    "Find repositories with big .git folders. Compact runs git gc and keeps reflogs; Prune LFS cache clears the Git LFS cache. Repositories in use are skipped.",
  ],
  [
    "pulse",
    "Ports and AI, one hover away",
    "The notch HUD has Ports and AI tabs, and the menu bar can show your chosen AI tool’s 5-hour and weekly limits.",
  ],
];
const developers = `<section class="subhero"><div class="container"><div class="eyebrow">For the people who build</div><h1>Your machine is a workspace.<br><span class="gradient-text">Give it a control room.</span></h1><p>The local server you forgot. The cache that grew. The AI session you want to understand. Bring your development environment into view.</p><div class="actions"><a class="btn primary" href="download.html">Get MacSweep ${icon("download")}</a><a class="btn" href="#ai">Explore AI usage ↓</a></div></div></section><section class="container section split"><div class="reveal"><div class="eyebrow">A port is just the beginning</div><h2>Know what’s running.<br>And where it came from.</h2><p>See every listening port alongside the project folder and command that started it. Open the address, copy it, or stop the process from one place.</p><ul class="checklist"><li>Connect a process to a project</li><li>Start and stop supported local services</li><li>Inspect service logs without losing context</li></ul></div><div class="terminal reveal"><div class="demo-top"><div class="traffic" aria-hidden="true"><i></i><i></i><i></i></div>Developer workspace · illustration</div><div class="terminal-body"><span class="comment">// Every port, accounted for.</span><br><br><div class="terminal-row"><span>:3000 &nbsp; node</span><span class="prompt">LISTENING</span></div><div class="comment">~/projects/studio → npm run dev</div><br><div class="terminal-row"><span>:5432 &nbsp; postgres</span><span class="prompt">RUNNING</span></div><div class="comment">Local database</div><br><div class="terminal-row"><span>:6379 &nbsp; redis-server</span><span class="prompt">RUNNING</span></div><div class="comment">Local cache</div><br><div class="output"><span class="prompt">↳</span> Less detective work. More building.</div></div></div></section><section class="container section" style="padding-top:0">${sectionHead("Less buildup, more building", "The tools behind your tools.")}<div class="two-grid">${devFeatures.map(([i, t, p]) => `<article class="card reveal"><div class="card-icon">${icon(i)}</div><h3>${t}</h3><p>${p}</p></article>`).join("")}</div><div class="shot-feature">${gallery(["developer", "git-repos", "cleanup-script"], "Developer screenshots")}</div></section><section class="band" id="ai"><div class="container section split"><div class="reveal"><div class="eyebrow">AI usage, with context</div><h2>Your sessions add up.<br>Now you can see how.</h2><p>Explore Claude Code and Codex tokens and API-equivalent costs by model, project, and session. Keep an eye on 5-hour and weekly limits alongside provider service status.</p><ul class="checklist"><li>Updates within seconds of each message, reading only new transcript lines</li><li>Project, session, and model breakdowns</li><li>Live 5-hour and weekly limits, plus service status for both tools</li><li>Optional, read-only Claude plan limits</li><li>Sessions you have named are always kept by old-session cleanup</li></ul><div class="notice">API-equivalent costs are estimates, not subscription bills. Real Claude plan usage requires an explicit opt-in. Public provider status checks use the network.</div></div><div class="demo-shell reveal"><div class="demo-top">AI Usage · sample data</div><div class="demo-panel">${panels.ai}</div></div></div><div class="container" style="padding-bottom:90px">${gallery(["ai-usage"], "AI Usage screenshot")}</div></section><section class="container section split"><div class="terminal reveal"><div class="demo-top">Build it yourself</div><div class="terminal-body"><div class="comment"># Xcode 16 / Swift 6 · macOS 15+</div><br><span class="prompt">$</span> git clone https://github.com/shipiit/mac-sweep.git<br><span class="prompt">$</span> cd mac-sweep<br><span class="prompt">$</span> make test<br><span class="prompt">$</span> make app<br><span class="prompt">$</span> make dmg</div></div><div class="reveal"><div class="eyebrow">Readable by design</div><h2>Native all the way down.</h2><p>MacSweepCore holds the pure Swift logic. The app stays focused on SwiftUI views and observable models. No third-party dependencies; macOS APIs do the work.</p><a class="text-link" href="${REPO}">Explore the architecture ↗</a></div></section>${cta}`;
const trust = `<section class="subhero"><div class="container"><div class="eyebrow">Trust is in the details</div><h1>Powerful tools.<br><span class="gradient-text">Thoughtful boundaries.</span></h1><p>Your Mac holds your work, your ideas, and your everyday life. Understand what MacSweep checks, what it protects, and how you stay in control.</p></div></section><section class="container section split"><div class="reveal"><div class="eyebrow">Private by design</div><h2>At home on your Mac.<br>Your data stays there.</h2><p>Disk analysis, duplicate matching, and system inspection happen on your device. Similar-photo matching uses Apple’s on-device Vision framework. MacSweep has no analytics.</p><p>Network requests cover actions you trigger and public Claude and OpenAI status pages. Real Claude plan-limit access is optional and read-only.</p></div>${shieldArt}</section><section class="band"><div class="container section">${sectionHead("Cleanup safeguards", "A considered path<br>from scan to Trash.", "The cleanup engine uses several checks before anything is eligible for removal.")}<div class="flow reveal"><div><small>01 / CATALOG</small><h3>Allowlisted cleanup.</h3><p>Automatic cleanup recommendations come from a defined catalog.</p></div><div><small>02 / PATHGUARD</small><h3>Protected paths.</h3><p>Sensitive credentials, keychains, macOS preferences, and standard roots are refused.</p></div><div><small>03 / IN-USE CHECK</small><h3>Respect active work.</h3><p>Items detected in use by running apps or development servers are skipped.</p></div><div><small>04 / CONFIRM</small><h3>Trash by default.</h3><p>Review and confirm. Permanent deletion is a separate, explicit choice.</p></div></div><div class="notice">The optional cleanup script is generated for you to read, copy, or save. Each tool's own clean command runs only when you press Run, with a live log; Review first items stay commented out and never run.</div><div class="notice">PathGuard limits removal to eligible descendants of your home folder, /Applications, and /Users/Shared, while refusing protected roots and subtrees. Duplicate cleanup keeps at least one copy. Archives must be verified before originals can be removed.</div></div></section><section class="container section split"><div class="reveal"><div class="eyebrow">Understand protection</div><h2>See the signals.<br>Know the limits.</h2><p>Quick, Full, and Deep scans check for disguised apps, invalid or missing signatures, Gatekeeper rejections, known adware, and hidden executables. The scan page shows Apple XProtect’s definition version and keeps a history of every scan. Download Protection keeps the last 20 downloads with where they came from, who signed them, and the verdict.</p><div class="notice"><strong>Clear scope:</strong> MacSweep is a heuristic checker, not a signature antivirus. It checks files after downloads finish. It does not provide Apple Endpoint Security real-time execution blocking.</div></div><div class="numbered reveal"><div class="step"><div><h3>A download finishes.</h3><p>The file is checked after it has finished downloading.</p></div></div><div class="step"><div><h3>Signals are assessed.</h3><p>Signatures, disguises, Gatekeeper results, and threat rules inform the finding.</p></div></div><div class="step"><div><h3>You get a clear next step.</h3><p>Clear threats are quarantined; suspicious items raise a notification. Quarantined files lose execute permission and can be restored or deleted.</p></div></div></div></section><section class="container section" style="padding-top:0">${sectionHead("See it for yourself", "Every download.<br>Every protection, scored.", "The Security Audit turns SIP, Gatekeeper, FileVault, Firewall, and XProtect into a protection score with recommendations. The sidebar badge shows Secure or the number of issues.")}<div class="shot-pair">${shot("download-protection")}${shot("security-audit")}</div></section><section class="container section" style="padding-top:0">${sectionHead("No hidden story", "Inspect it for yourself.")}<div class="two-grid"><article class="card reveal"><div class="card-icon">${icon("code")}</div><h3>Clear implementation boundaries.</h3><p>The app has a Swift core for cleanup, path safeguards, threat rules, and tests. The source is open on GitHub for anyone to read.</p><a class="text-link" href="${REPO}">App repository on GitHub ↗</a></article><article class="card reveal"><div class="card-icon">${icon("lock")}</div><h3>Installation, explained.</h3><p>The current build is ad-hoc signed and not notarised. Full Disk Access enables more complete scan results.</p><a class="text-link" href="download.html#installation">Read the setup guide →</a></article></div></section>${cta}`;
const faqs = [
  [
    "Which Macs are supported?",
    "MacSweep targets macOS 15 or later on Apple Silicon. Building from source requires the Xcode 16 / Swift 6 toolchain.",
  ],
  [
    "Why does macOS show a first-launch warning?",
    "The release build is ad-hoc signed and not notarised. The project README recommends right-clicking the app and choosing Open for first launch. Follow the guidance shown by macOS for your version; only open a download whose source you trust.",
  ],
  [
    "Why does it ask for Full Disk Access?",
    "macOS restricts access to certain folders. Full Disk Access lets MacSweep show more complete scan results. Enable it in System Settings → Privacy & Security → Full Disk Access.",
  ],
  [
    "Will it delete files automatically?",
    "Standard cleanup asks for confirmation and uses the Trash by default. Permanent deletion is opt-in and confirmed. Weekly automatic cleanup is opt-in and off by default; it moves only safe junk that is not in use to the Trash and sends a notification. Download Protection can automatically quarantine files judged to be clear threats after they finish downloading.",
  ],
  [
    "Is it a replacement for antivirus?",
    "MacSweep uses heuristic checks and works alongside Apple XProtect. It is not a signature antivirus and does not offer Endpoint Security real-time execution blocking.",
  ],
  [
    "Are AI cost figures my actual bill?",
    "No. API-equivalent costs estimate token usage at API rates. They do not represent a Claude or ChatGPT subscription bill. Real Claude plan-limit access is an optional, read-only setting.",
  ],
  [
    "Will it slow my Mac down?",
    "It is designed not to. Typical idle use is about 100 MB of memory and 1–3% CPU with the window open. Live process sampling slows to every 10 seconds when no page that shows it is open.",
  ],
  [
    "Can I build it from source?",
    'Clone the <a href="https://github.com/shipiit/mac-sweep">app repository</a>, then run make test and make app. Run make dmg to package a disk image, or make install to build and install it.',
  ],
];
const download = `<section class="download-hero"><div class="container"><img class="download-icon" src="assets/icon.svg" alt="MacSweep app icon" width="98" height="98"><div class="eyebrow">MacSweep 1.3.0 · A fresh perspective for your Mac</div><h1>Make room for<br><span class="gradient-text">your next idea.</span></h1><p>One native app to clean, speed up, protect, and understand your Mac.</p><div class="actions"><a href="${RELEASES}" class="btn primary">Download MacSweep.dmg ${icon("download")}</a><a href="features.html" class="btn">Explore capabilities →</a></div><div class="micro">Version 1.3.0 · macOS 15+ · Apple Silicon · Ad-hoc signed, not notarised</div></div></section><section class="container section split" id="installation"><div class="reveal"><div class="eyebrow">Get up and running</div><h2>A few steps.<br>A clearer Mac.</h2><p>Download MacSweep.dmg from the project’s GitHub releases. This page describes version 1.3.0; the link always opens the latest release. Here’s what to expect the first time you open MacSweep.</p><div class="notice">MacSweep is open source. The app, its source and every release live on GitHub.</div></div><div class="numbered reveal"><div class="step"><div><h3>Download and install.</h3><p>Open MacSweep.dmg and drag MacSweep into Applications.</p></div></div><div class="step"><div><h3>Open for the first time.</h3><p>The build is ad-hoc signed and not notarised. Right-click MacSweep in Applications and choose Open, following the macOS prompts. Alternatively, run <code>xattr -dr com.apple.quarantine /Applications/MacSweep.app</code> in Terminal.</p></div></div><div class="step"><div><h3>Allow a fuller picture.</h3><p>For complete results, enable Full Disk Access in System Settings → Privacy & Security.</p></div></div></div></section><section class="container section" style="padding-top:0">${sectionHead("What’s in 1.3.0", "Clean, protect, speed up,<br>and understand.")}<div class="two-grid">${[["Clean up","Smart Scan in about 20 seconds, Space & Junk with a storage forecast and new finds (update leftovers, old CLI and extension versions, AI model caches), tool clean commands with a live log, opt-in weekly auto-clean, grouped Large & Hidden Files with a review sheet, Browser Profiles, Duplicates & Archive, Mail, Trash, Shredder, and Privacy."],["Protect","Malware Scan (Quick, Full, Deep) with XProtect definitions and scan history, Download Protection with quarantine and restore, Security Audit with a protection score, App Permissions, Network Monitor, Sharing & Wi-Fi, Backups, and Extensions."],["Performance & developer","Processes & Memory, Memory Guard, Optimization, Maintenance, Startup Items and the opt-in Startup Guard, the Developer hub (Docker, Homebrew, runtimes, Xcode, node_modules, dev services), Git Repos compaction, App Footprint, and Ports."],["AI, insights & always there","AI Usage for Claude Code and Codex, Smart Alerts, a 14-day Timeline, What Grew, a two-line menu bar item, the notch HUD, a live Dock icon, a short sidebar with areas as tabs, and an Appearance pane with live preview."]].map(([t,p]) => `<article class="card reveal"><h3>${t}</h3><p>${p}</p></article>`).join("")}</div></section><section class="band"><div class="container section">${sectionHead("Good questions", "A little clarity before you start.")}<div class="faq">${faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div></div></section><section class="cta"><h2>Curious about the details?</h2><p>Explore every capability or visit the public website repository.</p><div class="actions"><a class="btn primary" href="features.html">Explore all capabilities ${icon("arrow")}</a><a class="btn" href="https://github.com/shipiit/mac-sweep">MacSweep on GitHub ↗</a></div></section>`;
const pages = { index: home, features, developers, trust, download };

export { pages };
