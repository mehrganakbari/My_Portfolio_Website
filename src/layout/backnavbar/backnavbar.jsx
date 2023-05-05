import { Link } from "react-router-dom";
import "../../index.css";

function BackNavBar() {
  return (
    <nav className="mx-auto container max-w-[1445px] z-50">
      <div className="bg-slate-800 text-white mx-5 mt-10 mb-5 py-3 px-5 shadow rounded-full flex justify-between items-center">
        <p className="text-yellow-400">Hello World!</p>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default BackNavBar;
