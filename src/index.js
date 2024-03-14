import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "pages/Home";
import Contact from "components/Contact";
import UserData from "pages/UserData";
import ErrorPage from "pages/ErrorPage";
import DataConfirm from "pages/DataConfirm";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/questions",
        element: <UserData />,
      },
      {
        path: "/confirm",
        element: <DataConfirm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
