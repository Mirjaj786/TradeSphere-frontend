import React from "react";

export default function Team() {
  return (
    <div className="container py-5">
      <div className="row">
        <h1 className="text-center mb-5">People</h1>

        {/* Profile Section */}
        <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
          <img
            src="Media/Images/mirjajImage.jpg"
            alt="Mirjaj Ajij Milon"
            className="rounded-circle img-fluid"
            style={{ maxWidth: "250px" }}
          />
          <h2 className="mt-3 fs-4 text-muted">Mirjaj Ajij Milon</h2>
          <h6 className="text-secondary">Founder, CEO</h6>
        </div>

        {/* Bio Section */}
        <div className="col-12 col-md-7 fs-6 text-muted">
          <div className="bio-section mb-4 fs-5">
            <p>
              Mirjaj Ajij Milon bootstrapped and founded Zerodha in 2025 as a
              demo project to explore the hurdles faced by developers and
              entrepreneurs. Today, Zerodha is showcased as a model for learning
              and experimentation.
            </p>
            <p>
              He is a demo leader, experimenting with software development,
              financial technology, and project management for educational
              purposes.
            </p>
            <p>
              In his free time, Mirjaj enjoys coding challenges, building
              projects, and exploring new technologies to strengthen his skills.
            </p>
          </div>

          {/* Links */}
          <p className="fw-semibold">
            Connect on{" "}
            <a href="/" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
