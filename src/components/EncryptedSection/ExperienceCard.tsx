import { Experience } from "@/data/EducationAndExperince";
import { slideInFromRight } from "@/lib/animation";
import { motion } from "framer-motion";
import { FC } from "react";
interface ExperienceCardProps {
  experince: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experince }) => {
  return (
    <>
      <motion.div
        className="flex flex-col"
        variants={slideInFromRight(0.2)}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
      >
        <h2 className="text-xl font-semibold text-primary">
          FullStack Developer Intern
        </h2>
        <h3 className="text-lg font-medium text-secondary-foreground/70">
          {experince.company}
        </h3>
      </motion.div>
      <motion.ul
        initial="hidden"
        animate="visible"
        className="text-sm text-secondary-foreground/70 list-disc pl-4"
      >
        {experince.description.map((desc, index) => (
          <motion.li
            variants={slideInFromRight(0.4 + index * 0.15)}
            key={index}
          >
            {desc}
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default ExperienceCard;
