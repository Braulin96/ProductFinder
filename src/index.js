import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Landing from "pages/Landing";
import UserData from "pages/UserData";
import ErrorPage from "pages/ErrorPage";
import Dashboard from "pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/questions",
        element: <UserData />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
