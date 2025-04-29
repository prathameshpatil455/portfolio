import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { RootState } from "../store";
import { filterProjects } from "../store/slices/projectSlice";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";

const Projects = () => {
  const dispatch = useDispatch();
  const { filteredProjects, activeFilter } = useSelector(
    (state: RootState) => state.projects
  );
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );
  const [filters] = useState([
    "All",
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Redux",
  ]);

  useEffect(() => {
    document.title = "Portfolio | Projects";
  }, []);

  const handleFilterChange = (filter: string) => {
    dispatch(filterProjects(filter));
  };

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
      id="projects"
      className={`min-h-screen w-full pt-20 max-sm:pt-72 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Projects"
            subtitle="A showcase of my recent work and projects"
          />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              variants={itemVariants}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeFilter === filter
                  ? `${
                      isDarkMode
                        ? "bg-primary text-white"
                        : "bg-primary text-white"
                    }`
                  : `${
                      isDarkMode
                        ? "bg-dark-100 text-gray-300 hover:bg-dark-50"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`
              }`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`rounded-lg overflow-hidden group transition-all duration-300 ${
                isDarkMode
                  ? "bg-dark-100 border border-dark-200 hover:border-primary/30"
                  : "bg-gray-50 border border-gray-200 hover:border-primary/30"
              }`}
              variants={itemVariants}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className={`text-center py-10 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg">
              No projects found matching the selected filter.
            </p>
            <button
              className={`mt-4 ${
                isDarkMode
                  ? "text-primary hover:text-primary-300"
                  : "text-primary hover:text-primary-600"
              } hover:underline`}
              onClick={() => handleFilterChange("All")}
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Want to work together?
          </h3>
          <p
            className={`max-w-2xl mx-auto mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm always interested in new opportunities and collaborations. Let's
            discuss your project ideas!
          </p>
          <a
            href="/contact"
            className={`inline-flex items-center justify-center px-6 py-3 rounded-md transition-colors ${
              isDarkMode
                ? "bg-primary hover:bg-primary-600 text-white"
                : "bg-primary hover:bg-primary-600 text-white"
            }`}
          >
            Contact Me
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;
