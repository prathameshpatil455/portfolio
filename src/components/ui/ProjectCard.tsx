import React from "react";
import { useSelector } from "react-redux";

const ProjectCard = ({ project }) => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <div
      key={project.id}
      className={`flex flex-col md:flex-row items-center gap-6 mb-16 $`}
    >
      <div className="flex-shrink-0">
        <img
          src={project.image}
          alt={project.title + project.id}
          className="rounded-md duration-200"
          width={400}
          height={300}
          priority
        />
      </div>
      <div
        className={`flex flex-col justify-center ${
          isDarkMode ? "text-white" : "text-black"
        } p-4`}
      >
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="py-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-start justify-start gap-4 max-w-md mt-4">
          <button
            className="group text-black dark:text-white w-fit px-6 py-3 flex items-center rounded-md border border-black dark:border-white cursor-pointer hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
            onClick={() => window.open(project.demoUrl, "_blank")}
          >
            Demo
          </button>
          <button
            className="group text-black dark:text-white w-fit px-6 py-3 flex items-center rounded-md border border-black dark:border-white cursor-pointer hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
            onClick={() => window.open(project.codeUrl, "_blank")}
          >
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
