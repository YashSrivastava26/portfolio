export type Skill = {
  skill_name: string;
  Image: string;
};

export const Backend_skill: Skill[] = [
  {
    skill_name: "Node.js",
    Image: "https://img.icons8.com/color/480/81AFC7/nodejs.png",
  },
  {
    skill_name: "Express.js",
    Image: "https://img.icons8.com/officel/480/CDE3FB/express-js.png",
  },
  {
    skill_name: "Mongo DB",
    Image:
      "https://img.icons8.com/external-tal-revivo-color-tal-revivo/192/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
  },
  {
    skill_name: "Postger SQL",
    Image: "https://img.icons8.com/color/240/postgreesql.png",
  },
  {
    skill_name: "My SQL",
    Image: "https://img.icons8.com/ios-filled/250/004CBB/mysql-logo.png",
  },
  {
    skill_name: "Postman",
    Image:
      "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
  },
  {
    skill_name: "Stripe Payment Intergation",
    Image:
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/skills/stripe.webp",
  },
  {
    skill_name: "Open AI model integration",
    Image: "https://img.icons8.com/ios-glyphs/240/22C55E/chatgpt.png",
  },
  {
    skill_name: "Prisma ORM",
    Image: "https://img.icons8.com/fluency/240/prisma-orm.png",
  },
  {
    skill_name: "Pinecone DB",
    Image:
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/skills/pinecone.png",
  },
  {
    skill_name: "Supabase",
    Image:
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/skills/supabase.png",
  },
  {
    skill_name: "Redis",
    Image: "https://img.icons8.com/color/480/redis--v1.png",
  },
];

export const Frontend: Skill[] = [
  {
    skill_name: "React.js",
    Image: "https://img.icons8.com/officel/480/react.png",
  },
  {
    skill_name: "Next.js",
    Image:
      "https://img.icons8.com/fluency-systems-filled/240/FFFFFF/nextjs.png",
  },
  {
    skill_name: "Docker",
    Image: "https://img.icons8.com/color/240/docker.png",
  },
  {
    skill_name: "Figma",
    Image: "https://img.icons8.com/color/240/figma--v1.png",
  },
  {
    skill_name: "Git",
    Image: "https://img.icons8.com/color/240/git.png",
  },
  {
    skill_name: "Github",
    Image: "https://img.icons8.com/material-sharp/192/FFFFFF/github.png",
  },
  {
    skill_name: "Tailwind CSS",
    Image: "https://img.icons8.com/color/240/tailwind_css.png",
  },
  {
    skill_name: "Material UI",
    Image: "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/skills/mui.png",
  },
  {
    skill_name: "React Query",
    Image:
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/skills/reactquery.png",
  },
  {
    skill_name: "Framer Motion",
    Image:
      "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/skills/framer.png",
  },
  {
    skill_name: "Digital Ocean",
    Image: "https://img.icons8.com/windows/256/1462E5/digital-ocean.png",
  },
];

export const Programming_skill: Skill[] = [
  {
    skill_name: "C++",
    Image: "https://img.icons8.com/color/480/c-plus-plus-logo.png",
  },
  {
    skill_name: "Java",
    Image: "https://img.icons8.com/fluency/240/java-coffee-cup-logo.png",
  },
  {
    skill_name: "JavaScript",
    Image: "https://img.icons8.com/color/480/javascript--v1.png",
  },
  {
    skill_name: "TypeScript",
    Image: "https://img.icons8.com/color/480/typescript.png",
  },
  {
    skill_name: "HTML",
    Image: "https://img.icons8.com/color/480/html-5--v1.png",
  },
  {
    skill_name: "CSS",
    Image: "https://img.icons8.com/color/480/css3.png",
  },
];

export const skills: Skill[] = [
  ...Programming_skill,
  ...Frontend,
  ...Backend_skill,
];
