import dynamic from "next/dynamic";
export default function Home() {
  const Main = dynamic(() => import("../components/main"));
  return (
    <main className="flex flex-col items-center justify-center h-full w-full min-h-screen">
      <Main />
    </main>
  );
}
