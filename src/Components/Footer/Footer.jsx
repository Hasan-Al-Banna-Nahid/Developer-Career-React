import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

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
            <Link>About Us</Link>
            <Link>Work</Link>
            <Link>Latest News</Link>
            <Link>Careers</Link>
          </div>
        </div>
        <div>
          <h4 className="title">Product</h4>
          <div className="link">
            <Link>Prototype</Link>
            <Link>Plans & Pricing</Link>
            <Link>Customers</Link>
            <Link>Integrations</Link>
          </div>
        </div>
        <div>
          <h4 className="title">Support</h4>
          <div className="link">
            <Link>Help Desk</Link>
            <Link>Sales</Link>
            <Link>Become a Partner</Link>
            <Link>Developers</Link>
          </div>
        </div>
        <div>
          <h4 className="title">Contact</h4>
          <p className="contactInfo">Chittagong,Bangladesh</p>
          <p className="contactInfo">+8801896085259</p>
        </div>

        <hr style={{ color: "black" }} />
      </div>
    );
  }
}

export default Footer;
