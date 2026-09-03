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
      text: "Hello World",
      date: `Q${Math.floor(new Date().getMonth() / 3) + 1} ${new Date().getFullYear()}`
    },
    profile: {
      name: "Jevi Saputra",
      role: "Mobile Software Engineer",
      image: "assets/profile.jpeg",
      bioHtml: `Passionate mobile developer crafting fluid, performant, and delightful experiences across <span class="text-macchiato-text font-medium">Android & iOS</span>, with expertise in <span class="text-macchiato-text font-medium">Kotlin Multiplatform & Flutter</span>. Focused on reactive architectures, offline-first development, performance, and scalable design systems.`
    },
    coreStack: [
      { label: "Android", color: "macchiato-mauve" },
      { label: "iOS", color: "macchiato-teal" },
      { label: "Flutter", color: "macchiato-blue" },
      { label: "Kotlin Multiplatform", color: "macchiato-peach" }
    ],
    socialLinks: [
      { label: "GitHub", icon: "code", url: "https://github.com/jevhee", color: "macchiato-blue" },
      { label: "LinkedIn", icon: "work", url: "https://www.linkedin.com/in/jevhee/", color: "macchiato-blue" },
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
        icon: "all_inclusive",
        color: "macchiato-peach",
        badge: "4.9 ★ (12k ratings)",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE8yjgXvFDcU9r5YZVbF9lN2NdAcTzpvSj1_itJdQqfeBPVR9Ry6BwdfQRk__Eh5Lfaic9IW9Xl_s6IbskvKsFbYv0QUrJT_0Ce9rJ9tRyIdkSXUeLzHReLKnNAmxbJ6dbVR55K7A8LCVd4nyL89FD7eFvQDD5T8LS_3G4VVT9SVRc06-DPPBytyHB8bUGZaLjNAAnbG1boMcWVSolQFwadfEVKZifNV9iiEjad9vTJq5LBrHmV0ZKHQ",
        links: { code: "https://github.com", preview: "https://apple.com/app-store" }
      },
      {
        title: "FinPulse Mobile",
        stack: "Flutter · Riverpod · Isar DB",
        description: "Real-time crypto and fiat net-worth tracking engine. Engineered with encrypted biometric authentication, local-first offline syncing, reactive WebSocket order books, and cross-platform native rendering.",
        icon: "candlestick_chart",
        color: "macchiato-teal",
        badge: "50k+ Active Users",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8e4eW_Tw1iEsGsmx-UcXR-ER4bYLuaieWw6fXVsTywc6mQQIQ4K0abxN0ioebxwBPj1puXfMs8ZcpTENflgav5g58KKu56kmc9q0ELtF5dMheCZx0EVMImNaxGfNNffbPdtczpBkp0ucCA6WUdZCR6NlaHDN08tTyHLJDu65NlSTBIDCXCYQpory5_jbOxzDc2G8gdZHllGV_3tw9YGPGbKJHqPIRMvp12tsAZoiYU0KFkF0ObK_PMg",
        links: { code: "https://github.com", preview: "https://play.google.com" }
      },
      {
        title: "Zenith Reader",
        stack: "SwiftUI · CoreData · RSS Engine",
        description: "Typography-first, distraction-free newsfeed reader. Parses unstructured feeds into sanitized Markdown trees with automated local caching, read-later queues, and instant text reflow.",
        icon: "auto_stories",
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
