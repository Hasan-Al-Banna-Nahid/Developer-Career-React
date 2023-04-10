import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhoneAlt,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <h3 className="footerTitle">Developer Career</h3>
          <p className="brandDescription">
            Explore thousands of job opportunities with all <br /> the
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
            <div>
              <img src="../../../public/assets/Icons/Group 9969.png" alt="" />
            </div>
          </p>
        </div>
        <div>
          <h4 className="title">Company</h4>
          <div className="link">
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              About Us
            </Link>
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              Work
            </Link>
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              Latest News
            </Link>
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              Careers
            </Link>
          </div>
        </div>
        <div>
          <h4 className="title">Product</h4>
          <div className="link">
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              Prototype
            </Link>
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              Plans & Pricing
            </Link>
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              Customers
            </Link>
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              Integrations
            </Link>
          </div>
        </div>
        <div>
          <h4 className="title">Support</h4>
          <div className="link">
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              Help Desk
            </Link>
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              Sales
            </Link>
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              Become a Partner
            </Link>
            <Link>
              <FontAwesomeIcon icon={faCircleInfo} />
              Developers
            </Link>
          </div>
        </div>
        <div>
          <h4 className="title">Contact</h4>
          <p className="contactInfo">
            <FontAwesomeIcon icon={faLocation} />
            Chittagong,Bangladesh
          </p>
          <p className="contactInfo">
            <FontAwesomeIcon icon={faPhoneAlt} />
            +8801896085259
          </p>
        </div>

        <hr style={{ color: "black" }} />
      </div>
    );
  }
}

export default Footer;
