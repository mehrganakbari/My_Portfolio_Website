import "../../../index.css";
import BackNavBar from "../../../layout/backnavbar/backnavbar";
import OopBlogContents from "./layout/contents/contents";
import Footer from "../../../layout/footer/footer";

function OopBlog() {
  return (
    <div>
      <BackNavBar />
      <OopBlogContents />
      <Footer />
    </div>
  );
}

export default OopBlog;
