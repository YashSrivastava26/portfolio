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
  const { ref: ref0, inView: inView0 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      initial="hidden"
      className=" relative flex items-center justify-around flex-col md:w-full max-w-7xl mx-auto space-y-10 md:p-2 px-4 z-10"
      id="projects"
    >
      <div
        ref={ref0}
        className="w-full flex bg-muted/50 md:bg-inherit shadow-sm rounded-md shadow-white md:shadow-none max-w-full overflow-hidden p-2 md:p-4 xl:p-7 mt-20"
      >
        <motion.div
          className="w-[55%] hidden md:block relative group cursor-pointer"
          variants={slideInFromLeft(0.4)}
          animate={inView0 ? "visible" : "hidden"}
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
          className="w-full relative p-2 md:p-0 md:w-[45%] text-muted-foreground"
          variants={slideInFromRight(0.4)}
          animate={inView0 ? "visible" : "hidden"}
        >
          <div className="md:h-1/2 md:bottom-1/2 md:w-full flex flex-col md:justify-end md:items-end">
            <div className="flex md:flex-col items-center justify-between md:justify-end md:items-end">
              <Link
                href={mainProject[0].url || mainProject[0].github}
                className="uppercase text-xl md:hover:text-primary md:text-secondary-foreground/70 md:text-2xl py-3 font-bold"
              >
                {mainProject[0].name}
              </Link>

              <div className="flex space-x-5">
                <Link
                  href={mainProject[0].github}
                  className="text-muted-foreground hover:text-primary cursor-pointer h-[1rem] md:h-1.35rem"
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
            <ul className="flex flex-wrap justify-start md:justify-end gap-3 my-3 md:pl-4 w-full">
              {mainProject[0].skills.map((skill, idx) => (
                <li
                  className="hero-box pr-3 pl-2 border border-[#7042f88b] opacity-[0.9] hero-text px-4 md:px-6 py-1 text-xs md:text-sm"
                  key={idx}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm xl:text-base md:absolute h-fit md:max-h-[45%] md:w-[135%] md:z-10 md:top-1/2 md:right-0 md:bg-muted md:backdrop-blur-xl md:shadow-md md:rounded-md p-1 md:py-2 md:px-3 xl:p-5 md:shadow-gray-800">
            {mainProject[0].description}
          </div>
        </motion.div>
      </div>
      {/* ------------------------------------------------------------------------------------ */}
      <div
        ref={ref1}
        className="w-full flex bg-muted/50 md:bg-inherit shadow-sm rounded-md shadow-white md:shadow-none max-w-full overflow-hidden p-2 md:p-4 xl:p-7"
      >
        <motion.div
          variants={slideInFromLeft(0.4)}
          animate={inView1 ? "visible" : "hidden"}
          className="w-full relative p-2 md:p-0 md:w-[45%] text-muted-foreground"
        >
          <div className="md:h-1/2 md:bottom-1/2 md:w-full flex flex-col md:justify-end md:items-start">
            <div className="flex md:flex-col items-center justify-between md:justify-end md:items-start">
              <Link
                href={mainProject[1].url || mainProject[1].github}
                className="uppercase text-xl md:hover:text-primary md:text-secondary-foreground/70 md:text-2xl py-3 font-bold"
              >
                {mainProject[1].name}
              </Link>

              <div className="flex space-x-5">
                <Link
                  href={mainProject[1].github}
                  className="text-muted-foreground hover:text-primary cursor-pointer h-[1rem] md:h-1.35rem"
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
            <ul className="flex flex-wrap justify-start md:justify-start gap-3 my-3 md:pr-4 w-full">
              {mainProject[1].skills.map((skill, idx) => (
                <li
                  className="hero-box pr-3 pl-2 border border-[#7042f88b] opacity-[0.9] hero-text px-4 md:px-6 py-1 text-xs md:text-sm"
                  key={idx}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm xl:text-base md:absolute h-fit md:max-h-[45%] md:w-[135%] md:z-10 md:top-1/2 md:left-0 md:bg-muted md:backdrop-blur-xl md:shadow-md md:rounded-md p-1 md:py-2 md:px-3 xl:p-5 md:shadow-gray-800">
            {mainProject[1].description}
          </div>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.4)}
          animate={inView1 ? "visible" : "hidden"}
          className="w-[55%] hidden md:block relative group cursor-pointer"
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
        ref={ref2}
        className="w-full flex bg-muted/50 md:bg-inherit shadow-sm rounded-md shadow-white md:shadow-none max-w-full overflow-hidden p-2 md:p-4 xl:p-7"
      >
        <motion.div
          variants={slideInFromLeft(0.4)}
          animate={inView2 ? "visible" : "hidden"}
          className="w-[55%] hidden md:block relative group cursor-pointer"
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
          animate={inView2 ? "visible" : "hidden"}
          className="w-full relative p-2 md:p-0 md:w-[45%] text-muted-foreground"
        >
          <div className="md:h-1/2 md:bottom-1/2 md:w-full flex flex-col md:justify-end md:items-end">
            <div className="flex md:flex-col items-center justify-between md:justify-end md:items-end">
              <Link
                href={mainProject[2].url || mainProject[2].github}
                className="uppercase text-xl md:hover:text-primary md:text-secondary-foreground/70 md:text-2xl py-3 font-bold"
              >
                {mainProject[2].name}
              </Link>

              <div className="flex space-x-5">
                <Link
                  href={mainProject[2].github}
                  className="text-muted-foreground hover:text-primary cursor-pointer h-[1rem] md:h-1.35rem"
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
            <ul className="flex flex-wrap justify-start md:justify-end gap-3 my-3 md:pl-4 w-full">
              {mainProject[0].skills.map((skill, idx) => (
                <li
                  className="hero-box pr-3 pl-2 border border-[#7042f88b] opacity-[0.9] hero-text px-4 md:px-6 py-1 text-xs md:text-sm"
                  key={idx}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm xl:text-base md:absolute h-fit md:max-h-[45%] md:w-[135%] md:z-10 md:top-1/2 md:right-0 md:bg-muted md:backdrop-blur-xl md:shadow-md md:rounded-md p-1 md:py-2 md:px-3 xl:p-5 md:shadow-gray-800">
            {mainProject[2].description}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Project;
