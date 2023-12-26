"use client";
import { FC, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Attachments from "./Attachments/Attachments";
import Hero from "./Hero/Hero";
import Encryption from "./EncryptedSection/Encryption";
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";
import StarsCanvas from "./Models3D/StarsCanvas";
import Contact from "./Contact";
import Loader from "./Loader";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const [showLoader, setShowLoader] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showLoader && <Loader />}
      <Navbar />
      <Attachments />
      <div className="flex flex-col items-center gap-20 w-screen max-w-7xl overflow-x-hidden">
        <Hero />
        <Encryption />
        <Project />
        <Skills />
        <Contact />
      </div>
      <StarsCanvas />
    </>
  );
};

export default Main;
