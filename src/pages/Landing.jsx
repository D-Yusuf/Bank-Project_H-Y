import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";
const Landing = () => {
  const [user] = useContext(UserContext)
  return (
    <div className="bg-white text-secondary flex flex-col justify-center items-center px-8">
      <div className="max-w-screen-lg w-full space-y-8">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
          Banking... like never before!
        </h1>
        <p className="text-xl font-semibold animate-slide-in">
          Introducing the first online bank with social media elements built in! It is all about sending/receiving money.
        </p>

        <div className="mt-10 space-y-3 animate-fade-in-up">
          <p className="text-lg">
            A bank that lets you easily deposit, withdraw, and transfer funds to your friends. It's simple to use for all ages!
          </p>
          <p className="text-lg">
            Effortlessly receive money from friends and keep track of your transaction history with ease.
          </p>
          <p className="text-lg">
            Financial management has never been this seamless and social!
          </p>
        </div>
        <div className="flex  space-x-3 mt-10 animate-slide-in">
      {!user ?
      <>
          <Link to="/login" className="bg-accent text-white py-4 px-8 rounded-lg font-bold shadow-md hover:bg-opacity-80 transition duration-300 transform hover:scale-105">
            Login
          </Link>
          <Link to="/register" className="bg-secondary text-white py-4 px-8 rounded-lg font-bold shadow-md hover:bg-opacity-80 transition duration-300 transform hover:scale-105">
            Register
          </Link>
      </>
          :  <Link to="/home" className="bg-accent text-white py-4 px-8 rounded-lg font-bold shadow-md hover:bg-opacity-80 transition duration-300 transform hover:scale-105">
            Deposit / Withdraw
          </Link>

      }
        </div> 

        <div className="flex justify-between space-x-6">
          <img
            className="max-w-[225px]"
            src="https://cdni.iconscout.com/illustration/premium/thumb/rich-man-illustration-download-in-svg-png-gif-file-formats--successful-businessman-wealthy-person-higher-social-class-lifestyle-pack-people-illustrations-4491940.png?f=webp"
            alt="Rich Man"
          />
          <img
            className="max-w-[225px]"
            src="https://static.vecteezy.com/system/resources/previews/020/716/211/non_2x/businessman-under-rain-of-banknotes-businessman-with-paper-money-businessman-and-money-icon-rich-business-man-businessman-with-lots-of-money-money-making-businessman-free-png.png"
            alt="Businessman with money"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
