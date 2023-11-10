"use client";
import { FC } from "react";
import {
  SiLeetcode,
  SiGithub,
  SiGeeksforgeeks,
  SiLinkedin,
} from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Paperclip } from "lucide-react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Icons } from "./Icons";

interface AttachmentsProps {}

const Attachments: FC<AttachmentsProps> = ({}) => {
  const downloadResume = () => {
    const pdfPath = "/Yash_Srivastava_Resume.pdf";

    const link = document.createElement("a");

    link.href = pdfPath;

    link.download = "Yash_Srivastava_Resume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  const actions = [
    {
      icon: (
        <div
          className="rounded-full hover:bg-secondary p-2"
          onClick={downloadResume}
        >
          <SiGithub className="h-6 w-6 text-secondary-foreground " />
        </div>
      ),
      name: "Github",
    },
    {
      icon: (
        <div
          className="rounded-full hover:bg-secondary p-2"
          onClick={downloadResume}
        >
          <SiGeeksforgeeks className="h-6 w-6 text-secondary-foreground " />{" "}
        </div>
      ),
      name: "Geeksforgeeks",
    },
    {
      icon: (
        <div
          className="rounded-full hover:bg-secondary p-2"
          onClick={downloadResume}
        >
          <SiLeetcode className="h-6 w-6 text-secondary-foreground " />{" "}
        </div>
      ),
      name: "Leetcode",
    },
    {
      icon: (
        <div
          className="rounded-full hover:bg-secondary p-2"
          onClick={downloadResume}
        >
          <GrLinkedinOption className="h-6 w-6 text-secondary-foreground " />{" "}
        </div>
      ),
      name: "Linkedin",
    },
    {
      icon: (
        <div
          className="rounded-full hover:bg-secondary p-2"
          onClick={downloadResume}
        >
          <Icons.resume className="h-6 w-6 fill-secondary-foreground " />
        </div>
      ),
      name: "Resume",
    },
  ];
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Popover>
        <PopoverTrigger>
          <Paperclip className="bg-primary text-primary-foreground h-10 w-10 p-2.5 shadow-md hover:shadow-xl rounded-full" />
        </PopoverTrigger>
        <PopoverContent
          side="top"
          className="bg-transparent border-0 shadow-none w-fit rounded-full px-2 backdrop-blur-xl"
        >
          <div className="flex gap-0.5 flex-col">
            {actions.map((action) => (
              <TooltipProvider key={action.name}>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger asChild>{action.icon}</TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-muted text-muted-foreground"
                  >
                    {action.name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Attachments;
