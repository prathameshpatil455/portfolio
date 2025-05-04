import React from "react";
import { useSelector } from "react-redux";

const WindowJson = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  return (
    <div className="relative">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          isDarkMode
            ? "from-primary/20 to-secondary/20"
            : "from-primary/10 to-secondary/10"
        } rounded-lg blur-xl opacity-50`}
      ></div>
      <div
        className={`rounded-lg ${
          isDarkMode
            ? "bg-dark-100 border-dark-200"
            : "bg-gray-50 border-gray-700"
        } border p-6 shadow-lg relative overflow-hidden`}
      >
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <pre className="text-sm font-mono">
          <code className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
            <span
              className={isDarkMode ? "text-primary-400" : "text-primary-600"}
            >
              const
            </span>{" "}
            <span
              className={
                isDarkMode ? "text-secondary-400" : "text-secondary-600"
              }
            >
              Portfolio
            </span>{" "}
            = {"{"}
            <br />
            {"  "}name:{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'Prathamesh Patil'
            </span>
            ,
            <br />
            {"  "}title:{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'Software Developer'
            </span>
            ,
            <br />
            {"  "}email:{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'prathameshpatil1513@gmail.com'
            </span>
            ,
            {/* <br />
            {"  "}location:{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'Bangalore, India'
            </span> */}
            {/* ,
            <br />
            {"  "}github:{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'github.com/prathameshpatil445'
            </span>
            ,
            <br />
            {"  "}linkedin:{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'linkedin.com/in/alexsmith'
            </span> */}
            <br />
            {"  "}experience: <span className="text-blue-500">'1+ years'</span>
            {/* ,
            <br />
            {"  "}specialization:{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'Front end Development'
            </span> */}
            ,
            <br />
            {"  "}skills: [
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'React'
            </span>
            ,{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'Node.js'
            </span>
            ,{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'TypeScript'
            </span>
            ,{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'Python'
            </span>
            ,{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'SQL'
            </span>
            ],
            <br />
            {"  "}frameworks: [
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'Next.js'
            </span>
            ,{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'Express'
            </span>
            ],
            <br />
            {"  "}databases: [
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'PostgreSQL'
            </span>
            ,{" "}
            <span
              className={isDarkMode ? "text-accent-400" : "text-accent-600"}
            >
              'MongoDB'
            </span>
            ],
            <br />
            {/* {"  "}isAvailableForHire:{" "}
            <span className="text-green-500">true</span>
            <br /> */}
            {"}"};
          </code>
        </pre>
      </div>
    </div>
  );
};

export default WindowJson;
