import "../../../index.css";
import BackNavBar from "../../../layout/backnavbar/backnavbar";
import ReactVsVueBlogContents from "./content/blogcontent";
import Footer from "../../../layout/footer/footer";

function ReactVsVueBlog() {
  return (
    <>
      <BackNavBar />
      <ReactVsVueBlogContents />
      <Footer />
    </>
  );
}

export default ReactVsVueBlog;
