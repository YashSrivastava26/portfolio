import { Html, useProgress } from "@react-three/drei";
import { FC } from "react";

interface CanvasLoaderProps {}

const CanvasLoader: FC<CanvasLoaderProps> = ({}) => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="text-xs w-4 h-4 rounded-full relative -ml-2.5 animate-spin duration-1100 infinite ease-linear transform translate-z-0"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
