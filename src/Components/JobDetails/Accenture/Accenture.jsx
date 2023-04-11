import React from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Accenture.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faArrowAltCircleRight,
  faDollar,
  faCircleCheck,
  faPhone,
  faLocation,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

const Accenture = () => {
  const navigate = useNavigate();
  const handleGoBackButton = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3 className="titleOfDetail">Job Details</h3>
      <div className="Accenture">
        <div className="summary">
          <p className="jobSummary">
            <FontAwesomeIcon icon={faBook} style={{ padding: "0 5px" }} />
            Our company is looking to hire a full stack software developer to
            join our software development team. In this position, you will be
            responsible for coding both sides of the program, so our ideal
            candidate has experience with both front-end languages (HTML,
            JavaScript) and back-end <br /> languages (SQL). A certificate in
            one or more programming languages is a plus. We prefer applicants to
            have at least a bachelor's degree in <br /> computer science, but we
            are willing to work with you if you have a strong portfolio of past
            projects. We also need candidates that have experience <br /> with
            front end frameworks and tools, such as AngularJS, JQuery, and
            Microsoft SQL Serve
          </p>
          <h3 className="responsibilitiesTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            Full Stack Software Developer Duties and Responsibilities
          </h3>
          <ul className="responsibilities">
            <li>Develop both front-end and back-end architecture</li>
            <li>Create databases and libraries using SQL</li>
            <li>Ensure software is compatible on multiple platforms</li>
            <li>Coordinate with other developers</li>
            <li>Create progress reports for your supervisors</li>
            <li>Basic Knowledge of Creating Secure API</li>
          </ul>
          <h3 className="qualificationTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            Full Stack Software Developer Requirements and Qualifications
          </h3>
          <ul className="qualification">
            <li>Bachelor's degree in computer science (preferred)</li>
            <li>Portfolio of past work</li>
            <li>Certificate in HTML, JavaScript, and/or SQL (preferred)</li>
            <li>Experience with Model View Controller development strategy</li>
            <li>Communication skills</li>
            <li>Organization and time management skills</li>
          </ul>
        </div>
        <div>
          <div className="card">
            <h3 className="titleOfDetail">Job Details</h3>
            <h4 className="salary">
              <FontAwesomeIcon icon={faDollar} style={{ padding: "0 5px" }} />{" "}
              Salary : 150k-170k(per Annum)
            </h4>
            <h4 className="jobTitle">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ padding: "0 5px" }}
              />{" "}
              Job Title : Senior Full Stack Developer
            </h4>
            <h3 className="contactInfo">Contact Information</h3>
            <hr />
            <h4 className="phone">
              <FontAwesomeIcon icon={faPhone} style={{ padding: "0 5px" }} />
              Phone : +8801896085259
            </h4>
            <h4 className="email">
              <FontAwesomeIcon icon={faMailBulk} style={{ padding: "0 5px" }} />
              Email : IamNahid591998@gmail.com
            </h4>
            <h4 className="address">
              <FontAwesomeIcon icon={faLocation} style={{ padding: "0 5px" }} />
              Address : Feni,Chittagong,Bangladesh
            </h4>
          </div>
          <Button className="applyButton" variant="outline" color="Info">
            Apply
          </Button>
        </div>
        <div className="goBackBtn">
          <Button
            onClick={handleGoBackButton}
            variant="contained"
            color="secondary"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Accenture;
