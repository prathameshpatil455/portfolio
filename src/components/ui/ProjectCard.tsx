import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "../../store/slices/projectSlice";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
        isDarkMode
          ? "bg-dark-100 border-dark-200 hover:border-primary/30"
          : "bg-gray-50 border-gray-200 hover:border-primary/30"
      } border`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="absolute inset-0 z-[1] rounded-lg"
        aria-label={`View details for ${project.title}`}
      />

      <div className="relative z-[2] pointer-events-none">
        <div className="relative aspect-[3/1.5] overflow-hidden">
          <img
            src={project.image}
            alt=""
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
            className={`text-sm mb-4 line-clamp-3 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.featuredTags.map((tag) => (
              <span
                key={tag}
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
        </div>
      </div>

      <div className="relative z-[3] flex flex-wrap items-center gap-4 px-4 pb-4 pointer-events-auto">
        {project.demoUrl && (
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
        )}

        <Link
          to={`/projects/${project.slug}`}
          className={`text-sm font-semibold underline-offset-2 hover:underline ${
            isDarkMode ? "text-primary-300" : "text-primary-600"
          }`}
        >
          Details →
        </Link>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
