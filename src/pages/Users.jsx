import React from "react";
import { getAllUsers } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import User from "../components/User";
const Users = () => {
  const [query, setQuery] = useState("d");
  function handleChange(e){
    setQuery(e.target.value)
  }
  const { data, isPending, refetch } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: getAllUsers,
  });
  if (!isPending) console.log(data.map(use=>use.username));
  // const usersList = data ?
    // data.filter((user) => query ?  user.username.toLowerCase().includes(query.toLowerCase()))
    // .map((user) => <PetItem pet={pet} key={pet.id} />);
  // let userList = "";

  return (
    <div className="flex flex-col gap-5">
    <div className="flex flex-wrap gap-4 justify-center max-w-7xl mx-auto">
      {data
        ? data.map((user) => {
          return (
            <User userInfo={user} key={user._id} isPending={isPending} refetchUsers={()=>refetch()} />
          );
        })
        : "Loading"}
    </div>
    </div>
  );
};

export default Users;
