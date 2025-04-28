import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { RootState } from "../store";
import { filterProjects } from "../store/slices/projectSlice";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";

const Projects = () => {
  const dispatch = useDispatch();
  const { filteredProjects, activeFilter } = useSelector(
    (state: RootState) => state.projects
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
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionHeading
          title="Projects"
          subtitle="A showcase of my recent work and projects"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-dark-100 text-gray-300 hover:bg-dark-50"
              }`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-dark-100 border border-dark-200 rounded-lg overflow-hidden group hover:border-primary/30 transition-all duration-300"
              variants={itemVariants}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg">
              No projects found matching the selected filter.
            </p>
            <button
              className="mt-4 text-primary hover:underline"
              onClick={() => handleFilterChange("All")}
            >
              Clear filters
            </button>
          </motion.div>
        )}

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Want to work together?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            I'm always interested in new opportunities and collaborations. Let's
            discuss your project ideas!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-600 text-white font-medium rounded-md transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
