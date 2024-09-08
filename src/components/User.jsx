import React, { useState } from "react";
import defaultPfP from "../images/defaultPfP.jpg";
import { useMutation } from "react-query";
import { transfer } from "../api/auth";
const User = ({ userInfo }) => {
  const { _id, username, balance, image } = userInfo;
  const { mutate } = useMutation({
    mutationKey: [],
  });

  const [transferedMoney, setTransferedMoney] = useState(0);

  function handleChange(e) {
    setTransferedMoney(e.target.value);
  }
  const { mutate: sendMoney } = useMutation({
    mutationKey: ["transfer"],
    mutationFn: () => transfer(userInfo.username, transferedMoney),
  });
  function handleSubmit(e) {
    e.preventDefault();
    sendMoney();
    console.log(transferedMoney);
  }

  return (
    <div className="flex flex-col border items-center p-8 gap-3 min-w-[200px]  bg-secondary text-white rounded-md">
      <img
        className="w-[75px] rounded-full"
        src={
          image
            ? "https://react-bank-project.eapi.joincoded.com/" + image
            : defaultPfP
        } // the + here will add the image as the endpoint to the url
        alt={`${username}'s img`}
      />
      {/* <h1>{_id}</h1> *same as userinfo.id */}
      <h1>{username}</h1>
      <h1>{balance}</h1>
      <form
        className="flex flex-col items-center gap-4 text-black"
        onSubmit={handleSubmit}
      >
        <input
          required
          type="number"
          className="pl-2"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-accent py-2 px-4 w-fit text-lg rounded-full text-white"
        >
          Transfer
        </button>
      </form>
    </div>
  );
};

export default User;
