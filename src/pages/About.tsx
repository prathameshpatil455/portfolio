import { useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Server, Brush, Puzzle, Zap } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { useSelector } from "react-redux";
import BentoGrid from "../components/ui/BentoGrid";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "NextJS", "Redux", "Tailwind CSS", "SASS"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "GraphQL",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Docker", "AWS"],
  },
];

const About = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

  useEffect(() => {
    document.title = "Portfolio | About";
  }, []);

  const iconMap = {
    Frontend: <Code size={24} />,
    Backend: <Server size={24} />,
    Tools: <Puzzle size={24} />,
  };

  return (
    <section
      id="about"
      className={`min-h-screen w-full flex items-center justify-center pt-12 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } box-border`}
    >
      <BentoGrid />
    </section>
  );
};

export default About;
