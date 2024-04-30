import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className="bg-primary-light/60 hover:bg-primary-light transition-[hover] duration-300 dark:bg-primary-dark dark:text-white/60 absolute bottom-0 p-4 w-dvw font-title
    flex gap-4 justify-between items-center lg:grid lg:grid-cols-3 lg:items-center"
    >
      <p className="text-xs text-wrap">
        Copyright © 2024 Bogdan Lazar (foreverbog) - All right reserved
      </p>
      <div className="hidden lg:flex gap-8  grow justify-center items-center text-sm underline">
        <Link to="/docs">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="  flex gap-4  items-center justify-center lg:justify-self-end  mr-4">
        <a href="https://github.com/foreverbog/React-Todo-App" target="_blank">
          <FaGithub className="text-2xl hover:text-black duration-300" />
        </a>
        <a
          href="https://linkedin.com/in/bogdan-lazar-000794198"
          target="_blank"
        >
          <FaLinkedin className="text-2xl hover:text-[#0a66c2] duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
