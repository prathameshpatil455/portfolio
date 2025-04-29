import React, { useEffect, useRef } from "react";
import { IoMdCloudDownload } from "react-icons/io";
import ProfilePic from "../../../public/images/profile.jpg";
import {
  FaGlobeAsia,
  FaLanguage,
  FaCode,
  FaGraduationCap,
  FaClock,
  FaBriefcase,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { SiReact, SiTailwindcss, SiAppwrite, SiRedux } from "react-icons/si";
import { FaMobileScreen } from "react-icons/fa6";

export const InfoCard = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <div
      className={`
        rounded-2xl
        p-6
        flex flex-col
        items-center
        gap-4
        ${isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-gray-50 text-gray-900"}
      `}
    >
      <div className="flex gap-4 items-center justify-start w-full">
        <img
          src={ProfilePic}
          alt="Profile"
          className={`w-24 h-24 rounded-md object-cover border-4 ${
            isDarkMode ? "border-[#232323]" : "border-gray-200"
          }`}
        />

        <div className="flex w-full gap-2">
          <div className="w-full h-full flex flex-col gap-2 items-start">
            <h2
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Prathamesh Patil
            </h2>
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I&apos;m a{" "}
              <span className="text-purple-400">Software Developer</span>
            </p>
          </div>

          <div className="flex items-start justify-end mb-2">
            <button
              className={`${
                isDarkMode
                  ? "text-white hover:text-gray-300"
                  : "text-gray-900 hover:text-gray-600"
              } flex items-center gap-1 text-xs`}
            >
              Resume <IoMdCloudDownload size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 w-full text-xs text-center mt-2">
        <div
          className={`flex items-center justify-center gap-2 ${
            isDarkMode ? "" : ""
          } rounded-full px-3 py-2`}
        >
          <FaGlobeAsia
            className={`${isDarkMode ? "text-white" : "text-gray-900"} text-sm`}
          />
          <span>India</span>
        </div>

        <div
          className={`flex items-center justify-center gap-2 ${
            isDarkMode ? "" : ""
          } rounded-full px-3 py-2 col-span-1`}
        >
          <FaLanguage
            className={`${isDarkMode ? "text-white" : "text-gray-900"} text-sm`}
          />
          <span>English, Kannada & Hindi</span>
        </div>

        <div
          className={`flex items-center justify-center gap-2 ${
            isDarkMode ? "" : ""
          } rounded-full px-3 py-2`}
        >
          <FaCode
            className={`${isDarkMode ? "text-white" : "text-gray-900"} text-sm`}
          />
          <span>Software Developer</span>
        </div>

        <div
          className={`flex items-center justify-center gap-2 ${
            isDarkMode ? "" : ""
          } rounded-full px-3 py-2 col-span-2`}
        >
          <FaGraduationCap
            className={`${isDarkMode ? "text-white" : "text-gray-900"} text-sm`}
          />
          <span>BE (Honors) in CS</span>
        </div>

        <div
          className={`flex items-center justify-center gap-2 ${
            isDarkMode ? "" : ""
          } rounded-full px-3 py-2`}
        >
          <FaClock
            className={`${isDarkMode ? "text-white" : "text-gray-900"} text-sm`}
          />
          <span>IST</span>
        </div>
      </div>
    </div>
  );
};

export const TechStack = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  const techStack = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Appwrite", icon: SiAppwrite, color: "#FD366E" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Framer Motion", icon: FaCode, color: "#0055FF" },
    { name: "React Native", icon: FaMobileScreen, color: "#61DAFB" },
  ];

  return (
    <div
      className={`rounded-xl p-6 shadow-lg ${
        isDarkMode ? "bg-[#1a1a1a]" : "bg-gray-50"
      }`}
    >
      <div className="flex items-center justify-center mb-4">
        <div
          className={`flex items-center justify-center gap-3 ${
            isDarkMode ? "" : ""
          }`}
        >
          <FaCode
            className={`text-xl ${
              isDarkMode ? "text-purple-400" : "text-purple-600"
            }`}
          />
          <h2
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Tech Stack
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <div key={tech.name} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                  isDarkMode ? "bg-[#232323]" : "bg-gray-100"
                }`}
              >
                <Icon className="text-2xl" />
              </div>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const WorkGallery = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 0.5;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <div className="bg-[#1a1a1a] rounded-3xl p-6 w-full max-w-lg flex flex-col items-center gap-6 shadow-lg relative overflow-hidden">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <FaBriefcase className="text-purple-400 text-2xl" />
          <h2 className="text-white text-lg font-semibold">Projects</h2>
        </div>
        <p className="text-gray-400 text-sm">Works Gallery</p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 w-full py-2 mb-1 overflow-x-auto no-scrollbar"
      >
        <img
          src={ProfilePic}
          alt="Project 1"
          className="w-36 h-24 object-cover rounded-2xl flex-shrink-0"
        />
        <img
          src={ProfilePic}
          alt="Project 2"
          className="w-36 h-24 object-cover rounded-2xl flex-shrink-0"
        />
        <img
          src={ProfilePic}
          alt="Project 3"
          className="w-36 h-24 object-cover rounded-2xl flex-shrink-0"
        />
      </div>

      <button className="bg-purple-500 hover:bg-purple-600 transition text-white text-sm font-semibold px-6 py-3 rounded-2xl w-full absolute bottom-3 max-w-[150px] border-gray-900 border-2">
        View Works
      </button>
    </div>
  );
};

export const Experience = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <div
      className={`rounded-2xl px-2 py-4 flex flex-col items-center justify-center ${
        isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-gray-50 text-gray-900"
      } w-full`}
    >
      <div className="bg-[#1a1a1a] flex flex-col gap-4 p-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-2">
          <span className="text-purple-400 text-lg">📂</span> What I'm About ??
        </h2>
        <div className="text-gray-400 text-sm mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, tenetur
          asperiores? Odio consectetur provident facilis nulla, magni architecto
          quisquam voluptatum officia deserunt eum reprehenderit eligendi cumque
          modi, dolores tempora iusto odit corporis hic.
        </div>
      </div>
      <div className="flex gap-4 items-start justify-between">
        <div
          className={`rounded-2xl p-2 flex items-center justify-center ${
            isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-gray-50 text-gray-900"
          } w-full`}
        >
          <h1
            className={`text-4xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            } mb-1`}
          >
            20<span className="text-purple-400">+</span>
          </h1>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Projects
          </p>
        </div>
        <div
          className={`rounded-2xl p-2 flex items-center justify-center ${
            isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-gray-50 text-gray-900"
          } w-full`}
        >
          <h1
            className={`text-4xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            } mb-1`}
          >
            01<span className="text-purple-400">+</span>
          </h1>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Year Expertise
          </p>
        </div>
      </div>
    </div>
  );
};

export const ImageCard = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <div
      className={`rounded-xl shadow-sm relative overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group flex items-center justify-center max-w-[300px] max-h-[400px] ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 z-10"></div>
      <img
        src={ProfilePic}
        alt="Developer workspace"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />
    </div>
  );
};
