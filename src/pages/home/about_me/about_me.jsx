import "../../../index.css";
import ProfilePic from "/src/assets/images/profile.png";

function AboutMe() {
  return (
    <div id="about" className="bg-slate-700 py-10 ">
      <div className="mx-auto container max-w-[1440px]">
        <p className="text-white text-2xl text-center">About Me</p>
        <div className="grid lg:grid-cols-2 pt-10">
          <div className="">
            <img src={ProfilePic} alt="" className="mx-auto lg:mx-5 px-5 xs:max-w-[400px]" />
          </div>
          <div className="text-white lg:px-10 mt-10 lg:mt-0 text-center lg:text-start">
            <p className="text-sm xl:text-lg px-5 xs:px-0 xs:max-w-[400px] xl:max-w-[450px] mx-auto">
              Hello, I am Mehrgan Akbari, I am a Freelance Web Designer and
              Freelance ui & ux Designer from rasht, iran
            </p>
            <div className="max-w-md mx-auto mt-10">
              <div className="lg:flex lg:justify-between my-3">
                <p className="text-white">Name :</p>
                <p className="text-white lg:w-[200px]">Mehrgan Akbari</p>
              </div>
              <div className="lg:flex lg:justify-between my-3">
                <p className="text-white">Email :</p>
                <p className="text-white lg:w-[200px]">akbarimehrgan@yahoo.com</p>
              </div>
              <div className="lg:flex lg:justify-between my-3">
                <p className="text-white">Phone :</p>
                <p className="text-white lg:w-[200px]">+98 903 265 1513</p>
              </div>
              <div className="lg:flex lg:justify-between my-3">
                <p className="text-white">Birthday :</p>
                <p className="text-white lg:w-[200px]">2004/12/30</p>
              </div>
              <div className="lg:flex lg:justify-between my-3">
                <p className="text-white">Nationality :</p>
                <p className="text-white lg:w-[200px]">Persian</p>
              </div>
              <div className="lg:flex lg:justify-between my-3">
                <p className="text-white">Address :</p>
                <p className="text-white lg:w-[200px]">
                  Rasht, Guilan province, Iran
                </p>
              </div>
              <div className="flex gap-2 justify-center lg:justify-start pt-10 lg:py-3">
                <a href="#contact">
                  <button className="bg-yellow-400 text-white px-5 py-2 rounded-lg transition-all duration-300 box-border hover:bg-transparent border border-white">
                    Contact Me
                  </button>
                </a>
                <br />
                <a href="">
                  <button className="hover:bg-yellow-400 text-white px-5 py-2 rounded-lg transition-all duration-300 box-border bg-transparent border border-white">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
