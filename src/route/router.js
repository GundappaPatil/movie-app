import React from "react";
import Login from "../components/Login";
import { createBrowserRouter } from "react-router-dom";
import Browser from "../components/Browser";

export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
  ]);
