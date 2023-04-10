import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopJobs from "./Components/Topjobs/TopJobs";
import FeaturedJobs from "./Components/FeaturedJobs/FeaturedJobs";
import Banner from "./Components/Banner/Banner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <TopJobs />,
      // },
      {
        path: "/TopJobs",
        element: <TopJobs />,
        loader: () => fetch("jobdescription.json"),
      },
      {
        path: "/featuredJobs",
        element: <FeaturedJobs />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
