"use client";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/animation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import { Cedarville_Cursive } from "next/font/google";
interface SkillTextProps {}

const cursive = Cedarville_Cursive({
  weight: ["400"],
  subsets: ["latin"],
});

const SkillText: FC<SkillTextProps> = ({}) => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop(0.5)}
        className="hero-box py-2 pr-3 pl-2 border border-[#7042f88b] opacity-[0.9] mt-16"
      >
        <HiOutlineSparkles className="text-[#b49bff] mr-3 h-5 w-5" />
        <h1 className="hero-text text-sm">Better projects with Morden Techs</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-primary-foreground text-3xl mt-2 text-center font-medium mb-4"
      >
        Makings apps with Morden Technology
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className={cn(
          "text-xl text-secondary mb-10 mt-2 text-center font-medium text-[#b49bff]",
          cursive.className
        )}
      >
        Never miss a task deadline
      </motion.div>
    </div>
  );
};

export default SkillText;
