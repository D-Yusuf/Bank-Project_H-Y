import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SplitScreen from "../components/SplitScreen/SplitScreen";
import { login } from "../api/auth";
import { useMutation } from "react-query";
import { checkToken } from "../api/storage";
import UserContext from "../Context/UserContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
    console.log(userInfo);
  }
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:gap-10 gap-4 p-6 "
      >
        <h1 className="lg:text-4xl text-3xl font-extrabold text-center">
          [Welcome back to the Fullstack Bank!]
        </h1>
        <hr />
        <h5 className="text-xl font-extrabold">Login to account</h5>
        <h5 className="text-lg font-semibold">
          Enter your information to log back
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

        <button className="bg-accent text-white w-fit py-3 px-7 rounded-lg shadow-md hover:bg-opacity-80 active:bg-slate-500">
          Submit
        </button>
        <p>
          Don't have an account?
          <Link className="underline text-blue-600 m-2" to={"/register"}>
            Signup
          </Link>
        </p>
      </form>
    </SplitScreen>
  );
};

export default Login;
