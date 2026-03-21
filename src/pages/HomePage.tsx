import { Helmet } from "react-helmet-async";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const HomePage = () => (
  <>
    <Helmet>
      <title>Prathamesh Portfolio</title>
      <meta
        name="description"
        content="Software developer portfolio — projects, experience, and contact."
      />
    </Helmet>
    <Home />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </>
);

export default HomePage;
