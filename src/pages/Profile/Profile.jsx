import React from "react";
import { Outlet } from "react-router-dom";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import ProfileNav from "./ProfileNav";
import Navbar from "../../components/Navbar";
import Screen from "../../components/SplitScreen/Screen";

const Profile = () => {
  function DashBoardScreen(){
    return (
      <div className=" bg-white">
        <div className="bg-main h-2/3"></div>
        <div className="bg-main h-1/3">
        <Outlet />
        </div>
        
      </div>
    )
  }
  return (
    <div className="mt-32">
      {/* <SplitScreen secondScreenContent={<DashBoardScreen />} secondScreenClassName={"w-[70%] pt-0"}> */}
      <SplitScreen>
        <Screen direction="left" className="h-full pt-20 w-1/4">
          <img className="rounded-full max-w-[100px]" src="https://i.redd.it/is-there-a-sniper-default-pfp-that-someone-made-v0-78az45pd9f6c1.jpg?width=396&format=pjpg&auto=webp&s=5be4618605b25e0546d72dff52a7b897c3d4e1d4" alt="" />
          <ProfileNav />

        </Screen>
        <Screen direction="right" className="h-2/3 w-3/4 bg-secondary text-white">
          <Outlet />

        </Screen>

      </SplitScreen>
    </div>
  );
};

export default Profile;
