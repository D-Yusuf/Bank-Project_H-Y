import React, { useContext } from "react";
import {  NavLink } from "react-router-dom";
import UserContext from "../Context/UserContext";

const Navbar = () => {
  // todo
  // add Active styles for navlinks
  // better looking navbar
  const [user, setUser] = useContext(UserContext)
  return (
    <div className="flex p-5 gap-5 justify-center absolute w-screen border-b">
      <NavLink to="/">Main</NavLink>
      <NavLink to="/home">Home</NavLink>
      {/* <NavLink to="/me/transactions">Transactions</NavLink> */}
      <NavLink to="/me">Profile</NavLink>
      {user ?
      <button onClick={()=>setUser(false)}>Logout</button>
        :
      <>
      <NavLink to="/login">Login</NavLink>

      <NavLink to="/register">Register</NavLink>
      </>
      }


    </div>
  );
};

export default Navbar;
