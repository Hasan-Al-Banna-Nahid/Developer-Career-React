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
const FrontEnd = () => {
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
            We are seeking a driven, detail-oriented front end developer to join
            our growing team. In this role, you will take the designs created by
            web designers and use a mix of HTML, CSS, and JavaScript to code
            those website designs. You will work closely with various members of
            the organization to play a key role in the successful launch of
            websites and applications.
          </p>
          <h3 className="responsibilitiesTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            Front End Developer Duties and Responsibilities
          </h3>
          <ul className="responsibilities">
            <li>
              Review designs created by web designers; ask any necessary
              clarifying questions before starting on work
            </li>
            <li>
              Write code to implement visual elements into various web
              applications
            </li>
            <li>
              Create prototypes, mockups, and staging sites for review and
              feedback
            </li>
            <li>
              Optimize websites and applications to ensure fast loading speeds
            </li>
            <li>
              Maintain websites and implement any necessary additions or
              enhancements
            </li>
            <li>
              Identify and troubleshoot various website issues and coding
              problems
            </li>
            <li>
              Collaborate with members of the website team, including designers
              and back-end developers, to consistently improve functionality and
              user-friendliness of web applications
            </li>
            <li>
              Maintain updated knowledge of the development industry and any
              advancements in technology
            </li>
            <li>Meet tight deadlines as required</li>
          </ul>
          <h3 className="qualificationTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            Front End Developer Requirements and Qualifications
          </h3>
          <ul className="qualification">
            <li>3+ years of experience in a front end development role</li>
            <li>Portfolio or samples of past work and projects</li>
            <li>
              Understanding of the entire web development process, with an
              emphasis on front end design and development
            </li>
            <li>
              Solid grasp of HTML, CSS, JavaScript, and various content
              management systems
            </li>
            <li>Ability to interpret and implement web designs</li>
            <li>
              Strong communication skills to effectively collaborate with
              designers, developers, and other relevant staff members or clients
            </li>
            <li>Willingness to troubleshoot and solve complex problems</li>
            <li>Ability to manage multiple projects and meet deadlines</li>
            <li>
              Flexibility to adapt to changing instructions and requirements
            </li>
          </ul>
        </div>
        <div>
          <div className="card">
            <h3 className="titleOfDetail">Job Details</h3>
            <h4 className="salary">
              <FontAwesomeIcon icon={faDollar} style={{ padding: "0 5px" }} />{" "}
              Salary : 120k-150k(per Annum)
            </h4>
            <h4 className="jobTitle">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ padding: "0 5px" }}
              />{" "}
              Job Title : Senior Front End Developer
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

export default FrontEnd;
