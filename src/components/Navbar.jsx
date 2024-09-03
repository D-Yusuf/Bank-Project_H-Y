import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  console.log("its working");
  return (
    <div className="navBar flex p-5 gap-5 justify-center z-50 absolute w-screen">
      <NavLink to="/">Main</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/me">Profile</NavLink>
      <NavLink to="/me/transactions">Transactions</NavLink>

      <NavLink to="/login">Login</NavLink>

      <NavLink to="/register">register</NavLink>
    </div>
  );
};

export default Navbar;
