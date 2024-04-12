import Logo from "../assets/images/Logo.png";
const NavBar = ({ loggedIn }) => {
  return (
    <div className="bg-neutral-100  flex">
      <img className="w-[80px]" src={Logo} alt="logo" />

      {loggedIn ? <p>hallo</p> : <p>you are not logged</p>}
    </div>
  );
};

export default NavBar;
