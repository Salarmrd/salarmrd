import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { HashLink } from "react-router-hash-link";
import "./Navbar.scss";

const Navbar = () => {
  // useState must be inside the functional component
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-semibold text-light" to="/">
          Salarmrd.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)} // Toggle the state
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
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
