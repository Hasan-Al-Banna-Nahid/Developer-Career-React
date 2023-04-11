import React, { useState } from "react";
import FeaturedJobsDescription from "./FeaturedJobsDescription/FeaturedJobsDescription";
import "./FeaturedJobs.css";
import Button from "@mui/material/Button";

const FeaturedJobs = () => {
  const data = [
    {
      name: "Data Analyst",
      Company: "Google LLC",
      Position: "Senior Data Analyst",
      Location: "London,UK",
      Office: "Remote",
      OfficeTime: "Part-Time",
      Salary: "150k - 220k",
      img: "../../../public/assets/All Images/google-1-1 1.png",
    },
    {
      name: "Data Scientist",
      Company: "Netflix",
      Position: "Senior Data Scientist",
      Location: "New York,US",
      Office: "Onsite",
      OfficeTime: "Part-Time",
      Salary: "150k - 220k",
      img: "../../../public/assets/All Images/netflix-4 1.png",
    },
    {
      name: "React Developer",
      Company: "Tesla",
      Position: "Mid-Level React Js Developer",
      Location: "California,US",
      Office: "Onsite",
      OfficeTime: "FullTime",
      Salary: "150k - 170k",
      img: "../../../public/assets/All Images/tesla-9 1.png",
    },
    {
      name: "Full Stack Developer",
      Company: "Accenture",
      Position: "Mid-Level Full Stack Developer",
      Location: "Texas,Us",
      Office: "Remote",
      OfficeTime: "FullTime",
      Salary: "150k - 180k",
      img: "../../../public/assets/All Images/Accenture-logo.png",
    },
    {
      name: "Machine Learning",
      Company: "Google",
      Position: "Senior Machine Learning Engineer",
      Location: "Montreal,France",
      Office: "Onsite",
      OfficeTime: "Part-Time",
      Salary: "150k - 220k",
      img: "../../../public/assets/All Images/google-1-1 1.png",
    },
    {
      name: "Artificial Intelligence",
      Company: "Facebook",
      Position: "Senior Machine Learning Engineer(Virtual Reality)",
      Location: "Washington DC,US",
      Office: "Onsite",
      OfficeTime: "Full-Time",
      Salary: "150k - 220k",
      img: "../../../public/assets/All Images/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-13.png",
    },
  ];
  return (
    <div>
      <h3 className="featuredJobsTitle">Featured Jobs</h3>
      <div>
        <div className="featuredJobs">
          {data.slice(0, 4).map((item, index) => (
            <FeaturedJobsDescription data={item} key={index} />
          ))}
        </div>
        <div className="viewAllBtn">
          <Button className="btn" variant="outlined" color="info">
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
