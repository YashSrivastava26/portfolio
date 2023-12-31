import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { FaUserCog, FaUserTie } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
interface MobileNavbarProps {}
type MobileNavbarContent = {
  icon: ReactNode;
  name: string;
  link: string;
};

const MobileNavbar: FC<MobileNavbarProps> = ({}) => {
  const indicatorDivRef = useRef<HTMLDivElement>(null);
  const [translateDistance, setTranslateDistance] = useState(0);
  const [activeLiIndex, setActiveLiIndex] = useState<number>(0);
  const MobileNavbarContent: MobileNavbarContent[] = [
    {
      icon: <FaUserTie className="h-6 w-6" />,
      name: "About me",
      link: "about-me",
    },
    {
      icon: <HiOutlineClipboardDocumentList className="h-6 w-6" />,
      name: "Projects",
      link: "projects",
    },
    {
      icon: <FaUserCog className="h-6 w-6" />,
      name: "Skills",
      link: "skills",
    },
    {
      icon: <FiMail className="h-6 w-6" />,
      name: "Contact",
      link: "contact",
    },
  ];
  const liRefs = useRef<HTMLLIElement[]>([]);

  const handleLiClick = (index: number, id: string) => {
    setActiveLiIndex(index);
    window.scrollTo({
      top: document.getElementById(id)?.offsetTop,
      behavior: "smooth",
    });
  };

  const calculateTranslateDistance = (activeLiIndex: number) => {
    if (indicatorDivRef.current && liRefs.current[activeLiIndex]) {
      const indicatorDivLeft =
        indicatorDivRef.current.getBoundingClientRect().left;

      const liLeft = liRefs.current[activeLiIndex].getBoundingClientRect().left;
      setTranslateDistance(liLeft - indicatorDivLeft + translateDistance);
    }
  };
  useEffect(() => {
    calculateTranslateDistance(activeLiIndex);
  }, [activeLiIndex]);

  useEffect(() => {
    const handleResize = () => {
      calculateTranslateDistance(activeLiIndex);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeLiIndex, handleLiClick]);

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !liRefs.current.includes(el)) {
      liRefs.current.push(el);
    }
  };

  return (
    <>
      <nav
        className={cn(
          "h-16 fixed bottom-0 w-full z-40 p-2 rounded-lg text-muted-foreground ",
          poppins.className
        )}
      >
        <div className="relative h-full w-full flex justify-center items-center shadow-lg shadow-[#2A0E61]/50 bg-muted backdrop-blur-md rounded-xl">
          <ul className="flex justify-around items-center w-full list-none">
            {MobileNavbarContent.map((item, index) => (
              <li
                key={index}
                ref={addToRefs}
                onClick={() => handleLiClick(index, item.link)}
                className="relative z-50 group h-full w-14 flex items-center justify-center flex-col  text-center font-medium"
              >
                <div
                  className={cn(
                    "relative text-lg leading-[4rem] duration-500 h-full",
                    {
                      "-translate-y-7 text-white": activeLiIndex === index,
                    }
                  )}
                >
                  {item.icon}
                </div>

                <span
                  className={cn(
                    "absolute whitespace-nowrap font-normal text-xs w-fit tracking-wider duration-500 opacity-0 translate-y-3 text-white",
                    {
                      "opacity-100": activeLiIndex === index,
                    }
                  )}
                >
                  {item.name}
                </span>
              </li>
            ))}
            <div
              className="absolute w-12 h-12 bg-transparent shadow-[8px_8px_50px_0] shadow-black -top-7 rounded-full duration-500 z-[39]"
              style={{
                transform: `translateX(${translateDistance}px)`,
              }}
            />
            <div
              ref={indicatorDivRef}
              className="absolute -top-8 w-14 h-14 bg-gradient-to-b from-transparent to-black rounded-[100%] p-1 duration-500"
              style={{
                transform: `translateX(${translateDistance}px)`,
              }}
            >
              <div className="absolute w-[10px] h-3 bg-black top-8 -left-[7px] rounded-tr-sm " />
              <div className="absolute w-3 h-3 bg-muted top-8 -left-2 rounded-tr-full" />
              <div className="absolute w-[10px] h-3 bg-black top-8 -right-1.5 rounded-tl-md" />
              <div className="absolute w-3 h-3 bg-muted top-8 -right-2 rounded-tl-full" />
              <div className="w-full h-full bg-primary rounded-full" />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
