import Spline from "@splinetool/react-spline";

const SplineComponent = () => {
  return (
    <div className="w-full h-full max-w-lg aspect-video bg-black rounded-md flex items-center justify-center">
      <Spline scene="https://prod.spline.design/f4uNs-S1tK6N4WHz/scene.splinecode" />
    </div>
  );
};

export default SplineComponent;
