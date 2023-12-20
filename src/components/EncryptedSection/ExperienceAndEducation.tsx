"use client";
import { slideInFromLeft } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import { experience } from "@/data/EducationAndExperince";

const ExperienceAndEducation = () => {
  const [tabOption, settabOption] = useState<"experience" | "education">(
    "experience"
  );

  const [experienceOption, setExperienceOption] = useState<number>(0);
  return (
    <>
      <ul
        className="relative flex list-none mt-8 gap-x-1  w-fit p-1 hero-box border border-muted py-1 opacity-[0.95] !rounded-xl text-sm z-10"
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

      <div className="flex w-full justify-between mt-12">
        <AnimatePresence>
          {tabOption === "experience" ? (
            <motion.ul
              className="relative flex flex-col list-none gap-x-1  w-fit text-base"
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
                    onClick={() => setExperienceOption(idx)}
                  >
                    {exp.company}
                  </div>
                </li>
              ))}
            </motion.ul>
          ) : (
            <EducationCard />
          )}
        </AnimatePresence>
        {tabOption === "experience" && (
          <div className="flex w-full flex-col pl-4 py-1 gap-y-2">
            {experience.map((exp, i) => {
              if (experienceOption === i) {
                return <ExperienceCard experince={exp} />;
              }
              return null;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ExperienceAndEducation;
