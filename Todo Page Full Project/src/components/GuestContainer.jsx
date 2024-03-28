const GuestContainer = ({ Login, Register }) => {
  return (
    <div className="guestcontainer">
      <button type="button" className="createBtn font-title ">
        <a id="createToDo" href="Todo Page/index.html">
          Create your ToDo{" "}
        </a>
      </button>
      <p className="smallp font-title">
        *As a guest you can save only one ToDo List
      </p>
      <div className="signcontainer">
        <button
          onClick={Register}
          className="registerBtn signBtn group font-title  "
        >
          <span className="signSpan">Register</span>
        </button>
        <button onClick={Login} className=" logInBtn signBtn group">
          <span className=" signSpan font-title">Log in</span>
        </button>
      </div>
    </div>
  );
};

export default GuestContainer;
