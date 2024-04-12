const NavBar = ({ logInStatus }) => {
  return (
    <div className="bg-neutral-100 p-4">
      {logInStatus ? <p>hallo</p> : <p>you are not logged</p>}
    </div>
  );
};

export default NavBar;
