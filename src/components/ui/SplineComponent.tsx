import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

const SplineComponent = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full rounded-md flex items-center justify-center">
      <Spline
        key={key}
        scene="https://prod.spline.design/f4uNs-S1tK6N4WHz/scene.splinecode"
      />
    </div>
  );
};

export default SplineComponent;
