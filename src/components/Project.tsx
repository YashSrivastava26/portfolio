"use client";
import Image from "next/image";
import { FC } from "react";
import carrent from "../assets/carrent.png";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface ProjectProps {}

const Project: FC<ProjectProps> = ({}) => {
  return (
    <div className=" relative flex items-center justify-around flex-col md:w-full max-w-7xl mx-auto space-y-10 p-2">
      <div className="w-full flex bg-gray-700 md:bg-inherit shadow-sm rounded-md shadow-white md:shadow-none max-w-full overflow-hidden p-2 md:p-4 xl:p-7">
        <motion.div
          className="w-[55%] hidden md:block"
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: [0, 0.5, 0.625, 0.75, 0.9, 1],
            x: [-100, 50, 30, 15, 5, 0],
          }}
          transition={{
            duration: 2.5,
          }}
        >
          <Image
            src={carrent}
            alt=""
            width={800}
            height={600}
            className="z-0 shadow-sm shadow-gray-600 rounded-md"
          />
        </motion.div>
        <motion.div
          className="w-full relative p-2 md:p-0 md:w-[45%] z-0 text-gray-400"
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: [0, 0.5, 0.625, 0.75, 0.9, 1],
            x: [100, -50, -30, -15, -5, 0],
          }}
          transition={{
            duration: 2.5,
          }}
        >
          <div className="md:h-1/2 md:bottom-1/2 md:w-full flex flex-col md:justify-end md:items-end">
            <div className="flex md:flex-col items-center justify-between md:justify-end md:items-end">
              <h1 className="uppercase text-xl text-teal-500 md:text-gray-400 md:text-2xl py-3 font-bold">
                Weathersy
              </h1>

              <div className="flex space-x-5">
                <div className="text-gray-400 hover:text-teal-300/80 cursor-pointer h-[1rem] md:h-1.35rem">
                  <Github />
                </div>
                <div className="text-gray-400 hover:text-teal-300/80 cursor-pointer">
                  <ExternalLink />
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-4 md:grid-cols-4 gap-3 my-3 md:pl-4 w-full">
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
            </ul>
          </div>

          <div className="text-sm xl:text-base md:absolute h-fit md:max-h-[45%] md:w-[135%] md:z-10 md:top-1/2 md:right-0 md:bg-gray-700 md:shadow-md md:rounded-md p-1 md:py-2 md:px-3 xl:p-5 md:shadow-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            consequatur, error et maxime, explicabo, eius rerum nulla magnam id
            dolor cum ex accusantium debitis. Eligendi ex perspiciatis odit
            dolorum hic?
          </div>
        </motion.div>
      </div>
      {/* ------------------------------------------------------------------------------------ */}
      <div className="w-full flex bg-gray-700 md:bg-inherit shadow-sm rounded-md shadow-white md:shadow-none max-w-full overflow-hidden p-2 md:p-4 xl:p-7">
        <div className="w-full relative p-2 md:p-0 md:w-[45%] z-0 text-gray-400">
          <div className="md:h-1/2 md:bottom-1/2 md:w-full flex flex-col md:justify-end md:items-start">
            <div className="flex md:flex-col items-center justify-between md:justify-end md:items-start">
              <h1 className="uppercase text-xl text-teal-500 md:text-gray-400 md:text-2xl py-3 font-bold">
                Weathersy
              </h1>

              <div className="flex space-x-5">
                <div className="text-gray-400 hover:text-teal-300/80 cursor-pointer h-[1rem] md:h-1.35rem">
                  <Github />
                </div>
                <div className="text-gray-400 hover:text-teal-300/80 cursor-pointer">
                  <ExternalLink />
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-4 md:grid-cols-4 gap-3 my-3 md:pr-4 w-full">
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
            </ul>
          </div>

          <div className="text-sm xl:text-base md:absolute h-fit md:max-h-[45%] md:w-[135%] md:z-10 md:top-1/2 md:left-0 md:bg-gray-700 md:shadow-md md:rounded-md p-1 md:py-2 md:px-3 xl:p-5 md:shadow-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            consequatur, error et maxime, explicabo, eius rerum nulla magnam id
            dolor cum ex accusantium debitis. Eligendi ex perspiciatis odit
            dolorum hic?
          </div>
        </div>
        <div className="w-[55%] hidden md:block">
          <Image
            src={carrent}
            alt=""
            width={800}
            height={600}
            className="z-0 shadow-sm shadow-gray-600 rounded-md"
          />
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------ */}
      <div className="w-full flex bg-gray-700 md:bg-inherit shadow-sm rounded-md shadow-white md:shadow-none max-w-full overflow-hidden p-2 md:p-4 xl:p-7">
        <div className="w-[55%] hidden md:block">
          <Image
            src={carrent}
            alt=""
            width={800}
            height={600}
            className="z-0 shadow-sm shadow-gray-600 rounded-md"
          />
        </div>
        <div className="w-full relative p-2 md:p-0 md:w-[45%] z-0 text-gray-400">
          <div className="md:h-1/2 md:bottom-1/2 md:w-full flex flex-col md:justify-end md:items-end">
            <div className="flex md:flex-col items-center justify-between md:justify-end md:items-end">
              <h1 className="uppercase text-xl text-teal-500 md:text-gray-400 md:text-2xl py-3 font-bold">
                Weathersy
              </h1>

              <div className="flex space-x-5">
                <div className="text-gray-400 hover:text-teal-300/80 cursor-pointer h-[1rem] md:h-1.35rem">
                  <Github />
                </div>
                <div className="text-gray-400 hover:text-teal-300/80 cursor-pointer">
                  <ExternalLink />
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-4 md:grid-cols-4 gap-3 my-3 md:pl-4 w-full">
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
              <li className="text-teal-300 bg-teal-400/10 flex items-center justify-center rounded-full px-1 md:px-3 py-1 text-xs md:text-sm">
                ReactJs
              </li>
            </ul>
          </div>

          <div className="text-sm xl:text-base md:absolute h-fit md:max-h-[45%] md:w-[135%] md:z-10 md:top-1/2 md:right-0 md:bg-gray-700 md:shadow-md md:rounded-md p-1 md:py-2 md:px-3 xl:p-5 md:shadow-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            consequatur, error et maxime, explicabo, eius rerum nulla magnam id
            dolor cum ex accusantium debitis. Eligendi ex perspiciatis odit
            dolorum hic?
          </div>
        </div>
      </div>

      {/* <div className="relative flex overflow-x-hidden max-w-full">
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="text-4xl mx-4">Marquee Item 1</span>
          <span className="text-4xl mx-4">Marquee Item 2</span>
          <span className="text-4xl mx-4">Marquee Item 3</span>
          <span className="text-4xl mx-4">Marquee Item 4</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="text-4xl mx-4">Marquee Item 1</span>
          <span className="text-4xl mx-4">Marquee Item 2</span>
          <span className="text-4xl mx-4">Marquee Item 3</span>
          <span className="text-4xl mx-4">Marquee Item 4</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
        </div>
      </div> */}
      <div className="flex gap-8 flex-wrap justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
