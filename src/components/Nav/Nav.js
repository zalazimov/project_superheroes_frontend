import React from "react";
import { Link } from "react-router-dom";
import { logo, homelink, indexlink, addherolink } from "../../assets/index";
import Searchbar from "../Searchbar/Searchbar";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light border-bottom border-black">
      <Link
        className="logo navbar-brand"
        to="/heroes"
        style={{ fontSize: "1.5rem", transition: "font-size 0.3s" }}
      >
        <img
          src={logo}
          alt="Logo"
          height="80"
          className="d-inline-block align-top px-4"
        />
      </Link>

      <div
        className="links-list collapse navbar-collapse d-flex flex-wrap"
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto d-flex flex-wrap">
          <li className="home nav-item px-3">
            <Link
              className="nav-link"
              to="/"
              style={{ fontSize: "1.2rem", transition: "font-size 0.3s" }}
            >
              <img
                src={homelink}
                alt="homelink"
                height="45"
                className="d-inline-block align-top px-4"
              />
            </Link>
          </li>
          <li className="index nav-item px-3">
            <Link
              className="nav-link"
              to="/index"
              style={{ fontSize: "1.2rem", transition: "font-size 0.3s" }}
            >
              <img
                src={indexlink}
                alt="indexlink"
                height="45"
                className="d-inline-block align-top px-4"
              />
            </Link>
          </li>
          <li className="addhero nav-item px-3">
            <Link
              className="nav-link"
              to="/create"
              style={{ fontSize: "1.2rem", transition: "font-size 0.3s" }}
            >
              <img
                src={addherolink}
                alt="addherolink"
                height="70"
                className="d-inline-block align-top px-4"
              />
            </Link>
          </li>
        </ul>
        <Searchbar />
      </div>
    </nav>
  );
}

export default Nav;
