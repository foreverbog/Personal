import GuestContainer from "./pages/GuestContainer";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import TodoList from "./pages/TodoList";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
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
        <NavBar loggedIn={loggedIn} />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <GuestContainer
                  logInStatus={loggedIn}
                  logInClick={handleOnClick}
                />
              }
            />
            <Route path="/todolist" element={<TodoList />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

export default App;
