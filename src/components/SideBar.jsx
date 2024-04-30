import UserAvatar from "./UserAvatar";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
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
  darkMode,
  toggleDark,
}) => {
  const [editProfile, setEditProfile] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);

  //Opening the edit
  const handleEdit = () => {
    setEditProfile(!editProfile);
  };

  // //Storing Last and First Name
  // const handleLastNameChange = (e) => {
  //   const newLastName = e.target.value;
  //   setLastName(newLastName);
  // };
  // const handleFirstNameChange = (e) => {
  //   const newFirstName = e.target.value;
  //   setFirstName(newFirstName);
  // };
  // //Submit the form -- Close the edit
  // const handleSave = (e) => {
  //   e.preventDefault();
  //   setEditProfile(false);
  // };

  //Submit form - update firstName and lastName
  const handleSave = (e) => {
    e.preventDefault();
    const newLastName = e.target.elements.lastName.value;
    const newFirstName = e.target.elements.firstName.value;
    setLastName(newLastName);
    setFirstName(newFirstName);

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
    toast.success("You have successfully logged out!", {
      duration: 1000,
      className:
        "font-title text-xs bg-primary-light  dark:bg-white/60 dark:text-primary-dark",
    });
  };

  return (
    <div
      className={
        sideBar ? "sideBarStyles" : "sideBarStyles opacity-0 invisible  "
      }
    >
      <Toaster />
      <div className="inline-flex justify-between items-center">
        <div className="ml-4">
          <ThemeToggle darkMode={darkMode} toggleDark={toggleDark} />
        </div>

        <button
          onClick={handleSideBar}
          to="/"
          type="button"
          className="sideBarClose"
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
      </div>

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
          <button className="w-full">
            <span
              onClick={handleEdit}
              className={`${
                editProfile ? "after:w-full" : "after:w-2"
              } sideBarNav`}
            >
              Edit Profile
            </span>
          </button>
          {editProfile && (
            <form onSubmit={handleSave} className="mb-8">
              <label htmlFor="lastName" className="loginLabel">
                Enter your last name
              </label>
              <input
                // onChange={handleLastNameChange}
                id="lastName"
                name="lastName"
                className="loginInput"
                placeholder="Enter your last name..."
                type="text"
              />
              <br />
              <label htmlFor="firstName" className="loginLabel">
                Enter your first name
              </label>
              <input
                // onChange={handleFirstNameChange}
                id="firstName"
                name="firstName"
                className="loginInput"
                placeholder="Enter your first name..."
                type="text"
              />
              <br />
              <button className="createBtn" type="submit">
                Save
              </button>
            </form>
          )}
          <button className="w-full">
            <span onClick={handleChangeColor} className="sideBarNav">
              Change Avatar Color
            </span>
          </button>
          <button className="w-full">
            <span
              onClick={handleOpenUpload}
              className={`${
                uploadImage ? "after:w-full" : "after:w-2"
              } sideBarNav`}
            >
              Upload Profile Image
            </span>
          </button>
          {uploadImage && (
            <input
              className="uploadFile"
              onChange={handleUploadImage}
              type="file"
              name="avatar"
              id="avatar"
              accept="image/png, image/jpeg"
            />
          )}

          <p className="w-full text-center">
            <span className="sideBarNav">About</span>
          </p>
          <p className="w-full text-center">
            <span className="sideBarNav">Help</span>
          </p>
          <p className="w-full text-center">
            <span className="sideBarNav">Settings</span>
          </p>

          <button
            className={`${
              editProfile || uploadImage
                ? "createBtn w-1/2 "
                : "absolute bottom-20 createBtn w-1/2"
            }`}
          >
            <Link onClick={handleLogOut} to="/">
              Log Out
            </Link>
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-8 my-[20%]">
          <p className="w-full text-center">
            <span className="sideBarNav">About</span>
          </p>
          <p className="w-full text-center">
            <span className="sideBarNav">Help</span>
          </p>
          <p className="w-full text-center">
            <span className="sideBarNav">Setting</span>
          </p>

          <Link
            to="/login"
            className="absolute bottom-20 createBtn w-1/2"
            onClick={handleSideBar}
          >
            <button>Log in</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBar;
