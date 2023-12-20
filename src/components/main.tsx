import { FC } from "react";
import Navbar from "./Navbar";
import Attachments from "./Attachments/Attachments";
import Hero from "./Hero/Hero";
import Encryption from "./EncryptedSection/Encryption";
import Project from "./Project";
import Skills from "./Skills/Skills";
import StarsCanvas from "./Models3D/StarsCanvas";
import Contact from "./Contact";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  return (
    <>
      <Navbar />
      <Attachments />
      <div className="flex flex-col items-center gap-20 w-screen max-w-7xl ">
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
