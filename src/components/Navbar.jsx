import React from 'react'
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  py-3">
  <div className="container">
    <a className="navbar-brand fs-3 fw-semibold text-light" href="#">Salarmrd.</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Experiences</a>
        </li>
        <li className="nav-item">
          <button className="btn" href="#">Contact me</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar