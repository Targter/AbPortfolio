import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./Component/Page.jsx";
import About from "./Component/Page1.jsx";
import Box3Container from "./Component/Page2.jsx";
import Box5Container from "./Component/Page3.jsx";
// import Page3 from "./Component/Page3.jsx";
import Box6container from "./Component/Page3ContactForm.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Page />,
        // loader: teamLoader,
      },
      // {
      //   path: "/Page",
      //   element: <About />,
      //   // loader: teamLoader,
      // },
      {
        path: "/Skills",
        element: <About />,
        // loader: teamLoader,
      },
      {
        path: "/Work-experience",
        element: <Box3Container />,
        // loader: teamLoader,
      },
      {
        path: "/Projects",
        element: <Box5Container />,
        // loader: teamLoader,
      },
      {
        path: "/ContactMe",
        element: <Box6container />,
        // loader: teamLoader,
      },
    ],
  },
]);
//
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
