const SITE_CONTENT = {
  nav: [
    { label: "Prologue", href: "#about" },
    { label: "Showcase", href: "#projects" },
    { label: "Journey", href: "#experience" },
    { label: "Notes", href: "#articles" }
  ],
  prologue: {
    title: "Hello, I'm Jevi.",
    statusTexts: [
      "Open to new opportunities",
      "Let's build something new",
      "Open to collaborations"
    ],
    image: "assets/avatar.webp",
    bioHtml: `
      <p>
        I've always been fascinated by the process of turning abstract ideas into something you can touch and interact with on a screen. For me, building software is simply about crafting experiences that people can rely on every day.
      </p>
      <p>
        A well-crafted application is like a good story—engaging, intuitive, and seamlessly guiding you from start to finish. When I'm not bringing ideas to life, I'm usually exploring creative ways to solve everyday problems.
      </p>
    `
  },
  journey: {
    title: "Journey",
    subtitle: "The Chapters",
    items: [
      {
        role: "Open to What's Next",
        date: "2026 — Present",
        company: "Freelance & Independent",
        description: "Exploring new opportunities, collaborations, and ideas worth building — especially around mobile products and engineering.",
        isPulse: true
      },
      {
        role: "Frontend Developer",
        date: "2025 — 2026",
        company: "PT DAnS Multi Pro"
      },
      {
        role: "Android Engineer",
        date: "2017 — 2025",
        company: "Ruangguru"
      },
      {
        role: "Android Developer",
        date: "2017",
        company: "Inagata Technosmith"
      },
      {
        role: "Android Developer Intern",
        date: "2015 — 2016",
        company: "PT Arca International"
      },
      {
        role: "Computer Software Eng.",
        date: "2014 — 2017",
        company: "SMK Negeri 4 Malang"
      }
    ]
  },
  showcase: {
    title: "Showcase",
    subtitle: "Creations & Experiments",
    projects: [
      {
        title: "SecureStore",
        stack: ["Android", "Kotlin", "Jetpack Security"],
        description: "A Kotlin-first encrypted key-value library for Android. Automatically serializes, encrypts, and stores small values using AES-256-GCM and Android Keystore with HMAC-SHA-256 obfuscation.",
        image: "https://raw.githubusercontent.com/jevhee/secure-store/main/docs/images/secure-store-banner.png",
        links: {
          code: "https://github.com/jevhee/secure-store"
        }
      }
    ]
  },
  notes: {
    title: "Notes",
    subtitle: "Thoughts & Logs",
    articles: [
      {
        title: "Protecting Encryption Keys with Android Keystore",
        date: "Sep 2026",
        readTime: "5 min read",
        category: "mobilesecurity",
        url: "https://medium.com/@jevhee/protecting-encryption-keys-with-android-keystore-6833c818318d?sharedUserId=jevhee"
      },
      {
        title: "From Static IV to Dynamic IV: Improving Local Storage Encryption on Android",
        date: "Sep 2026",
        readTime: "7 min read",
        category: "mobilesecurity",
        url: "https://medium.com/@jevhee/from-static-iv-to-dynamic-iv-improving-local-storage-encryption-on-android-3ef94cb7b342?sharedUserId=jevhee"
      }
    ]
  },
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/jevhee",
      iconSvg: '<svg class="w-full h-full fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-1.215-3.795-1.215-.555-1.41-1.35-1.785-1.35-1.785-1.095-.75.09-.735.09-.735 1.215.09 1.86 1.245 1.86 1.245 1.08 1.845 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>'
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jevhee/",
      iconSvg: '<svg class="w-full h-full fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
    },
    {
      label: "Medium",
      url: "https://medium.com/@jevhee",
      iconSvg: '<svg class="w-full h-full fill-current" viewBox="0 0 24 24"><path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z"/></svg>'
    },
    {
      label: "Email",
      url: "mailto:jevisa40@gmail.com",
      iconSvg: '<svg class="w-full h-full fill-current scale-125" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
    }
  ]
};

// Auto-assign Catppuccin Macchiato colors to experience items.
(function assignDynamicColors() {
  const PALETTE = [
    'macchiato-lavender', 'macchiato-blue', 'macchiato-sapphire', 'macchiato-sky',
    'macchiato-teal', 'macchiato-green', 'macchiato-yellow', 'macchiato-peach',
    'macchiato-maroon', 'macchiato-red', 'macchiato-mauve', 'macchiato-pink',
    'macchiato-flamingo', 'macchiato-rosewater'
  ];

  function applyColors(items) {
    if (!items || !Array.isArray(items)) return;
    let pool = [...PALETTE].sort(() => Math.random() - 0.5);
    let lastColor = null;
    items.forEach((item) => {
      if (!item.color) {
        if (pool.length === 0) {
          pool = [...PALETTE].sort(() => Math.random() - 0.5);
          if (pool[pool.length - 1] === lastColor) pool.unshift(pool.pop());
        }
        lastColor = pool.pop();
        item.color = lastColor;
      } else {
        pool = pool.filter(c => c !== item.color);
        lastColor = item.color;
      }
    });
  }

  applyColors(SITE_CONTENT.journey.items);
})();

export default SITE_CONTENT;