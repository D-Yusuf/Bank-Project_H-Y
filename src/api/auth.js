import instance from ".";
import { storeToken } from "./storage";
import { useNavigate } from "react-router-dom";
async function register(userInfo) {
  try {
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
  } catch (error) {
    alert("Error during registration: " + error.message,)
   }
}

async function login(userInfo) {
  try {
    const { data } = await instance.post(
      "/mini-project/api/auth/login",
      userInfo
    );
    storeToken(data.token);
    return data;
  } catch (error) {
    alert("Error during login: " + error.message,)
   }
}

async function getMyInfo() {
  try {
    const { data } = await instance.get("/mini-project/api/auth/me");
    return data;
  } catch (error) {
    alert("Error fetching user info: (check login)" + error.message,)
   }
}

async function getAllUsers() {
  try {
    const { data } = await instance.get("/mini-project/api/auth/users");
    return data;
  } catch (error) {
    alert("Error fetching all users: (check login)" + error.message,)
   }
}

async function deposit(amount) {
  try {
    const { data } = await instance.put("/mini-project/api/transactions/deposit", {
      amount: amount,
    });
    return data;
  } catch (error) {
    alert("Error during deposit: (check login)" + error.message,)
   }
}

async function getUserTransactions() {
  try {
    const { data } = await instance.get("/mini-project/api/transactions/my");
    return data;
  } catch (error) {
    alert("Error fetching user transactions: (check login)" + error.message,)
   }
}

async function withdraw(amount) {
  try {
    const { data } = await instance.put("/mini-project/api/transactions/withdraw", {
      amount: amount,
    });
    return data;
  } catch (error) {
    alert("Error during withdrawal: (check login)" + error.message,)
   }
}

async function transfer(amount, username) {
  try {
    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("username", username);
    const { data } = await instance.put(`/mini-project/api/transactions/transfer/${username}`, formData);
    return data;
  } catch (error) {
    alert("Error during transfer: (check login)" + error.message,)
   }
}

async function updateProfile(image) {
  try {
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await instance.put("/mini-project/api/auth/profile", formData);
    return data;
  } catch (error) {
    alert("Error updating profile: (check login)" + error.message,)
   }
}

async function getUserInfo() {
  // will use useQuery when path is
}

export {
  register,
  login,
  getMyInfo,
  updateProfile,
  getAllUsers,
  deposit,
  withdraw,
  transfer,
  getUserInfo,
  getUserTransactions,
};
