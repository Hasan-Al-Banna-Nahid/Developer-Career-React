import React from "react";
import Button from "@mui/material/Button";
import "./AppliedJobs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faLocation } from "@fortawesome/free-solid-svg-icons";
const AppliedJobs = () => {
  const data = JSON.parse(localStorage.getItem("ml"));
  const { Company, Position, Location, Office, OfficeTime, Salary, img } = data;
  return (
    <div>
      <div className="appliedJob">
        <div>
          <img src={img} alt="" className="img" />
        </div>
        <div>
          <h3 className="CompanyInfo">{Position}</h3>
          <h3 className="CompanyInfo">{Company}</h3>
          <div className="location">
            <Button variant="outlined" color="error">
              {Office}
            </Button>
            <Button variant="outlined" color="info">
              {OfficeTime}
            </Button>
          </div>
          <div>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faLocation} style={{ padding: "0 5px" }} />
              {Location}
            </h4>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faDollar} style={{ padding: "0 5px" }} />
              {Salary}
            </h4>
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "10px 0" }}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
