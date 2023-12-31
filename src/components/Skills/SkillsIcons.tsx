"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
interface SkillsIconsProps {
  src: string;
  index: number;
}

const SkillsIcons: FC<SkillsIconsProps> = ({ src, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  const animationDelay = 0.2;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="h-12 w-12 md:h-20 md:w-20 object-cover relative"
    >
      <Image src={src} alt="skills-icons" fill />
    </motion.div>
  );
};

export default SkillsIcons;
