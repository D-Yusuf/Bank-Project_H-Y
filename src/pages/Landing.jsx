import React from "react";
import SplitScreen from "../components/SplitScreen";

const Landing = () => {
  return (
    <SplitScreen>
      <div className="flex flex-col lg:gap-10 gap-4 p-6 ">
        <h1 className="text-3xl">
          Introducing the first online bank with social media elements built in!
        </h1>
        <p>
          features like adding friends and sending/recieving money with the
          included chat tab in the app!
        </p>
      </div>
    </SplitScreen>
  );
};

export default Landing;
