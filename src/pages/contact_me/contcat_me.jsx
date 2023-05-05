import "../../index.css";
import BackNavBar from "../../layout/backnavbar/backnavbar";
import Footer from "../../layout/footer/footer";
import ContactPic from "./mypic/mypic";
import ContactCards from "./contact_cards/contact_cards";

function ContactMe() {
  return (
    <>
      <BackNavBar />
      <ContactPic />
      <ContactCards />
      <Footer />
    </>
  );
}

export default ContactMe;
