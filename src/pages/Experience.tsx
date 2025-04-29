import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";
import TechnologiesProvider from "../components/ui/TechnologiesProvider";
import { useSelector } from "react-redux";

type Category = "frontend" | "backend" | "tools";

// Categorize the skills
const skillCategories: Record<Category, string[]> = {
  frontend: [
    "Html 5",
    "Css",
    "Java Script",
    "Tailwind Css",
    "Material UI",
    "React",
    "Redux",
    "React Query",
    "Type Script",
    "Next js 13",
    "Framer Motion",
  ],
  backend: [
    "Node js",
    "Express js",
    "Mongo db",
    "Fire base",
    "Postger SQL",
    "My SQL",
    "Prisma",
    "Graphql",
  ],
  tools: ["Docker", "Figma", "Go", "React Native"],
};

const Experience = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("frontend");
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  useEffect(() => {
    document.title = "Portfolio | Experience";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="experience"
      className={`min-h-screen w-full pt-12 flex items-center justify-center max-sm:pt-72 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left mb-4"
        >
          <p
            className={`text-4xl font-bold border-b-4 ${
              isDarkMode ? "border-white text-white" : "border-black text-black"
            } inline`}
          >
            Experience
          </p>
          <p
            className={`py-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Technologies I have worked with
          </p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row gap-8"
        >
          {/* Left column - Category list */}
          <motion.div variants={itemVariants} className="w-full md:w-1/4">
            <div className="space-y-4">
              <button
                onClick={() => setSelectedCategory("frontend")}
                className={`w-full flex items-center gap-3 px-4 py-4 md:py-6 rounded-lg transition-all duration-300 ${
                  selectedCategory === "frontend"
                    ? `${
                        isDarkMode
                          ? "bg-primary text-white"
                          : "bg-primary text-white"
                      }`
                    : `${
                        isDarkMode
                          ? "bg-dark-100 text-gray-300 hover:bg-dark-50"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`
                }`}
              >
                <Code size={24} />
                <span>Frontend</span>
              </button>
              <button
                onClick={() => setSelectedCategory("backend")}
                className={`w-full flex items-center gap-3 px-4 py-4 md:py-6 rounded-lg transition-all duration-300 ${
                  selectedCategory === "backend"
                    ? `${
                        isDarkMode
                          ? "bg-primary text-white"
                          : "bg-primary text-white"
                      }`
                    : `${
                        isDarkMode
                          ? "bg-dark-100 text-gray-300 hover:bg-dark-50"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`
                }`}
              >
                <Server size={24} />
                <span>Backend</span>
              </button>
              <button
                onClick={() => setSelectedCategory("tools")}
                className={`w-full flex items-center gap-3 px-4 py-4 md:py-6 rounded-lg transition-all duration-300 ${
                  selectedCategory === "tools"
                    ? `${
                        isDarkMode
                          ? "bg-primary text-white"
                          : "bg-primary text-white"
                      }`
                    : `${
                        isDarkMode
                          ? "bg-dark-100 text-gray-300 hover:bg-dark-50"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`
                }`}
              >
                <Wrench size={24} />
                <span>Tools</span>
              </button>
            </div>
          </motion.div>

          {/* Right column - Technology icons */}
          <motion.div variants={itemVariants} className="w-full md:w-3/4">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-lg ${
                isDarkMode ? "bg-dark-100" : "bg-gray-200"
              }`}
            >
              <div className="flex flex-wrap gap-2 justify-start min-h-[300px]">
                {skillCategories[selectedCategory].map(
                  (skill: string, index: number) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <TechnologiesProvider skillName={skill} index={index} />
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
