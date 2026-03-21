import { useSelector } from "react-redux";

import BentoGrid from "../components/ui/BentoGrid";

const About = () => {
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme
  );

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
