import { MainProject, mainProject } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Carousel, { DotProps, ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface ProjectImagesProps {
  arrowDir: "left" | "right";
  project: MainProject;
}

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}

const ProjectImages: FC<ProjectImagesProps> = ({ arrowDir, project }) => {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  const CarouselNavigation = ({ next, previous }: CarouselButtonGroupProps) => {
    return (
      <div
        className={cn("flex absolute items-end p-1 gap-x-1 bottom-0 z-30", {
          "left-0": arrowDir === "left",
          "right-0": arrowDir === "right",
        })}
      >
        <FaAngleLeft
          className={cn(
            "bg-background/70 h-5 w-5 cursor-pointer z-30 rounded-[4px]",
            {
              "group-hover:text-background group-hover:bg-muted-foreground/60":
                project.theme === "dark",
            }
          )}
          onClick={() => {
            if (previous) previous();
          }}
        />
        <FaAngleRight
          className={cn(
            "bg-background/70 h-5 w-5 cursor-pointer z-30 rounded-[4px]",
            {
              "group-hover:text-background group-hover:bg-muted-foreground/60":
                project.theme === "dark",
            }
          )}
          onClick={() => {
            if (next) next();
          }}
        />
      </div>
    );
  };

  const CustomDot = ({ onClick, ...rest }: DotProps) => {
    const { active } = rest;
    return (
      <button
        className={cn(
          "h-0.5 rounded-md transition-all duration-500 ease-in-out",
          {
            "bg-secondary-foreground w-6 group-hover:bg-primary":
              active && project.theme === "light",
            "bg-secondary w-4 group-hover:bg-muted/60":
              !active && project.theme === "light",
            "bg-primary w-6": active && project.theme === "dark",
            "bg-secondary-foreground w-4": !active && project.theme === "dark",
          }
        )}
        onClick={() => {
          if (onClick) onClick();
        }}
      />
    );
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      arrows={false}
      customButtonGroup={<CarouselNavigation />}
      dotListClass="bg-transparent gap-x-2 !mb-1"
      customDot={<CustomDot />}
    >
      {project.image.map((img, idx) => (
        <div className="w-full h-96 z-[5]" key={idx}>
          <Image
            src={img}
            alt={project.name}
            fill
            className="shadow-sm shadow-gray-600 rounded-md grayscale group-hover:grayscale-0"
          />
          <Link
            href={project.url || project.github}
            target="_blank"
            className="absolute w-full h-full top-0 left-0 rounded-md bg-indigo-500 opacity-50 group-hover:opacity-0 delay-75 transition-opacity duration-200"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectImages;
