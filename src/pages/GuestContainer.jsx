import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GuestContainer = (props) => {
  const { logInStatus, logInClick } = props;
  return (
    <motion.main
      className="form dark:bg-[#1b212c] main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="guestcontainer">
        <Link to="/todolist" className="createBtn font-title ">
          Create your ToDo
        </Link>
        {!logInStatus ? (
          <p className="smallp font-title dark:text-white">
            *As a guest you can save only one ToDo List
          </p>
        ) : (
          ""
        )}
        {!logInStatus ? (
          <div className="signcontainer">
            <Link
              to="/register"
              className="registerBtn signBtn group font-title  "
            >
              <span className="signSpan text-center">Register</span>
            </Link>
            <Link to="/login" className=" logInBtn signBtn group">
              <span className=" signSpan font-title text-center">Log in</span>
            </Link>
          </div>
        ) : (
          <Link onClick={logInClick} to="/" className=" logInBtn signBtn group">
            <span className=" signSpan font-title text-center">Log out</span>
          </Link>
        )}
      </div>
    </motion.main>
  );
};

export default GuestContainer;
