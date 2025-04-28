import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useSelector } from "react-redux";

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  const [cursorColor, setCursorColor] = useState(
    isDarkMode ? "white" : "black"
  );
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  // const springConfig = { damping: 25, stiffness: 500 };
  const outerCursorX = useSpring(cursorX, { damping: 20, stiffness: 300 });
  const outerCursorY = useSpring(cursorY, { damping: 20, stiffness: 300 });

  console.log(isDarkMode, "dark mode");

  // Update cursor color when theme changes
  useEffect(() => {
    if (!isHovered) {
      setCursorColor(isDarkMode ? "white" : "black");
    }
  }, [isDarkMode, isHovered]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "default";
    };
  }, []);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const backgroundColor = getComputedStyle(e.currentTarget).backgroundColor;
    if (backgroundColor !== "rgba(0, 0, 0, 0)") {
      setCursorColor(backgroundColor);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorColor(isDarkMode ? "white" : "black");
  };

  const handleClick = () => {
    setCursorColor(isDarkMode ? "blue" : "darkblue");
    setTimeout(() => setCursorColor(isDarkMode ? "white" : "black"), 100);
  };

  return (
    <>
      <motion.div
        style={{
          x: outerCursorX,
          y: outerCursorY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: cursorColor,
        }}
        className={`fixed pointer-events-none z-50 rounded-full w-[35px] h-[35px] border-2 ${
          isDarkMode ? "border-gray-700" : "border-gray-500"
        } ${isHovered ? "scale-1.5" : ""}`}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
      {/* Inner Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: cursorColor,
        }}
        className={`fixed pointer-events-none z-50 rounded-full w-[8px] h-[8px] ${
          isDarkMode ? "bg-gray-700" : "bg-gray-500"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </>
  );
};

export default CustomCursor;
