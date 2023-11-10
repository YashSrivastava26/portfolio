import Attachments from "@/components/Attachments";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="relative z-0 min-h-screen ">
      <Attachments />
      <Navbar />
      <Hero />

      {/* about */}

      {/* experince */}

      {/* skills */}

      {/* projects */}
      <Project />

      {/* <div className="z-0">
        contact
        <Contact />
      </div> */}
    </div>
  );
}
