import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ScrollDown = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <div className="flex flex-col items-center">
      <span
        className={`text-sm mb-2 ${
          isDarkMode ? "text-gray-400" : "text-gray-800"
        }`}
      >
        Scroll down
      </span>
      <div
        className={`w-5 h-10 border-2 rounded-full flex justify-center ${
          isDarkMode ? "border-gray-600" : "border-gray-500"
        }`}
      >
        <motion.div
          className={`w-2 h-2 rounded-full mt-1 ${
            isDarkMode ? "bg-primary" : "bg-gray-600"
          }`}
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollDown;
