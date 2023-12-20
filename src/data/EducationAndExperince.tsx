export type Education = {
  degree: string;
  university: string;
  year: string;
  grade: string;
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  description: string[];
};

export const education: Education[] = [
  {
    degree: "Bachlores in Technology (B.Tech) in Information Technology",
    university: "Kalinga Institute of Industrial Technology",
    year: "2020 - 2024",
    grade: "CGPA - 8.40",
  },
  {
    degree: "Intermediate (Class XII)",
    university: "Arihant Public School",
    year: "2020",
    grade: "83%",
  },
  {
    degree: "High School (Class X)",
    university: "Delhi Public School",
    year: "2018",
    grade: "CGPA - 10",
  },
];

export const experience: Experience[] = [
  {
    company: "Dot.agent",
    role: "Fullstack Developer Intern",
    duration: "Sept-2024 - Present",
    description: [
      "Designed and implemented efficient databases using Supabase, resulting in a 15% improvement in data retrieval speed.",
      "Achieved a 20% reduction in connection time to AI agents by seamlessly integrating real-time functionality through database updates.",
      "Integrated Large Language Models (LLMs) , AI agent and Open AI agent services into the Next.js web application via API calls, expanding its feature set.",
    ],
  },
  {
    company: "Dot.agent1",
    role: "Fullstack Developer Intern",
    duration: "Sept-2024 - Present",
    description: [
      "Designed and implemented efficient databases using Supabase, resulting in a 15% improvement in data retrieval speed.",
      "Achieved a 20% reduction in connection time to AI agents by seamlessly integrating real-time functionality through database updates.",
      "Integrated Large Language Models (LLMs) , AI agent and Open AI agent services into the Next.js web application via API calls, expanding its feature set.",
    ],
  },
  {
    company: "Dot.agent2",
    role: "Fullstack Developer Intern",
    duration: "Sept-2024 - Present",
    description: [
      "Designed and implemented efficient databases using Supabase, resulting in a 15% improvement in data retrieval speed.",
      "Achieved a 20% reduction in connection time to AI agents by seamlessly integrating real-time functionality through database updates.",
      "Integrated Large Language Models (LLMs) , AI agent and Open AI agent services into the Next.js web application via API calls, expanding its feature set.",
    ],
  },
  {
    company: "Dot.agent3",
    role: "Fullstack Developer Intern",
    duration: "Sept-2024 - Present",
    description: [
      "Designed and implemented efficient databases using Supabase, resulting in a 15% improvement in data retrieval speed.",
      "Achieved a 20% reduction in connection time to AI agents by seamlessly integrating real-time functionality through database updates.",
      "Integrated Large Language Models (LLMs) , AI agent and Open AI agent services into the Next.js web application via API calls, expanding its feature set.",
    ],
  },
];
