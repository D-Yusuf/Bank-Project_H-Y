import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import SplitScreen from "../components/SplitScreen/SplitScreen";
import Screen from "../components/SplitScreen/Screen";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import UserContext from "../Context/UserContext";
import { checkToken } from "../api/storage";
const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  function handleChange(e) {
    if (e.target.id == "image") {
      setUserInfo({ ...userInfo, [e.target.id]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
      console.log(userInfo);
    }
  }
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      if (checkToken()) {
        // console.log("loggedin");
        setUser(true);
      }
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    mutate();
  }
  if (user) {
    return <Navigate to={"/home"} />;
  }

  return (
    <SplitScreen>
      <Screen className="w-1/2 h-full bg-white" direction="left">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:gap-10 gap-4 p-6 "
      >
        <h1 className="lg:text-4xl text-3xl font-extrabold text-center">
          [Welcome to the Fullstack Bank]
        </h1>
        <hr />
        <h5 className="text-xl font-extrabold">Create Account</h5>
        <h5 className="text-lg font-semibold">
          Enter your information to create a new account
        </h5>
        <label className="flex flex-col" htmlFor="username">
          Username
          <input
            onChange={handleChange}
            required
            id="username"
            className="bg-secondary text-white p-3 rounded-lg text-xl"
            type="text"
          />
        </label>
        <label className="flex flex-col" htmlFor="password">
          Password
          <input
            onChange={handleChange}
            required
            id="password"
            className="bg-secondary text-white p-3 rounded-lg text-xl"
            type="password"
          />
        </label>
        <label className="flex flex-col" htmlFor="image">
          Image
          <input
            onChange={handleChange}
            required
            id="image"
            className="bg-secondary text-white p-3 rounded-lg text-xl w-fit text-center"
            type="file"
          />
        </label>

        <button className="bg-accent text-white w-fit py-3 px-7 rounded-lg shadow-md hover:bg-opacity-80 active:bg-slate-500">
          Submit
        </button>
        <p>
          Already have an account?
          <Link className="underline text-blue-600 m-2" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
      </Screen>
      <Screen className="w-1/2 h-full bg-secondary" direction="right"></Screen>
      
    </SplitScreen>
    // <div className="flex w-full  items-center">
    //   <div class="split left bg-main">

    //   </div>

    /* <div className='w-1/2  h-full fixed overflow-x-hidden z-10 left-0'>
            <div className='flex flex-col  gap-10 p-4'>
                <h1 className='text-4xl font-extrabold text-center mb-28'>[Welcome to "name" bank]</h1>
                <h5 className='text-xl font-extrabold'>Create Account</h5>
                <h5 className='text-lg font-semibold'>Enter your information to create a new account</h5>
                <label className='flex flex-col' htmlFor="email">
                    Email
                    <input id='email' className='bg-secondary text-white p-3 rounded-lg' type="email" />
                </label>
                <label className='flex flex-col' htmlFor="password">
                    Password
                    <input id='password' className='bg-secondary text-white p-3 rounded-lg' type="password" />
                </label>
                
                <button className='bg-accent text-white w-fit p-3 rounded-lg shadow-md hover:bg-opacity-80 active:bg-slate-500'>Submit</button>
                <p>
                    Already have an account? 
                    <a className='underline text-blue-600 m-2' href="#">Login</a>
                    <Link to={"/login"}>Login</Link>  wont work until react query context wrap in index.js
                </p>

            </div>

        </div>
        <div className='w-1/2 h-full fixed overflow-x-hidden z-10 right-0'>
        </div> */
  );
};

export default Register;
