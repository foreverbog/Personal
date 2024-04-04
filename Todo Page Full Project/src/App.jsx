import { Route, Routes } from "react-router-dom";
import GuestContainer from "./components/GuestContainer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleOnClick = () => {
    setLoggedIn(!loggedIn);
  };
  return (
    <>
      <div className="wrapper">
        {/* BEFORE LEARNING REACT ROUTE */}
        {/* {!login && !register ? (
          <h1 className="font-title text-neutral-100 text-[4rem] text-center  pt-[200px]  lg:text-[5rem]">
            Welcome !
          </h1>
        ) : register ? (
          <h1 className="font-title text-neutral-100 text-[3rem] text-center  lg:text-[5rem]">
            We are happy to have you here !
          </h1>
        ) : (
          <h1 className="font-title text-neutral-100 text-[4rem] text-center  pt-[200px]  lg:text-[5rem]">
            Welcome Back !
          </h1>
        )}

        <div className="form ">
          {!login && !register ? (
            <GuestContainer Login={handleLogin} Register={handleRegister} />
          ) : login ? (
            <LoginForm Login={handleLogin} />
          ) : (
            <RegisterForm Register={handleRegister} />
          )}
        </div> */}

        <Routes>
          <Route
            path="/"
            element={
              <GuestContainer
                logInStatus={loggedIn}
                logInClick={handleOnClick}
              />
            }
          />
          <Route path="/todolist" element={<div>TODO LIST APP</div>} />
          <Route
            path="/login"
            element={
              <LoginForm
                logInStatus={loggedIn}
                setLoggedInStatus={setLoggedIn}
                logInClick={handleOnClick}
              />
            }
          />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
