"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import Logo from "./Logo";
import { buttonVariants } from "./ui/button";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="hidden md:block w-full h-16 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-40 px-10">
      <div className="flex h-full w-full justify-between  items-center max-w-7xl m-auto">
        <Link
          href="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Logo className="h-12 w-fit !stroke-white" />
        </Link>

        <div className="flex">
          <Link
            href="#about-me"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hover:shadow-[inset_0_0_20px] !shadow-primary shadow-none outline outline-none hover:outline-1 hover:outline-primary/70 hover:bg-transparent outline-offset-0 rounded-xl"
            )}
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("about-me")?.offsetTop,
                behavior: "smooth",
              });
            }}
          >
            About Me
          </Link>
          <Link
            href="#about-me"
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("about-me")?.offsetTop,
                behavior: "smooth",
              });
            }}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hover:shadow-[inset_0_0_20px] !shadow-primary shadow-none outline outline-none hover:outline-1 hover:outline-primary/70 hover:bg-transparent outline-offset-0 rounded-xl"
            )}
          >
            Experince
          </Link>
          <Link
            href="#projects"
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("projects")?.offsetTop,
                behavior: "smooth",
              });
            }}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hover:shadow-[inset_0_0_20px] !shadow-primary shadow-none outline outline-none hover:outline-1 hover:outline-primary/70 hover:bg-transparent outline-offset-0 rounded-xl"
            )}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("contact")?.offsetTop,
                behavior: "smooth",
              });
            }}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hover:shadow-[inset_0_0_20px] !shadow-primary shadow-none outline outline-none hover:outline-1 hover:outline-primary/70 hover:bg-transparent outline-offset-0 rounded-xl"
            )}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
