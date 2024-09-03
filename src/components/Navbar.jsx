import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  console.log("its working");
  return (
    <div className="navBar flex p-5 gap-5 justify-center z-50 absolute">
      <NavLink to="/">Main</NavLink>
      <NavLink to="/home">Home</NavLink>

      <NavLink to="/login">Login</NavLink>

      <NavLink to="/register">register</NavLink>
    </div>
  );
};

export default Navbar;
