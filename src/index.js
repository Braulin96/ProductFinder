import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Welcome from "components/Welcome";
import Contact from "components/Contact";
import ErrorPage from "components/ErrorPage";

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
        element: <Welcome />,
      },
      {
        path: "contact",
        element: <Contact />,
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
