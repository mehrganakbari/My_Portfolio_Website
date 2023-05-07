import "../../../index.css";
import BackNavBar from "../../../layout/backnavbar/backnavbar";
import ReactBlogContents from "./reactcontent/reactcontent";
import Footer from "../../../layout/footer/footer";

function ReactBlog() {
  return (
    <>
      <BackNavBar />
      <ReactBlogContents />
      <Footer />
    </>
  );
}

export default ReactBlog;
