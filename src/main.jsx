import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopJobs from "./Components/Topjobs/TopJobs";
import FeaturedJobs from "./Components/FeaturedJobs/FeaturedJobs";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import JobDetails from "./Components/JobDetails/JobDetails";
import Layout from "./Components/CustomeLayout/Layout";
import FullStack from "./Components/JobDetails/FullStackDeveloper/FullStack";
import DataAnalyst from "./Components/JobDetails/DataAnalyst/DataAnalyst";
import DataScientist from "./Components/JobDetails/DataScientist/DataScientist";
import FrontEnd from "./Components/JobDetails/FrontEndDeveloper/FrontEnd";
import MachineLearning from "./Components/JobDetails/MachineLearning/MachineLearning";
import ArtificialIntelligence from "./Components/JobDetails/ArtificialIntelligence/ArtificialIntelligence";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Statistics from "./Components/Statistics/Statistics";
import Blog from "./Components/Blog/Blog";
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
        element: <FullStack />,
      },
      {
        path: "/dataAnalyst",
        element: <DataAnalyst />,
      },
      {
        path: "/dataScientist",
        element: <DataScientist />,
      },
      {
        path: "/frontEnd",
        element: <FrontEnd />,
      },
      {
        path: "/MachineLearning",
        element: <MachineLearning />,
      },
      {
        path: "/ArtificialIntelligence",
        element: <ArtificialIntelligence />,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/blog",
        element: <Blog />,
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
