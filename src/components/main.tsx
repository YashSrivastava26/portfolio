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
import MobileNavbar from "./MobileNavbar";
import useMediaQuery from "@/hooks/use-media-query";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { ref: footerRef, inView: footerInView } = useInView();
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(true);
  useEffect(() => {
    setShowLoader(true);
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (footerInView) setShowMobileNavbar(false);
    else setShowMobileNavbar(true);
  }, [footerInView]);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          {!isDesktop ? (
            <>{showMobileNavbar ? <MobileNavbar /> : null}</>
          ) : (
            <>
              <Navbar />
              <Attachments />
            </>
          )}

          <div className="md flex flex-col items-center gap-20 w-screen max-w-7xl overflow-x-hidden">
            <Hero />
            <Encryption />
            <Project />
            <Skills />
            <Contact />
            <Footer ref={footerRef} />
          </div>
          <StarsCanvas />
        </>
      )}
    </>
  );
};

export default Main;
