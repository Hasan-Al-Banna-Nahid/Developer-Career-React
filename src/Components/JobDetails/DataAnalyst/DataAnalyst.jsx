import React from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
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
const DataAnalyst = () => {
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
            We are looking for a detail-oriented and collaborative Data Analyst
            to join our business analytics team. You must have experience
            working with large data sets and understand how to manipulate and
            analyze them using various statistical and mathematical methods. Our
            marketing and products department will collaborate with you to
            determine what data should be collected and interpreted. Your goal
            will be to provide our business analysts with valuable information
            to forecast trends and improve sales. Candidates must have at least
            one year of relevant data experience.
          </p>
          <h3 className="responsibilitiesTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            Data Analyst Duties and Responsibilities
          </h3>
          <ul className="responsibilities">
            <li>Analyze data using statistical methods</li>
            <li>
              Create reports to share findings and recommendations with the
              internal team and other stakeholders
            </li>
            <li>
              Collaborate with leaders and managers to determine and address
              data and reporting needs for various company projects
            </li>
            <li>Create statistical models that depict company-wide trends</li>
            <li>Perform testing and validation of data sets</li>
            <li>Document structures and types of business data</li>
          </ul>
          <h3 className="qualificationTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            Data Analyst Requirements and Qualifications
          </h3>
          <ul className="qualification">
            <li>
              Bachelor's degree in mathematics, statistics, computer science,
              information technology, or related field preferred
            </li>
            <li>1+ years of experience in a data analyst or relevant role</li>
            <li>Strong analytical capabilities</li>
            <li>
              Expert with Microsoft Excel and various business intelligence and
              analytical tools
            </li>
            <li>
              Understanding of data gathering, inspecting, cleansing,
              transforming, and modeling/diagramming techniques
            </li>
            <li>Organization and Keen attention to detail</li>
            <li>Excellent communication skills</li>
          </ul>
        </div>
        <div>
          <div className="card">
            <h3 className="titleOfDetail">Job Details</h3>
            <h4 className="salary">
              <FontAwesomeIcon icon={faDollar} style={{ padding: "0 5px" }} />{" "}
              Salary : 160k-180k(per Annum)
            </h4>
            <h4 className="jobTitle">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ padding: "0 5px" }}
              />{" "}
              Job Title : Senior Data Analyst
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

export default DataAnalyst;
