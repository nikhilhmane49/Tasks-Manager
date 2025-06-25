import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppProvider from "./context/contextuser.jsx";

import Login from "./components/Loginuser.jsx";
import CreateAccountPage from "./components/CreateAccountPage.jsx"
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashborad.jsx";
import CreateTask from "./components/CreateTask.jsx";
import GetTasks from "./components/GetTasks.jsx";
import UpdateTask from "./components/UpdateTask.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <CreateAccountPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/create-task",
        element: <CreateTask />,
      },
      {
        path: "/get-tasks",
        element: <GetTasks />,
      },
      {
        path: "/update-task",
        element: <UpdateTask />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AppProvider>
  </StrictMode>
);
