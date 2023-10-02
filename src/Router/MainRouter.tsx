import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeScreen from "../Pages/HomeScreen";
import Konga from "../Konga/Konga";
import Bigpage from "../Bigpage/Large";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Konga/>,

      },
      {
        path: "/details/:id",
        element: <Bigpage/>
      }
    ],
  },
]);
