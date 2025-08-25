import React from "react";

export default function Hero() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container text-center py-5">
        <h1 className="text-dark fw-bold fs-1 fs-md-2">Zerodha Products</h1>
        <h3 className="text-muted fs-4 mt-3 mb-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mb-4 fs-5">
          Check out our{" "}
          <a href="#" className="text-decoration-none fw-semibold">
            investment offerings{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </p>
        <a href="#" className="btn btn-primary px-4 py-2">
          Explore Products
        </a>
        <hr className="mx-auto w-50 mt-5" />
      </div>
    </div>
  );
}
