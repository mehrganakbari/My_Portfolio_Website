import "../../../../../index.css";
import XdIcon from "/src/assets/icons/xd.png";
import FigmaIcon from "/src/assets/icons/figma.png";

function UiUx() {
  return (
    <div className="pt-10">
      <p className="text-white text-center mb-5">
        my <span className="text-yellow-400">ui & ux design</span> Skills
      </p>
      {/* Adobe xd */}
      <div className="py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center mb-2">
            <img src={XdIcon} alt="" className="w-6 h-6" />
            <p className="text-white">Adobe xd</p>
          </div>
          <p className="text-white">90%</p>
        </div>
        <div className="w-full bg bg-slate-800 rounded-full">
          <div className="bg-yellow-400 w-[90%] rounded-l-full py-1"></div>
        </div>
      </div>
      {/* Figma */}
      <div className="py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center mb-2">
            <img src={FigmaIcon} alt="" className="w-6 h-6" />
            <p className="text-white">Figma</p>
          </div>
          <p className="text-white">80%</p>
        </div>
        <div className="w-full bg bg-slate-800 rounded-full">
          <div className="bg-yellow-400 w-[80%] rounded-l-full py-1"></div>
        </div>
      </div>
    </div>
  );
}

export default UiUx;
