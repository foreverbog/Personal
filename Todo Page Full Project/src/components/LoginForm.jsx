import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const { logInClick } = props;
  return (
    <div className="form">
      <form className="logInForm loginFormStyles" id="login" action="">
        <Link
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
        </Link>
        <label htmlFor="email" className="loginLabel">
          Enter your Email Adress:
          <input
            type="email"
            id="email"
            className="loginInput"
            placeholder="Enter your Email Adress.."
            required=""
          />
        </label>
        <label htmlFor="passwword" className="loginLabel">
          Enter your Password:
          <input
            type="password"
            id="password"
            className="loginInput"
            placeholder="Enter your Password.."
            required=""
          />
        </label>

        <Link to="/" onClick={logInClick} className="createBtn w-[50%] mt-4">
          Log in
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
