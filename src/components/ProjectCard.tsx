import { FC } from "react";
import carrent from "../assets/project img.png";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import figma from "../assets/tech/figma.png";
import docker from "../assets/tech/docker.png";
interface ProjectCardProps {}

const ProjectCard: FC<ProjectCardProps> = ({}) => {
  return (
    <div className="group max-w-xs xl:max-w-[25rem] bg-gradient-to-r from-green-500 to-pink-500 p-[1px] rounded-2xl shadow-card hover:-translate-y-1 opacity-90 hover:opacity-100">
      <div className=" bg-secondary rounded-2xl py-5 px-12 min-h-[280px] flex justify-between items-center flex-col">
        <Image
          src={carrent}
          alt=""
          className="rounded-xl object-contain h-36"
        />

        <div className="flex items-center w-full justify-between">
          <h1 className="text-2xl tracking-wider font-semibold text-secondary-foreground hover:text-primary">
            Weathersy
          </h1>
          <div className="flex items-center gap-x-2">
            <ExternalLink className="hover:text-primary hover:animate-pulse cursor-pointer" />
            <Github className="hover:text-primary hover:animate-pulse cursor-pointer" />
          </div>
        </div>
        <div className="text-sm  text-muted-foreground/80 font-semibold group-hover:text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          harum, enim atque maxime repellat at animi modi expedita rerum.
          Suscipit!
          <ul className="list-disc">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              eius?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              eius?
            </li>
          </ul>
        </div>

        <div className="tracking-wide mt-4 text-base w-full">Tech Stack:</div>
        <div className="relative flex overflow-x-hidden w-full">
          <div className="flex py-4 animate-marquee whitespace-nowrap">
            <div className="mx-2 h-8 w-8 ">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
            <div className="mx-2 h-8 w-8 ">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
            <div className="mx-2 h-8 w-8 ">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
            <div className="mx-2 h-8 w-8 ">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
            <div className="mx-2 h-8 w-8 ">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
            <div className="mx-2 h-8 w-8 ">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
          </div>

          <div className="absolute flex top-0 py-4 animate-marquee2 whitespace-nowrap">
            <div className="mx-2 h-8 w-8">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
            <div className="mx-2 h-8 w-8 ">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
            <div className="mx-2 h-8 w-8 ">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
            <div className="mx-2 h-8 w-8 ">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
            <div className="mx-2 h-8 w-8 ">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
            <div className="mx-2 h-8 w-8 ">
              <Image src={figma} alt="figma" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
