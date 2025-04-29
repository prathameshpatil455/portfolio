"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skillName: string;
}

const TechnologiesProvider = ({ src, index, skillName }: Props) => {
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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className={`group flex flex-col gap-2 items-center p-2 rounded-lg transition-all duration-300 ${
        isDarkMode ? "hover:bg-dark-50" : "hover:bg-gray-100"
      }`}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        <img
          src={src}
          className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          alt={`${skillName} icon`}
        />
      </div>
      <p
        className={`text-sm font-medium text-center max-w-24 ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {skillName}
      </p>
    </motion.div>
  );
};

export default TechnologiesProvider;
