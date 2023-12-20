import { IconType } from "react-icons";
import {
  SiGeeksforgeeks,
  SiGithub,
  SiLeetcode,
  SiLinkedin,
} from "react-icons/si";

type Attachment = {
  name: string;
  url: string;
  icon: IconType;
};
export const attachments: Attachment[] = [
  {
    name: "Github",
    url: "https://github.com/YashSrivastava26",
    icon: SiGithub,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/yashsrivastava2603/",
    icon: SiLinkedin,
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/yashsrivastava2603/",
    icon: SiLeetcode,
  },
  {
    name: "GeeksforGeeks",
    url: "https://auth.geeksforgeeks.org/user/yashsrivastava2603",
    icon: SiGeeksforgeeks,
  },
];
