import GuestContainer from "./pages/GuestContainer";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import TodoList from "./pages/TodoList";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const handleOnClick = () => {
    if (!loggedIn) {
      setLoggedIn(!loggedIn);
      alert(
        "Your avatar credentials have been set as 'Random User' by default. You can edit these credentials in your profile settings."
      );
      toast.success("You have successfully logged in!", {
        duration: 1000,
        className:
          "font-title text-xs bg-primary-light  dark:bg-white/60 dark:text-primary-dark",
      });
    } else {
      setLoggedIn(!loggedIn);
      toast.success("You have successfully logged out!", {
        duration: 1000,
        className:
          "font-title text-xs bg-primary-light  dark:bg-white/60 dark:text-primary-dark",
      });
    }
  };

  //Store theme pref in local storage
  const toggleDark = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.body.classList.toggle("dark", newTheme);
    localStorage.setItem("darkTheme", newTheme);
  };

  //Get theme pref
  useEffect(() => {
    const theme = localStorage.getItem("darkTheme");

    if (theme !== null) {
      const setDark = theme === "true";
      setDarkMode(setDark);
      document.body.classList.toggle("dark", setDark);
    }
  }, []);

  return (
    <>
      <div className="wrapper">
        <Toaster containerStyle />
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
        <NavBar
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          darkMode={darkMode}
          toggleDark={toggleDark}
        />
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
