import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
        isDarkMode
          ? "bg-dark-100 border-dark-200 hover:border-primary/30"
          : "bg-gray-50 border-gray-200 hover:border-primary/30"
      }`}
    >
      <div className="relative aspect-[3/1.5] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3
          className={`text-xl font-semibold mb-2 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-sm mb-4 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                isDarkMode
                  ? "bg-dark-200 text-gray-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              isDarkMode
                ? "bg-primary hover:bg-primary-600 text-white"
                : "bg-primary hover:bg-primary-600 text-white"
            }`}
          >
            <span className="text-sm font-medium">Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>

          <motion.a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              isDarkMode
                ? "bg-dark-200 hover:bg-dark-300 text-gray-300"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            <span className="text-sm font-medium">View Code</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
