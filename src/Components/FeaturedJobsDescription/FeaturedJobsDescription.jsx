import React from "react";
import "./FeaturedJobs.css";
import Button from "@mui/material/Button";
const FeaturedJobsDescription = ({ data }) => {
  const { id, img, jobAvailable, name } = data;
  return (
    <div className="jobs">
      <img className="photo" src={img} alt="" />
      <h4 className="title">{name}</h4>
      <h5 className="info">Available Jobs:{jobAvailable}</h5>
      <Button variant="outlined" color="primary">
        Apply
      </Button>
    </div>
  );
};

export default FeaturedJobsDescription;
