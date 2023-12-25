import { FC } from "react";
import AttachmentTooltip from "./Attachments/AttachmentTooltip";
import Logo from "./Logo";
import ResumeDownLoad from "./ResumeDownLoad";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className="h-full w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <Logo className="h-auto 2xl:w-[15%] xl:w-[20%] lg:w-[25%] md:w-[30%] sm:w-[35%] w-[40%]" />

      <div className="flex items-center justify-center text-muted-foreground text-base gap-8 relative text-center">
        <p>Preparing my journey. . . Are you ready?</p>
      </div>

      <div>
        <h1 className="hero-text text-center m-4">Check these out</h1>
        <div className="flex items-center justify-center gap-x-6 md:gap-x-8">
          <AttachmentTooltip animate className="h-8 w-8 text-primary/80" />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="animate-[slide-in-top_1s_ease-in-out_1.95s_both]">
                  <ResumeDownLoad className="h-8 w-8 fill-primary cursor-pointer" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8}>
                <p>Resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Loader;
