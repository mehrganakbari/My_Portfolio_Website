import "../../../index.css";
import HeaderPic from "/src/assets/images/headerPic.png";

function Header() {
  return (
    <div className="mx-auto container max-w-[1440px] my-10 px-5 grid lg:grid-cols-2 gap-5 items-center">
      <div className="flex justify-center lg:hidden">
        <img src={HeaderPic} alt="" />
      </div>
      <div className="px-5 text-center lg:text-start">
        <p className="text-white">Hello,</p>
        <p className="text-yellow-400 text-3xl mb-5">I am Mehrgan Akbari</p>
        <p className="text-white text-xl">Freelance Web Designer</p>
        <p className="text-white text-xl">Freelance ui & ux Designer</p>
        <p className="text-white text-xl">@ Developer</p>
        <a href="#contact">
          <button className="bg-yellow-400 text-white mt-5 px-5 py-2 rounded-lg transition-all duration-300 box-border hover:bg-transparent border border-white">
            Contact Me
          </button>
        </a>
        <br />
        <a href="">
          <button className="hover:bg-yellow-400 text-white mt-2 px-5 py-2 rounded-lg transition-all duration-300 box-border bg-transparent border border-white">
            Download CV
          </button>
        </a>
      </div>
      <div className="px-5 lg:flex justify-end hidden">
        <img src={HeaderPic} alt="" />
      </div>
    </div>
  );
}

export default Header;
