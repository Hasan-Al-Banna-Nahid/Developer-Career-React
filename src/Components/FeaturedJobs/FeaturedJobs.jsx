import React from "react";
import FeaturedJobsDescription from "../FeaturedJobsDescription/FeaturedJobsDescription";

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
    jobAvailable: 55000,
  },
  {
    id: 1,
    name: "Full Stack Developer",
    img: "../public/assets/programming.png",
    jobAvailable: 3000,
  },
];

const FeaturedJobs = () => {
  //   const { img, name, id, jobAvailable } = data;
  return (
    <div>
      <h2 style={{ color: "black", fontWeight: "800", textAlign: "center" }}>
        Featured Jobs
      </h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((data) => (
          <FeaturedJobsDescription data={data} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
