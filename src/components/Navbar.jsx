import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { checkToken, deleteToken } from "../api/storage";
import { useMutation } from "react-query";

const Navbar = () => {
  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => deleteToken(),
    onSuccess: () => {
      setUser(false);
    },
  });
  // todo
  // add Active styles for navlinks
  // better looking navbar
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="flex p-5 gap-5 justify-center absolute w-screen border-b">
      <NavLink to="/">Main</NavLink>
      <NavLink to="/home">Home</NavLink>
      {/* <NavLink to="/me/transactions">Transactions</NavLink> */}
      <NavLink to="/me">Profile</NavLink>
      <NavLink to="/users">Users</NavLink>
      {user ? (
        <NavLink to="/" onClick={mutate}>
          Logout
        </NavLink>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>

          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
