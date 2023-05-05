import "../../../index.css";
import ProfilePic from "/src/assets/images/3.jpg";

function ContactCards() {
  return (
    <div className="my-5 px-5 mx-auto flex flex-col md:flex-row gap-5 items-center container max-w-[1440px]">
        <img src={ProfilePic} alt="" className="w-52 rounded-full border-2 border-slate-800" />
        <p className="text-white text-center md:text-start">Hi 👋, I’m Mehrgan Akbari 👨‍💻 from Rasht , born in 2004 and I am currently working as a freelancer .👨‍💻 I am currently learning Html, Css and JS & Libraries. My activities and skills are focused on front-end programming.🎨 My famous feature is that people around me know me for my love of drinking coffee.☕</p>
    </div>
  );
}

export default ContactCards;
