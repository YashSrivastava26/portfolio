"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/button";
import { ToggleTheme } from "./ToggleTheme";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="px-2 w-full flex items-center py-2 fixed top-0 z-10 bg-tertiary/70 backdrop-blur-lg ">
      <div className="w-full flex justify-between  items-center max-w-7xl mx-auto">
        <Link
          href="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src="/signature-.png"
            alt="logo"
            width={753}
            height={186}
            className="h-10 w-40 text-teal-600"
          />
        </Link>

        <div className="flex">
          <Link
            href="#contact"
            className={buttonVariants({ variant: "ghost" })}
          >
            About Me
          </Link>
          <Link
            href="#contact"
            className={buttonVariants({ variant: "ghost" })}
          >
            Experince
          </Link>
          <Link
            href="#contact"
            className={buttonVariants({ variant: "ghost" })}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={buttonVariants({ variant: "ghost" })}
          >
            Contact Me
          </Link>

          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
