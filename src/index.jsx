import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile/Profile";
import Transactions from "./pages/Profile/Transactions";
import Edit from "./pages/Profile/Edit";
import Users from "./pages/Users";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/me",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <Edit />,
          },
          {
            path: "transactions",
            element: <Transactions />,
          },
        ],
      },

      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
