// Product details verified against README.md and Sources/MacSweep/Features.
// Each item includes an accessible explanation and a practical reason to use it.
export const featureGroups = [
  {
    id: "cleanup",
    label: "Cleanup",
    title: "Make space. Keep the context.",
    intro:
      "Find what is taking up space, learn what can be rebuilt, and review what matters before removing anything.",
    items: [
      [
        "Smart Scan",
        "One button checks junk, security, speed, and apps. Cleanup then runs step by step in an “Optimizing your Mac” view: each step shows its status (waiting, done, warning, or skipped), and a progress ring doubles as a Stop button that ends the clean-up after the current step. The junk check takes about 20 seconds because it measures known junk locations instead of walking the whole disk.",
        "Start here when you want an overall picture instead of opening every tool separately.",
      ],
      [
        "Space & Junk",
        "A treemap shows every folder in proportion to its size, hidden ones included. Click a folder to list its contents in the folder picker panel and tick what to remove. Recommendations are split into Safe to remove and Review first, each explaining what it is and what happens if deleted.",
        "A large rectangle means a large folder. Follow the space to its source before deciding what can go.",
      ],
      [
        "Large & Hidden Files",
        "Inspect the largest files and folders, grouped by kind: AI sessions & models, Developer files, App data, Media, Downloads & installers, macOS assets, and Documents. Each item carries a Safe, Think first, or Keep label and an “if deleted” explanation, and a review sheet comes before anything moves to the Trash. Narrow the view to hidden items or files older than a year.",
        "Hidden means normally concealed by Finder. It does not automatically mean unnecessary or safe to delete.",
      ],
      [
        "Duplicate Files",
        "SHA-256 hashes identify byte-for-byte identical content. Duplicate removal always keeps one copy.",
        "Two files with different names can still contain exactly the same data. You review which copy to keep.",
      ],
      [
        "Similar Photos",
        "Apple’s on-device Vision framework groups visually similar photos. Similarity is separate from exact duplicate detection.",
        "A burst of almost-identical shots can be similar without being identical files. Review the images before removing copies.",
      ],
      [
        "Project Archives",
        "Zip older projects to an external drive or iCloud. The archive is verified before the original becomes eligible for removal.",
        "Archive a project you want to keep, but do not need taking up active workspace storage.",
      ],
      [
        "Mail Attachments",
        "Review local attachment copies and their storage impact.",
        "Copies on disk can accumulate over time. Inspect recommendations before removing items.",
      ],
      [
        "Trash Bins",
        "Review Trash across supported locations before choosing what to clear.",
        "Moving to Trash and emptying Trash are different steps. Emptying removes the easy recovery path.",
      ],
      [
        "Browser Privacy",
        "Clean browser history, cookies, and caches. Passwords and bookmarks are excluded from this cleanup.",
        "Cookies can keep you signed in; removing them may sign you out. Cached content may need to download again.",
      ],
      [
        "Shredder",
        "A separate, explicit workflow for permanent deletion, with confirmation.",
        "Use only when you intend to permanently delete. SSD behavior, snapshots, and backups limit secure-erasure guarantees.",
      ],
      [
        "Cleanup Script",
        "Turn a selection into a shell script to read, copy, or save. It uses each tool’s own clean command where one exists (npm, pnpm, brew, uv, docker…), and Review first items stay commented out. From the same sheet, MacSweep can run the tool clean commands (npm cache clean, pnpm store prune, brew cleanup…) with a live log; Review first items are never run.",
        "Useful when you would rather run cleanup yourself, or keep a record of what you removed. Nothing is deleted by generating the script; you choose whether to run the tool commands.",
      ],
      [
        "Growth Badges",
        "Recommendations show how much a location grew or shrank since the previous scan.",
        "A cache that keeps growing between scans is often the one worth a closer look first.",
      ],
      [
        "Fast Junk Scan",
        "Smart Scan and Space & Junk measure known junk locations instead of the whole disk, so finding junk takes about 20 seconds. Besides caches and logs, it finds app update leftovers, unfinished Codex runtime downloads, old Claude Code CLI versions, old VS Code and Cursor extension versions, AI model caches, and iPhone backups and firmware. The Claude desktop sandbox VM is listed for review.",
        "Old versions and half-finished downloads are left behind when tools update themselves. Knowing where they live means MacSweep can check those places directly.",
      ],
      [
        "Weekly Auto-clean",
        "Opt-in and off by default. Once a week MacSweep moves safe junk to the Trash and sends a notification. It only takes items marked safe and never anything in use.",
        "It is the routine tidy-up you would otherwise forget. Everything goes to the Trash first, so you can still restore it.",
      ],
      [
        "Browser Profiles",
        "Per-profile sizes for Chrome, Brave, Edge, Arc, and Vivaldi. Profile caches can be cleaned (MacSweep refuses while that browser is running); site data is shown for review. Logins, cookies, and bookmarks are never touched.",
        "Each browser profile keeps its own cache. Seeing them side by side shows which profile is using the space.",
      ],
    ],
    terms: [
      [
        "Treemap",
        "A map in which rectangle area represents folder or file size.",
      ],
      [
        "Cache",
        "Saved data an app uses to avoid doing the same work again. It may need to be recreated after cleanup.",
      ],
      [
        "Known junk location",
        "A folder where apps and tools predictably leave rebuildable data, such as caches, old versions, or unfinished downloads.",
      ],
      [
        "SHA-256",
        "A digital fingerprint used to compare file contents for exact duplicate detection.",
      ],
      [
        "Archive",
        "A packaged copy of files, such as a ZIP, that you can store elsewhere.",
      ],
    ],
  },
  {
    id: "protection",
    label: "Protection",
    title: "Understand the signals. Act with context.",
    intro:
      "Inspect security settings, suspicious files, sensitive permissions, and network activity in one toolkit.",
    items: [
      [
        "Malware Scan",
        "Quick, Full, and Deep scans (Deep covers the whole home folder, apps, and startup folders). Checks disguised programs such as invoice.pdf.app, broken or missing signatures, Gatekeeper rejections, known adware, and hidden executables. Shows Apple XProtect’s definition version and keeps a history of every scan.",
        "A finding is a reason to investigate. You can reveal, quarantine, or ignore it; these are heuristic checks, not a signature antivirus.",
      ],
      [
        "Download Protection",
        "Checks every finished download and keeps the last 20 with where they came from, who signed them, and the verdict. Clear threats move to quarantine before you can open them; suspicious files raise a notification. On by default.",
        "This is a completed-download check. It is not real-time execution blocking through Apple’s Endpoint Security entitlement.",
      ],
      [
        "Quarantine",
        "Removes execute permission from quarantined files and gives you restore and delete options.",
        "Quarantine is a holding area for investigation. Restore only if you understand and trust the file.",
      ],
      [
        "Security Audit",
        "A protection score with SIP, Gatekeeper, FileVault, Firewall, and XProtect status (the Firewall can be turned on from here), suspicious startup items, high-risk extensions, recommendations, and app-permission counts. The sidebar badge shows Secure or the number of issues.",
        "These are different protections: system integrity, app verification, disk encryption, incoming connection rules, and Apple malware protection.",
      ],
      [
        "App Permissions",
        "Inspect which apps can access your camera, microphone, screen recording, Full Disk Access, and Accessibility. Jump to macOS settings to revoke access.",
        "Permissions describe what an app is allowed to do. A permission is not proof that an app has misused it.",
      ],
      [
        "Network Monitor",
        "See connections per app and the hosts they contact. Untrusted programs going online are flagged.",
        "A host is the remote computer or service on the other side of a connection. An unfamiliar host merits context, not an automatic verdict.",
      ],
      [
        "Sharing & Wi-Fi",
        "Review Wi-Fi security, SSH, screen sharing, firewall, and AirDrop settings.",
        "Sharing features can be useful. Reviewing them helps you understand which ways into or out of your Mac are enabled.",
      ],
      [
        "Backups",
        "Check the age of your Time Machine backup and review excluded folders.",
        "An excluded folder is not part of that backup. Check exclusions before relying on Time Machine to recover a file.",
      ],
      [
        "Browser Extensions",
        "Inspect extensions by browser profile and review their permissions.",
        "An extension can read or modify browser content according to its permissions. Remove or disable it through the appropriate browser controls.",
      ],
    ],
    terms: [
      [
        "Gatekeeper",
        "macOS checks that help assess downloaded apps before they run.",
      ],
      ["FileVault", "macOS disk encryption that protects stored data."],
      [
        "SIP",
        "System Integrity Protection restricts changes to protected parts of macOS.",
      ],
      [
        "XProtect",
        "Apple’s built-in malware protection. MacSweep works alongside it.",
      ],
      [
        "Code signature",
        "A cryptographic identity and integrity signal attached to software.",
      ],
      [
        "Heuristic",
        "A check based on suspicious patterns or behavior rather than a complete list of known malware signatures.",
      ],
    ],
  },
  {
    id: "performance",
    label: "Performance",
    title: "See the work behind the slowdown.",
    intro:
      "Understand CPU, memory, startup activity, and maintenance options before choosing a fix.",
    items: [
      [
        "Processes & Memory",
        "Activity-Monitor-accurate memory and CPU measurements, grouped processes, and a process inspector.",
        "A process is a running program or part of one. CPU measures processing work; memory is the working space it currently uses.",
      ],
      [
        "Memory Growth",
        "Flags steadily growing app memory usage for investigation.",
        "Growth may suggest a leak, but a flag is a signal to inspect rather than a diagnosis.",
      ],
      [
        "Idle Apps & Auto-quit",
        "Review idle applications and optionally enable auto-quit behavior.",
        "An idle app is not currently active. Quitting can free resources, but first consider work or background tasks it may still be doing.",
      ],
      [
        "Optimization Advisor",
        "Ranks recommendations and provides available one-click fixes.",
        "Use the ranking to choose what to inspect first. The explanation tells you what each action changes.",
      ],
      [
        "Maintenance",
        "Tools include flushing DNS, rebuilding Launch Services, and reindexing Spotlight.",
        "These address specific system tasks. They are most useful when the related function is behaving incorrectly.",
      ],
      [
        "Startup Items",
        "Review login items, launch agents, and daemons. Stop, disable, or enable supported items.",
        "Stopping ends a current run; disabling changes whether it starts automatically. Review a service’s purpose first.",
      ],
      [
        "Startup Guard",
        "Opt-in. Holds new launch agents and daemons until you approve them. Your own (per-user) agents are stopped instantly; system-wide ones are stopped with one click.",
        "Apps can quietly add something that starts with your Mac. Startup Guard asks you first instead of letting it run unnoticed.",
      ],
    ],
    terms: [
      [
        "CPU",
        "The processor doing the calculations and work requested by programs.",
      ],
      [
        "Memory pressure",
        "An indication of how hard macOS is working to provide memory to apps.",
      ],
      [
        "DNS",
        "The lookup system that turns names such as example.com into network addresses.",
      ],
      [
        "Spotlight",
        "The macOS search index used to find files and other content.",
      ],
      [
        "Launch agent / daemon",
        "A program macOS can start automatically, for a user or for the system.",
      ],
    ],
  },
  {
    id: "developer",
    label: "Developer",
    title: "Bring your local workspace into view.",
    intro:
      "Find development storage, inspect installed tools, and connect listening ports to the projects behind them.",
    items: [
      [
        "Docker",
        "Inspect Docker storage and use available prune actions.",
        "Containers, images, and other Docker data can accumulate. Understand what a prune action will remove before confirming.",
      ],
      [
        "Homebrew",
        "Review outdated packages and Homebrew cleanup options.",
        "Homebrew is a package manager. Cleanup deals with eligible cached or old package data; updates can affect project dependencies.",
      ],
      [
        "Runtimes",
        "Inspect installed Node, Python, and Ruby versions.",
        "A runtime executes code written for that language. Different projects may depend on different versions.",
      ],
      [
        "Xcode Storage",
        "See DerivedData and simulator storage.",
        "DerivedData contains build output and indexes. Recreating it can take time; simulator data can include useful development state.",
      ],
      [
        "node_modules",
        "Discover dependency folders throughout your home directory.",
        "These folders hold installed JavaScript packages. They can often be installed again, but doing so needs the project’s package files and tools.",
      ],
      [
        "Local Services",
        "Inspect supported development services such as Postgres and Redis, with start, stop, and log controls.",
        "A local database or cache may be required by a running app. Stopping it can interrupt that project.",
      ],
      [
        "Listening Ports",
        "See the port, process, starting command, and project directory. Open, copy, or stop the relevant process.",
        "A port is a numbered connection point. Port 3000 might belong to your web development server; the process details explain which one.",
      ],
      [
        "Git Repos",
        "Finds repositories with big .git folders. Compact runs git gc while keeping reflogs, and Prune LFS cache clears Git LFS objects. Repositories in use are skipped.",
        "A long-lived repository collects packed history and large-file caches. Compacting keeps your history and makes the folder smaller.",
      ],
    ],
    terms: [
      [
        "Container",
        "An isolated environment used to run software and its dependencies.",
      ],
      [
        "Prune",
        "Remove eligible unused resources; the exact scope depends on the tool and selected action.",
      ],
      ["DerivedData", "Xcode-generated build files and indexing data."],
      [
        "Runtime",
        "The software environment that executes a programming language.",
      ],
      [
        "Listening port",
        "A numbered network endpoint where a program waits for connections.",
      ],
    ],
  },
  {
    id: "ai",
    label: "AI usage",
    title: "Your AI activity, explained in full.",
    intro:
      "Explore Claude Code and Codex through Overview, Activity, Sessions, and Storage, with tool and date filters shared across the view.",
    items: [
      [
        "Overview & Filters",
        "Filter to all tools, Claude Code, or Codex. Choose Today, 7, 30, or 90 days. Review tokens, requests, output, cache hits, sessions, and projects. Totals update within seconds of each message, reading only new transcript lines.",
        "The same filters apply across the AI page, so the numbers describe the same selected tools and time range.",
      ],
      [
        "API-equivalent Cost",
        "Estimate the token activity at known model API list prices. Models without known pricing are marked as unpriced.",
        "This is a comparison estimate. It is not your subscription price, actual invoice, or a prediction of your bill.",
      ],
      [
        "Activity Charts",
        "See daily token bars, including cache reads, with breakdowns by model and project.",
        "A spike means more counted token activity that day. The breakdown helps identify which model or project contributed.",
      ],
      [
        "Session Explorer",
        "Review the largest sessions, requests, durations, cache percentages, tokens, and estimates. Rename a session locally.",
        "A session is one recorded conversation or coding run. A local name helps you recognize it without changing the provider’s record.",
      ],
      [
        "Limits & Burn Rate",
        "Codex session and weekly limits come from recorded usage data. Claude shows transcript-derived 5-hour block timing unless real plan limits are enabled.",
        "Time left in a Claude block is different from quota left. Burn rate means tokens per hour. Codex limit data updates when Codex reports it.",
      ],
      [
        "Real Claude Plan Limits",
        "An opt-in in Settings → AI reads Claude Code sign-in from Keychain, with macOS permission, and requests limits from Anthropic.",
        "Read-only: the token is used for the Anthropic usage request; it is not refreshed, stored, or sent elsewhere by MacSweep. Off by default.",
      ],
      [
        "Service Status",
        "Show public Claude and OpenAI status information alongside local usage.",
        "A provider incident can explain slow or failed requests. Public status checks use the network; a green status is not a guarantee for every request.",
      ],
      [
        "Transcript Storage",
        "Find Claude Code and Codex conversation logs older than 30, 90, or 180 days. Review and confirm moving selected logs to Trash. Sessions you have named are always kept.",
        "Removing a transcript prevents resuming or searching that conversation through its local history. Usage totals already counted in MacSweep stay recorded.",
      ],
      [
        "Menu Bar & Notch Limits",
        "Choose which AI tool’s 5-hour and weekly information appears in the menu bar AI tile and notch.",
        "Choose the tool you want to keep in view without opening the full AI page. Availability depends on recorded usage and enabled plan access.",
      ],
    ],
    terms: [
      [
        "Token",
        "A piece of text counted by an AI model. Tokens are not exactly the same as words.",
      ],
      [
        "Input / output",
        "Input is sent to the model; output is what the model generates.",
      ],
      [
        "Cache hit",
        "Previously processed prompt content that is reused, with accounting that depends on the provider.",
      ],
      [
        "API-equivalent cost",
        "An estimate at model API rates, separate from a subscription or actual bill.",
      ],
      [
        "Burn rate",
        "How many tokens are being consumed per hour in the recorded block.",
      ],
      ["Transcript", "A local log of an AI conversation or coding session."],
    ],
  },
  {
    id: "applications",
    label: "Applications",
    title: "Know your apps beyond their icons.",
    intro:
      "Understand installed applications, usage, updates, and leftover files.",
    items: [
      [
        "App Inventory",
        "Inspect installed applications in a dedicated inventory.",
        "Use one view to understand the apps that are installed before deciding what to keep or remove.",
      ],
      [
        "Uninstaller & Leftovers",
        "Inspect removal candidates and app-related leftover files.",
        "Removing an app and removing its supporting data are different decisions. Review associated files before confirming.",
      ],
      [
        "App Updates",
        "Review available app update information.",
        "An update can fix issues or add features. Review the relevant app’s update before installing it.",
      ],
      [
        "App Usage",
        "Track time spent in applications locally, with a privacy control to stop tracking and a confirmed history-clear action.",
        "Usage tracking records time, not the content of what you do inside an app. The Settings view describes a 30-day local history.",
      ],
      [
        "App Footprint",
        "Each app’s total size including caches, support data, containers, and preferences. Clear cache, or Reset app to move everything except the app itself to the Trash. Reset refuses while the app is running and never applies to Apple apps.",
        "An app’s icon can be small while its data is large. Resetting is like a fresh install without downloading the app again.",
      ],
    ],
    terms: [
      ["Leftovers", "Supporting files remaining after an app is removed."],
      [
        "Inventory",
        "A collected list of installed applications and their details.",
      ],
      [
        "Local history",
        "Records stored on this Mac instead of uploaded to an analytics service.",
      ],
    ],
  },
  {
    id: "insights",
    label: "Insights",
    title: "Put today’s activity in perspective.",
    intro:
      "See trends, investigate disk growth, and keep useful system information within reach.",
    items: [
      [
        "Smart Alerts",
        "Notifications cover low disk, steadily growing memory, runaway CPU, overheating, new login items, and a large Trash.",
        "An alert draws attention to a condition. Inspect the cause before choosing an action.",
      ],
      [
        "14-day Timeline",
        "Review CPU, memory, disk, and network history over time, with context for spikes.",
        "A timeline helps connect a moment of unusual activity to what was happening on the Mac.",
      ],
      [
        "What Grew",
        "Compare two disk scans to identify folders whose storage increased.",
        "This compares saved scan sizes. It shows where growth happened, which helps you investigate the reason.",
      ],
      [
        "System Information",
        "Inspect hardware and system details, including battery, network, and connected devices.",
        "Use these details to understand the machine you are working on and its current state.",
      ],
      [
        "Menu Bar, Notch & Dock",
        "A two-line menu bar item, hover-expanded notch HUD with System, Apps, Ports, AI, and Clean, and a live Dock icon.",
        "The notch HUD is a small heads-up display around the screen cutout. It keeps common information close to your workflow.",
      ],
      [
        "Lightweight by design",
        "Typical idle use is about 100 MB of memory and 1–3% CPU with the window open. Live process sampling runs every 3 seconds only while a page that shows it is open, otherwise every 10 seconds.",
        "A monitoring tool should not become the thing slowing your Mac down. Big scans release memory as they go and hand it back afterwards.",
      ],
      [
        "Storage Forecast",
        "From recorded free-space history, MacSweep estimates when the disk fills up: “Full in about N weeks at this rate.”",
        "A forecast is a trend, not a promise. A big download or cleanup changes the rate.",
      ],
    ],
    terms: [
      ["Timeline", "A series of recorded measurements arranged by time."],
      ["Spike", "A short period where a measurement rises sharply."],
      [
        "HUD",
        "Heads-up display: a compact view of information near where you are working.",
      ],
      [
        "Scan comparison",
        "The difference between folder sizes in two saved scans.",
      ],
    ],
  },
  {
    id: "settings",
    label: "Settings",
    title: "Make the whole experience your own.",
    intro:
      "Seven Settings tabs put startup, appearance, layout, AI, privacy, and shortcuts under your control.",
    items: [
      [
        "General",
        "Control launch at login, scan scheduling, menu bar style, notch stats, and the live Dock icon. Schedules include off, nightly at 2 AM, morning at 8 AM, and every six hours.",
        "Scheduled scans run at low priority and are skipped on battery below 30%. Choose a schedule that fits your work.",
      ],
      [
        "Appearance",
        "Choose System, Light, or Dark. Pick an accent colour and a window background style, adjust colours and sidebar highlight, or reset appearance.",
        "System follows macOS appearance. Accent colour changes the interface emphasis; it does not affect scanning behavior.",
      ],
      [
        "Dashboard",
        "Show, hide, and drag to reorder cards. Available cards cover activity, storage, memory, battery, network, security, devices, top memory and CPU, ports, and usage.",
        "Keep the information you use most near the top. Reset to Default restores the standard card arrangement.",
      ],
      [
        "Sidebar",
        "A short sidebar: the main pages, then one row per area. An area’s pages open as tabs along the top. Fold the sidebar and choose which pages appear in Settings → Sidebar. Smart Scan and Dashboard always remain visible.",
        "Hiding a page reduces visual clutter; it does not turn off that feature’s background work.",
      ],
      [
        "AI Settings",
        "Choose the tool shown in the menu bar and notch. Real Claude plan-limit access is a separate, optional switch.",
        "The plan-limit option can trigger macOS Keychain permission. Sign-in, expiry, and network errors are explained in the settings status.",
      ],
      [
        "Privacy",
        "Enable or stop app-time tracking, clear recorded usage with confirmation, and reveal MacSweep’s local data folder in Finder.",
        "App usage is kept locally for 30 days. The saved disk scan and usage history live in the MacSweep Application Support folder.",
      ],
      [
        "Keyboard Shortcuts",
        "Use ⌘1–⌘9 for sections, ⌘R to refresh, ⌘↑ to move up a disk folder, ⌘F to search, ⌘, for Settings, and ⌘Q to quit.",
        "⌘⌫ performs a contextual cleanup or process-quit action. The action depends on the page and current selection.",
      ],
    ],
    terms: [
      [
        "Full Disk Access",
        "A macOS privacy permission needed to inspect some protected folders.",
      ],
      [
        "Keychain",
        "The macOS facility for securely storing sign-in credentials and other secrets.",
      ],
      [
        "Accent colour",
        "The colour used to emphasize selected controls and key information.",
      ],
      [
        "Application Support",
        "The folder where an app stores its local working data.",
      ],
    ],
  },
];
