"use client";
import { slideInFromTop } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Caveat } from "next/font/google";
import Image from "next/image";
import { FC, useState } from "react";
import AboutMe from "./AboutMe";
interface EncryptionProps {}
const caveat = Caveat({
  subsets: ["latin"],
});

const Encryption: FC<EncryptionProps> = ({}) => {
  const [lockOpen, setLockOpen] = useState<boolean>(false);
  const [videoEnded, setVideoEnded] = useState<boolean>(false);
  const [displayAboutMe, setDisplayAboutMe] = useState<boolean>(false);

  const openLockOnClick = () => {
    setLockOpen(true);
  };
  const handleVideoEnded = () => {
    if (lockOpen) {
      setVideoEnded(true);
    } else {
      setVideoEnded(false);
    }
  };
  return (
    <section
      id="about-me"
      className="flex flex-col h-screen relative items-center justify-center w-full z-10 pt-16"
    >
      {displayAboutMe && <AboutMe />}
      <AnimatePresence
        onExitComplete={() => setDisplayAboutMe(videoEnded || lockOpen)}
      >
        {!videoEnded && (
          <motion.div
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1 }}
            className="w-full h-full flex flex-col items-center justify-start relative bg-transparent"
          >
            <div className="mt-8 w-screen h-full z-[5] overflow-hidden">
              <motion.div
                variants={slideInFromTop(0.35)}
                className="flex justify-center gap-x-2 items-center font-medium text-center text-secondary-foreground w-full mt-8 text-2xl xl:text-4xl"
              >
                Performance
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  &amp;
                </span>{" "}
                Security
              </motion.div>

              <motion.div
                variants={slideInFromTop(0.5)}
                exit={{ opacity: 0, scale: 0.5 }}
                className={cn(
                  "text-xl text-secondary mt-4 text-center font-semibold text-[#b49bff]",
                  caveat.className
                )}
              >
                Data is Encrypted click on the lock to open it
              </motion.div>
            </div>

            <motion.div
              transition={{ duration: 1 }}
              className="absolute top-[30%] md:top-[25%] xl:top-[20%] w-screen md:w-full h-fit flex items-start justify-center overflow-hidden"
            >
              <video
                loop={!lockOpen}
                muted
                autoPlay
                playsInline
                preload="false"
                className=" w-[150vw] md:w-[70%] 2xl:w-full h-auto z-[-1] !max-w-none"
                src="https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/encryption.webm"
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
                    className={cn(
                      "translate-y-3 md:translate-y-4 2xl:translate-y-7 transition-all duration-200 w-[40px] md:w-[50px] 2xl:w-[70px] h-auto",
                      {
                        "translate-y-1 md:translate-y-2 2xl:translate-y-3 -translate-x-6 2xl:-translate-x-7 -rotate-45":
                          lockOpen,
                        "group-hover:translate-y-2 md:group-hover:translate-y-3 2xl:group-hover:translate-y-5":
                          !lockOpen,
                      }
                    )}
                  />
                  <Image
                    src="/LockMain.png"
                    alt="lock"
                    width={70}
                    height={70}
                    className="h-auto w-[50px] md:w-[60px] 2xl:w-[80px] z-10"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Encryption;
