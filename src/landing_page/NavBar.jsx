import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container p-2">

       
        <Link className="navbar-brand" to="/">
          <img src="Media/Images/logo.svg" alt="Logo" style={{ width: "120px" }} />
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars"></i>
        </button>

      
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/support">Support</Link>
            </li>
          </ul>

          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-primary fw-semibold" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary px-3 ms-2" to="/signin">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
