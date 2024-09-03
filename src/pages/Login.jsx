import React from 'react'
import { Link } from 'react-router-dom'
import SplitScreen from '../components/SplitScreen'
const Login = () => {
  return (
    <SplitScreen>
        <div className="flex flex-col lg:gap-10 gap-4 p-6 ">
            <h1 className="lg:text-4xl text-3xl font-extrabold text-center">
                [Welcome back to the Fullstack Bank!]
            </h1>
            <hr />
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
                
                <Link className="underline text-blue-600 m-2" to={"/login"}>Login</Link> 
            </p>
        </div>
    </SplitScreen>
  )
}

export default Login