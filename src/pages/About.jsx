import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const About = () => {
  const [isTechStack, setIsTechStack] = useState(false);
  const [isUserEvents, setIsUserEvents] = useState(false);
  return (
    <motion.div
      className="main__container bg-primary-light dark:bg-primary-dark dark:text-white/60 p-4   font-title overflow-auto max-[1023px]:max-h-[500px] m-20 rounded-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-4xl text-center mb-4">About</h1>
      <p className="text-balance text-center mb-8">
        A react to do app that let the user to Create Read Update Delte a task
        list as a logged in user or as a guest
      </p>
      <div className="flex flex-col gap-4 items-center justify-center lg:grid grid-cols-2">
        <button
          onClick={() => {
            setIsTechStack(!isTechStack);
          }}
          to="/login"
          className=" logInBtn signBtn group w-40 justify-self-end"
        >
          <span className=" signSpan font-title text-center ">Tech Stack</span>
        </button>
        {isTechStack && (
          <div className="flex flex-col gap-4 text-balance text-center items-center row-start-2">
            <div className="flex flex-wrap gap-4 justify-center items-center w-3/5 my-0 mx-auto">
              <img
                src="images/html5-icon.svg"
                alt="htmllogo"
                width="32px"
                height="32px"
                className="lg:w-20"
              />
              <img
                src="images/css-icon.svg"
                alt="css-logo"
                width="32px"
                height="32px"
                className="lg:w-20"
              />
              <img
                src="images/javascript-icon.svg"
                alt="javaScript logo"
                width="32px"
                height="32px"
                className="lg:w-20"
              />
              <img
                src="images/tailwind-css-icon.svg"
                alt="javaScript-logo"
                width="32px"
                height="32px"
                className="lg:w-20"
              />
              <img
                src="images/react.svg"
                alt="react-logo"
                width="32px"
                height="32px"
                className="lg:w-20"
              />
              <img
                src="images/react-router-logo.svg"
                alt="react-router-logo"
                width="32px"
                height="32px"
                className="lg:w-20"
              />
              <img
                src="images/framer-motion-seeklogo.svg"
                alt="framer-motion-logo"
                width="28px"
                height="28px"
                className="lg:w-20"
              />
            </div>
            <div className="text-balance lg:text-xl">
              HTML, CSS, JavaScript, TailwindCSS, React, React-Router-Dom,
              Framer-motion, React-hot-toast, React-icons
            </div>
          </div>
        )}

        <button
          onClick={() => {
            setIsUserEvents(!isUserEvents);
          }}
          to="/login"
          className=" logInBtn signBtn group w-40"
        >
          <span className=" signSpan font-title text-center">
            Users Stories
          </span>
        </button>
        {isUserEvents && (
          <div className="p-4 m-4  items-center col-start-2">
            <ul className="flex flex-col justify-center gap-2 text-balance">
              <span className="text-xl underline text-center lg:text-start mb-4">
                As a user:
              </span>
              <li>I can to login and change my avatar badge credentials.</li>
              <li>I can randomly change my avatar badge color.</li>
              <li>
                I can upload a profile image to be displayed on my avatar badge.
              </li>
              <li>I can create a to do list.</li>
              <li>I can add new tasks.</li>
              <li>I can delete tasks.</li>
              <li>I can edit and update tasks.</li>
              <li>I can check tasks as completed.</li>
            </ul>
          </div>
        )}
      </div>
      <Link to="/" className="flex justify-center mt-4">
        <button className="addTodoBtn mx-auto">Go home</button>
      </Link>
    </motion.div>
  );
};

export default About;
