import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopJobs from "./Components/Topjobs/TopJobs";
import FeaturedJobs from "./Components/FeaturedJobs/FeaturedJobs";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import JobDetails from "./Components/JobDetails/JobDetails";
import Layout from "./Components/CustomeLayout/Layout";
import Accenture from "./Components/JobDetails/Accenture/Accenture";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
      },
      {
        path: "/TopJobs",
        element: <TopJobs />,
      },
      {
        path: "/featuredJobs",
        element: <FeaturedJobs />,
        loader: () => fetch("jobdesc.json"),
      },
      {
        path: "/jobDetails",
        element: <JobDetails />,
      },
      {
        path: "/accenture",
        element: <Accenture />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
