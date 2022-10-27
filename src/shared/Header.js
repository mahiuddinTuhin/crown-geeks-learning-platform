import { useContext, useState } from "react";
import { SiChai } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { MainContext } from "../context/UserContex";
import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";
import "../globalStyle.css";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navText, setNavText] = useState("gray");
  const [navBack, setNavBack] = useState("bg-violet-200");
  const { darkMode, setDarkMode, user, logOut } = useContext(MainContext);
  console.log(user?.photoURL);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const changeBackgroundMode = () => {
    setDarkMode(!darkMode);
    setNavText("white");
    darkMode ? setNavBack("bg-violet-400") : setNavBack("bg-slate-400");
  };
  return (
    <div
      className={`px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 ${navBack}`}
    >
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <NavLink
            to="/"
            aria-label="Company"
            title="Company"
            className="flex items-center mr-8"
          >
            <SiChai className="text-black text-3xl font-bold"></SiChai>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Crown Geeks
            </span>
          </NavLink>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/courses"
                aria-label="Our Courses"
                title="Our Courses"
                className={`font-medium tracking-wide text-${navText}-700 transition-colors duration-200 hover:text-purple-400 onHover`}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                aria-label="Our Courses"
                title="Our Courses"
                className={`font-medium tracking-wide text-${navText}-700 transition-colors duration-200 hover:text-purple-400 onHover`}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="Courses BLOG"
                title="Courses BLOG"
                className={`font-medium tracking-wide text-${navText}-700 transition-colors duration-200 hover:text-purple-400 onHover`}
              >
                BLOG
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          onClick={changeBackgroundMode}
          className="flex items-center border border-slate-400 px-3 py-2 rounded-xl bg-slate-800"
        >
          {darkMode ? (
            <>
              <BsLightbulb className="text-white"></BsLightbulb>{" "}
              <span className="ml-3">Light</span>{" "}
            </>
          ) : (
            <>
              <BsLightbulbOff className="text-white"></BsLightbulbOff>{" "}
              <span className="ml-3 text-white">Dark</span>{" "}
            </>
          )}
        </button>
        {user?.uid ? (
          <div className="flex items-center">
            <button
              onClick={handleLogOut}
              className="bg-slate-500 text-slate-100 px-4 py-1 mx-4 rounded 
              hover:bg-slate-400"
            >
              Sign out
            </button>
            <div>
              <img
                src={user?.photoURL}
                className="w-10 h-10 rounded-full"
                alt=""
              />
            </div>
          </div>
        ) : (
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/login"
                aria-label="Sign in"
                title="Sign in"
                className={`font-medium tracking-wide text-${navText}-700 transition-colors duration-200 hover:text-purple-400 onHover`}
              >
                Sign in
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        )}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <NavLink
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="flex items-center"
                    >
                      <SiChai className="text-fuchsia-400 text-3xl font-bold"></SiChai>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Crown Geeks
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/courses"
                        aria-label="Our Courses"
                        title="Our Courses"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        aria-label="Our Courses"
                        title="Our Courses"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        aria-label="Courses BLOG"
                        title="Courses BLOG"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                      >
                        BLOG
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/signin"
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                      >
                        Sign in
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/signup"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Sign up
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
