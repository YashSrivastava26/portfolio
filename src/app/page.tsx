import Attachments from "@/components/Attachments/Attachments";
import Contact from "@/components/Contact";
import Encryption from "@/components/EncryptedSection/Encryption";
import Hero from "@/components/Hero/Hero";
import StarsCanvas from "@/components/Models3D/StarsCanvas";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import { LoadingContext } from "@/components/Providers/Loading";
import Skills from "@/components/Skills/Skills";

import { useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
export default function Home() {
  const Main = dynamic(() => import("../components/main"), {
    ssr: false,
    loading: () => (
      <div className="z-50 fixed flex items-center justify-center h-screen w-screen">
        <Loader />
      </div>
    ),
  });
  return (
    <main className="flex flex-col items-center justify-center h-full w-full min-h-screen">
      <Main />
    </main>
  );
}
