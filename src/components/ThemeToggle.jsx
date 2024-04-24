import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.body.classList.toggle("dark");
  };

  return (
    <label className="inline-flex items-center cursor-pointer gap-2">
      <MdLightMode
        className={`w-4 h-4 dark:text-accent-dark ${
          darkMode ? "opacity-40" : ""
        }`}
      />
      <input
        onClick={handleTheme}
        type="checkbox"
        value=""
        className="sr-only peer"
      />

      <div className="relative w-9 h-5 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-secondary-light dark:peer-checked:bg-accent-dark dark:after:bg-primary-dark dark:peer-checked:after:border-primary-dark"></div>
      {/* <div
        className={`relative w-9 h-5 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-secondary-light ${
          darkMode &&
          "dark:peer-checked:bg-accent-dark dark:after:bg-primary-dark dark:peer-checked:after:border-primary-dark"
        }`}
      ></div> */}
      <MdDarkMode
        className={`w-4 h-4 dark:text-accent-dark ${
          darkMode ? "" : "opacity-40"
        }`}
      />
    </label>
  );
};

export default ThemeToggle;
