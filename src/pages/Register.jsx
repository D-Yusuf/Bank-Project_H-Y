import React from "react";
import { Link, NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex w-full  items-center">
      <div class="split left bg-main">
        <div className="flex flex-col  gap-10 p-6 ">
          <h1 className="text-4xl font-extrabold text-center mb-16">
            [Welcome to "name" bank]
          </h1>
          <h5 className="text-xl font-extrabold">Create Account</h5>
          <h5 className="text-lg font-semibold">
            Enter your information to create a new account
          </h5>
          <label className="flex flex-col" htmlFor="email">
            Username
            <input
              id="username"
              className="bg-secondary text-white p-3 rounded-lg text-xl"
              type="username"
            />
          </label>
          <label className="flex flex-col" htmlFor="email">
            Email
            <input
              id="email"
              className="bg-secondary text-white p-3 rounded-lg text-xl"
              type="email"
            />
          </label>
          <label className="flex flex-col" htmlFor="password">
            Password
            <input
              id="password"
              className="bg-secondary text-white p-3 rounded-lg text-xl"
              type="password"
            />
          </label>

          <button className="bg-accent text-white w-fit py-3 px-7 rounded-lg shadow-md hover:bg-opacity-80 active:bg-slate-500">
            Submit
          </button>
          <p>
            Already have an account?
            <a className="underline text-blue-600 m-2" href="#">
              Login
            </a>
            {/* <Link to={"/login"}>Login</Link>  wont work until react query context wrap in index.js */}
          </p>
        </div>
      </div>

      <div class="split right">
        
      <img className='h-screen' src="https://img.freepik.com/free-vector/black-background-geometric-gradient-design_677411-2886.jpg" alt="bg" />

        
      </div>
      {/* <div className='w-1/2  h-full fixed overflow-x-hidden z-10 left-0'>
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
        </div> */}
    </div>
  );
};

export default Register;
