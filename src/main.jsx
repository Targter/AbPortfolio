import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Page from "./Component/Page.jsx";
// import About from "./Component/Page1.jsx";
// import Box3Container from "./Component/Page2.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Page />,
//       },
//       {
//         path: "/Skills",
//         element: <About />,
//       },
//       ,
//       {
//         path: "/Work-experience",
//         element: <Box3Container />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <RouterProvider router={router} />
);
