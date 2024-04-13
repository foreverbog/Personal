import Logo from "../assets/images/Logo.png";
import { TiThMenu } from "react-icons/ti";

import { IoSettingsSharp } from "react-icons/io5";
const NavBar = ({ loggedIn }) => {
  return (
    <div className="bg-neutral-100/70 hover:bg-neutral-100  duration-300 flex justify-between items-center">
      <img className="w-20 ml-8 " src={Logo} alt="logo" />
      <div>
        <button className="lg:hidden mr-8">
          <TiThMenu className="w-6 h-6" />
        </button>
      </div>

      {loggedIn ? (
        <div className=" hidden lg:flex gap-4 mr-8">
          <button className="createBtn font-title m-0">Docs</button>
          <button className="">
            <button className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-neutral-200 rounded-full hover:scale-110 duration-500 border-2 border-gray-900/10">
              <span className="font-medium text-gray-900 ">BL</span>
            </button>
          </button>
        </div>
      ) : (
        <div className="  hidden lg:flex gap-4 mr-8">
          <button className="hover:underline  font-title text-md">
            <IoSettingsSharp className="w-6 h-6" />
          </button>
          <button className="createBtn font-title m-0"> Docs</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
