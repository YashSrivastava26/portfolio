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
export const aboutMe: string =
  "Passionate FullStack Developer with a knack for optimizing web experiences. Adept at integrating cutting-edge technologies to craft innovative solutions. From enhancing data retrieval speeds to real-time functionality, my projects showcase efficiency and user-centric design. Leverage my expertise to bring your digital ideas to life!";
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
];
