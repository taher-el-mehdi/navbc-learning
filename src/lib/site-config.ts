const githubUrl = "https://github.com/taher-el-mehdi/navbc-learning";

export const siteConfig = {
  name: "NAVBC Learning",
  description:
    "The premium learning platform for Microsoft Dynamics 365 Business Central and NAV developers. Master AL development, extensions, and ERP customization.",
  url: "https://learn.navbc.com",
  ogImage: "/og-image.png",
  twitter: "@navbc",
  keywords: [
    "Business Central",
    "Dynamics 365",
    "AL development",
    "NAV development",
    "ERP development",
    "Microsoft Dynamics",
    "AL language",
    "BC extensions",
  ],
  author: {
    name: "NAVBC",
    url: "https://navbc.com",
  },
  links: {
    github: githubUrl,
    twitter: "https://twitter.com/navbc",
    discord: "https://discord.gg/RE5mQUzcX",
  },
  communityMenu: [
    {
      title: "Join Discord",
      href: "https://discord.gg/RE5mQUzcX",
      description: "Chat with BC developers in real time",
    },
    {
      title: "Star on GitHub",
      href: githubUrl,
      description: "Support this open-source learning platform",
    },
  ],
  github: {
    repo: "taher-el-mehdi/navbc-learning",
    branch: "main",
    discussionsEnabled: true,
  },
  nav: [
    { title: "Learning Path", href: "/learning-paths" },
    { title: "Community", type: "community" as const },
    { title: "Courses", href: "/courses", hidden: true },
    { title: "Tutorials", href: "/tutorials", hidden: true },
    { title: "Contribute", href: "/contribute", hidden: true },
    { title: "GitHub", href: githubUrl, hidden: true },
  ],
} as const;
