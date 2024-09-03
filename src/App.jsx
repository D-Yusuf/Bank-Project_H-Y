import Login from "./pages/Login";
import { Outlet } from "react-router-dom";
// import  Register  from "./pages/Register";
function App() {
  return (
    <div className=" bg-main">
      <Outlet />
    </div>
  );
}

export default App;
