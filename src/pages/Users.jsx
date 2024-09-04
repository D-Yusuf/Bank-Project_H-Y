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


  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data? data.map((user, index) => {
        return <User userInfo={user} key={user._id }  />; 
      }) : "Loading"}
    </div>
  );
};

export default Users;
