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
const MachineLearning = () => {
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
            We are looking for a highly motivated Machine Learning Engineer to
            join our team. The ideal candidate will have a passion for
            developing and implementing innovative machine learning solutions
            and have a strong technical background in artificial intelligence,
            statistics, and programming. The successful candidate will have
            excellent problem-solving skills and be able to work independently
            and collaboratively to develop solutions to challenging problems.
          </p>
          <h3 className="responsibilitiesTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            Machine Learning Engineer Duties and Responsibilities
          </h3>
          <ul className="responsibilities">
            <li>
              Develop and implement advanced machine learning algorithms and
              systems
            </li>
            <li>Design and execute deep learning models</li>
            <li>
              Research and develop data-driven solutions to complex business
              problems
            </li>
            <li>Analyze and interpret large datasets</li>
            <li>
              Collaborate with other engineers and product teams to deliver
              innovative solutions
            </li>
            <li>Develop and maintain machine learning pipelines</li>
            <li>Evaluate and optimize machine learning solutions</li>
            <li>
              Monitor, analyze, and report on system performance and accuracy
            </li>
          </ul>
          <h3 className="qualificationTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            Machine Learning Engineer Requirements and Qualifications
          </h3>
          <ul className="qualification">
            <li>
              Bachelor's degree in Computer Science, Mathematics, Engineering,
              or related technical field
            </li>
            <li>
              3+ years of experience in software development and/or machine
              learning preferred
            </li>
            <li>
              Knowledge and experience with TensorFlow, Scikit-Learn, and Keras
            </li>
            <li>Fluent in Python preferred</li>
            <li>
              Experience with databases, data processing, and data wrangling
            </li>
            <li>Experience with natural language processing (NLP)</li>
            <li>
              Excellent problem-solving, communication, and collaboration skills
            </li>
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
              Job Title : Senior Machine Learning Engineer
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

export default MachineLearning;
