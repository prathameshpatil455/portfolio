import React from "react";
import { InfoCard, ImageCard, Experience, AboutMe } from "./BentoGridItems";
import { useSelector } from "react-redux";

const BentoGrid = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <div
      className={`p-4 md:px-8 md:py-12 max-w-6xl mx-auto ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div
          className={`flex items-center justify-center w-full h-full max-w-md max-h-[600px]  p-4 rounded-2xl ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <ImageCard />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div
            className={`p-4 rounded-2xl ${
              isDarkMode ? "bg-black" : "bg-white"
            }`}
          >
            <InfoCard />
          </div>
          <div
            className={`p-4 rounded-2xl ${
              isDarkMode ? "bg-black" : "bg-white"
            }`}
          >
            <AboutMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
