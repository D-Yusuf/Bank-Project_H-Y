import instance from ".";
import { storeToken } from "./storage";
async function register(userInfo) {
  const formData = new FormData();
  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );
  return data;
  //post
}
async function login(userInfo) {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  console.log(data);
  storeToken(data.token);
  return data;
  //post (return posted email&password user and give token)
}
async function getMyInfo() {
  //get
}
async function getAllUsers() {
  //get
}
async function deposit(amount) {
  //put (update)
}
async function withdraw(amount) {
  //put
}
async function transfer(amount, userName) {
  //put
}
async function getUserInfo() {
  // will use useQuery when path is
}

export {
  register,
  login,
  getMyInfo,
  getAllUsers,
  deposit,
  withdraw,
  transfer,
  getUserInfo,
};
