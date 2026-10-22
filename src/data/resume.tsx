export const DATA = {
  name: "Carson Lin",
  url: "https://www.carsonlin.dev",
  location: "Sunnyvale, CA",
  timeZone: "America/Los_Angeles",
  description:
    "CS & Math at Swarthmore College. Building Hermes, researching ML, interning at Tesla.",
  intro: [
    "Hi, I'm Carson. I study computer science and mathematics at Swarthmore College, class of 2027.",
    "This summer I'm writing software at [Tesla](https://www.tesla.com). The rest of my time goes to machine learning research at Swarthmore and to [Hermes](https://tryhermes.dev), an agentic outreach platform I'm building.",
    "I like compilers, systems that have to answer in milliseconds, and the game of Go — enough that I built a server for it. Before all this: Gnosis Freight, BAE Systems, and Bank of Saipan.",
  ],
  avatarUrl: "/carson_pixel.webp",
  // Shown in the "Now" block. Keep it short, update it when it stops being true.
  now: {
    updated: "Oct 2026",
    lines: [
      { label: "Building", text: "Hermes — triggers that decide when to send" },
      { label: "Reading", text: "—" },
      { label: "Playing", text: "9×9 against KataGo" },
    ],
  },
  social: [
    { name: "github", url: "https://github.com/Lstsk" },
    // Add your handle after the slash to show this link.
    { name: "x", url: "" },
    { name: "linkedin", url: "https://www.linkedin.com/in/carson-lin/" },
    { name: "email", url: "mailto:carsonlin322@gmail.com" },
  ],

  work: [
    {
      company: "Tesla",
      href: "https://www.tesla.com",
      title: "Software Engineer Intern",
      dates: "2026 —",
    },
    {
      company: "Swarthmore College",
      href: "https://www.swarthmore.edu/",
      title: "Undergraduate ML Researcher",
      dates: "2025 —",
    },
    {
      company: "Gnosis Freight",
      href: "https://gnosisfreight.com",
      title: "Software Engineer",
      dates: "2025",
    },
    {
      company: "BAE Systems",
      href: "https://www.baesystems.com/en-us/home",
      title: "Software Engineer Intern",
      dates: "2024 — 2025",
    },
    {
      company: "Swarthmore College",
      href: "https://www.swarthmore.edu/",
      title: "Teaching Assistant",
      dates: "2024 —",
    },
    {
      company: "Bank of Saipan",
      href: "https://www.bankofsaipan.com/",
      title: "Software Engineer Intern",
      dates: "2023",
    },
  ],
  education: [
    {
      school: "Swarthmore College",
      href: "https://www.swarthmore.edu/",
      degree: "B.S. Computer Science & Mathematics",
      dates: "2023 — 2027",
    },
  ],
  projects: [
    {
      title: "Hermes",
      href: "https://tryhermes.dev",
      dates: "2026 —",
      featured: true,
      short: "Agentic outreach that reads your product data and writes the email.",
      description:
        "Connects read-only to a team's product data, finds cohorts worth talking to, then drafts and sends personalized email on a schedule. Dashboard, REST API, MCP server, CLI.",
      technologies: [
        "Next.js",
        "Turborepo",
        "BullMQ",
        "PostgreSQL",
        "Vercel AI SDK",
        "MCP",
      ],
    },
    {
      title: "Weiqi.com",
      href: "https://github.com/BinaryRuns/weiqi.com",
      dates: "2024 —",
      featured: true,
      short: "Real-time online Go — multiplayer, AI review, game analysis.",
      description:
        "An online Go platform with real-time multiplayer, AI play and post-game analysis.",
      technologies: [
        "Spring Boot",
        "WebSocket",
        "Redis",
        "PostgreSQL",
        "React",
        "Docker",
      ],
    },
    {
      title: "Hatch",
      href: "https://github.com/Lstsk/compiler",
      dates: "2025",
      featured: true,
      short: "A compiler for the Bird language in OCaml, down to assembly and GC.",
      description:
        "Lexer, parser, type checker, code generation and a garbage collector, written for CS75: Compilers.",
      technologies: ["OCaml", "Menhir", "x86 assembly", "C"],
    },
    {
      title: "Nilai",
      href: "https://chromewebstore.google.com/detail/nilai/pladablfphgjljebkeomhjcjdkohcnen",
      dates: "2025",
      featured: false,
      short: "Browser companion that summarizes pages and PDFs.",
      description:
        "A browser extension that summarizes pages and PDFs and suggests where to read next.",
      technologies: [
        "TypeScript",
        "Manifest V3",
        "FastAPI",
        "LangChain",
        "Vector search",
      ],
    },
    {
      title: "Blucks Clip",
      href: "https://github.com/Lstsk/blucks-clip",
      dates: "2025",
      featured: false,
      short: "Finds the key moments in long video.",
      description:
        "Pinpoints the moments worth watching in long video so you can jump straight to them.",
      technologies: ["Flask", "Gemini", "FFmpeg", "React", "Google Cloud"],
    },
    {
      title: "Tri-CoRe",
      href: "https://github.com/Lstsk/Tri-CoRe",
      dates: "2024",
      featured: false,
      short: "Course registration and research applications in one place.",
      description:
        "Course catalog, ratings and a research portal for the Tri-College Consortium.",
      technologies: ["Next.js", "ASP.NET", "MongoDB"],
    },
    {
      title: "carsonlin.dev",
      href: "https://github.com/Lstsk/personal_web",
      dates: "2024 —",
      featured: false,
      short: "This site.",
      description: "This site. Next.js, an MDX blog, deployed on Vercel.",
      technologies: ["Next.js", "Tailwind", "MDX", "Vercel"],
    },
    {
      title: "Game of Life",
      href: "https://github.com/Lstsk/game-of-life",
      dates: "2023",
      featured: false,
      short: "Conway's Game of Life, threaded.",
      description:
        "An interactive simulation of Conway's Game of Life, threaded and rendered live.",
      technologies: ["C", "POSIX threads", "Makefile"],
    },
  ],
} as const;
