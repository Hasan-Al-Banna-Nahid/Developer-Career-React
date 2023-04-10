import React from "react";
import "./TopJobsDescription.css";
import Button from "@mui/material/Button";
const TopJobsDescription = ({ data }) => {
  const { id, name, img, jobAvailable } = data;
  return (
    <div className="jobDescription">
      <img className="img" src={img} alt="" />
      <h4 className="title">{name}</h4>
      <h5 className="quantity">Job Available:{jobAvailable}</h5>
      <Button variant="contained" color="error">
        Apply
      </Button>
    </div>
  );
};

export default TopJobsDescription;
