import React from "react";

export default function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="Media/Images/education.svg"
            alt="Education "
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h1 className="fs-2 text-muted mb-4">
            Free and open market education
          </h1>

          <p className="fs-5 mb-3">
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="/not-available" className="fs-5 mb-4 d-inline-block" style={{ textDecoration: "none" }}>
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="fs-5 mt-4 mb-3">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="/not-available" className="fs-5 d-inline-block" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
