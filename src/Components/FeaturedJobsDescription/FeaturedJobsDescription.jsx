import React from "react";
import "./FeaturedJobs.css";
const FeaturedJobsDescription = ({ data }) => {
  const { id, img, jobAvailable, name } = data;
  return (
    <div className="jobs">
      <img className="photo" src={img} alt="" />
      <h4 className="title">{name}</h4>
      <h5 className="info">Available Jobs:{jobAvailable}</h5>
    </div>
  );
};

export default FeaturedJobsDescription;
