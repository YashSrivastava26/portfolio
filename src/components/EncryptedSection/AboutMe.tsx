import { slideInFromLeft, slideInFromRight } from "@/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import ExperinceAndEducation from "./ExperienceAndEducation";
interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <motion.div
      className="w-full h-fit flex items-center justify-center md:px-6 z-10 relative"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-[30%] mt-10 hidden md:flex items-start justify-start h-fit relative py-4"
        variants={slideInFromLeft(0)}
      >
        <div className="w-full h-fit object-contain relative">
          <Image
            src="/main-2.png"
            alt="Hero Image"
            width={1800}
            height={2700}
            className="img-mask h-[60vh] 2xl:h-[40vh] backdrop-blur-sm"
          />
        </div>
      </motion.div>
      <motion.div
        className="h-full flex flex-col w-full md:w-[70%] px-4"
        variants={slideInFromRight(0)}
      >
        <div className="flex items-center justify-center">
          <h3 className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-semibold mt-10">
            About Me
          </h3>
          <div className="border-b bg-clip-border border-transparent bg-gradient-to-r from-cyan-500 to-transparent flex-1"></div>
        </div>
        <span className="text-sm mt-4 text-muted-foreground">
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
