import React from "react";
import { InfoCard, ImageCard, Experience } from "./BentoGridItems";
import { useSelector } from "react-redux";

const BentoGrid = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <div
      className={`p-4 md:px-8 md:py-12 max-w-6xl mx-auto ${
        isDarkMode ? "bg-[#1a1a1a]" : "bg-white"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div
          className={`flex items-center justify-center p-4 rounded-2xl ${
            isDarkMode ? "bg-[#232323]" : "bg-gray-50"
          }`}
        >
          <div className="w-full h-full max-w-md grid items-center">
            <ImageCard />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div
            className={`p-4 rounded-2xl ${
              isDarkMode ? "bg-[#232323]" : "bg-gray-50"
            }`}
          >
            <InfoCard />
          </div>
          <div
            className={`p-4 rounded-2xl ${
              isDarkMode ? "bg-[#232323]" : "bg-gray-50"
            }`}
          >
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
