"use client";
import { experience } from "@/data/EducationAndExperince";
import { slideInFromLeft } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroupProps } from "react-multi-carousel/lib/types";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}

const ExperienceAndEducation = () => {
  const [tabOption, settabOption] = useState<"experience" | "education">(
    "experience"
  );

  const [experienceOption, setExperienceOption] = useState<number>(0);
  let carouselRef: Carousel | null = null;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CarouselNavigation = ({
    next,
    previous,
    ...rest
  }: CarouselButtonGroupProps) => {
    const { carouselState } = rest;
    return (
      <div className="w-full flex items-center justify-between absolute z-[-1]">
        <LuArrowLeftCircle
          className={cn("text-muted-foreground h-5 w-5 cursor-pointer z-30", {
            "text-secondary":
              carouselState === undefined || carouselState?.currentSlide === 0,
          })}
          onClick={() => {
            if (previous) previous();
          }}
        />
        <LuArrowRightCircle
          className={cn("text-muted-foreground h-5 w-5 cursor-pointer z-30", {
            "text-secondary":
              carouselState === undefined ||
              carouselState?.currentSlide === carouselState.totalItems - 1,
          })}
          onClick={() => {
            if (next) next();
          }}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-start justify-start w-full h-full mt-4 2xl:mt-8 gap-4 2xl:gap-8">
      <ul
        className="relative flex list-none gap-x-1  w-fit p-1 hero-box border border-muted py-1 opacity-[0.95] !rounded-xl text-sm z-10"
        data-tabs="tabs"
        role="list"
      >
        <li className="z-20 text-center rounded-lg">
          <div
            className={cn(
              "text-white flex w-full cursor-pointer items-center justify-center px-8 py-0.5 rounded-lg ",
              {
                "shadow-[inset_0_0_20px] !shadow-primary  outline outline-1 outline-primary/70 bg-transparent":
                  tabOption === "experience",
                "shadow-none outline-none": tabOption !== "experience",
              }
            )}
            onClick={() => settabOption("experience")}
          >
            Experience
          </div>
        </li>
        <li className="z-20 text-center rounded-lg">
          <div
            className={cn(
              "text-white flex w-full cursor-pointer items-center justify-center px-8 py-0.5 rounded-lg ",
              {
                "shadow-[inset_0_0_20px] !shadow-primary  outline outline-1 outline-primary/70 bg-transparent":
                  tabOption === "education",
                "shadow-none outline-none": tabOption !== "education",
              }
            )}
            onClick={() => settabOption("education")}
          >
            Education
          </div>
        </li>
      </ul>

      <div className="flex flex-col lg:flex-row w-full items-center justify-between relative">
        <AnimatePresence>
          {tabOption === "experience" ? (
            <>
              <motion.ul
                className="relative hidden lg:flex flex-col list-none gap-x-1  w-fit text-base"
                variants={slideInFromLeft(0.2)}
              >
                {experience.map((exp, idx) => (
                  <li
                    className={cn(
                      "relative z-20 flex text-center border-l-2 py-1",
                      {
                        "border-primary/60 border-l-[2.23px]":
                          experienceOption === idx,
                        "border-muted": experienceOption !== idx,
                      }
                    )}
                    key={idx}
                  >
                    <div
                      className={cn(
                        "flex w-full cursor-pointer items-center  mx-4 py-0.5  ",
                        {
                          "text-primary/90 backdrop-blur-sm font-medium":
                            experienceOption === idx,
                          "text-muted-foreground": experienceOption !== idx,
                        }
                      )}
                      onClick={() => {
                        carouselRef?.goToSlide(idx);
                        setExperienceOption(idx);
                      }}
                    >
                      {exp.company}
                    </div>
                  </li>
                ))}
              </motion.ul>
              <div className="w-full lg:hidden">
                <Carousel
                  swipeable={true}
                  draggable={true}
                  responsive={responsive}
                  ssr={true}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  transitionDuration={1000}
                  containerClass="carousel-container"
                  itemClass="carousel-item-padding-40-px"
                  ref={(e) => (carouselRef = e)}
                  beforeChange={(nextSlide, state) =>
                    setExperienceOption(nextSlide)
                  }
                  arrows={false}
                  customButtonGroup={<CarouselNavigation />}
                >
                  {experience.map((exp, idx) => (
                    <div className="w-full text-center" key={idx}>
                      {exp.company}
                    </div>
                  ))}
                </Carousel>
              </div>
            </>
          ) : (
            <EducationCard />
          )}
        </AnimatePresence>
        {tabOption === "experience" && (
          <div className="flex w-full flex-col pl-4 py-1 gap-y-2">
            {experience.map((exp, i) => {
              if (experienceOption === i) {
                return <ExperienceCard experince={exp} key={i} />;
              }
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceAndEducation;
