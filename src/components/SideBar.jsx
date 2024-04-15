import UserAvatar from "./UserAvatar";
import { useState } from "react";
import { Link } from "react-router-dom";
const SideBar = ({
  sideBar,
  handleSideBar,
  loggedIn,
  setLoggedIn,
  lastName,
  setLastName,
  firstName,
  setFirstName,
  colors,
  color,
  setColor,
  avatarImage,
  setAvatarImage,
  imageAlt,
  setImageAlt,
}) => {
  const [editProfile, setEditProfile] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);

  //Opening the edit
  const handleEdit = () => {
    setEditProfile(!editProfile);
  };

  //Storing Last and First Name
  const handleLastNameChange = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
  };
  const handleFirstNameChange = (e) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
  };
  //Submit the form -- Close the edit
  const handleSave = (e) => {
    e.preventDefault();
    setEditProfile(false);
  };

  //Change Avatar Color
  const handleChangeColor = () => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[colorIndex];
    setColor(selectedColor);
  };

  //Opening the upload avatar
  const handleOpenUpload = () => {
    setUploadImage(!uploadImage);
  };
  //Upload Avatar Image
  const handleUploadImage = (e) => {
    // console.log(e.target.files[0]);
    setAvatarImage(URL.createObjectURL(e.target.files[0]));
    setImageAlt(e.target.files[0].name);
    setUploadImage(!uploadImage);
  };

  //Log Out
  const handleLogOut = () => {
    setLoggedIn(!loggedIn);
    handleSideBar();
  };
  console.log();
  return (
    <div
      className={
        sideBar
          ? "flex flex-col absolute top-0 right-0 bottom-0 w-80 bg-primary-light z-50  shadow-[0_0_0_10000px_rgba(0,0,0,.40)] transition-all ease-out duration-500  "
          : "flex flex-col absolute top-0 right-0 bottom-0 w-80 bg-primary-light z-50  opacity-0  invisible transition-all ease-out duration-500 "
      }
    >
      <button
        onClick={handleSideBar}
        to="/"
        type="button"
        className=" closeBtnStyles ms-auto mx-4 my-4 w-10 h-10"
        data-dismiss-target="#toast-warning"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-4 h-4"
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
      </button>

      {loggedIn ? (
        <div className="flex flex-col justify-center items-center">
          <button className="mb-8  hover:scale-100">
            <UserAvatar
              avatarImage={avatarImage}
              imageAlt={imageAlt}
              color={color}
              firstName={firstName}
              lastName={lastName}
            />
          </button>
          <button onClick={handleEdit}>Edit Profile</button>
          {editProfile && (
            <form onSubmit={handleSave}>
              <label htmlFor="lastName">Enter your last name</label>
              <input
                value={lastName}
                onChange={handleLastNameChange}
                id="lastName"
                name="lastName"
                className="bg-red-300"
                type="text"
              ></input>{" "}
              <br />
              <label htmlFor="firstName">Enter your first name</label>
              <input
                value={firstName}
                onChange={handleFirstNameChange}
                id="firstName"
                name="firstName"
                className="bg-red-300"
                type="text"
              ></input>{" "}
              <br />
              <button type="submit">Save</button>
            </form>
          )}
          <button onClick={handleChangeColor}>Change Avatar Color</button>
          <button onClick={handleOpenUpload}>Upload Profile Image</button>
          {uploadImage && (
            <input
              onChange={handleUploadImage}
              type="file"
              name="avatar"
              id="avatar"
              accept="image/png, image/jpeg"
            />
          )}

          <p>About</p>
          <p>Help</p>
          <p>Settings</p>
          <button className="absolute bottom-20">
            <Link onClick={handleLogOut} to="/">
              Log Out
            </Link>
          </button>
        </div>
      ) : (
        <div>
          <p>About</p>
          <p>Help</p>
          <p>Settings</p>
          <button className="absolute bottom-20">
            <Link onClick={handleSideBar} to="/login">
              Log in
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default SideBar;
