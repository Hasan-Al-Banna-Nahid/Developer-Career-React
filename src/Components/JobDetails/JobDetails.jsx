import React, { useEffect, useState } from "react";
import "./JobDetails.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./JobDetails.css";
const JobDetails = ({}) => {
  return (
    <div>
      <h3 className="companyDesignation">Companies & Designation</h3>
      <div className="companies">
        <div>
          <h3 className="designation">Full Stack Developer(Accenture)</h3>
          <Link to="/accenture">
            <Button variant="outlined" color="primary">
              Details
            </Button>
          </Link>
        </div>
        <div>
          <h3 className="designation">Data Analyst(Google)</h3>
          <Link to="">
            <Button variant="outlined" color="primary">
              Details
            </Button>
          </Link>
        </div>
        <div>
          <h3 className="designation">Data Scientist(Netflix)</h3>
          <Link to="">
            <Button variant="outlined" color="primary">
              Details
            </Button>
          </Link>
        </div>
        <div>
          <h3 className="designation">Front End Developer(Tesla)</h3>
          <Link to="">
            <Button variant="outlined" color="primary">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
