"use client";
import { slideInFromLeft, slideInFromRight } from "@/lib/animation";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { mainProject } from "@/data/projects";
interface ProjectProps {}

const Project: FC<ProjectProps> = ({}) => {
  const refsArray = Array.from({ length: 3 }, () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
    });

    return { ref, inView };
  });

  return (
    <motion.section
      initial="hidden"
      className=" relative flex items-center justify-around flex-col lg:w-full max-w-7xl mx-auto space-y-10 lg:p-2 px-4 z-10"
      id="projects"
    >
      <div
        ref={refsArray[0].ref}
        className="w-full flex bg-muted/50 lg:bg-inherit shadow-sm rounded-md shadow-white lg:shadow-none overflow-hidden p-2 lg:p-4 xl:p-7 mt-20 max-w-md lg:max-w-full"
      >
        <motion.div
          className="w-[55%] hidden lg:block relative group cursor-pointer"
          variants={slideInFromLeft(0.4)}
          animate={refsArray[0].inView ? "visible" : "hidden"}
        >
          <Image
            src={mainProject[0].image}
            alt={mainProject[0].name}
            width={800}
            height={600}
            className="shadow-sm shadow-gray-600 rounded-md grayscale group-hover:grayscale-0"
          />
          <Link
            href={mainProject[0].url || mainProject[0].github}
            target="_blank"
            className="absolute w-full h-full top-0 left-0 rounded-md bg-indigo-500 opacity-50 group-hover:opacity-0 delay-75 transition-opacity duration-200"
          />
        </motion.div>
        <motion.div
          className="w-full relative p-2 lg:p-0 lg:w-[45%] text-muted-foreground"
          variants={slideInFromRight(0.4)}
          animate={refsArray[0].inView ? "visible" : "hidden"}
        >
          <div className="lg:h-1/2 lg:bottom-1/2 lg:w-full flex flex-col lg:justify-end lg:items-end">
            <div className="flex lg:flex-col items-center justify-between lg:justify-end lg:items-end">
              <Link
                href={mainProject[0].url || mainProject[0].github}
                className="uppercase text-xl lg:hover:text-primary lg:text-secondary-foreground/70 lg:text-2xl py-3 font-bold"
              >
                {mainProject[0].name}
              </Link>

              <div className="flex space-x-5">
                <Link
                  href={mainProject[0].github}
                  className="text-muted-foreground hover:text-primary cursor-pointer h-[1rem] lg:h-1.35rem"
                >
                  <Github />
                </Link>
                {mainProject[0].url && (
                  <Link
                    href={mainProject[0].url}
                    className="text-muted-foreground hover:text-primary cursor-pointer"
                  >
                    <ExternalLink />
                  </Link>
                )}
              </div>
            </div>
            <ul className="flex flex-wrap justify-start lg:justify-end gap-3 my-3 lg:pl-4 w-full">
              {mainProject[0].skills.map((skill, idx) => (
                <li
                  className="hero-box pr-3 pl-2 border border-[#7042f88b] opacity-[0.9] hero-text px-4 lg:px-6 py-1 text-xs lg:text-sm"
                  key={idx}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm xl:text-base lg:absolute h-fit lg:max-h-[45%] lg:w-[135%] lg:z-10 lg:top-1/2 lg:right-0 lg:bg-muted lg:backdrop-blur-xl lg:shadow-md lg:rounded-md p-1 lg:py-2 lg:px-3 xl:p-5 lg:shadow-gray-800">
            {mainProject[0].description}
          </div>
        </motion.div>
      </div>
      {/* ------------------------------------------------------------------------------------ */}
      <div
        ref={refsArray[1].ref}
        className="w-full flex bg-muted/50 lg:bg-inherit shadow-sm rounded-md shadow-white lg:shadow-none max-w-md lg:max-w-full overflow-hidden p-2 lg:p-4 xl:p-7"
      >
        <motion.div
          variants={slideInFromLeft(0.4)}
          animate={refsArray[1].inView ? "visible" : "hidden"}
          className="w-full relative p-2 lg:p-0 lg:w-[45%] text-muted-foreground"
        >
          <div className="lg:h-1/2 lg:bottom-1/2 lg:w-full flex flex-col lg:justify-end lg:items-start">
            <div className="flex lg:flex-col items-center justify-between lg:justify-end lg:items-start">
              <Link
                href={mainProject[1].url || mainProject[1].github}
                className="uppercase text-xl lg:hover:text-primary lg:text-secondary-foreground/70 lg:text-2xl py-3 font-bold"
              >
                {mainProject[1].name}
              </Link>

              <div className="flex space-x-5">
                <Link
                  href={mainProject[1].github}
                  className="text-muted-foreground hover:text-primary cursor-pointer h-[1rem] lg:h-1.35rem"
                >
                  <Github />
                </Link>
                {mainProject[1].url && (
                  <Link
                    href={mainProject[1].url}
                    className="text-muted-foreground hover:text-primary cursor-pointer"
                  >
                    <ExternalLink />
                  </Link>
                )}
              </div>
            </div>
            <ul className="flex flex-wrap justify-start lg:justify-start gap-3 my-3 lg:pr-4 w-full">
              {mainProject[1].skills.map((skill, idx) => (
                <li
                  className="hero-box pr-3 pl-2 border border-[#7042f88b] opacity-[0.9] hero-text px-4 lg:px-6 py-1 text-xs lg:text-sm"
                  key={idx}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm xl:text-base lg:absolute h-fit lg:max-h-[45%] lg:w-[135%] lg:z-10 lg:top-1/2 lg:left-0 lg:bg-muted lg:backdrop-blur-xl lg:shadow-md lg:rounded-md p-1 lg:py-2 lg:px-3 xl:p-5 lg:shadow-gray-800">
            {mainProject[1].description}
          </div>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.4)}
          animate={refsArray[1].inView ? "visible" : "hidden"}
          className="w-[55%] hidden lg:block relative group cursor-pointer"
        >
          <Image
            src={mainProject[1].image}
            alt={mainProject[1].name}
            width={800}
            height={600}
            className="shadow-sm shadow-gray-600 rounded-md grayscale group-hover:grayscale-0"
          />
          <Link
            href={mainProject[1].url || mainProject[1].github}
            target="_blank"
            className="absolute w-full h-full top-0 left-0 rounded-md bg-indigo-500 opacity-50 group-hover:opacity-0 delay-75 transition-opacity duration-200"
          />
        </motion.div>
      </div>
      {/* ------------------------------------------------------------------------------------ */}
      <div
        ref={refsArray[2].ref}
        className="w-full flex bg-muted/50 lg:bg-inherit shadow-sm rounded-md shadow-white lg:shadow-none max-w-md lg:max-w-full overflow-hidden p-2 lg:p-4 xl:p-7"
      >
        <motion.div
          variants={slideInFromLeft(0.4)}
          animate={refsArray[2].inView ? "visible" : "hidden"}
          className="w-[55%] hidden lg:block relative group cursor-pointer"
        >
          <Image
            src={mainProject[2].image}
            alt={mainProject[2].name}
            width={800}
            height={600}
            className="shadow-sm shadow-gray-600 rounded-md grayscale group-hover:grayscale-0"
          />
          <Link
            href={mainProject[2].url || mainProject[2].github}
            target="_blank"
            className="absolute w-full h-full top-0 left-0 rounded-md bg-indigo-500 opacity-50 group-hover:opacity-0 delay-75 transition-opacity duration-200"
          />
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.4)}
          animate={refsArray[2].inView ? "visible" : "hidden"}
          className="w-full relative p-2 lg:p-0 lg:w-[45%] text-muted-foreground"
        >
          <div className="lg:h-1/2 lg:bottom-1/2 lg:w-full flex flex-col lg:justify-end lg:items-end">
            <div className="flex lg:flex-col items-center justify-between lg:justify-end lg:items-end">
              <Link
                href={mainProject[2].url || mainProject[2].github}
                className="uppercase text-xl lg:hover:text-primary lg:text-secondary-foreground/70 lg:text-2xl py-3 font-bold"
              >
                {mainProject[2].name}
              </Link>

              <div className="flex space-x-5">
                <Link
                  href={mainProject[2].github}
                  className="text-muted-foreground hover:text-primary cursor-pointer h-[1rem] lg:h-1.35rem"
                >
                  <Github />
                </Link>
                {mainProject[2].url && (
                  <Link
                    href={mainProject[2].url}
                    className="text-muted-foreground hover:text-primary cursor-pointer"
                  >
                    <ExternalLink />
                  </Link>
                )}
              </div>
            </div>
            <ul className="flex flex-wrap justify-start lg:justify-end gap-3 my-3 lg:pl-4 w-full">
              {mainProject[0].skills.map((skill, idx) => (
                <li
                  className="hero-box pr-3 pl-2 border border-[#7042f88b] opacity-[0.9] hero-text px-4 lg:px-6 py-1 text-xs lg:text-sm"
                  key={idx}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm xl:text-base lg:absolute h-fit lg:max-h-[45%] lg:w-[135%] lg:z-10 lg:top-1/2 lg:right-0 lg:bg-muted lg:backdrop-blur-xl lg:shadow-md lg:rounded-md p-1 lg:py-2 lg:px-3 xl:p-5 lg:shadow-gray-800">
            {mainProject[2].description}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Project;
