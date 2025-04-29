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
  SiRedux,
  SiReactquery,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiStripe,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiGraphql,
  SiDocker,
  SiFigma,
  SiGo,
  SiMaterialdesign,
} from "react-icons/si";
import { FaMobileScreen } from "react-icons/fa6";
import { IconType } from "react-icons";

interface Props {
  skillName: string;
  index: number;
}

const iconMap: Record<string, { icon: IconType; color: string }> = {
  "Html 5": { icon: SiHtml5, color: "#E34F26" },
  Css: { icon: SiCss3, color: "#1572B6" },
  "Java Script": { icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind Css": { icon: SiTailwindcss, color: "#06B6D4" },
  "Material UI": { icon: SiMaterialdesign, color: "#007FFF" },
  React: { icon: SiReact, color: "#61DAFB" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  "React Query": { icon: SiReactquery, color: "#FF4154" },
  "Type Script": { icon: SiTypescript, color: "#3178C6" },
  "Next js 13": { icon: SiNextdotjs, color: "#000000" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },
  "Stripe Payment": { icon: SiStripe, color: "#008CDD" },
  "Node js": { icon: SiNodedotjs, color: "#339933" },
  "Express js": { icon: SiExpress, color: "#000000" },
  "Mongo db": { icon: SiMongodb, color: "#47A248" },
  "Fire base": { icon: SiFirebase, color: "#FFCA28" },
  "Postger SQL": { icon: SiPostgresql, color: "#4169E1" },
  "My SQL": { icon: SiMysql, color: "#4479A1" },
  Prisma: { icon: SiPrisma, color: "#2D3748" },
  Graphql: { icon: SiGraphql, color: "#E10098" },
  "React Native": { icon: FaMobileScreen, color: "#61DAFB" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  Go: { icon: SiGo, color: "#00ADD8" },
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
