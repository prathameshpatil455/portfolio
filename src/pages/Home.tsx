import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";

import ScrollDown from "../components/ui/ScrollDown";
import WindowJson from "../components/ui/WindowJson";
import { useResumePreview } from "../contexts/ResumePreviewContext";

const Home = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );
  const { openResumePreview } = useResumePreview();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen relative overflow-hidden flex items-center md:px-12 px-4 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`h-screen w-full ${
          isDarkMode ? "bg-black" : "bg-white"
        } absolute top-0 left-0 flex items-center justify-center`}
        style={{
          backgroundImage: isDarkMode
            ? "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H63.5V64'/%3e%3c/svg%3e\")"
            : "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64' fill='none' stroke='rgb(0 0 0 / 0.1)'%3e%3cpath d='M0 .5H63.5V64'/%3e%3c/svg%3e\")",
          backgroundSize: "64px 64px",
        }}
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className={`absolute pointer-events-none inset-0 flex items-center justify-center ${
            isDarkMode ? "bg-black" : "bg-white"
          } [mask-image:radial-gradient(ellipse_at_top,transparent_24%,rgba(0,0,0,0.8))]`}
        />
      </div>

      {/* Background Elements */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div> */}

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col justify-start items-start h-full w-full max-md:pt-36">
              <p
                className={`text-xl md:text-2xl font-medium py-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Hi, I'm Prathamesh,
              </p>
              <h2
                className={`text-4xl md:text-6xl font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                A Software Developer
                {/* <TypingEffect /> */}
              </h2>
              <div className="flex items-center gap-2 py-4 max-w-md">
                <FaMapMarkerAlt
                  className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                  size={20}
                />
                <p
                  className={`text-base md:text-lg ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Bangalore, India
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 my-2">
                <div
                  className={`group w-fit px-6 py-3 flex items-center rounded-md border cursor-pointer ${
                    isDarkMode
                      ? "text-white border-white hover:bg-white hover:text-black"
                      : "text-black border-black hover:bg-black hover:text-white"
                  }`}
                  onClick={scrollToProjects}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      scrollToProjects();
                    }
                  }}
                >
                  Portfolio
                  <span className="group-hover:rotate-90 duration-500">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </div>
                <button
                  type="button"
                  onClick={openResumePreview}
                  className={`group w-fit px-6 py-3 flex items-center gap-2 rounded-md border transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isDarkMode
                      ? "border-primary text-primary-200 hover:bg-primary hover:text-white focus-visible:ring-offset-black"
                      : "border-primary text-primary-700 hover:bg-primary hover:text-white focus-visible:ring-offset-white"
                  }`}
                >
                  <FileText
                    className="w-5 h-5 shrink-0 transition-colors group-hover:text-white"
                    aria-hidden
                  />
                  Résumé
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <WindowJson />

            {/* <div className="relative top-0 w-full md:w-1/4">
              <img
                src="/images/HeroImage.png"
                alt="my profile"
                className="my-4 max-w-[350px]"
              />
            </div> */}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ScrollDown />
      </motion.div>
    </section>
  );
};

export default Home;
