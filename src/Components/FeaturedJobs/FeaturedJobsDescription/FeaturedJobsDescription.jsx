import React from "react";
import "./FeaturedJobsDescription.css";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faDollar } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "react-router-dom";

const FeaturedJobsDescription = ({ data }) => {
  const datas = useLoaderData();
  console.log(datas);
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
        <Link to="/jobDetails">
          <Button variant="contained" color="secondary">
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobsDescription;
