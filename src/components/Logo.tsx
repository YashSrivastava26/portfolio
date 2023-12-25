"use client";
import { LucideProps } from "lucide-react";
import { Icons } from "./Icons";

const Logo = (props: LucideProps) => {
  return (
    <>
      <Icons.loader {...props} />

      <style>
        {`
      @-webkit-keyframes animate-svg-stroke-1 {
        0% {
          stroke-dashoffset: 73.42996215820312px;
          stroke-dasharray: 73.42996215820312px;
        }
      
        100% {
          stroke-dashoffset: 0;
          stroke-dasharray: 73.42996215820312px;
        }
      }
      
      @keyframes animate-svg-stroke-1 {
        0% {
          stroke-dashoffset: 73.42996215820312px;
          stroke-dasharray: 73.42996215820312px;
        }
      
        100% {
          stroke-dashoffset: 0;
          stroke-dasharray: 73.42996215820312px;
        }
      }
      
      .loader-1 {
        -webkit-animation: animate-svg-stroke-1 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
                animation: animate-svg-stroke-1 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
      }
      
      @-webkit-keyframes animate-svg-stroke-2 {
        0% {
          stroke-dashoffset: 651.848388671875px;
          stroke-dasharray: 651.848388671875px;
        }
      
        100% {
          stroke-dashoffset: 0;
          stroke-dasharray: 651.848388671875px;
        }
      }
      
      @keyframes animate-svg-stroke-2 {
        0% {
          stroke-dashoffset: 651.848388671875px;
          stroke-dasharray: 651.848388671875px;
        }
      
        100% {
          stroke-dashoffset: 0;
          stroke-dasharray: 651.848388671875px;
        }
      }
      
      .loader-2 {
        -webkit-animation: animate-svg-stroke-2 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
                animation: animate-svg-stroke-2 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
      }
      
      
    `}
      </style>
    </>
  );
};

export default Logo;
