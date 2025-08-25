import React from "react";
import { Link } from "react-router";

export default function NotAvailable() {
  return (
    <div className="container py-5 mb-5">
      <div className="row align-items-center text-center text-md-start">
        
        {/* Text Section */}
        <div className="col-12 col-md-6 p-4">
          <h1 className="mb-3 fs-3 fs-md-2">
            Kiaan couldn’t find that page. Sorry! <br />
            This is a dummy project, so the page you requested isn’t available.
          </h1>
          <p className="mt-3 fs-5 text-muted">
            Currently this is just a demo project. <br />
            Visit{" "}
            <Link to="/" className="text-decoration-none fw-semibold">
              Zerodha’s home page
            </Link>
          </p>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="Media/Images/kiaan404.jpg"
            alt="Not Found"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
