import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { Outlet } from "react-router-dom";
// import  Register  from "./pages/Register";
function App() {
  return (
    <div className=" bg-main">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
