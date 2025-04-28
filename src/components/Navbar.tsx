import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, X } from "lucide-react";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { toggleMenu, closeMenu } from "../store/slices/uiSlice";
import { RootState } from "../store";
import { toggleTheme } from "../store/slices/themeSlice";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  const { scrollYProgress } = useScroll();

  // Set initial visibility to true like FloatingNav
  const [visible, setVisible] = useState(true);

  // Framer Motion scroll handling from FloatingNav
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const { isMenuOpen, activeSection } = useSelector(
    (state: RootState) => state.ui
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const handleNavToggle = useCallback(() => {
    setNav((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      dispatch(closeMenu());
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ y: -100, opacity: 1 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={`flex justify-end md:justify-center items-center w-full h-20 px-4 fixed ${
          isScrolled
            ? `${isDarkMode ? "" : ""} py-3 shadow-lg`
            : "bg-transparent py-5"
        }`}
        style={{
          zIndex: 30,
        }}
      >
        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex items-center rounded-full border ${
            isDarkMode ? "border-white" : "border-black"
          } px-6 py-2 ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          } z-30`}
        >
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link ${activeSection === link.id ? "" : ""} ${
                    isDarkMode
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle for Large Screens */}
        <div
          className={`hidden md:block cursor-pointer ml-4 text-xl p-2 rounded-md border ${
            isDarkMode
              ? "border-white bg-black text-white"
              : "border-black bg-white text-black"
          }`}
          aria-label="Toggle Dark Mode"
          onClick={handleToggleTheme}
        >
          <motion.div
            whileHover={{
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.5 },
            }}
          >
            {isDarkMode ? (
              <CiLight className="text-white" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </motion.div>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center justify-end gap-4">
          <div
            className={`cursor-pointer text-xl p-2 rounded-md border ${
              isDarkMode ? "border-white" : "border-black"
            }`}
            aria-label="Toggle Dark Mode"
            onClick={handleToggleTheme}
          >
            <motion.div
              whileHover={{
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.5 },
              }}
            >
              {isDarkMode ? (
                <CiLight className="text-white" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}
            </motion.div>
          </div>

          <div
            onClick={handleNavToggle}
            className="cursor-pointer p-2 rounded-md z-10"
            aria-label="Menu"
          >
            {nav ? (
              <FaTimes size={30} color={isDarkMode ? "white" : "black"} />
            ) : (
              <FaBars size={30} color={isDarkMode ? "white" : "black"} />
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-200 hover:text-white focus:outline-none"
          onClick={() => dispatch(toggleMenu())}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {nav && (
          <motion.ul
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className={`flex flex-col justify-center items-start absolute top-0 left-0 w-full h-screen ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`block py-2 px-3 rounded transition-colors ${
                    activeSection === link.id
                      ? `${
                          isDarkMode ? "text-primary" : "text-primary-600"
                        } font-medium`
                      : `${
                          isDarkMode
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-600 hover:text-black"
                        }`
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
