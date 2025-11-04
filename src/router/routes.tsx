import { Navigate } from "react-router-dom";

import { Layout } from "@/layout";
import Login from "@/pages/account/login";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";

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
        path: "*",
        element: <Navigate to="/exception/404" replace />
      }
    ]
  },
  {
    path: "login",
    element: <Login />
  }
];

export default rootRoutes;
