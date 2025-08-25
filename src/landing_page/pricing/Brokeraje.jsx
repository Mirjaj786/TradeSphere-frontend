import React from "react";

export default function Brokerage() {
  return (
    <div className="container border-top p-5">
      <div className="row">
        {/* Left Column */}
        <div className="col-12 col-md-6 mb-5">
          <h3 className="text-center mb-4">
            <a href="#" style={{ textDecoration: "none" }}>
              Brokerage Calculator
            </a>
          </h3>
          <ul className="fs-5" style={{ lineHeight: "2rem" }}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6">
          <h3 className="text-center mb-4">
            <a href="#" style={{ textDecoration: "none" }}>
              List of Charges
            </a>
          </h3>
          {/* Add your list/table here */}
        </div>
      </div>
    </div>
  );
}
