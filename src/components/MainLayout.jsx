import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const MainLayout = ({ logInStatus }) => {
  return (
    <>
      <NavBar logInStatus={logInStatus} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
