import { Icons } from "@/components/icons";
import { HomeIcon, GalleryVerticalEndIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "carson",
  initials: "z. l.",
  url: "https://carson.li",
  location: "Sunnyvale, CA",
  locationLink: "https://www.google.com/maps/place/sunnyvale",
  description:
    "a CS & Math student at Swarthmore College, excited about how AI and tech will shape our future.",
  summary:
    " I've worked on full-stack applications, real-time systems, and AI-powered tools that streamline processes and solve complex challenges. I thrive on transforming intricate problems into elegant solutions, and I'm excited about leveraging my skills to shape a smarter, more connected future. I'm always eager to explore emerging technologies and push the boundaries of what's possible in the tech world.",
  avatarUrl: "/carson_pixel.webp",
  skills: [
    "Python",
    "Java",
    "React",
    "Vue.js",
    "Typescript/JavaScript",
    "C/C++",
    "AWS/GCP",
    "Docker",
    "Spring Boot",
    "MongoDB",
    "MySQL",
    "Redis",
    "Git",
    "Unit Testing",
    ".NET Core",
    "CI/CD",
    "WebSocket",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: GalleryVerticalEndIcon, label: "Project" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "carsonlin0713@gmail.com",
    tel: "+1",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Lstsk",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/carson-lin/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:carsonlin322@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "BAE System",
      href: "https://www.baesystems.com/en-us/home",
      badges: [],
      location: "Mechanicsburg PA / Remote",
      title: "Software Engineer Intern",
      logoUrl: "/bae.png",
      start: "05/2024",
      end: "Present",
      description:
        "Designed and engineered a benchmark generation system for [Amazon Q Code Transformation](https://aws.amazon.com/q/developer/code-transformation/), an LLM-powered product that automates codebase migration, enhancing the evaluation of migration success rates",
    },
    {
      company: "Swarthmore College",
      badges: [],
      href: "https://www.swarthmore.edu/",
      location: "Swarthmore, PA",
      title: "Teaching Assistant",
      logoUrl: "/swarthmore.jpg",
      start: "08/2024",
      end: "Present",
      description:
        "Owned Profit & Loss of online channels, achieving 3x core metrics growth in 1 year",
    },
    {
      company: "Bank of Saipan",
      href: "https://www.bankofsaipan.com/",
      badges: [],
      location: "Saipan, MP",
      title: "Software Engineer Intern",
      logoUrl: "/bos.png",
      start: "05/2023",
      end: "08/2023",
      description:
        "Advised consumer goods and retail clients on growth strategy, market entry, and due diligence projects",
    },
  ],
  education: [
    {
      school: "Swarthmore College",
      href: "https://www.swarthmore.edu/",
      degree: "Bachelor of Science, Computer Science & Mathematics",
      logoUrl: "/swarthmore.jpg",
      start: "",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "AI Closet",
      href: "https://github.com/carsoneth/ai-closet/tree/main",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "A mobile app that helps users digitize their closet, get outfit inspirations, and virtually try on clothes of their own or from online stores.",
      technologies: [
        "Typescript",
        "React Native",
        "Expo",
        "AWS",
        "Comfy UI",
        "TailwindCSS",
        "Figma",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/carsoneth/ai-closet/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ai_closet.png",
      video: "",
    },
    {
      title: "Insight Reviews",
      href: "https://insightful.streamlit.app/",
      dates: "Jun 2023 - Aug 2023",
      active: true,
      description:
        "A GPT-powered e-commerce product review analysis platform for e-commerce sellers.",
      technologies: [
        "LLM",
        "Langchain",
        "Python",
        "Pandas",
        "Streamlit",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://insightful.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/carsoneth/Insight_Reviews",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/insight_reviews.png",
      video: "",
    },
    {
      title: "DirPrint",
      href: "https://pypi.org/project/DirPrint/",
      dates: "Mar 2024",
      active: true,
      description:
        "A command-line tool that simplifies the process of sharing of your project's directory structure and file contents, making it ideal for collaboration with LLMs (like ChatGPT, Claude, etc.).",
      technologies: ["Python", "Command Line Tool"],
      links: [
        {
          type: "PyPI",
          href: "https://pypi.org/project/DirPrint/",
          icon: <Icons.Python className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/carsoneth/DirPrint",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  hackathons: [
    //   {
    //     title: "Make School's Student App Competition 2017",
    //     dates: "May 19th - 21st, 2017",
    //     location: "International",
    //     description: "Improved PocketDoc and submitted to online competition",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //     win: "Top 10 Finalist | Honourable Mention",
    //     links: [
    //       {
    //         title: "Medium Article",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //       },
    //       {
    //         title: "Devpost",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://devpost.com/software/pocketdoc-react-native",
    //       },
    //       {
    //         title: "YouTube",
    //         icon: <Icons.youtube className="h-4 w-4" />,
    //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //       },
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/pocketdoc-react-native",
    //       },
    //     ],
    //   },
  ],
} as const;
