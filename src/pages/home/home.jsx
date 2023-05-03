import "../../index.css";
import NavBar from "../../layout/navbar/navbar";
import Header from "./header/header";
import AboutMe from "./about_me/about_me";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
    </>
  );
}

export default Home;
