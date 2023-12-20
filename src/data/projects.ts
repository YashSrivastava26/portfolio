export type MainProject = {
  name: string;
  description: string;
  url?: string;
  github: string;
  skills: string[];
  image: string;
  details?: string[];
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
    image: "/project/doc-guru.jpg",
  },
  {
    name: "Doc Guru",
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
    image: "/project/doc-guru.jpg",
  },
  {
    name: "Doc Guru",
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
    image: "/project/doc-guru.jpg",
  },
];
