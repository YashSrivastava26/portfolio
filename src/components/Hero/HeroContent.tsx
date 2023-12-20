"use client";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/animation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC, useContext } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import { LoadingContext } from "../Providers/Loading";
import { buttonVariants } from "../ui/button";
interface HeroContentProps {}

const HeroContent: FC<HeroContentProps> = ({}) => {
  const { setLoading } = useContext(LoadingContext);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-8 md:px-20 w-full z-10"
    >
      <div className="flex flex-col justify-center gap-5 h-full w-full m-auto text-start">
        <motion.div
          variants={slideInFromTop(0.2)}
          className="hero-box py-2 pr-3 pl-2 border border-[#7042f88b] opacity-[0.9]"
        >
          <HiOutlineSparkles className="text-[#b49bff] h-4 w-4 mr-2 md:mr-3 md:h-5 md:w-5" />
          <h1 className="hero-text text-xs md:text-sm">Portfolio</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.2)}
          className="flex flex-col gap-4 mt-2 md:mt-4 text-xl md:text-4xl font-bold text-primary-foreground md:max-w-[600px] w-auto h-auto"
        >
          <span>
            Crafting Digital Realities: Journey with me!{" "}
            <span className="text-transparent text-2xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Yash Srivastava
            </span>{" "}
            through Code.
          </span>
          <motion.p
            className="text-lg text-muted-foreground md:my-5 max-w-[600px] "
            variants={slideInFromLeft(0.4)}
          >
            I&apos;m a Full Stack Developer
          </motion.p>
        </motion.div>
        <motion.a
          variants={slideInFromLeft(0.6)}
          className={cn(
            buttonVariants(),
            "p-[1px]  text-center  cursor-pointer rounded-xl w-fit h-fit bg-primary/70 hover:bg-primary/90"
          )}
        >
          <div className="w-full h-full bg-background rounded-xl py-2 flex items-center justify-center shadow-[inset_0_0_20px] shadow-primary/60 hover:shadow-primary/70 px-4 md:px-8 text-xs md:text-base">
            Know More!
          </div>
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="mt-36 md:mt-0 w-full h-fit md:h-full flex flex-col justify-center items-center relative"
      >
        <div className="absolute w-[70%] h-[75%] z-[-1] top-[10%]">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            id="blobSvg"
          >
            <path fill="#a855f7">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M442.5,312.5Q444,375,391.5,410.5Q339,446,277,470.5Q215,495,152,465.5Q89,436,67.5,373Q46,310,39,248Q32,186,83.5,151.5Q135,117,179.5,91.5Q224,66,287.5,47Q351,28,405,72Q459,116,450,183Q441,250,442.5,312.5Z;
                M445.5,316.5Q457,383,399.5,417Q342,451,283,440Q224,429,159,430Q94,431,77,368.5Q60,306,70.5,253Q81,200,85,132Q89,64,154,49Q219,34,275.5,52.5Q332,71,390.5,96.5Q449,122,441.5,186Q434,250,445.5,316.5Z;
                M448.5,301Q408,352,379.5,411.5Q351,471,284,473.5Q217,476,174,431.5Q131,387,84,350Q37,313,56.5,256Q76,199,87,136.5Q98,74,156.5,40Q215,6,271,44Q327,82,362.5,118.5Q398,155,443.5,202.5Q489,250,448.5,301Z;
                M437.5,306Q424,362,382,405Q340,448,282,438.5Q224,429,178,407.5Q132,386,71.5,353Q11,320,17.5,252Q24,184,77,148Q130,112,174.5,73Q219,34,285.5,30.5Q352,27,403,73Q454,119,452.5,184.5Q451,250,437.5,306Z;
                M453,306Q425,362,387,414.5Q349,467,287,446Q225,425,156,431.5Q87,438,51,378.5Q15,319,21,252Q27,185,78,148Q129,111,172.5,63.5Q216,16,283.5,22Q351,28,404,72.5Q457,117,469,183.5Q481,250,453,306Z;
                M452,312.5Q445,375,388.5,402.5Q332,430,278.5,427Q225,424,161,425.5Q97,427,54,373.5Q11,320,23,253.5Q35,187,82.5,149.5Q130,112,172.5,58Q215,4,276.5,30.5Q338,57,386.5,94Q435,131,447,190.5Q459,250,452,312.5Z;
                M473.5,317Q459,384,402,420.5Q345,457,283,453.5Q221,450,174.5,420.5Q128,391,90.5,349.5Q53,308,43.5,247.5Q34,187,81.5,148.5Q129,110,175.5,84.5Q222,59,281.5,55Q341,51,400.5,83Q460,115,474,182.5Q488,250,473.5,317Z;
                M456.5,303.5Q417,357,383,412.5Q349,468,286.5,448.5Q224,429,169,418Q114,407,85,357Q56,307,63.5,252Q71,197,95,148Q119,99,167,51.5Q215,4,272.5,39.5Q330,75,368.5,112Q407,149,451.5,199.5Q496,250,456.5,303.5Z;
                M442.5,312.5Q444,375,391.5,410.5Q339,446,277,470.5Q215,495,152,465.5Q89,436,67.5,373Q46,310,39,248Q32,186,83.5,151.5Q135,117,179.5,91.5Q224,66,287.5,47Q351,28,405,72Q459,116,450,183Q441,250,442.5,312.5Z;"
              ></animate>
            </path>
          </svg>
        </div>
        <div className="absolute w-[70%] h-[75%] z-[-1] top-[10%] blur-3xl">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            id="blobSvg"
          >
            <path fill="#a855f7">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M442.5,312.5Q444,375,391.5,410.5Q339,446,277,470.5Q215,495,152,465.5Q89,436,67.5,373Q46,310,39,248Q32,186,83.5,151.5Q135,117,179.5,91.5Q224,66,287.5,47Q351,28,405,72Q459,116,450,183Q441,250,442.5,312.5Z;
                M445.5,316.5Q457,383,399.5,417Q342,451,283,440Q224,429,159,430Q94,431,77,368.5Q60,306,70.5,253Q81,200,85,132Q89,64,154,49Q219,34,275.5,52.5Q332,71,390.5,96.5Q449,122,441.5,186Q434,250,445.5,316.5Z;
                M448.5,301Q408,352,379.5,411.5Q351,471,284,473.5Q217,476,174,431.5Q131,387,84,350Q37,313,56.5,256Q76,199,87,136.5Q98,74,156.5,40Q215,6,271,44Q327,82,362.5,118.5Q398,155,443.5,202.5Q489,250,448.5,301Z;
                M437.5,306Q424,362,382,405Q340,448,282,438.5Q224,429,178,407.5Q132,386,71.5,353Q11,320,17.5,252Q24,184,77,148Q130,112,174.5,73Q219,34,285.5,30.5Q352,27,403,73Q454,119,452.5,184.5Q451,250,437.5,306Z;
                M453,306Q425,362,387,414.5Q349,467,287,446Q225,425,156,431.5Q87,438,51,378.5Q15,319,21,252Q27,185,78,148Q129,111,172.5,63.5Q216,16,283.5,22Q351,28,404,72.5Q457,117,469,183.5Q481,250,453,306Z;
                M452,312.5Q445,375,388.5,402.5Q332,430,278.5,427Q225,424,161,425.5Q97,427,54,373.5Q11,320,23,253.5Q35,187,82.5,149.5Q130,112,172.5,58Q215,4,276.5,30.5Q338,57,386.5,94Q435,131,447,190.5Q459,250,452,312.5Z;
                M473.5,317Q459,384,402,420.5Q345,457,283,453.5Q221,450,174.5,420.5Q128,391,90.5,349.5Q53,308,43.5,247.5Q34,187,81.5,148.5Q129,110,175.5,84.5Q222,59,281.5,55Q341,51,400.5,83Q460,115,474,182.5Q488,250,473.5,317Z;
                M456.5,303.5Q417,357,383,412.5Q349,468,286.5,448.5Q224,429,169,418Q114,407,85,357Q56,307,63.5,252Q71,197,95,148Q119,99,167,51.5Q215,4,272.5,39.5Q330,75,368.5,112Q407,149,451.5,199.5Q496,250,456.5,303.5Z;
                M442.5,312.5Q444,375,391.5,410.5Q339,446,277,470.5Q215,495,152,465.5Q89,436,67.5,373Q46,310,39,248Q32,186,83.5,151.5Q135,117,179.5,91.5Q224,66,287.5,47Q351,28,405,72Q459,116,450,183Q441,250,442.5,312.5Z;"
              ></animate>
            </path>
          </svg>
        </div>
        <div className="h-56 w-32 md:h-96 md:w-96">
          <Image
            src="/glaxy.png"
            alt="Hero Image"
            fill
            className="object-fill"
            priority
            onLoad={(e) => {
              setLoading(false);
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
