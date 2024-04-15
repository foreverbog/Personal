import { useState } from "react";
const UserAvatar = ({
  handleSideBar,
  firstName,
  lastName,
  color,
  avatarImage,
  imageAlt,
}) => {
  const firstNameChar = firstName.charAt(0).toUpperCase();
  const lastNameChar = lastName.charAt(0).toUpperCase();

  return (
    <div
      onClick={handleSideBar}
      className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden ${color} rounded-full hover:scale-110 duration-500 border-2 border-gray-900/10 `}
    >
      <span className="font-medium text-gray-900 ">
        {avatarImage ? (
          <img
            src={avatarImage}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        ) : firstName.length > 0 && lastName.length > 0 ? (
          firstNameChar + lastNameChar
        ) : (
          "BL"
        )}
        {/* {firstName.length > 0 && lastName.length > 0
          ? firstNameChar + lastNameChar
          : "BL"} */}
        {/* <img src={avatarImage} alt={imageAlt} /> */}
      </span>
    </div>
  );
};

export default UserAvatar;
