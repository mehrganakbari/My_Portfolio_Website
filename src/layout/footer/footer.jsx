import { Link } from "react-router-dom";
import "../../index.css";
import githubIcon from "/src/assets/icons/github.png";
import instagramIcon from "/src/assets/icons/instagram.png";
import telegramIcon from "/src/assets/icons/telegram.png";
import whatsappIcon from "/src/assets/icons/whatsapp.png";

function Footer() {
  return (
    <footer className="bg-slate-800 py-5 px-5">
      <div className="mx-auto container max-w-[1445px] flex flex-col md:flex-row justify-between items-center">
        <p className="text-white text-2xl my-5">Mehrgan Akbari</p>
        <div className="flex gap-5">
          <img src={githubIcon} alt="" className="h-8 w-8" />
          <img src={instagramIcon} alt="" className="h-8 w-8" />
          <img src={telegramIcon} alt="" className="h-8 w-8" />
          <img src={whatsappIcon} alt="" className="h-8 w-8" />
        </div>
        <Link to="/contact-me" className="text-white border px-12 py-2 rounded my-5">
          Contact Me
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
