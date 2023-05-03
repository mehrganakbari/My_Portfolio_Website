import "../../../../../index.css";
import HtmlIcon from "/src/assets/icons/html.png";
import CssIcon from "/src/assets/icons/css.png";
import JavascriptIcon from "/src/assets/icons/javascript.png";
import TailwindCssIcon from "/src/assets/icons/tailwindcss.png";
import ReactIcon from "/src/assets/icons/react.png";
import BootstrapIcon from "/src/assets/icons/bootstrap.png";
import jQueryIcon from "/src/assets/icons/jquery.png";
import WordpressIcon from "/src/assets/icons/wordpress.png";

function Programming() {
  return (
    <div className="pt-10">
      <p className="text-white text-center mb-5">
        my <span className="text-yellow-400">Programming</span> Skills
      </p>
      {/* Html */}
      <div className="py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center mb-2">
            <img src={HtmlIcon} alt="" className="w-6 h-6" />
            <p className="text-white">Html</p>
          </div>
          <p className="text-white">90%</p>
        </div>
        <div className="w-full bg bg-slate-800 rounded-full">
          <div className="bg-yellow-400 w-[90%] rounded-l-full py-1"></div>
        </div>
      </div>
      {/* Css */}
      <div className="py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center mb-2">
            <img src={CssIcon} alt="" className="w-6 h-6" />
            <p className="text-white">Css</p>
          </div>
          <p className="text-white">90%</p>
        </div>
        <div className="w-full bg bg-slate-800 rounded-full">
          <div className="bg-yellow-400 w-[90%] rounded-l-full py-1"></div>
        </div>
      </div>
      {/* Javascript */}
      <div className="py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center mb-2">
            <img src={JavascriptIcon} alt="" className="w-6 h-6" />
            <p className="text-white">Javascript</p>
          </div>
          <p className="text-white">80%</p>
        </div>
        <div className="w-full bg bg-slate-800 rounded-full">
          <div className="bg-yellow-400 w-[80%] rounded-l-full py-1"></div>
        </div>
      </div>
      {/* TailwindCss */}
      <div className="py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center mb-2">
            <img src={TailwindCssIcon} alt="" className="w-6 h-6" />
            <p className="text-white">TailwindCss</p>
          </div>
          <p className="text-white">90%</p>
        </div>
        <div className="w-full bg bg-slate-800 rounded-full">
          <div className="bg-yellow-400 w-[90%] rounded-l-full py-1"></div>
        </div>
      </div>
      {/* React */}
      <div className="py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center mb-2">
            <img src={ReactIcon} alt="" className="w-6 h-6" />
            <p className="text-white">React</p>
          </div>
          <p className="text-white">70%</p>
        </div>
        <div className="w-full bg bg-slate-800 rounded-full">
          <div className="bg-yellow-400 w-[70%] rounded-l-full py-1"></div>
        </div>
      </div>
      {/* Bootstrap */}
      <div className="py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center mb-2">
            <img src={BootstrapIcon} alt="" className="w-6 h-6" />
            <p className="text-white">Bootstrap</p>
          </div>
          <p className="text-white">70%</p>
        </div>
        <div className="w-full bg bg-slate-800 rounded-full">
          <div className="bg-yellow-400 w-[70%] rounded-l-full py-1"></div>
        </div>
      </div>
      {/* jQuery */}
      <div className="py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center mb-2">
            <img src={jQueryIcon} alt="" className="w-6 h-6" />
            <p className="text-white">jQuery</p>
          </div>
          <p className="text-white">80%</p>
        </div>
        <div className="w-full bg bg-slate-800 rounded-full">
          <div className="bg-yellow-400 w-[80%] rounded-l-full py-1"></div>
        </div>
      </div>
      {/* Wordpress */}
      <div className="py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center mb-2">
            <img src={WordpressIcon} alt="" className="w-6 h-6" />
            <p className="text-white">Wordpress</p>
          </div>
          <p className="text-white">90%</p>
        </div>
        <div className="w-full bg bg-slate-800 rounded-full">
          <div className="bg-yellow-400 w-[90%] rounded-l-full py-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Programming;
