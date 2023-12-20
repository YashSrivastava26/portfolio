import { slideInFromLeft, slideInFromRight } from "@/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import ExperinceAndEducation from "./EncryptedSection/ExperienceAndEducation";
interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <motion.div
      className="w-full flex items-center justify-center md:px-6 z-10"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex-[0.3] mt-32 hidden md:flex items-start justify-center min-h-screen relative py-10"
        variants={slideInFromLeft(0.5)}
      >
        <div className="absolute w-[85%] h-[90%] z-[-1] top-20 ">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
          >
            <path id="blob" fill="#a855f7">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="
              M443.5,306.5Q427,363,375,386Q323,409,270.5,440.5Q218,472,163.5,442.5Q109,413,87,358.5Q65,304,59.5,248.5Q54,193,90.5,150.5Q127,108,176,92.5Q225,77,276.5,77.5Q328,78,360.5,118Q393,158,426.5,204Q460,250,443.5,306.5Z;
              M449.5,313Q446,376,388.5,402Q331,428,279.5,415.5Q228,403,159,419Q90,435,85.5,367.5Q81,300,70.5,247Q60,194,90.5,147.5Q121,101,168,54.5Q215,8,282,20.5Q349,33,376.5,92Q404,151,428.5,200.5Q453,250,449.5,313Z;
              M442,312.5Q444,375,399,426Q354,477,288.5,459Q223,441,160,433.5Q97,426,77.5,366Q58,306,49,247Q40,188,84.5,149.5Q129,111,172.5,62Q216,13,275,39Q334,65,371.5,106.5Q409,148,424.5,199Q440,250,442,312.5Z;
              M423,305Q421,360,386.5,416Q352,472,284,480.5Q216,489,179,432Q142,375,123,334Q104,293,63,238Q22,183,68,138Q114,93,168.5,77.5Q223,62,268,87.5Q313,113,365,128Q417,143,421,196.5Q425,250,423,305Z;
              M428.5,293Q383,336,351,368.5Q319,401,268,438.5Q217,476,169.5,437Q122,398,103,348.5Q84,299,77,248Q70,197,91,144Q112,91,166.5,70Q221,49,269.5,74.5Q318,100,379,114Q440,128,457,189Q474,250,428.5,293Z;
              M415.5,293Q384,336,365,397.5Q346,459,282,466Q218,473,183.5,420Q149,367,95,339Q41,311,30,246.5Q19,182,58.5,128.5Q98,75,161.5,76.5Q225,78,281,69Q337,60,375.5,102.5Q414,145,430.5,197.5Q447,250,415.5,293Z;
              M432.5,305.5Q422,361,372,384Q322,407,273,417.5Q224,428,179,406Q134,384,117,339Q100,294,76,243Q52,192,75,133.5Q98,75,160.5,69.5Q223,64,272,79Q321,94,363.5,121.5Q406,149,424.5,199.5Q443,250,432.5,305.5Z;
              M434,316Q456,382,396.5,412Q337,442,282,424.5Q227,407,161.5,417.5Q96,428,86.5,364.5Q77,301,91,254Q105,207,97.5,136Q90,65,155.5,55Q221,45,272.5,66.5Q324,88,385,106Q446,124,429,187Q412,250,434,316Z;
              M390.5,292Q380,334,366.5,405Q353,476,284,483Q215,490,152.5,462Q90,434,81.5,368Q73,302,85.5,253.5Q98,205,111,155Q124,105,173.5,83.5Q223,62,275,71.5Q327,81,369,113.5Q411,146,406,198Q401,250,390.5,292Z;
              M443.5,306.5Q427,363,375,386Q323,409,270.5,440.5Q218,472,163.5,442.5Q109,413,87,358.5Q65,304,59.5,248.5Q54,193,90.5,150.5Q127,108,176,92.5Q225,77,276.5,77.5Q328,78,360.5,118Q393,158,426.5,204Q460,250,443.5,306.5Z;
              "
              ></animate>
            </path>
          </svg>
        </div>
        <div className="absolute w-[85%] h-[90%] z-[-1] top-14 right-12 scale-110 blur-3xl ">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
          >
            <path id="blob" fill="#a855f7">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="
              M443.5,306.5Q427,363,375,386Q323,409,270.5,440.5Q218,472,163.5,442.5Q109,413,87,358.5Q65,304,59.5,248.5Q54,193,90.5,150.5Q127,108,176,92.5Q225,77,276.5,77.5Q328,78,360.5,118Q393,158,426.5,204Q460,250,443.5,306.5Z;
              M449.5,313Q446,376,388.5,402Q331,428,279.5,415.5Q228,403,159,419Q90,435,85.5,367.5Q81,300,70.5,247Q60,194,90.5,147.5Q121,101,168,54.5Q215,8,282,20.5Q349,33,376.5,92Q404,151,428.5,200.5Q453,250,449.5,313Z;
              M442,312.5Q444,375,399,426Q354,477,288.5,459Q223,441,160,433.5Q97,426,77.5,366Q58,306,49,247Q40,188,84.5,149.5Q129,111,172.5,62Q216,13,275,39Q334,65,371.5,106.5Q409,148,424.5,199Q440,250,442,312.5Z;
              M423,305Q421,360,386.5,416Q352,472,284,480.5Q216,489,179,432Q142,375,123,334Q104,293,63,238Q22,183,68,138Q114,93,168.5,77.5Q223,62,268,87.5Q313,113,365,128Q417,143,421,196.5Q425,250,423,305Z;
              M428.5,293Q383,336,351,368.5Q319,401,268,438.5Q217,476,169.5,437Q122,398,103,348.5Q84,299,77,248Q70,197,91,144Q112,91,166.5,70Q221,49,269.5,74.5Q318,100,379,114Q440,128,457,189Q474,250,428.5,293Z;
              M415.5,293Q384,336,365,397.5Q346,459,282,466Q218,473,183.5,420Q149,367,95,339Q41,311,30,246.5Q19,182,58.5,128.5Q98,75,161.5,76.5Q225,78,281,69Q337,60,375.5,102.5Q414,145,430.5,197.5Q447,250,415.5,293Z;
              M432.5,305.5Q422,361,372,384Q322,407,273,417.5Q224,428,179,406Q134,384,117,339Q100,294,76,243Q52,192,75,133.5Q98,75,160.5,69.5Q223,64,272,79Q321,94,363.5,121.5Q406,149,424.5,199.5Q443,250,432.5,305.5Z;
              M434,316Q456,382,396.5,412Q337,442,282,424.5Q227,407,161.5,417.5Q96,428,86.5,364.5Q77,301,91,254Q105,207,97.5,136Q90,65,155.5,55Q221,45,272.5,66.5Q324,88,385,106Q446,124,429,187Q412,250,434,316Z;
              M390.5,292Q380,334,366.5,405Q353,476,284,483Q215,490,152.5,462Q90,434,81.5,368Q73,302,85.5,253.5Q98,205,111,155Q124,105,173.5,83.5Q223,62,275,71.5Q327,81,369,113.5Q411,146,406,198Q401,250,390.5,292Z;
              M443.5,306.5Q427,363,375,386Q323,409,270.5,440.5Q218,472,163.5,442.5Q109,413,87,358.5Q65,304,59.5,248.5Q54,193,90.5,150.5Q127,108,176,92.5Q225,77,276.5,77.5Q328,78,360.5,118Q393,158,426.5,204Q460,250,443.5,306.5Z;
              "
              ></animate>
            </path>
          </svg>
        </div>
        <div className="absolute w-[85%] h-[90%] z-[-1] top-14 m-auto left-0.5">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
          >
            <path id="blob" fill="none" strokeWidth="7px" stroke="#add8e6">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="
              M443.5,306.5Q427,363,375,386Q323,409,270.5,440.5Q218,472,163.5,442.5Q109,413,87,358.5Q65,304,59.5,248.5Q54,193,90.5,150.5Q127,108,176,92.5Q225,77,276.5,77.5Q328,78,360.5,118Q393,158,426.5,204Q460,250,443.5,306.5Z;
              M449.5,313Q446,376,388.5,402Q331,428,279.5,415.5Q228,403,159,419Q90,435,85.5,367.5Q81,300,70.5,247Q60,194,90.5,147.5Q121,101,168,54.5Q215,8,282,20.5Q349,33,376.5,92Q404,151,428.5,200.5Q453,250,449.5,313Z;
              M442,312.5Q444,375,399,426Q354,477,288.5,459Q223,441,160,433.5Q97,426,77.5,366Q58,306,49,247Q40,188,84.5,149.5Q129,111,172.5,62Q216,13,275,39Q334,65,371.5,106.5Q409,148,424.5,199Q440,250,442,312.5Z;
              M423,305Q421,360,386.5,416Q352,472,284,480.5Q216,489,179,432Q142,375,123,334Q104,293,63,238Q22,183,68,138Q114,93,168.5,77.5Q223,62,268,87.5Q313,113,365,128Q417,143,421,196.5Q425,250,423,305Z;
              M428.5,293Q383,336,351,368.5Q319,401,268,438.5Q217,476,169.5,437Q122,398,103,348.5Q84,299,77,248Q70,197,91,144Q112,91,166.5,70Q221,49,269.5,74.5Q318,100,379,114Q440,128,457,189Q474,250,428.5,293Z;
              M415.5,293Q384,336,365,397.5Q346,459,282,466Q218,473,183.5,420Q149,367,95,339Q41,311,30,246.5Q19,182,58.5,128.5Q98,75,161.5,76.5Q225,78,281,69Q337,60,375.5,102.5Q414,145,430.5,197.5Q447,250,415.5,293Z;
              M432.5,305.5Q422,361,372,384Q322,407,273,417.5Q224,428,179,406Q134,384,117,339Q100,294,76,243Q52,192,75,133.5Q98,75,160.5,69.5Q223,64,272,79Q321,94,363.5,121.5Q406,149,424.5,199.5Q443,250,432.5,305.5Z;
              M434,316Q456,382,396.5,412Q337,442,282,424.5Q227,407,161.5,417.5Q96,428,86.5,364.5Q77,301,91,254Q105,207,97.5,136Q90,65,155.5,55Q221,45,272.5,66.5Q324,88,385,106Q446,124,429,187Q412,250,434,316Z;
              M390.5,292Q380,334,366.5,405Q353,476,284,483Q215,490,152.5,462Q90,434,81.5,368Q73,302,85.5,253.5Q98,205,111,155Q124,105,173.5,83.5Q223,62,275,71.5Q327,81,369,113.5Q411,146,406,198Q401,250,390.5,292Z;
              M443.5,306.5Q427,363,375,386Q323,409,270.5,440.5Q218,472,163.5,442.5Q109,413,87,358.5Q65,304,59.5,248.5Q54,193,90.5,150.5Q127,108,176,92.5Q225,77,276.5,77.5Q328,78,360.5,118Q393,158,426.5,204Q460,250,443.5,306.5Z;
              "
              ></animate>
            </path>
          </svg>
        </div>
        <Image
          src="/glaxy.png"
          alt="Hero Image"
          width={479}
          height={459}
          className="h-auto w-full max-w-sm "
        />
      </motion.div>
      <motion.div
        className="min-h-screen flex flex-col mt-6 md:mt-32 px-4 md:flex-[0.7]"
        variants={slideInFromRight(0.5)}
      >
        <div className="flex items-center justify-center">
          <h3 className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-semibold mt-10">
            About Me
          </h3>
          <div className="border-b bg-clip-border border-transparent bg-gradient-to-r from-cyan-500 to-transparent flex-1"></div>
        </div>
        <span className="text-base mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          repellendus voluptatibus voluptas sapiente maxime doloribus eligendi
          expedita, porro non assumenda quibusdam aliquid vel optio enim sit
          esse. Nesciunt, voluptate? Sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. In eius impedit corporis! Qui atque iure eius velit,
          repellat sunt repellendus facere corrupti esse, excepturi saepe. Magni
          corrupti veritatis perspiciatis fuga?
        </span>

        <ExperinceAndEducation />
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;