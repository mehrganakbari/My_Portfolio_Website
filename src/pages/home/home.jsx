import "../../index.css";
import NavBar from "../../layout/navbar/navbar";
import Header from "./header/header";
import AboutMe from "./about_me/about_me";
import Skills from "./skills/skills";
import Portfolio from "./portfolio/portfolio";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
    </>
  );
}

export default Home;
