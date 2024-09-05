import React, { useState } from "react";
import defaultPfP from "../images/defaultPfP.jpg"
import { useMutation } from "react-query";
const User = ({ userInfo }) => {
    const { _id, username, balance, image } = userInfo;
    const {mutate} = useMutation({
        mutationKey: []
    })
    return (
        <div className="flex flex-col border items-center p-8 gap-3 min-w-[200px]  bg-secondary text-white rounded-md">
        <img
            className="w-[75px] rounded-full"
            src={image ? "https://react-bank-project.eapi.joincoded.com/" + image : defaultPfP} // the + here will add the image as the endpoint to the url
            alt={`${username}'s img`}
        />
        {/* <h1>{_id}</h1> *same as userinfo.id */}
        <h1>{username}</h1>
        <h1>{balance}</h1>
        <button className="bg-accent py-2 px-4 w-fit text-lg rounded-full text-white">Transfer</button>
        
        </div>
    );
};

export default User;
