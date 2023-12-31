import { attachments } from "@/data/attachments";
import { FC } from "react";
import AttachmentTooltip from "./Attachments/AttachmentTooltip";
import ResumeDownLoad from "./ResumeDownLoad";
import Logo from "./Logo";
import { Download } from "lucide-react";
import { forwardRef } from "react";
import { downloadResume } from "@/lib/resumeDownload";

interface FooterProps {}

const Footer = forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  return (
    <footer
      className="relative lg:mt-16 lg:pt-8 w-full z-20 p-4 pb-8 bg-muted/90  flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-around "
      ref={ref}
    >
      <div className="flex flex-col items-center lg:items-start-start justify-center gap-4">
        <Logo className="h-auto w-32 text-white" />
        <span className="w-36 lg:w-48 text-center lg:text-left lg:pl-4">
          Not a perfect one, but definitely a unique.
        </span>
      </div>
      <div className="flex items-center lg:items-end flex-col gap-6">
        <div
          className="text-lg cursor-pointer flex items-center justify-center bg-background rounded-full px-6 py-3 shadow-[inset_0_0px_20px] hover:shadow-[inset_0_0px_50px] !shadow-indigo-500 border-indigo-600 border-2"
          onClick={() => {
            downloadResume();
          }}
        >
          <Download className="h-5 w-5 mr-2 text-white" />
          <span className="text-whitey">Resume</span>
        </div>
        <div className="flex gap-x-8 px-16 lg:px-0">
          <AttachmentTooltip
            footerIcons
            side="top"
            sideOffset={4}
            className="h-5 w-5"
            containerClass="p-1.5 border-white border-2 rounded-full text-white hover:text-muted hover:bg-white transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
      <div className="absolute bottom-0 text-sm text-muted-foreground">
        Handcrafted by me &copy; Yash Srivastava
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export default Footer;
