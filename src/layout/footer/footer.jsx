import { Link } from "react-router-dom";
import "../../index.css";
import githubIcon from "/src/assets/icons/github.png";
import instagramIcon from "/src/assets/icons/instagram.png";
import telegramIcon from "/src/assets/icons/telegram.png";
import whatsappIcon from "/src/assets/icons/whatsapp.png";
import linkedinIcon from "/src/assets/icons/linkedin.png";

function Footer() {
  return (
    <footer className="bg-slate-800 py-5 px-5">
      <div className="mx-auto container max-w-[1445px] flex flex-col md:flex-row justify-between items-center">
        <p className="text-white text-2xl my-5">Mehrgan Akbari</p>
        <div className="flex gap-5 items-center">
          <a href="https://instagram.com/_.mehrganakbari._?igshid=YmMyMTA2M2Y">
            <img src={instagramIcon} alt="" className="h-8 w-8" />
          </a>
          <a href="https://github.com/mehrganakbari/">
            <img src={githubIcon} alt="" className="h-9 w-9" />
          </a>
          <a href="https://t.me/@Mehrganakbarii">
            <img src={telegramIcon} alt="" className="h-8 w-8" />
          </a>
          <a href="https://wa.link/nxkj69">
            <img src={whatsappIcon} alt="" className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/mehrgan-akbari-513762226/">
            <img src={linkedinIcon} alt="" className="h-8 w-8" />
          </a>
        </div>
        <Link
          to="/contact-me"
          className="text-white border px-12 py-2 rounded my-5">
          Contact Me
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
