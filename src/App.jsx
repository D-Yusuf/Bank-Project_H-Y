import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { checkToken } from "./api/storage";
import UserContext from "./Context/UserContext";
// import  Register  from "./pages/Register";
function App() {
  const [user, setUser] = useState(false);
  const [modalOn, setModalOn] = useState(false)
  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className=" bg-main min-h-screen">
        <Navbar />
        <div className="pt-36 px-5">
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
