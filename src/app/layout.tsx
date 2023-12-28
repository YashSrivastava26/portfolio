import { constructMetaData } from "@/lib/metadata";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "black",
};
export const metadata = constructMetaData();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "overflow-y-scroll overflow-x-hidden bg-[#030014] scrollbar-thumb-primary scrollbar-thumb-rounded-md scrollbar-track-primary scrollbar-w-2 scrolling-touch"
        )}
      >
        {children}
        <Toaster position="bottom-center" reverseOrder={false} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
