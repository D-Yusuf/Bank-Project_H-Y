import React from "react";
import { Outlet } from "react-router-dom";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import ProfileNav from "./ProfileNav";
import Screen from "../../components/SplitScreen/Screen";
import { getMyInfo } from "../../api/auth";
import { useQuery } from "@tanstack/react-query";
const Profile = () => {
  function DashBoardScreen() {
    return (
      <div className=" bg-white">
        <div className="bg-main h-2/3"></div>
        <div className="bg-main h-1/3">
          <Outlet />
        </div>
      </div>
    );
  }
  const { data, isPending } = useQuery({
    queryKey: ["getMyInfo"],
    queryFn: getMyInfo,
  });
  return (
    <div className="mt-32">
      {/* <SplitScreen secondScreenContent={<DashBoardScreen />} secondScreenClassName={"w-[70%] pt-0"}> */}
      <SplitScreen>
        <Screen direction="left" className="h-full w-[5%] border-gray-300 border-r-2">
          
          <ProfileNav />
        </Screen>
        <Screen
          direction="right"
          className="h-full w-[95%] relative bg-secondary text-white border-pink-50 "
        >
          <Outlet />
        </Screen>
      </SplitScreen>
    </div>
  );
};

export default Profile;
