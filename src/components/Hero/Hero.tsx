"use client";
import { FC } from "react";
import HeroContent from "./HeroContent";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-full w-full min-h-screen"
      id="home"
    >
      <video
        autoPlay
        muted
        loop
        className="absolute rotate-180 -translate-y-[50%] top-16 left-0 z-[1] md:h-full h-1/2 w-full object-cover"
      >
        <source
          src="https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/blackhole.webm"
          type="video/webm"
        />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
