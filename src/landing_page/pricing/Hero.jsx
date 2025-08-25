import React from "react";

export default function Hero() {
  return (
    <div className="container">
      <div className="text-center p-5 mt-5">
        <h1 className="fs-2 mb-3">Charges</h1>
        <p className="fs-4 text-muted mb-5">List of all charges and taxes</p>

        <div className="row">
          <div className="col-12 col-md-4 mt-5 p-4">
            <img
              src="Media/Images/pricingEquity.svg"
              alt="Free equity delivery"
              className="img-fluid mb-3"
            />
            <h2 className="fs-4">Free equity delivery</h2>
            <p className="mt-3 fs-6 text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>

          <div className="col-12 col-md-4 mt-5 p-4">
            <img
              src="Media/Images/intradayTrades.svg"
              alt="Intraday trades"
              className="img-fluid mb-3"
            />
            <h2 className="fs-4">Intraday & Options</h2>
            <p className="mt-3 fs-6 text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity. Flat ₹ 20
              on all option trades.
            </p>
          </div>

          <div className="col-12 col-md-4 mt-5 p-4">
            <img
              src="Media/Images/pricingEquity.svg"
              alt="Mutual funds"
              className="img-fluid mb-3"
            />
            <h2 className="fs-4">Direct mutual funds</h2>
            <p className="mt-3 fs-6 text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
