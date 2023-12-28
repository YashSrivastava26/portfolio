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
      "Developed an end-to-end Software as a Service (SaaS) product utilizing a cutting-edge tech stack, including Next.js, TypeScript, Tailwind CSS, GPT-3.5 Turbo, Pinecone VectorDB, Prisma ORM, and the Text-embedding-ada-002 model.",
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
      "Developed an end-to-end Software as a Service (SaaS) product utilizing a cutting-edge tech stack, including Next.js, TypeScript, Tailwind CSS, GPT-3.5 Turbo, Pinecone VectorDB, Prisma ORM, and the Text-embedding-ada-002 model.",
    url: "https://doc-guru-pi.vercel.app/",
    github: "https://github.com/YashSrivastava26/doc-guru",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GPT-3.5 Turbo",
      "Pinecone VectorDB",
      "Prisma ORM",
      "Text-embedding-ada-002 model",
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
      "Developed an end-to-end Software as a Service (SaaS) product utilizing a cutting-edge tech stack, including Next.js, TypeScript, Tailwind CSS, GPT-3.5 Turbo, Pinecone VectorDB, Prisma ORM, and the Text-embedding-ada-002 model.",
    url: "https://doc-guru-pi.vercel.app/",
    github: "https://github.com/YashSrivastava26/doc-guru",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GPT-3.5 Turbo",
      "Pinecone VectorDB",
      "Prisma ORM",
      "Text-embedding-ada-002 model",
    ],
    image: [
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/chat-dock/chat-dock-1.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/chat-dock/chat-dock-2.png",
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/project/chat-dock/chat-dock-3.png",
    ],
    theme: "light",
  },
];
