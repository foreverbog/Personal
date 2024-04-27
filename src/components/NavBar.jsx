import Logo from "/images/Logo.png";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import SideBar from "./SideBar";
import UserAvatar from "./UserAvatar";

const NavBar = ({ loggedIn, setLoggedIn, darkMode, toggleDark }) => {
  const [sideBar, setSideBar] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatarImage, setAvatarImage] = useState(null);
  const [imageAlt, setImageAlt] = useState("");
  const [color, setColor] = useState("bg-neutral-200");
  const colors = [
    "bg-emerald-400",
    "bg-blue-400",
    "bg-neutral-200",
    "bg-yellow-400",
  ];

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <div className="bg-primary-light bg-opacity-70 dark:bg-primary-dark hover:bg-neutral-100  duration-300 flex justify-between items-center">
      <NavLink to="/">
        <img className="w-20 ml-8 " src={Logo} alt="logo" />
      </NavLink>

      <div>
        <button className="lg:hidden mr-8 dark:text-white/60">
          <TiThMenu onClick={handleSideBar} className="w-6 h-6" />
        </button>
      </div>
      {/* Loggedn state */}
      {loggedIn ? (
        <div className=" hidden lg:flex gap-4 mr-8 p-4">
          <ThemeToggle darkMode={darkMode} toggleDark={toggleDark} />
          <NavLink to="/docs" className="createBtn font-title m-0">
            Docs
          </NavLink>
          <button>
            <UserAvatar
              avatarImage={avatarImage}
              imageAlt={imageAlt}
              color={color}
              firstName={firstName}
              lastName={lastName}
              handleSideBar={handleSideBar}
            />
          </button>
        </div>
      ) : (
        <div className="  hidden lg:flex gap-4 mr-8">
          <ThemeToggle darkMode={darkMode} toggleDark={toggleDark} />
          <button className="hover:underline  font-title text-md">
            <IoSettingsSharp
              onClick={handleSideBar}
              className="w-6 h-6 dark:text-white/60"
            />
          </button>
          <NavLink to="/docs" className="createBtn font-title m-0">
            Docs
          </NavLink>
        </div>
      )}

      {/* SIDEBAR  */}
      <SideBar
        avatarImage={avatarImage}
        setAvatarImage={setAvatarImage}
        imageAlt={imageAlt}
        setImageAlt={setImageAlt}
        color={color}
        setColor={setColor}
        colors={colors}
        lastName={lastName}
        setLastName={setLastName}
        firstName={firstName}
        setFirstName={setFirstName}
        sideBar={sideBar}
        handleSideBar={handleSideBar}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        darkMode={darkMode}
        toggleDark={toggleDark}
      />
    </div>
  );
};

export default NavBar;
