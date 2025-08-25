import React from "react";

export default function Award() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="Media/Images/largestBroker.svg"
            alt="Award"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h1 className="fs-3 mb-3">Largest stock broker in India</h1>
          <p className="mb-4 fs-5">
            2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6 mb-3 mb-md-0">
              <ul className="ps-3">
                <li className="fs-5">Futures and Options</li>
                <li className="fs-5">Commodity derivatives</li>
                <li className="fs-5">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6 mb-3 mb-md-0">
              <ul className="ps-3">
                <li className="fs-5">Stocks & IPOs</li>
                <li className="fs-5">Direct mutual funds</li>
                <li className="fs-5">Bonds and Govt. Security</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-4">
            <img
              src="Media/Images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
