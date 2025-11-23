import { Navigate } from "react-router-dom";

import { Layout } from "@/layout";
import Login from "@/pages/account/login";
import Feature from "@/pages/feature";
import Home from "@/pages/home";
import Profile from "@/pages/profile";
import Register from "@/pages/account/register";

const rootRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <Home />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "feature",
        element: <Feature />
      },
      {
        path: "*",
        element: <Navigate to="/exception/404" replace />
      }
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  }
];

export default rootRoutes;
