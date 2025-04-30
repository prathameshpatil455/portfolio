"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiPython,
  SiC,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiGooglecolab,
  SiGithub,
  SiPostgresql,
} from "react-icons/si";
import { FaJava, FaChartLine, FaCode } from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  skillName: string;
  index: number;
}

const iconMap: Record<string, { icon: IconType; color: string }> = {
  // Frontend
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  ReactJS: { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },

  // Backend
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: FaJava, color: "#007396" },
  C: { icon: SiC, color: "#A8B9CC" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#000000" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  SQL: { icon: SiPostgresql, color: "#4169E1" },
  Tensorflow: { icon: SiTensorflow, color: "#FF6F00" },
  Langchain: { icon: SiPython, color: "#3776AB" },

  // Developer Tools
  "VS Code": { icon: FaCode, color: "#007ACC" },
  "Google Colab": { icon: SiGooglecolab, color: "#F9AB00" },
  "Jupyter Notebook": { icon: SiJupyter, color: "#F37626" },
  Matlab: { icon: SiPython, color: "#0076A8" },
  GitHub: { icon: SiGithub, color: "#181717" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Figma: { icon: SiFigma, color: "#F24E1E" },

  // Data Analysis
  Pandas: { icon: SiPandas, color: "#150458" },
  Numpy: { icon: SiNumpy, color: "#013243" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  Matplotlib: { icon: FaChartLine, color: "#11557C" },
  Statsmodels: { icon: SiPython, color: "#3776AB" },
};

const TechnologiesProvider = ({ skillName, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.2;
  const Icon = iconMap[skillName]?.icon || SiReact;
  const color = iconMap[skillName]?.color || "#61DAFB";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className={`group flex flex-col gap-2 items-center p-2 rounded-lg transition-all duration-300 ${
        isDarkMode ? "hover:bg-dark-50" : "hover:bg-white"
      }`}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        <Icon size={48} style={{ color }} />
      </div>
      <p
        className={`text-sm font-medium text-center max-w-24 ${
          isDarkMode ? "text-gray-300" : "text-gray-900"
        }`}
      >
        {skillName}
      </p>
    </motion.div>
  );
};

export default TechnologiesProvider;
