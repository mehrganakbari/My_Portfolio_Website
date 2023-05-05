import "../../index.css";
import NavBar from "../../layout/navbar/navbar";
import Header from "./header/header";
import AboutMe from "./about_me/about_me";
import Skills from "./skills/skills";
import Portfolio from "./portfolio/portfolio";
import Blogs from "./blogs/blog";
import Footer from "../../layout/footer/footer";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Blogs />
      <Footer/>
    </>
  );
}

export default Home;
