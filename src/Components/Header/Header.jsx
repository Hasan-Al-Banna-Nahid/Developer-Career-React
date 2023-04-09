import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Button from "@mui/material/Button";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <h3>Developer Career</h3>
        </div>
        <div className="navbar">
          <Link to="/">
            <Button className="commonBtn" variant="outline" color="primary">
              Home
            </Button>
          </Link>
          <Link to="/">
            <Button
              className="statistics commonBtn"
              variant="contained"
              color="primary"
            >
              Statistics
            </Button>
          </Link>
          <Link to="/">
            <Button className="commonBtn" variant="outline" color="error">
              Applied Jobs
            </Button>
          </Link>
          <Link to="/">
            <Button className="commonBtn" variant="outline" color="secondary">
              Blog
            </Button>
          </Link>
        </div>
        <div>
          <Button className="applyBtn" variant="contained" color="info">
            Start Apply
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;
