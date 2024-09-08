import React from "react";
import { getAllUsers } from "../api/auth";
import { useQuery } from "react-query";
import { useState } from "react";
import User from "../components/User";
const Users = () => {
  const [query, setQuery] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: getAllUsers,
  });
  // if (!isPending) console.log(data);
  // // const usersList = data
  // //   ?.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()))
  // //   // .map((user) => <PetItem pet={pet} key={pet.id} />);
  // let userList = "";

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data
        ? data.map((user) => {
            return (
              <User userInfo={user} key={user._id} isPending={isPending} />
            );
          })
        : "Loading"}
    </div>
  );
};

export default Users;
