import "../../../index.css";
import Programming from "./layout/programming/programming";
import UiUx from "./layout/uix/uix";

function Skills() {
  return (
    <div className="mx-auto container max-w-[1440px] my-10 px-5">
      <p className="text-2xl text-white text-center">Skills</p>
      <p className="text-white text-center mt-2">
        My skills and expertise are summarized in front-end programming
      </p>
      <div className="grid lg:grid-cols-2 gap-10">
        <Programming />
        <UiUx />
      </div>
    </div>
  );
}

export default Skills;
