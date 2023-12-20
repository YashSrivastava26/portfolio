"use client";
import { slideInFromTop } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import AboutMe from "../AboutMe";
import { MdOutlineEnhancedEncryption } from "react-icons/md";
import { Cedarville_Cursive } from "next/font/google";
interface EncryptionProps {}
const cursive = Cedarville_Cursive({
  weight: ["400"],
  subsets: ["latin"],
});

const Encryption: FC<EncryptionProps> = ({}) => {
  const [lockOpen, setLockOpen] = useState<boolean>(false);
  const [displayAboutMe, setDisplayAboutMe] = useState<boolean>(false);
  useEffect(() => {
    console.log(lockOpen);
  }, [lockOpen]);

  const openLockOnClick = () => {
    setLockOpen(true);
  };
  const handleVideoEnded = () => {
    if (lockOpen) {
      setDisplayAboutMe(true);
    } else {
      console.log("lock closed");
    }
  };
  return (
    <section
      id="about-me"
      className="flex flex-col min-h-screen relative items-center justify-center w-full h-full bg-transparent z-10 py-16"
    >
      {displayAboutMe && <AboutMe />}
      <AnimatePresence>
        {displayAboutMe ? null : (
          <>
            <div className=" w-full h-auto top-8 z-[5]">
              <motion.div
                variants={slideInFromTop(0.35)}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex justify-center gap-x-2 items-center text-4xl font-medium text-center text-secondary-foreground w-full"
              >
                Performance
                <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  &amp;
                </span>{" "}
                Security
              </motion.div>

              <motion.div
                variants={slideInFromTop(0.5)}
                exit={{ opacity: 0, scale: 0.5 }}
                className={cn(
                  "text-xl text-secondary mt-4 text-center font-medium text-[#b49bff]",
                  cursive.className
                )}
              >
                Data is Encrypted click on the lock to open it
              </motion.div>
            </div>

            <motion.div
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-fit flex items-start justify-center relative"
            >
              <video
                loop={!lockOpen}
                muted
                autoPlay
                playsInline
                preload="false"
                className="w-full h-auto z-[-1]"
                src="/encryption.webm/"
                onEnded={handleVideoEnded}
              />
              <motion.div
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center absolute z-20 h-full w-full"
              >
                <div
                  className="flex flex-col group cursor-pointer items-center"
                  onClick={openLockOnClick}
                >
                  <Image
                    src="/LockTop.png"
                    alt="lock"
                    width={60}
                    height={60}
                    className={cn("translate-y-6 transition-all duration-200", {
                      "translate-y-0 -translate-x-6 -rotate-45": lockOpen,
                      "group-hover:translate-y-5": !lockOpen,
                    })}
                  />
                  <Image
                    src="/LockMain.png"
                    alt="lock"
                    width={70}
                    height={70}
                    className="z-10"
                  />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Encryption;
