import React from "react";
import Button from "@mui/material/Button";
import "./AppliedJobs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faLocation } from "@fortawesome/free-solid-svg-icons";
const AppliedJobs = () => {
  const ML = JSON.parse(localStorage.getItem("ml"));
  if (!ML) {
    return null;
  }
  const AI = JSON.parse(localStorage.getItem("ai"));
  if (!AI) {
    return null;
  }
  const DataAnalyst = JSON.parse(localStorage.getItem("DataAnalyst"));
  if (!DataAnalyst) {
    return null;
  }
  const DataScientist = JSON.parse(localStorage.getItem("DataScientist"));
  if (!DataScientist) {
    return null;
  }
  const FrontEnd = JSON.parse(localStorage.getItem("FrontEnd"));
  if (!FrontEnd) {
    return null;
  }
  const FullStack = JSON.parse(localStorage.getItem("FullStack"));
  if (!FullStack) {
    return null;
  }
  const { Company, Position, Location, Office, OfficeTime, Salary, img } = ML;
  const {
    Company1,
    Position1,
    Location1,
    Office1,
    OfficeTime1,
    Salary1,
    img1,
  } = AI;
  const {
    Company2,
    Position2,
    Location2,
    Office2,
    OfficeTime2,
    Salary2,
    img2,
  } = DataAnalyst;
  const {
    Company3,
    Position3,
    Location3,
    Office3,
    OfficeTime3,
    Salary3,
    img3,
  } = DataScientist;
  const {
    Company4,
    Position4,
    Location4,
    Office4,
    OfficeTime4,
    Salary4,
    img4,
  } = FrontEnd;
  const {
    Company5,
    Position5,
    Location5,
    Office5,
    OfficeTime5,
    Salary5,
    img5,
  } = FullStack;
  return (
    <div>
      {/* ML */}
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
      {/* ML */}
      {/* AI */}
      <div className="appliedJob">
        <div>
          <img src={img1} alt="" className="img" />
        </div>
        <div>
          <h3 className="CompanyInfo">{Position1}</h3>
          <h3 className="CompanyInfo">{Company1}</h3>
          <div className="location">
            <Button variant="outlined" color="error">
              {Office1}
            </Button>
            <Button variant="outlined" color="info">
              {OfficeTime1}
            </Button>
          </div>
          <div>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faLocation} style={{ padding: "0 5px" }} />
              {Location1}
            </h4>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faDollar} style={{ padding: "0 5px" }} />
              {Salary1}
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
      {/* AI */}
      {/* Data Analyst */}
      <div className="appliedJob">
        <div>
          <img src={img2} alt="" className="img" />
        </div>
        <div>
          <h3 className="CompanyInfo">{Position2}</h3>
          <h3 className="CompanyInfo">{Company2}</h3>
          <div className="location">
            <Button variant="outlined" color="error">
              {Office2}
            </Button>
            <Button variant="outlined" color="info">
              {OfficeTime2}
            </Button>
          </div>
          <div>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faLocation} style={{ padding: "0 5px" }} />
              {Location2}
            </h4>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faDollar} style={{ padding: "0 5px" }} />
              {Salary2}
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
      {/* Data Analyst */}
      {/* Data Scientist */}
      <div className="appliedJob">
        <div>
          <img src={img3} alt="" className="img" />
        </div>
        <div>
          <h3 className="CompanyInfo">{Position3}</h3>
          <h3 className="CompanyInfo">{Company3}</h3>
          <div className="location">
            <Button variant="outlined" color="error">
              {Office3}
            </Button>
            <Button variant="outlined" color="info">
              {OfficeTime3}
            </Button>
          </div>
          <div>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faLocation} style={{ padding: "0 5px" }} />
              {Location3}
            </h4>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faDollar} style={{ padding: "0 5px" }} />
              {Salary3}
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
      {/* Data Scientist */}
      {/* FrontEnd */}
      <div className="appliedJob">
        <div>
          <img src={img4} alt="" className="img" />
        </div>
        <div>
          <h3 className="CompanyInfo">{Position4}</h3>
          <h3 className="CompanyInfo">{Company4}</h3>
          <div className="location">
            <Button variant="outlined" color="error">
              {Office4}
            </Button>
            <Button variant="outlined" color="info">
              {OfficeTime4}
            </Button>
          </div>
          <div>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faLocation} style={{ padding: "0 5px" }} />
              {Location4}
            </h4>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faDollar} style={{ padding: "0 5px" }} />
              {Salary4}
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
      {/* FrontEnd */}
      {/* FullStack */}
      <div className="appliedJob">
        <div>
          <img src={img5} alt="" className="img" />
        </div>
        <div>
          <h3 className="CompanyInfo">{Position5}</h3>
          <h3 className="CompanyInfo">{Company5}</h3>
          <div className="location">
            <Button variant="outlined" color="error">
              {Office5}
            </Button>
            <Button variant="outlined" color="info">
              {OfficeTime5}
            </Button>
          </div>
          <div>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faLocation} style={{ padding: "0 5px" }} />
              {Location5}
            </h4>
            <h4 className="CompanyInfo">
              <FontAwesomeIcon icon={faDollar} style={{ padding: "0 5px" }} />
              {Salary5}
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
      {/* FullStack */}
    </div>
  );
};

export default AppliedJobs;
