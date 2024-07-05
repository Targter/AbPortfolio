import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = ({ ShowDarkBg, ClickForB1g }) => {
  const [showDropDown, SetDropDown] = useState(false);
  const ButtonClick = () => {
    SetDropDown(!showDropDown);
  };

  const ClickForBg = (arr) => {
    ClickForB1g(arr);
  };
  return (
    <>
      {" "}
      <div className="dark:bg-[#2B2D42] h-auto w-full overflow-x-hidden fixed z-[999] text-white mb-2">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={ButtonClick}
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700  hover:text-white  ${
                        ShowDarkBg === 0 ? "dark:bg-gray-900" : ""
                      }`}
                      onClick={() => ClickForBg(0)}
                      aria-current="page"
                    >
                      HOME
                    </Link>
                    <Link
                      to="/page1"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                        ShowDarkBg === 1 ? "dark:bg-gray-900" : ""
                      }`}
                      onClick={() => ClickForBg(1)}
                    >
                      Skills
                    </Link>
                    <Link
                      to="/page2"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white  ${
                        ShowDarkBg === 2 ? "dark:bg-gray-900" : ""
                      }`}
                      onClick={() => ClickForBg(2)}
                    >
                      Work Experience
                    </Link>
                    <Link
                      to="/page3"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white  ${
                        ShowDarkBg === 3 ? "dark:bg-gray-900" : ""
                      }`}
                      onClick={() => ClickForBg(3)}
                    >
                      Projects
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-lg font-bold flex  w-[200px] lg:pl-[170px] items-center justify-center">
                <Link to="/ContactMe">
                  <span className="w-[200px] h-[30px] pl-3 pr-3 pt-1 rounded-xl font-extrabold text-white text-xl hover:text-3xl">
                    AbhayBansal
                  </span>
                </Link>
              </div>
              <div className="max-w-screen-xl w-1/2 px-4 py-3  ">
                <div className="flex justify-end items-center">
                  <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                    <li className="w-6 h-6">
                      <a
                        href="https://www.linkedin.com/in/abhaybansal0003/"
                        target="_blank"
                      >
                        <FaLinkedin
                          className="w-[100%] h-[100%] text-white hover:dark:bg-slate-600
                        hover:scale-[1.1]  "
                        />
                      </a>
                    </li>
                    <li className="w-6 h-6">
                      <a href="mailto:bansalabhay00@gmail.com">
                        <IoMail
                          className="w-[100%] h-[100%] hover:bg-gray-700 hover:text-white hover:dark:bg-slate-600
                        hover:scale-[1.1] "
                        />
                      </a>
                    </li>
                    <li className="w-6 h-6">
                      <a href="https://x.com/AbCheckk" target="_blank">
                        <FaSquareXTwitter
                          className="w-[100%] h-[100%] hover:bg-gray-700  hover:dark:bg-slate-600
                        hover:scale-[1.1] hover:text-white"
                        />
                      </a>{" "}
                    </li>
                    <li className="w-6 h-6">
                      <a href="https://github.com/Targter" target="_blank">
                        <FaGithub
                          className="w-[100%] h-[100%] hover:bg-gray-700 hover:text-white hover:dark:bg-slate-600
                        hover:scale-[1.1] "
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`sm:hidden ${showDropDown ? "" : "hidden"}`}
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="/"
                className={`block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white  ${
                  ShowDarkBg === 0 ? "dark:bg-gray-900" : ""
                }`}
                aria-current="page"
                onClick={() => {
                  ButtonClick();
                  ClickForBg(0);
                }}
              >
                HOME
              </Link>
              <Link
                to="/page1"
                className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white  ${
                  ShowDarkBg === 1 ? "dark:bg-gray-900" : ""
                }`}
                onClick={() => {
                  ButtonClick();
                  ClickForBg(1);
                }}
              >
                Skills
              </Link>
              <Link
                to="/page2"
                className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white  ${
                  ShowDarkBg === 2 ? "dark:bg-gray-900" : ""
                }`}
                onClick={() => {
                  ButtonClick();
                  ClickForBg(2);
                }}
              >
                Work Experience
              </Link>
              <Link
                to="/page3"
                className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white  ${
                  ShowDarkBg === 3 ? "dark:bg-gray-900" : ""
                }`}
                onClick={() => {
                  ButtonClick();
                  ClickForBg(3);
                }}
              >
                Projects
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
