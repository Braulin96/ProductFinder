import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "pages/Home";
import Contact from "components/Contact";
import UserData from "pages/UserData";
import ErrorPage from "pages/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Welcome/>
//   },
//   {
//     path: "contact",
//     element: <Contact/>
//   }
// ])

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "questions",
        element: <UserData />,
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
