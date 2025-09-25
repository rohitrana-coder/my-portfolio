import React from "react";
import './App.css';
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top first">
        <div className="container-fluid">
          <Link to="/" className="Link">
            <a className="navbar-brand p-4  rohit" href="#" >Rohit Rana</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                 <Link  to="/" className="Link">
                <a className="nav-link active" href="/Home">Home</a></Link>
              </li>
              <li className="nav-item" >
                  <Link  to="/about" className="Link">
                <a className="nav-link" href="/About">About</a></Link>
              </li>
              <li className="nav-item">
                  <Link  to="/services" className="Link">
                <a className="nav-link" href="">Services</a>
                </Link>
              </li>
              <li className="nav-item" >
                  <Link  to="/portfolio" className="Link">
                <a className="nav-link" href="#">Portfolio</a></Link>
              </li>
              <li className="nav-item">
                  <Link  to="/contact" className="Link">
                <a className="nav-link" href="/Contact">Contact</a></Link>
              </li>
            </ul>
          </div>
        </div>
       
      </nav>
      

 <Outlet />
    
    </>
  );
}

export default Header;
