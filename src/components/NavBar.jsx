import Logo from "../assets/images/Logo.png";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NavBar = ({ loggedIn }) => {
  const [sideBar, setSideBar] = useState(false);
  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <div className="bg-neutral-100/70 dark:bg-slate-800 hover:bg-neutral-100  duration-300 flex justify-between items-center">
      <NavLink to="/">
        <img className="w-20 ml-8 " src={Logo} alt="logo" />
      </NavLink>

      <div>
        <button className="lg:hidden mr-8">
          <TiThMenu onClick={handleSideBar} className="w-6 h-6" />
        </button>
      </div>
      {/* Loggedn state */}
      {loggedIn ? (
        <div className=" hidden lg:flex gap-4 mr-8">
          <NavLink to="/docs" className="createBtn font-title m-0">
            Docs
          </NavLink>
          <button>
            <div
              onClick={handleSideBar}
              className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-neutral-200 rounded-full hover:scale-110 duration-500 border-2 border-gray-900/10 "
            >
              <span className="font-medium text-gray-900 ">BL</span>
            </div>
          </button>
        </div>
      ) : (
        <div className="  hidden lg:flex gap-4 mr-8">
          <ThemeToggle className="dark:text-white" />
          <button className="hover:underline  font-title text-md">
            <IoSettingsSharp
              onClick={handleSideBar}
              className="w-6 h-6 dark:text-white"
            />
          </button>
          <NavLink to="/docs" className="createBtn font-title m-0">
            Docs
          </NavLink>
        </div>
      )}

      {/* SIDEBAR  */}
      <div
        className={
          sideBar
            ? "absolute top-0 right-0 bottom-0 w-80 bg-red-300 z-50 border-l-2 border-blue-500 shadow-[0_0_0_10000px_rgba(0,0,0,.40)] transition-all ease-out duration-500 [transition-behavior: allow-discrete] "
            : "absolute top-0 right-0 bottom-0 w-80 bg-red-300 z-50 border-l-2 border-blue-500 opacity-0  invisible transition-all ease-out duration-300 "
        }
      >
        <button
          onClick={handleSideBar}
          to="/"
          type="button"
          className="closeBtn closeBtnStyles"
          data-dismiss-target="#toast-warning"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
