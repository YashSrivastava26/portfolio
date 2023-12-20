"use client";
import { Paperclip } from "lucide-react";
import { FC } from "react";
import ResumeDownLoad from "../ResumeDownLoad";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import AttachmentTooltip from "./AttachmentTooltip";

interface AttachmentsProps {}

const Attachments: FC<AttachmentsProps> = ({}) => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Popover>
        <PopoverTrigger className="z-50">
          <Paperclip className="bg-primary text-primary-foreground h-10 w-10 p-2.5 shadow-md hover:shadow-xl rounded-full z-50" />
        </PopoverTrigger>
        <PopoverContent
          side="top"
          className="bg-muted/40 border-0 shadow-none w-fit rounded-full px-2 backdrop-blur-xl"
        >
          <div className="flex gap-0.5 flex-col">
            <AttachmentTooltip
              containerClass="rounded-full hover:bg-secondary p-2 cursor-pointer"
              className="h-6 w-6 text-secondary-foreground "
            />

            <div className="rounded-full hover:bg-secondary p-2">
              <ResumeDownLoad className="h-6 w-6 fill-secondary-foreground" />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Attachments;
