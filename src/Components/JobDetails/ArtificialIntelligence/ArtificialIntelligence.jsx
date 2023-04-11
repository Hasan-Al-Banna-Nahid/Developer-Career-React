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
const ArtificialIntelligence = () => {
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
            The Global Data and Analytics organization uses cloud-base
            technology for data integration and data warehouse using Talend and
            Snowflake. This role will be supporting the senior executive team
            globally with their Data and Analytics data ingestion and
            transformation needs utilizing the existing technologies.This role
            is full- time midlevel role focusing on analyzing, building, and
            designing business intelligence models and solutions. The role is
            key in synthesizing and distilling meaningful and accurate data for
            the decision makers. Responsibilities include building and
            supporting BI solutions using Talend, Matillion, Snowflake, and
            other exciting technologies of data integration. This role also
            provides accurate level-of-effort estimates for data integration,
            creates data integration solutions, develops documentation to
            support production deployments, and supports data solutions
            maintenance.
          </p>
          <h3 className="responsibilitiesTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            AI Engineer Duties and Responsibilities
          </h3>
          <ul className="responsibilities">
            <li>
              Design, develop, implement, and support new and existing data
              integration jobs using modern technologies.
            </li>
            <li>
              Ingest data from multiple sources including transactional and
              operational databases, implement complex business logic, and
              produce 3 rd normal form and dimensional model database objects in
              Snowflake.
            </li>
            <li>
              Migrate datasets between existing and future database platforms.
            </li>
            <li>
              Understand and implement best practice solutions per development
              standards
            </li>
            <li>
              Produce ad-hoc data extracts to answer business questions quickly
              and thoroughly.
            </li>
            <li>
              Collaborate with Project Managers, IT Architecture, Business
              Analysts, and Report Developers to achieve business objectives.
            </li>
            <li>
              Develop technology documentation to support production deployments
              as well as ongoing maintenance of reporting and data solutions.
            </li>
            <li>
              Troubleshoot, diagnose, and resolve data quality and performance
              issues related to data integration and transformation
            </li>
            <li>
              Communicate complex topics and analyses to non-technical business
              personnel.
            </li>
            <li>
              Present and participate in Architecture Review Board meetings.
              Review solutions presented by other IT architects and provide
              constructive feedback.
            </li>
            <li>
              Provide accurate level of effort estimates for data integration
              development to management.
            </li>
          </ul>
          <h3 className="qualificationTitle">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              style={{ padding: "0 5px" }}
            />
            AI Engineer Requirements and Qualifications
          </h3>
          <ul className="qualification">
            <li>
              Bachelors degree in computer science, information technology, or
              related field.
            </li>
            <li>
              Equivalent working experience in-lieu of a bachelors degree would
              be considered.
            </li>
            <li>
              5+ years advanced hands-on experience building data integration,
              ingestion and transformation solutions using tools such as
              Matillion, Nifi, Kafka (Confluent Cloud), Talend, dbt and Airflow.
            </li>
            <li>
              4+ years advanced SQL skills, preferably in Snowflake or similar
              cloud data warehouse
            </li>
            <li>
              3+ years hands-on experience in data warehousing, and particularly
              in star-schema architecture
            </li>
            <li>
              3+ years working in a DevOps environment. Assist with production
              support issues by acting as a subject matter expert in resolving
              incidents and problem tickets.
            </li>
            <li>
              2+ years object-oriented programming language development (Python,
              Shell scripting, Scala/Java)
            </li>
            <li>2+ years API and Web Services integration (REST/SOAP/Bulk)</li>
            <li>
              1+ year experience with AWS and related products (such as Lambda,
              ECS, EC2, App Gateway and similar)
            </li>
            <li>
              Experience developing production solutions with distributed
              architectures and processing technologies.
            </li>
            <li>
              Experience in implementing CI/CD (e.g., GitHub Pipelines, AWS
              cloud build)
            </li>
            <li>
              Hands on experience working in a public cloud environment and
              on-prem infrastructure.
            </li>
            <li>
              Extensive experience in multiple operating systems: Unix, Windows,
              Linux
            </li>
            <li>
              Ability to analyze and apply critical thinking to resolve complex
              issues.
            </li>
            <li>Strong problem solving and collaboration skills.</li>
            <li>
              Commitment, technical curiosity, and relentless pursuit of
              practical knowledge
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
              Job Title : Artificial Intelligence Engineer
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

export default ArtificialIntelligence;
