import React from "react";
import "./FeaturedJobsDescription.css";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faDollar } from "@fortawesome/free-solid-svg-icons";

const FeaturedJobsDescription = ({ data, handleSliceData, slicedData }) => {
  const { name, Company, Position, Location, Salary, img, Office, OfficeTime } =
    data;
  return (
    <div className="featuredJobsDescription">
      <img className="image" src={img} alt="" />
      <h4 className="position">{Position}</h4>
      <h5 className="companyName">{Company}</h5>
      <div className="buttons">
        <Button variant="outlined" color="info">
          {Office}
        </Button>
        <Button variant="outlined" color="info">
          {OfficeTime}
        </Button>
      </div>
      <div
        className="locationSalary"
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <p>
          <FontAwesomeIcon icon={faLocation} />
          {Location}
        </p>
        <p>
          <FontAwesomeIcon icon={faDollar} />
          {Salary}
        </p>
      </div>
      <div>
        <Button variant="contained" color="secondary">
          Details
        </Button>
      </div>
    </div>
  );
};

export default FeaturedJobsDescription;
