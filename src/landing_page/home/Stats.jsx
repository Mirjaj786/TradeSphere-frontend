import React from "react";

export default function Stats() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center p-3">
        {/* Left Section */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted fs-5 mb-4">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted fs-5 mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Our philosophies.
            </a>
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted fs-5 mb-4">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted fs-5 mb-4">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src="Media/Images/ecosystem.png"
            alt="Products Image"
            className="img-fluid mb-4"
          />
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="" style={{ textDecoration: "none" }}>
              Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
