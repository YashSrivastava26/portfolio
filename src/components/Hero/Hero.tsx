"use client";
import { FC } from "react";
import HeroContent from "./HeroContent";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-screen object-cover"
      id="home"
    >
      <video
        autoPlay
        muted
        loop
        className="absolute rotate-180 top-16 translate-y-[-50%]"
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
