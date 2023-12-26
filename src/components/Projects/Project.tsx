"use client";
import { mainProject } from "@/data/projects";
import { motion } from "framer-motion";
import { FC } from "react";
import ProjectCard from "./ProjectCard";
interface ProjectProps {}

const Project: FC<ProjectProps> = ({}) => {
  return (
    <motion.div
      initial="hidden"
      className=" relative flex items-center justify-around flex-col md:w-full max-w-7xl mx-auto space-y-10 md:p-2 px-4 z-10"
      id="projects"
    >
      {mainProject.map((project, idx) => (
        <ProjectCard project={project} index={idx} key={project.name} />
      ))}
    </motion.div>
  );
};

export default Project;
