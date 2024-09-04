import React from "react";
import defaultPfP from "../images/defaultPfP.jpg"
const User = ({ userInfo, key, isPending }) => {
  const { _id, username, balance, image } = userInfo;

  return (
    <div className="flex flex-col border w-fit items-center p-4">
      <img
        className="w-[50px] rounded-full"
        src={image ? "https://react-bank-project.eapi.joincoded.com/" + image : defaultPfP} // the + here will add the image as the endpoint to the url
        alt={`${username}'s img`}
      />
      <h1>{_id}</h1> {/**same as userinfo.id */}
      <h1>{username}</h1>
      <h1>{balance}</h1>
    </div>
  );
};

export default User;
