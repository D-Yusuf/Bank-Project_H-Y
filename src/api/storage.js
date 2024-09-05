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
};

export { storeToken, checkToken, getToken, deleteToken };
