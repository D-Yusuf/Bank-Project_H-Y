import React from "react";
import { Outlet } from "react-router-dom";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import ProfileNav from "./ProfileNav";
import Screen from "../../components/SplitScreen/Screen";
import { getMyInfo } from "../../api/auth";
import { useQuery } from "react-query";
import defaultPfP from "../../images/defaultPfP.jpg";
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
        <Screen direction="left" className="h-full pt-20 w-1/6 p-5">
          {data ? (
            <div className="flex z-50 flex-col items-start gap-5 ">
              <img
                className="rounded-full w-[150px]"
                src={
                  data.image
                    ? "https://react-bank-project.eapi.joincoded.com/" +
                      data.image
                    : defaultPfP
                } // the + here will add the image as the endpoint to the url
                alt={`${data.username || ""}'s img`}
              />
              <h1 className="">{data.username}</h1>
              <h1>Balance: ${data.balance}</h1>
            </div>
          ) : (
            "Loading"
          )}
          <ProfileNav />
        </Screen>
        <Screen
          direction="right"
          className="h-2/3 w-5/6 bg-secondary text-white border-pink-50 border-t-[1rem] border-l-[1rem] rounded-md"
        >
          <Outlet />
        </Screen>
      </SplitScreen>
    </div>
  );
};

export default Profile;
