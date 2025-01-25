import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.scss";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-semibold text-light" to="/">
          Salarmrd.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <HashLink className="nav-link active" to="#about">
                About me
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#skills">
                Skills
              </HashLink>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/info">
                Info
              </Link>
            </li> */}
            <li className="nav-item">
            <HashLink className="btn" to="#contact">
                Contact me
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
