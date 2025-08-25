import React from "react";

export default function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h2 className="mb-4">Unbeatable pricing</h2>
          <p className="fs-5">
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="/pricing" className="fs-5" style={{ textDecoration: "none" }}>
            See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Spacer for larger screens */}
        <div className="d-none d-md-block col-md-2"></div>

        {/* Right Section: Pricing Cards */}
        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col-12 col-sm-6 p-4 border mb-3 mb-sm-0">
              <h1>₹0</h1>
              <p>
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>
            <div className="col-12 col-sm-6 p-4 border">
              <h1>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
