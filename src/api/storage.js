const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = getToken();
  return token ? true : false;
};

const getToken = () => {
  return localStorage.getItem("token");
};

const deleteToken = () => {
  localStorage.removeItem("token");
  console.log("you logged out");
};

export { storeToken, checkToken, getToken, deleteToken };
