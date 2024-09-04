import React from "react";
import { Outlet } from "react-router-dom";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import ProfileNav from "./ProfileNav";
import Navbar from "../../components/Navbar";
import Screen from "../../components/SplitScreen/Screen";
import { getMyInfo } from "../../api/auth";
import { useQuery } from "react-query";
import User from "../../components/User";

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
  console.log(data);
  return (
    <div className="mt-32">
      {/* <SplitScreen secondScreenContent={<DashBoardScreen />} secondScreenClassName={"w-[70%] pt-0"}> */}
      <SplitScreen>
        <Screen direction="left" className="h-full pt-20 w-1/4">
          <div className="flex z-50 flex-row gap-5">
            <img
              className="rounded-full w-[150px]"
              src={
                "https://react-bank-project.eapi.joincoded.com/" + data.image
              } // the + here will add the image as the endpoint to the url
              alt={`${data.username}'s image`}
            />
            <h1 className="">{data.username}</h1>
            <h1>{data.balance}</h1>
          </div>
          <ProfileNav />
        </Screen>
        <Screen
          direction="right"
          className="h-2/3 w-3/4 bg-secondary text-white"
        >
          <Outlet />
        </Screen>
      </SplitScreen>
    </div>
  );
};

export default Profile;
