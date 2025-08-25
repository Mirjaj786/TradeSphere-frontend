import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        {/* Hero Image */}
        <div className="col-12 mb-4">
          <img
            src="Media/Images/homeHero.png"
            alt="Hero"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* Heading */}
        <div className="col-12">
          <h1 className="text-muted mb-3 fs-2">Invest in everything</h1>
          <p className="fs-5 mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
        </div>

        {/* Sign Up Button */}
        <div className="col-12">
          <Link
            to="/signup"
            className="btn btn-primary fs-5 px-4 py-2"
            style={{ textDecoration: "none" }}
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}
