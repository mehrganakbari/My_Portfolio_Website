import "../../../index.css";
import githubIcon from "/src/assets/icons/github.png";
import instagramIcon from "/src/assets/icons/instagram.png";
import telegramIcon from "/src/assets/icons/telegram.png";
import whatsappIcon from "/src/assets/icons/whatsapp.png";
import linkedinIcon from "/src/assets/icons/linkedin.png";

function ContactCards() {
  return (
    <div className="my-5 px-5 mx-auto grid lg:grid-cols-3 gap-5 items-center container max-w-[1440px]">
      <div className="bg-slate-800 py-10 px-5 text-center rounded-lg h-60 flex flex-col justify-center">
        {/* title */}
        <div className="text-white text-xl mb-7 flex gap-2 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-yellow-400">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <p>E-mail</p>
        </div>
        {/* content */}
        <p className="text-white">akbarimehrgan@yahoo.com</p>
      </div>
      <div className="bg-slate-800 py-10 px-5 text-center rounded-lg h-60 flex flex-col justify-center">
        {/* title */}
        <div className="text-white text-xl mb-7 flex gap-2 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-yellow-400">
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          <p>Phone</p>
        </div>
        {/* content */}
        <p className="text-white">+98 903 265 1513</p>
      </div>
      <div className="bg-slate-800 py-10 px-5 text-center rounded-lg h-60 flex flex-col justify-center">
        {/* title */}
        <div className="text-white text-xl mb-7 flex gap-2 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-yellow-400">
            <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
          </svg>
          <p>Social Media</p>
        </div>
        {/* content */}
        <div className="flex justify-center gap-2">
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
      </div>
    </div>
  );
}

export default ContactCards;
