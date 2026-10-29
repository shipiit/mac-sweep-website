// Screenshot slots. Images live in assets/screens/<name>.png (2880×1800 unless noted).
// A missing image falls back to a styled frame with the caption; see initScreens().
const screens = {
  "smart-scan": [
    "Smart Scan",
    "One button checks junk, security, speed and apps, then cleans up step by step in “Optimizing your Mac”, with a Stop ring.",
    "MacSweep's Smart Scan home with a Scan My Mac button and cards for junk files, protection, performance and applications.",
  ],
  dashboard: [
    "Dashboard",
    "Reorderable cards for activity, storage, memory, battery, network, security, devices, ports and usage.",
    "MacSweep's Dashboard with live CPU, memory and disk rings, a two-minute activity chart and cards for storage, memory, battery, network and security.",
  ],
  storage: [
    "Space & Junk",
    "A treemap of every folder, hidden ones included, with a folder picker, growth badges and Safe to remove / Review first recommendations.",
    "MacSweep's Space & Junk view: a treemap of the home folder next to cleanup recommendations grouped into Safe to remove and Review first.",
  ],
  "large-files": [
    "Large & Hidden Files",
    "The biggest files and folders grouped by kind, each labelled Safe, Think first or Keep with what happens if deleted, and a review sheet before anything moves to the Trash.",
    "MacSweep's Large & Hidden Files view grouped by kind, such as AI sessions & models and Developer files, with Safe, Think first and Keep labels and an if-deleted explanation for each item.",
  ],
  duplicates: [
    "Duplicates & Archive",
    "Byte-for-byte duplicates, similar photos via on-device Vision, and verified archives to an external drive or iCloud.",
    "MacSweep's Duplicates view showing reclaimable space and groups of identical files with a suggested copy to keep.",
  ],
  "malware-scan": [
    "Malware Scan",
    "Quick, Full and Deep scans, Apple XProtect’s definition version, and a history of every scan.",
    "MacSweep's Malware Scan showing No threats found, the Quick, Full and Deep scan options, the XProtect definitions version and recent scan history.",
  ],
  "download-protection": [
    "Download Protection",
    "Every finished download checked; the last 20 with source, signer and verdict; clear threats quarantined, with restore.",
    "MacSweep's Download Protection log of recent downloads with source, signer and verdict, one disguised app blocked and quarantined.",
  ],
  "security-audit": [
    "Security Audit",
    "A protection score with SIP, Gatekeeper, FileVault, Firewall and XProtect status, plus recommendations.",
    "MacSweep's Security Audit with a 92 percent protection score and status cards showing SIP, Gatekeeper, FileVault, Firewall and XProtect all on.",
  ],
  developer: [
    "Developer hub",
    "Docker, Homebrew, runtimes, Xcode storage, every node_modules in your home folder, and dev services.",
    "MacSweep's Developer hub on the node_modules tab, listing projects by size with stale ones ready to clear.",
  ],
  "ai-usage": [
    "AI Usage",
    "Claude Code and Codex tokens and API-equivalent cost by model, project and session, with limits and service status.",
    "MacSweep's AI Usage view with Claude Code and Codex token cost by model, live 5-hour and weekly limits, and today's totals.",
  ],
  processes: [
    "Processes & Memory",
    "Activity-Monitor-accurate memory and CPU, a leak flag for steadily growing apps, and idle apps.",
    "MacSweep's Processes & Memory view with a memory breakdown bar, idle apps holding memory, and running apps grouped with their memory and CPU use.",
  ],
  "notch-hud": [
    "Notch HUD",
    "Hover the notch for System, Apps, Ports, AI and Clean tabs with live charts.",
    "MacSweep's notch HUD expanded below a MacBook's camera notch, showing System, Apps, Ports, AI and Clean tabs with CPU, memory, disk and battery rings and a live network chart.",
  ],
  "menu-bar": [
    "Menu bar",
    "A two-line menu bar item that opens a compact panel of live tiles.",
    "MacSweep's two-line menu bar item showing CPU and memory, with its open panel of storage, memory, battery, CPU, network and AI tiles.",
  ],
  timeline: [
    "14-day Timeline",
    "CPU, memory, disk and network over 14 days, with spikes explained.",
    "MacSweep's 14-day Timeline charting CPU, memory used, free disk space and download speed, with CPU spikes listed alongside the busiest process.",
  ],
  "junk-scan": [
    "Fast junk scan",
    "Junk found in about 20 seconds by measuring known junk locations, including app update leftovers, old Claude Code CLI versions, old editor extensions and AI model caches.",
    "MacSweep's Space & Junk results after a fast junk scan, listing app update leftovers, unfinished Codex runtime downloads, old Claude Code CLI versions, old VS Code and Cursor extension versions, AI model caches and iPhone backups, with the Claude desktop sandbox VM under Review first.",
  ],
  "cleanup-script": [
    "Cleanup script & live log",
    "Run each tool’s own clean command (npm, pnpm, brew…) from the cleanup script sheet and watch a live log. Review first items are never run.",
    "MacSweep's cleanup script sheet with a live log showing npm cache clean, pnpm store prune and brew cleanup finishing, and Review first items listed as not run.",
  ],
  "auto-clean": [
    "Weekly auto-clean",
    "Opt-in and off by default: once a week, safe junk only, never anything in use, moved to the Trash with a notification.",
    "MacSweep's weekly automatic cleanup setting, switched on, explaining that only safe junk not in use is moved to the Trash and a notification is sent.",
  ],
  "storage-forecast": [
    "Storage forecast",
    "“Full in about N weeks at this rate”, estimated from recorded free-space history.",
    "MacSweep's storage forecast card with a free-space history chart and a trend line reading Full in about 9 weeks at this rate.",
  ],
  "browser-profiles": [
    "Browser Profiles",
    "Per-profile sizes for Chrome, Brave, Edge, Arc and Vivaldi, with cleanable caches; logins, cookies and bookmarks are never touched.",
    "MacSweep's Browser Profiles page listing profiles for several browsers with cache and site data sizes, a Clear Cache button, and a note that the browser must be closed first.",
  ],
  "git-repos": [
    "Git Repos",
    "Repositories with big .git folders, with Compact (git gc, reflogs kept) and Prune LFS cache. Repos in use are skipped.",
    "MacSweep's Git Repos page listing repositories by .git folder size with Compact and Prune LFS cache buttons, one repository marked In use and skipped.",
  ],
  "app-footprint": [
    "App Footprint",
    "Each app’s total size including caches, support data, containers and preferences, with Clear cache and Reset app.",
    "MacSweep's App Footprint page listing apps by total size with a breakdown into app, caches, support data, containers and preferences, and Clear Cache and Reset… buttons.",
  ],
  "startup-guard": [
    "Startup Guard",
    "Opt-in: new launch agents and daemons wait for your approval before they run.",
    "MacSweep's Startup Guard page, switched on, with one new launch agent held for approval with Approve and Keep Blocked buttons, and a history of earlier decisions.",
  ],
};

// Pixel sizes for slots that are not full 2880×1800 windows; keep in sync with IMAGE_PROMPTS.md.
const sizes = { "notch-hud": [2400, 1200], "menu-bar": [1600, 1600] };

function shot(name, extra = "") {
  const [title, caption, alt] = screens[name];
  const [w, h] = sizes[name] || [2880, 1800];
  return `<figure class="shot reveal ${extra}" data-shot="${name}"><div class="shot-frame"><div class="shot-bar" aria-hidden="true"><i></i><i></i><i></i><span>MacSweep — ${title}</span></div><div class="shot-media${sizes[name] ? " is-fit" : ""}" style="aspect-ratio:${w} / ${h}"><div class="shot-fallback" aria-hidden="true"><div class="sk-side"><i class="sk-logo"></i><i></i><i class="on"></i><i></i><i></i><i></i><i></i></div><div class="sk-main"><div class="sk-tabs"><i class="on"></i><i></i><i></i></div><b class="sk-title">${title}</b><div class="sk-stats"><i></i><i></i><i></i></div><div class="sk-cards"><i class="sk-ring"></i><i class="sk-bars"></i></div></div></div><img src="assets/screens/${name}.png" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async"></div></div><figcaption><b>${title}.</b> ${caption}</figcaption></figure>`;
}

const gallery = (names, label) =>
  `<div class="shot-gallery" role="list" aria-label="${label}">${names.map((n) => `<div role="listitem">${shot(n)}</div>`).join("")}</div>`;

export function initScreens() {
  document.querySelectorAll(".shot img").forEach((img) => {
    const figure = img.closest(".shot");
    const missing = () => figure.classList.add("is-missing");
    const loaded = () => figure.classList.add("is-loaded");
    if (img.complete) {
      if (img.naturalWidth === 0) missing();
      else loaded();
    }
    img.addEventListener("error", missing, { once: true });
    img.addEventListener("load", loaded, { once: true });
  });
}

export { screens, shot, gallery };
