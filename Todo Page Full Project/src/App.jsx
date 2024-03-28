import { useState } from "react";
import GuestContainer from "./components/GuestContainer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
function App() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
    setRegister(false);
  };
  const handleRegister = () => {
    setRegister(!register);
    setLogin(false);
  };

  return (
    <>
      <div className="wrapper">
        {!login && !register ? (
          <h1 className="font-title text-neutral-100 text-[4rem] text-center  pt-[200px]  lg:text-[5rem]">
            Welcome 😎 !
          </h1>
        ) : register ? (
          <h1 className="font-title text-neutral-100 text-[3rem] text-center  lg:text-[5rem]">
            We are happy to have you here 😀 !
          </h1>
        ) : (
          <h1 className="font-title text-neutral-100 text-[4rem] text-center  pt-[200px]  lg:text-[5rem]">
            Welcome Back 😎 !
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
        </div>
      </div>
    </>
  );
}

export default App;
