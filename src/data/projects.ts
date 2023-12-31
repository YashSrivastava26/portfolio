export type MainProject = {
  name: string;
  description: string;
  url?: string;
  github: string;
  skills: string[];
  image: string[];
  details?: string[];
  theme: "dark" | "light";
};
export const mainProject: MainProject[] = [
  // only 3 project will be shown in the home page
  {
    name: "Doc Guru",
    description:
      "A SaaS solution, empowering users to effortlessly upload PDF documents and seamlessly querying an AI model for precise insights. Leveraged advanced models for efficient data processing, ensuring prompt and accurate responses.",
    url: "https://doc-guru-pi.vercel.app/",
    github: "https://github.com/YashSrivastava26/doc-guru",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "GPT-3.5",
      "Pinecone",
      "Prisma",
      "Text-embedding-ada-002",
    ],
    image: [
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/doc-guru/doc-guru-1.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/doc-guru/doc-guru-2.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/doc-guru/doc-guru-3.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/doc-guru/doc-guru-4.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/doc-guru/doc-guru-5.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/doc-guru/doc-guru-6.jpg",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/doc-guru/doc-guru-7.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/doc-guru/doc-guru-8.png",
    ],
    theme: "light",
  },
  {
    name: "Learning Quest",
    description:
      "A SAAS application, simplifying the seamless creation of educational courses.It effortlessly crafts courses enriched with videos, complemented by knowledge assessments through quizzes, ensuring a comprehensive and engaging learning journey.",
    github: "https://github.com/YashSrivastava26/learning-quest",
    skills: [
      "Next.js",
      "GPT-3.5",
      "Youtube API",
      "Prisma",
      "Docker",
      "Github Actions",
    ],
    image: [
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/learning-quest/learning-quest-1.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/learning-quest/learning-quest1.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/learning-quest/learning-quest-2.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/learning-quest/learning-quest-3.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/learning-quest/learning-quest-4.png",
    ],
    theme: "dark",
  },
  {
    name: "Chat Dock",
    description:
      "A web app where you can instantly connect and converse, secured by Google OAuth 2.0.  Elevate your chat experience with improved backend operations. All wrapped in a sleek Next.js and Tailwind CSS interface.",
    url: "https://chatdock.vercel.app/",
    github: "https://github.com/YashSrivastava26/chatdock",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Redis"],
    image: [
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/chat-dock/chat-dock-1.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/chat-dock/chat-dock-2.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/chat-dock/chat-dock-3.png",
    ],
    theme: "light",
  },
];
