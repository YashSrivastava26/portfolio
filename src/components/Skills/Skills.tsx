import { skills } from "@/data/skills";
import { FC } from "react";
import SkillText from "./SkillText";
import SkillsIcons from "./SkillsIcons";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 scale-90 min-h-screen"
    >
      <SkillText />
      <div className="flex justify-center flex-wrap mt-4 gap-8 items-center z-20">
        {skills.map((skill, index) => {
          return <SkillsIcons src={skill.Image} index={index} key={index} />;
        })}
      </div>
      <div className="w-full h-full absolute flex items-center justify-center bg-cover z-[-10] opacity-30">
        <video
          muted
          autoPlay
          preload="false"
          loop
          playsInline
          className="w-full h-auto min-w-[750px]"
          src="/cards-video.webm"
        />
      </div>
    </section>
  );
};

export default Skills;
