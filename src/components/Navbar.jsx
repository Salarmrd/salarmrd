import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.scss";

const Navbar = () => {
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
  onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state
  aria-expanded={isOpen}
  aria-label="Toggle navigation"
>
  {/* Conditional rendering for the menu icon */}
  {isOpen ? (
    <span className="close-icon">✖</span> // Cross icon
  ) : (
    <span className="navbar-toggler-icon"></span> // Default burger icon
  )}
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
