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

const DataScientist = () => {
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
            We are seeking a knowledgeable and experienced data scientist to
            join our company. As a data scientist, you will run, develop, and
            use analysis tools for company integration and organization. You
            will conduct analytical experiments and evaluate theoretical
            alternate models. You will also analyze processes and systems to
            extract insights from structured and unstructured data.
          </p>
          <h3 className="responsibilitiesTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            Data Scientist Duties and Responsibilities
          </h3>
          <ul className="responsibilities">
            <li>Manage analytics database</li>
            <li>
              Implement processes that improve and lead to greater data quality
            </li>
            <li>Conduct statistical analyses to develop strategies</li>
            <li>Document all processes and research</li>
            <li>Build new algorithms and model training</li>
            <li>Execute projects involving analytics</li>
            <li>Identify data patterns and trends</li>
            <li>Analyze data to develop predictive models</li>
            <li>Create, manage, and maintain analytically rigorous data</li>
            <li>Note anomaly detection and run diagnostics</li>
            <li>Perform graphical model analysis</li>
            <li>Possess a solid machine learning foundation</li>
            <li>Participate in software-focused marketing efforts</li>
          </ul>
          <h3 className="qualificationTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            Data Scientist Requirements and Qualifications
          </h3>
          <ul className="qualification">
            <li>Expert instatistical modeling/data mining</li>
            <li>Experience with SQL Server</li>
            <li>
              Experience in data analysis, predictive modeling, and data mining
              techniques
            </li>
            <li>
              Able to analyze problems and strategize for better solutions
            </li>
            <li>Excellent verbal and written communication skills</li>
            <li>Able to multitask, prioritize, and manage time effectively</li>
            <li>Comfortable in both a leadership and team-player role</li>
            <li>
              Creative problem solver who thrives when presented with a
              challenge
            </li>
            <li>Goal-oriented, organized team player</li>
            <li>Encouraging to team and staff; able to mentor and lead</li>
            <li>
              Bachelor’s degree in computer science, engineering, mathematics or
              related field; Master's degree in computer science, mathematics or
              related field preferred
            </li>
            <li>Four years of relevant industry experience</li>
            <li>
              Strong familiarity and hands-on experience with SQL and
              statistical software packages (Python, R, SAS)
            </li>
            <li>Knowledge of tools and techniques in machine learning</li>
            <li>Expert in relational database design and concepts</li>
            <li>
              Expert in one or more programming languages (C/C++, Python, Perl,
              Java)
            </li>
            <li>
              Experience in genetic algorithms, logistic and linear regression,
              PCA, decision tree analysis and statistical methods
            </li>
            <li>
              Up-to-date on the latest industry trends; able to articulate
              trends and potential clearly and confidently
            </li>
            <li>
              Good interpersonal skills and communication with all levels of
              management
            </li>
            <li>Able to work in a fast-paced environment</li>
          </ul>
        </div>
        <div>
          <div className="card">
            <h3 className="titleOfDetail">Job Details</h3>
            <h4 className="salary">
              <FontAwesomeIcon icon={faDollar} style={{ padding: "0 5px" }} />{" "}
              Salary : 170k-220k(per Annum)
            </h4>
            <h4 className="jobTitle">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ padding: "0 5px" }}
              />{" "}
              Job Title : Senior Data Scientist
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

export default DataScientist;
