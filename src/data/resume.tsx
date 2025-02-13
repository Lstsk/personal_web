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
      description: "",
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
      description: "",
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
      description: "",
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
      title: "Weiqi.com",
      href: "https://github.com/BinaryRuns/weiqi.com",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Weiqi.com is an online Go platform (also known as Weiqi or Baduk) delivering a seamless experience for all skill levels, featuring real-time multiplayer, AI integration, and game analysis.",
      technologies: [
        "Typescript",
        "Java",
        "Spring Boot",
        "WebSocket",
        "Docker",
        "TailwindCSS",
        "Figma",
        "Shadcn UI",
        "React",
        "Redis",
        "PostgreSQL",
        "OAuth",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/BinaryRuns/weiqi.com",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./weiqi_demo.mp4",
    },
    {
      title: "Blucks Clip",
      href: "https://github.com/Lstsk/blucks-clip",
      dates: "Dec 2024 - Jan 2024",
      active: true,
      description:
        "TheBlucks.com uses AI to pinpoint key moments in videos, making long content instantly navigable. Built with Google Cloud, Flask, Gemini and React with TypeScript, it streamlines video exploration.",
      technologies: [
        "Google Cloud",
        "Flask",
        "React",
        "TypeScript",
        "Python",
        "Gemini",
        "TailwindCSS",
        "OAuth",
        "JWT",
        "FFmpeg",
      ],
      links: [
        {
          type: "Website",
          href: "https://theblucks.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Lstsk/blucks-clip",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blucks_clip.png",
      video: "",
    },

    {
      title: "Tri-Core",
      href: "https://github.com/Lstsk/Tri-CoRe",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "Tri-CoRe is a unified platform that streamlines course registration and research applications for the Tri-Co Consortium, featuring a comprehensive course catalog, course ratings, and a centralized research portal.",
      technologies: [
        "Typescript",
        "Next.js",
        "ASP .NET",
        "MongoDB",
        "JSON",
        "TailwindCSS",
        "Figma",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Lstsk/Tri-CoRe?",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tricore.gif",
      video: "",
    },

    {
      title: "Game of Life",
      href: "https://github.com/Lstsk/game-of-life",
      dates: "Jun 2023 - Aug 2023",
      active: true,
      description:
        "An interactive simulation of Conway's Game of Life that visualizes the evolution of cellular automata.",
      technologies: [
        "C",
        "POSIX Threads",
        "ParaVis Library",
        "ASCII Output",
        "Makefile",
        "Valgrind",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Lstsk/game-of-life",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gol.png",
      video: "",
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
