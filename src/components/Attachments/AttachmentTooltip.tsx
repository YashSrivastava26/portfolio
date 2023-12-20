"use client";
import { attachments } from "@/data/attachments";
import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { IconBaseProps } from "react-icons";
import { cn } from "@/lib/utils";

interface AttachmentTooltipProps extends IconBaseProps {
  animate?: boolean;
  containerClass?: string;
}

const AttachmentTooltip: FC<AttachmentTooltipProps> = ({
  animate,
  containerClass = "",
  ...props
}) => {
  return (
    <>
      {attachments.map((attachment, idx) => {
        return (
          <TooltipProvider key={idx}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={attachment.url}
                  className={cn(
                    containerClass,
                    animate
                      ? `animate-[slide-in-top_1s_ease-in-out_1s_both]`
                      : ""
                  )}
                  style={{ animationDelay: `${1.35 + idx * 0.15}s` }}
                  aria-label={attachment.name}
                >
                  <attachment.icon {...props} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8}>
                <p>{attachment.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </>
  );
};

export default AttachmentTooltip;
