const SITE_CONTENT = {
  header: {
    name: "Jevi Saputra",
    navLinks: [
      { label: "About", href: "#about", color: "macchiato-teal" },
      { label: "Journeys", href: "#journeys", color: "macchiato-mauve" },
      { label: "Portfolio", href: "#portfolio", color: "macchiato-blue" },
      { label: "Posts", href: "#posts", color: "macchiato-peach" }
    ]
  },
  about: {
    banner: {
      tag: "Mobile Workspace",
      title: "mobile.architecture",
      subtitle: "scalable architecture · smooth ui · offline-first",
      chips: [
        { label: "Android", color: "macchiato-peach" },
        { label: "iOS", color: "macchiato-blue" }
      ]
    },
    status: {
      text: "Hello World"
    },
    profile: {
      name: "Jevi Saputra",
      role: "Mobile Software Engineer",
      image: "assets/profile.webp",
      bioHtml: `Passionate mobile developer crafting fluid, performant, and delightful experiences across <span class="text-macchiato-text font-medium">Android & iOS</span>, with expertise in <span class="text-macchiato-text font-medium">Kotlin Multiplatform & Flutter</span>. Focused on reactive architectures, offline-first development, performance, and scalable design systems.`
    },
    coreStack: [
      { label: "Android", color: "macchiato-mauve" },
      { label: "iOS", color: "macchiato-teal" },
      { label: "Flutter", color: "macchiato-blue" },
      { label: "Kotlin Multiplatform", color: "macchiato-peach" }
    ],
    socialLinks: [
      { label: "GitHub", iconSvg: '<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-1.215-3.795-1.215-.555-1.41-1.35-1.785-1.35-1.785-1.095-.75.09-.735.09-.735 1.215.09 1.86 1.245 1.86 1.245 1.08 1.845 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>', url: "https://github.com/jevhee", color: "macchiato-text" },
      { label: "LinkedIn", iconSvg: '<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>', url: "https://www.linkedin.com/in/jevhee/", color: "macchiato-blue" },
      { label: "Email", icon: "mail", url: "mailto:jevisa40@gmail.com", color: "macchiato-peach" }
    ]
  },
  journeys: {
    title: "Journeys",
    dateRange: "2018 — Present",
    items: [
      {
        role: "Lead Mobile Engineer",
        date: "2023 — Present",
        company: "FinTech Nexus",
        description: "Architected high-frequency trading iOS app from inception. Achieved 4.9-star rating with over 500k+ MAU, cutting end-to-end WebSocket render latency to sub-16ms.",
        color: "macchiato-teal",
        isPulse: true
      },
      {
        role: "Senior iOS Developer",
        date: "2021 — 2023",
        company: "GoRide SuperApp",
        description: "Spearheaded complete rewrite of core driver navigation pipeline using SwiftUI and MapKit, decreasing CPU usage by 32% and battery drain over long background shifts.",
        color: "macchiato-blue"
      },
      {
        role: "Mobile Developer",
        date: "2019 — 2021",
        company: "Studio Kreatif",
        description: "Delivered 12+ consumer mobile apps across Flutter and native Android. Pioneered shared offline-first persistence modules and automated Fastlane deployment scripts.",
        color: "macchiato-peach"
      },
      {
        role: "B.S. in Computer Science",
        date: "2018",
        company: "University of Technology",
        description: "Graduated with honors. Specialization in Human-Computer Interaction (HCI) and Distributed Mobile Computing networks.",
        color: "macchiato-surface1",
        textColor: "macchiato-text",
        subTextColor: "macchiato-overlay0"
      }
    ]
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Selected Work",
    projects: [
      {
        title: "Aura Habit Tracker",
        stack: "iOS · SwiftUI · WatchKit",
        description: "Minimalist gesture-driven habit tracking companion. Features zero-lag haptic feedback, custom interactive Lock Screen widgets, SwiftData synchronization, and a lightweight standalone Apple Watch companion.",
        type: "App",
        color: "macchiato-peach",
        badge: "4.9 ★ (12k ratings)",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE8yjgXvFDcU9r5YZVbF9lN2NdAcTzpvSj1_itJdQqfeBPVR9Ry6BwdfQRk__Eh5Lfaic9IW9Xl_s6IbskvKsFbYv0QUrJT_0Ce9rJ9tRyIdkSXUeLzHReLKnNAmxbJ6dbVR55K7A8LCVd4nyL89FD7eFvQDD5T8LS_3G4VVT9SVRc06-DPPBytyHB8bUGZaLjNAAnbG1boMcWVSolQFwadfEVKZifNV9iiEjad9vTJq5LBrHmV0ZKHQ",
        links: { code: "https://github.com", preview: "https://apple.com/app-store" }
      },
      {
        title: "FinPulse Mobile",
        stack: "Flutter · Riverpod · Isar DB",
        description: "Real-time crypto and fiat net-worth tracking engine. Engineered with encrypted biometric authentication, local-first offline syncing, reactive WebSocket order books, and cross-platform native rendering.",
        type: "App",
        color: "macchiato-teal",
        badge: "50k+ Active Users",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8e4eW_Tw1iEsGsmx-UcXR-ER4bYLuaieWw6fXVsTywc6mQQIQ4K0abxN0ioebxwBPj1puXfMs8ZcpTENflgav5g58KKu56kmc9q0ELtF5dMheCZx0EVMImNaxGfNNffbPdtczpBkp0ucCA6WUdZCR6NlaHDN08tTyHLJDu65NlSTBIDCXCYQpory5_jbOxzDc2G8gdZHllGV_3tw9YGPGbKJHqPIRMvp12tsAZoiYU0KFkF0ObK_PMg",
        links: { preview: "https://play.google.com" }
      },
      {
        title: "Zenith Reader",
        stack: "SwiftUI · CoreData · RSS Engine",
        description: "Typography-first, distraction-free newsfeed reader. Parses unstructured feeds into sanitized Markdown trees with automated local caching, read-later queues, and instant text reflow.",
        type: "Library",
        color: "macchiato-mauve",
        badge: "Open Source",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7zxoONz8OS7Q34K73TRDCt_eC6dGZnN0oVcMIHfCVUIYyE5CDBso8sKvKb9zVQK3_rGXBPEo-M-lgK62z5T5NZtcEzTlXNMLEEDj6CEZGi6q6UKsQKaGOoZxETjSG06bfC2DmT3_iCmOlQ1U10v8JjklBzuUm3jT4hxJNQn3nYh7rlX1efVY7zfhuB4w-8HNk8-SFiWDPfwcwIBzIXwSNqX9t_n0UsDd_CHIh52wg84pZZS5jQCaW9A",
        links: { code: "https://github.com", preview: "https://apple.com/app-store" }
      }
    ]
  },
  posts: {
    title: "Posts",
    subtitle: "Technical Notes",
    articles: [
      {
        title: "Building 120 FPS Fluid Animations in SwiftUI with PhaseAnimator",
        date: "May 2024",
        readTime: "6 min read",
        category: "iOS Performance",
        color: "macchiato-peach",
        url: "#posts"
      },
      {
        title: "State Management in Modern Flutter: Why Riverpod 2.0 Won My Heart",
        date: "Feb 2024",
        readTime: "8 min read",
        category: "Architecture",
        color: "macchiato-blue",
        url: "#posts"
      },
      {
        title: "Offline-first Architecture in Mobile Apps: Lessons from 500k Active Users",
        date: "Nov 2023",
        readTime: "10 min read",
        category: "Reliability",
        color: "macchiato-teal",
        url: "#posts"
      },
      {
        title: "Reverse Engineering iOS Navigation Transitions",
        date: "Aug 2023",
        readTime: "5 min read",
        category: "Deep Dive",
        color: "macchiato-mauve",
        url: "#posts"
      }
    ]
  },
  footer: {
    tagline: "Crafting mobile architectures",
    copyright: `© ${new Date().getFullYear()} Jevi Saputra. All Rights Reserved.`
  }
};
