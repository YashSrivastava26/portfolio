import { MainProject, mainProject } from "@/data/projects";
import Link from "next/link";
import { FC } from "react";
import { ExternalLink, Github } from "lucide-react";
import { slideInFromLeft, slideInFromRight } from "@/lib/animation";
import ProjectImages from "./ProjectImages";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

interface ProjectCardProps {
  project: MainProject;
  index: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "w-full flex bg-muted/50 md:bg-inherit shadow-sm rounded-md shadow-white md:shadow-none max-w-full overflow-hidden p-2 md:p-4 xl:p-7 mt-20",
        {
          "flex-row": index % 2 === 0, // even idx 0, 2
          "flex-row-reverse": index % 2 !== 0, // odd idx 1, 3
        }
      )}
    >
      <motion.div
        className="w-[55%] hidden md:block relative group cursor-pointer"
        variants={slideInFromLeft(0.4)}
        animate={inView ? "visible" : "hidden"}
      >
        <ProjectImages arrowDir={index % 2 == 0 ? "left" : "right"} />
      </motion.div>
      <motion.div
        className={cn(
          "w-full relative p-2 md:p-0 md:w-[45%] text-muted-foreground flex flex-col items-start",
          {
            "md:items-end": index % 2 === 0, // even idx 0, 2
            "md:items-start": index % 2 !== 0, // odd idx 1, 3
          }
        )}
        variants={slideInFromRight(0.4)}
        animate={inView ? "visible" : "hidden"}
      >
        <div
          className={cn(
            "flex md:flex-col items-center justify-between w-full md:mb-2 lg:mb-3 gap-y-1 lg:gap-y-2",
            {
              "md:items-end": index % 2 === 0, // even idx 0, 2
              "md:items-start": index % 2 !== 0, // odd idx 1, 3
            }
          )}
        >
          <Link
            href={project.url || project.github}
            className="uppercase text-xl md:hover:text-primary md:text-secondary-foreground/70 md:text-2xl font-bold"
          >
            {project.name}
          </Link>

          <div className="flex space-x-5">
            <Link
              href={project.github}
              className="text-muted-foreground hover:text-primary cursor-pointer h-[1rem] md:h-1.35rem"
            >
              <Github />
            </Link>
            {project.url && (
              <Link
                href={project.url}
                className="text-muted-foreground hover:text-primary cursor-pointer"
              >
                <ExternalLink />
              </Link>
            )}
          </div>
        </div>
        <ul
          className={cn(
            "flex flex-wrap justify-start gap-x-3 gap-y-2 lg:gap-3 mb-3 lg:mb-4 w-full",
            {
              "md:pl-2 lg:pl-4 md:justify-end": index % 2 === 0, // even idx 0, 2
              "md:pr-2 lg:pr-4 md:justify-start": index % 2 !== 0, // odd idx 1, 3
            }
          )}
        >
          {project.skills.map((skill, idx) => (
            <li
              className="hero-box px-2 border border-[#7042f88b] opacity-[0.9] hero-text md:px-6 py-1 text-xs md:text-sm"
              key={idx}
            >
              {skill}
            </li>
          ))}
        </ul>
        <div className="text-sm xl:text-base md:w-[135%] md:z-10 md:bg-muted md:shadow-md md:rounded-md p-1 md:py-2 md:px-3 xl:p-5 md:shadow-gray-800">
          {project.description}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
