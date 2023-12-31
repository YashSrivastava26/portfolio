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
  footerIcons?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
}

const AttachmentTooltip: FC<AttachmentTooltipProps> = ({
  animate,
  containerClass = "",
  side,
  footerIcons,
  sideOffset,
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
                  {footerIcons && attachment.footerIcon ? (
                    <attachment.footerIcon {...props} />
                  ) : (
                    <attachment.icon {...props} />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side={side ?? "bottom"}
                sideOffset={sideOffset ?? 8}
              >
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
