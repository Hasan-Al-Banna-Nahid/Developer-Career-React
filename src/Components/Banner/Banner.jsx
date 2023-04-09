import React, { Component } from "react";
import "./Banner.css";
import Button from "@mui/material/Button";
class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="bannerInfo">
          <h3 className="bannerTitle">
            Next Step To Your <br /> <span>Dream Job</span>
          </h3>
          <p className="bannerDescription">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <Button variant="contained" color="primary">
            Apply
          </Button>
        </div>
        <div className="bannerPhoto">
          <img
            src="../../../public/assets/All Images/P3OLGJ1 copy 1.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Banner;
