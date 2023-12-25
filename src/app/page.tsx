import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
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
