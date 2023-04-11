import React from "react";
import TopJobsDescription from "../TopJobsDescription/TopJobsDescription";
import "./TopJobs.css";
const TopJobs = () => {
  const data = [
    {
      id: 1,
      name: "Data Analyst",
      img: "../public/assets/data-analysis.png",
      jobAvailable: 3000,
    },
    {
      id: 2,
      name: "Data Scientist",
      img: "../public/assets/scientist.png",
      jobAvailable: 5000,
    },
    {
      id: 3,
      name: "React Developer",
      img: "../public/assets/react.png",
      jobAvailable: 6000,
    },
    {
      id: 4,
      name: "Node Js Developer",
      img: "../public/assets/node-js.png",
      jobAvailable: 5500,
    },
    {
      id: 5,
      name: "Full Stack Developer",
      img: "../public/assets/programming.png",
      jobAvailable: 3000,
    },
  ];

  return (
    <div>
      <h3 className="title">Top Jobs</h3>
      <div className="jobsInfo">
        {data.map((data) => (
          <TopJobsDescription key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TopJobs;
