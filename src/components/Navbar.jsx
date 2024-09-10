import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { checkToken, deleteToken } from "../api/storage";
import { useMutation } from "@tanstack/react-query";

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
    <div className="flex p-3 gap-5 justify-center absolute w-screen border-b">
      <NavLink className="hover:bg-secondary hover:text-white p-1 h-full rounded-md" style={({isActive})=>{return{textDecoration: isActive ? "underline" : "none"}}} to="/">Main</NavLink>
      <NavLink className="hover:bg-secondary hover:text-white p-1 h-full rounded-md" style={({isActive})=>{return{textDecoration: isActive ? "underline" : "none"}}} to="/home">Home</NavLink>
      {/* <NavLink to="/me/transactions">Transactions</NavLink> */}
      <NavLink className="hover:bg-secondary hover:text-white p-1 h-full rounded-md" style={({isActive})=>{return{textDecoration: isActive ? "underline" : "none"}}} to="/me">Profile</NavLink>
      <NavLink className="hover:bg-secondary hover:text-white p-1 h-full rounded-md" style={({isActive})=>{return{textDecoration: isActive ? "underline" : "none"}}} to="/users">Users</NavLink>
      {user ? (
        <NavLink className="hover:bg-red-700 hover:text-white p-1 h-full rounded-md" to="/" onClick={mutate}>
          Logout
        </NavLink>
      ) : (
        <>
          <NavLink className="hover:bg-secondary hover:text-white p-1 h-full rounded-md" style={({isActive})=>{return{textDecoration: isActive ? "underline" : "none"}}} to="/login">Login</NavLink>

          <NavLink className="hover:bg-secondary hover:text-white p-1 h-full rounded-md" style={({isActive})=>{return{textDecoration: isActive ? "underline" : "none"}}} to="/register">Register</NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
