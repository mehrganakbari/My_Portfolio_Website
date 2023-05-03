import "../../index.css";

function NavBar() {
  const handelResponsive = () => {
    const mobileMenu = document.querySelector(".mobileMenu");
    mobileMenu.classList.toggle("hidden");
  };
  return (
    <nav className="mx-auto container max-w-[1445px] z-50">
      <div className="bg-slate-800 text-white mx-5 mt-10 mb-5 py-3 px-5 shadow rounded-full flex justify-between items-center">
        <p className="text-yellow-400">Hello World!</p>
        <ul className="hidden sm:flex">
          <a href="#">
            <li className="px-5 transition-all duration-300 hover:text-yellow-400">
              Home
            </li>
          </a>
          <a href="#about">
            <li className="px-5 transition-all duration-300 hover:text-yellow-400">
              About
            </li>
          </a>
          <a href="#portfolios">
            <li className="px-5 transition-all duration-300 hover:text-yellow-400">
              Portfolios
            </li>
          </a>
          <a href="#Contact">
            <li className="px-5 transition-all duration-300 hover:text-yellow-400">
              Contact
            </li>
          </a>
        </ul>
        <button
          onClick={handelResponsive}
          id="navarBtn"
          className="sm:hidden">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="mobileMenu mx-5 py-3 px-5 bg-slate-800 hidden sm:hidden rounded-xl">
        <ul className="">
          <a href="#home">
            <li className="flex text-white py-2 px-5 gap-2 rounded-md transition-all duration-300 hover:text-yellow-400 hover:bg-gray-900">
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <p>Home</p>
            </li>
          </a>
          <a href="#about">
            <li className="flex text-white py-2 px-5 gap-2 rounded-md transition-all duration-300 hover:text-yellow-400 hover:bg-gray-900">
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
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <p>About</p>
            </li>
          </a>
          <a href="#portfolios">
            <li className="flex text-white py-2 px-5 gap-2 rounded-md transition-all duration-300 hover:text-yellow-400 hover:bg-gray-900">
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
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
              </svg>
              <p>Portfolios</p>
            </li>
          </a>
          <a href="#Contact">
            <li className="flex text-white py-2 px-5 gap-2 rounded-md transition-all duration-300 hover:text-yellow-400 hover:bg-gray-900">
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
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              <p>Contact</p>
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
