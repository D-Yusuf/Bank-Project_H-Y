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
  storeToken(data.token);
  return data;
  //post
}
async function login(userInfo) {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  //   console.log(data);
  storeToken(data.token);
  return data;
  //post (return posted email&password user and give token)
}
async function getMyInfo() {
  //get
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
}
async function getAllUsers() {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
  //get
}
async function deposit(amount) {
  const { data } = instance.put("/mini-project/api/transactions/deposit", {
    amount: amount,
  });
  return data;
  //put (update)
}
async function getUserTransactions() {
  //get
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
}
async function withdraw(amount) {
  //put
  const { data } = instance.put("/mini-project/api/transactions/withdraw", {
    amount: amount, //here its amount: amount but i want to make it amount: amount - balance i still dont know how
  });
  return data;
}
async function transfer(username, amount) {
  const { data } = instance.put(
    `/mini-project/api/transactions/transfer/${username}`,
    {
      amount: amount,
    }
  );
  return data;
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
  getUserTransactions,
};
