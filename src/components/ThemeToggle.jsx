import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = ({ darkMode, toggleDark }) => {
  // const [darkMode, setDarkMode] = useState(false);

  // const handleTheme = () => {
  //   const newTheme = !darkMode;
  //   setDarkMode(newTheme);
  //   document.body.classList.toggle("dark");
  // };

  return (
    <label className="inline-flex items-center cursor-pointer gap-2">
      <MdLightMode
        className={`w-4 h-4 dark:text-accent-dark ${
          darkMode ? "opacity-40" : ""
        }`}
      />
      <input
        onClick={toggleDark}
        type="checkbox"
        checked={darkMode}
        className="sr-only peer"
      />

      <div className="relative w-9 h-5 bg-gradient-to-br  from-secondary-light to-accent-light dark:from-secondary-dark dark:to-accent-dark rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-neutral-200 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-primary-light after:border-neutral-200 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600  dark:after:bg-primary-dark dark:peer-checked:after:border-primary-dark"></div>

      <MdDarkMode
        className={`w-4 h-4 dark:text-accent-dark ${
          darkMode ? "" : "opacity-40"
        }`}
      />
    </label>
  );
};

export default ThemeToggle;
