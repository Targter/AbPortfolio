import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Box6container = () => {
  return (
    <>
      <div className=" w-full h-screen flex items-center justify-center text-white bg-black pt-24  overflow-hidden">
        <div className="w-10/12 md:w-10/12 h-full flex flex-col md:mt-24 mt-14  md:justify-center  items-center gap-2 mb-[100px]">
          <div className="diconbox6 rounded-xl max-w-3xl w-full h-[50px] mb-11 bg-[rgb(45,55,69)] flex justify-center items-center">
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
          <div className="border-2  w-full md:w-[65%] h-11/12  flex flex-col justify-between text-white gap-3 md:gap-0 rounded-2xl items-start ">
            <div className="flex flex-col justify-between gap-3 w-full h-auto bg-gray-800 overflow-hidden rounded-t-2xl p-4">
              <div className="text-sm md:text-lg w-full md:w-9/12">
                GET IN TOUCH
              </div>
              <div className="text-sm sm:text-lg md:text-3xl font-extrabold w-full md:w-9/12">
                CONTACT
              </div>
            </div>
            <form
              className="flex  p-8 pr-1 pt-4 flex-col w-11/12 h-3/4 sm:pt-2 gap-2 sm:gap-3 md:gap-4"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="4ca22538-4460-4a05-8a57-d4d01c53d3f7"
              />
              <label
                htmlFor="name"
                className="text-xs sm:text-sm md:text-xl font-bold "
              >
                Your name
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="what's your good name?"
                className="font-light sm:font-bold  w-full ml-0 sm:ml-3 h-8 lg:h-11 outline-none bottom-0  pl-2 lg:pl-5 text-black lg:text-lg text-xs rounded-lg  hover:bg-gray-700 hover:text-white"
                required
              />
              <label
                htmlFor="yourmail"
                className="text-xs sm:text-sm md:text-xl font-bold"
                name="mail"
              >
                Your email
              </label>
              <input
                type="email"
                placeholder="what's your web address?"
                className="font-light sm:font-bold  w-full ml-0 sm:ml-3 h-8 lg:h-11 outline-none bottom-0  pl-2 lg:pl-5 text-black lg:text-lg text-xs rounded-lg  hover:bg-gray-700 hover:text-white"
                name="mail_Is"
                required
              />
              <label
                htmlFor="yourmessage"
                className="text-xs sm:text-sm md:text-xl font-bold"
              >
                Your message
              </label>
              <input
                type="text"
                placeholder="what you want to say?"
                className="font-light sm:font-bold  w-full ml-0 sm:ml-3 h-8 lg:h-11 outline-none bottom-0  pl-2 lg:pl-5 text-black lg:text-lg text-xs rounded-lg  hover:bg-gray-700 hover:text-white"
                name="message_is"
                required
              />
              <button
                className="mt-3 ml-0 lg:ml-3 w-full h-11 rounded-md bg-gray-800 hover:bg-gray-700 hover:text-white"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box6container;
