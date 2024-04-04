import { Link } from "react-router-dom";

const GuestContainer = (props) => {
  const { logInStatus, logInClick } = props;
  return (
    <div className="form">
      <div className="guestcontainer">
        <Link to="/todolist" className="createBtn font-title ">
          Create your ToDo
        </Link>
        {!logInStatus ? (
          <p className="smallp font-title">
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
    </div>
  );
};

export default GuestContainer;
