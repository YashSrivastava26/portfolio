import { FC } from "react";

interface EducationCardProps {}
import { motion } from "framer-motion";
import { slideInFromRight } from "@/lib/animation";
import { education } from "@/data/EducationAndExperince";
const EducationCard: FC<EducationCardProps> = ({}) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      {education.map((edu, idx) => (
        <motion.div
          variants={slideInFromRight(0.2 * (idx + 1))}
          className="flex flex-col items-center justify-center border-l-2 border-primary/70 pl-4"
          key={idx}
        >
          <div className="flex items-center justify-between w-full">
            <h3 className="text-base md:text-lg text-primary font-semibold tracking-wide">
              {edu.university}
            </h3>
            <span className="hidden md:inline-block text-base text-muted-foreground">
              {edu.year}
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-y-1 mt-1 md:mt-0 justify-between w-full">
            <h3 className=" text-sm md:text-base text-secondary-foreground tracking-wide">
              {edu.degree}
            </h3>
            <span className="md:inline-block text-sm md:text-base text-muted-foreground uppercase">
              {edu.grade}
            </span>
            <span className="md:hidden text-sm md:text-base text-muted-foreground">
              {edu.year}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationCard;
