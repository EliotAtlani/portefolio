import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    date: "July 2024",
    title: "Connectly",
    description:
      "Connectly is live chat web application inspired by WhatsApp. Users can create groups, send messages, and share files to their friends in rea-time",
    href: "https://connectly.eliotatlani.fr",
    technologies: [
      "ReactJS",
      "TypeScript",
      "TailwindCSS",
      "Socket.IO",
      "ExpressJS",
      "Docker",
      "PostgreSQL",
      "Ansible",
    ],
    github: "tst",
    colorCard: "text-[#8F1538]",
    colors: [
      [143, 21, 56],
      [217, 89, 126],
    ],
    borderColor: "border-[#8F1538]",
  },
  {
    date: "June 2024",
    title: "FaceAuth",
    description:
      "FaceAuth is a facial recognition system that allows you to connect to your accounts without having to enter a password.",
    href: "https://faceauth.eliotatlani.fr",
    technologies: [
      "ReactJS",
      "TypeScript",
      "TailwindCSS",
      "ViteJS",
      "FastAPI",
      "Pinecone",
      "Docker",
    ],
    github: "tst",
    colorCard: "text-[#3B82F6]",
    colors: [
      [59, 130, 246],
      [139, 92, 246],
    ],
    borderColor: "border-[#3B82F6]",
  },
  {
    date: "July 2024",
    title: "FileSwap",
    description:
      "FileSwap is a file converter that allows you to convert your files from one format to another, compress them, and resize them.",
    href: "https://fileswap.eliotatlani.fr",
    technologies: [
      "ReactJS",
      "TypeScript",
      "ViteJS",
      "NestJS",
      "GitHub Actions",
      "Docker",
    ],
    github: "tst",
    colorCard: "text-[#77FCDF]",
    colors: [
      [16, 224, 92],
      [119, 252, 223],
      [7, 115, 27],
    ],
    borderColor: "border-[#77FCDF]",
  },

  {
    date: "May 2023",
    title: "Toss Application",
    description:
      "The TOSS is a 4500-student sport tournament. The application allows you to follow the score of the matches, the ranking of the teams, and the schedule of the matches.",
    href: "https://apps.apple.com/fr/app/toss-2024/id6446198811",
    technologies: ["React Native", "ExpressJS", "MySQL", "Expo", "AWS EC2"],
    github: "tst",
    colorCard: "text-[#ffaa00]",
    colors: [
      [255, 170, 0],
      [245, 245, 10],
      [184, 115, 18],
    ],
    borderColor: "border-[#ffaa00]",
  },
];
