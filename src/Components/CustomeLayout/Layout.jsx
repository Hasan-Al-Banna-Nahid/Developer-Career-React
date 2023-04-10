import React from "react";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Header from "../Header/Header";
import TopJobs from "../Topjobs/TopJobs";

const Layout = () => {
  return (
    <div>
      <Banner />
      <TopJobs />
      <FeaturedJobs />
    </div>
  );
};

export default Layout;
