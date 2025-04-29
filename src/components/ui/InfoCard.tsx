import { useSelector } from "react-redux";
import SplineComponent from "./SplineComponent";

const InfoCard = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <div className="w-full max-w-lg aspect-video h-full flex items-center justify-center rounded-md">
      <SplineComponent />
    </div>
  );
};

export default InfoCard;
