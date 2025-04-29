import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { useSelector } from "react-redux";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      className={`border-t ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      } py-8 mt-16`}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3
              className={`text-lg font-medium mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Portfolio
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A showcase of my work, skills, and experience as a developer.
              Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>

          <div>
            <h3
              className={`text-lg font-medium mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className={`text-sm ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`text-sm ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experience")}
                  className={`text-sm ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`text-sm ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`text-sm ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className={`text-lg font-medium mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:your-email@example.com"
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              your-email@example.com
            </p>
          </div>
        </div>

        <div
          className={`border-t ${
            isDarkMode ? "border-gray-800" : "border-gray-200"
          } mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center`}
        >
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } flex items-center mt-4 sm:mt-0`}
          >
            Built with{" "}
            <Heart
              size={14}
              className={`mx-1 ${
                isDarkMode ? "text-purple-400" : "text-purple-600"
              }`}
            />{" "}
            by Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
