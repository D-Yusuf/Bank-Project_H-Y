import React from "react";

const User = ({ userInfo, key, isPending }) => {
  const { _id, username, balance, image } = userInfo;

  if (!isPending) console.log(userInfo);
  return (
    <div className="flex flex-col border w-fit items-center p-4">
      <img
        className="w-[50px] rounded-full"
        src={"https://react-bank-project.eapi.joincoded.com/" + image} // the + here will add the image as the endpoint to the url
        alt={`${username}'s image`}
      />
      <h1>{_id}</h1> {/**same as userinfo.id */}
      <h1>{username}</h1>
      <h1>{balance}</h1>
    </div>
  );
};

export default User;
