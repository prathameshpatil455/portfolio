import { Helmet } from "react-helmet-async";

import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";

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
