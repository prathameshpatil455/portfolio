"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      className="flex flex-col gap-1 items-center"
    >
      <img
        src={src}
        width={50}
        height={50}
        className="max-h-12 max-w-12 object-contain"
        alt="skill image"
      />
      <p className="text-sm font-medium text-wrap text-center max-w-20">
        {skillName}
      </p>
    </motion.div>
  );
};

export default TechnologiesProvider;
