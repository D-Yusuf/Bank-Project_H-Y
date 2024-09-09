import React, { useState } from "react";
import defaultPfP from "../images/defaultPfP.jpg";
import { useMutation } from "@tanstack/react-query";
import { transfer } from "../api/auth";
import { useQueryClient } from "@tanstack/react-query";
const User = ({ userInfo, refetchUsers }) => {
    const queryClient = useQueryClient();
  const { _id, username, balance, image } = userInfo;
  const [transferedMoney, setTransferedMoney] = useState('');
  
  function handleChange(e) {
    setTransferedMoney(e.target.value);
  }
  const { mutate: sendMoney } = useMutation({
    mutationKey: ["transfer"],
    mutationFn: () => transfer(transferedMoney, username),
    onSuccess:  () => {
        queryClient.invalidateQueries({queryKey:["getAllUsers"]}).then(()=>refetchUsers());

        setTransferedMoney('');
    },
  });
//   function handleSubmit(e) {
//     e.preventDefault();
//     sendMoney();
//     console.log(transferedMoney);
//   }

  return (
    <div className="flex flex-col border items-center p-8 gap-3 min-w-[200px]   bg-secondary text-white rounded-md">
      <img
        className="w-[75px] h-[75px] rounded-full"
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
      <div
        className="flex flex-col items-center gap-4 text-black"
      
      >
        <input
          required
          type="number"
          className="pl-2"
          onChange={handleChange}
          value={transferedMoney}
        />
        <button
    onClick={() => sendMoney()}
          className="bg-accent py-2 px-4 w-fit text-lg rounded-full text-white"
        >
          Transfer
        </button>
      </div>
    </div>
  );
};

export default User;
