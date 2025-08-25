import React from "react";
import { Link } from "react-router-dom";

export default function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3 fs-3 text-muted">Open a Zerodha account</h1>
        <p className="mt-3 fs-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 mt-4 btn btn-primary fs-4 mb-5 signup-btn"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <Link
            to={"/signup"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Sign up now
          </Link>
        </button>
      </div>
    </div>
  );
}
