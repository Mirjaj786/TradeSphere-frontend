import React from "react";

export default function Hero() {
  return (
    <div className="container">
      {/* Heading Section */}
      <div className="row text-center pt-5">
        <div className="col">
          <h1 className="px-3 py-4 fs-4 fs-md-3 text-muted mb-5">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      <hr />

      {/* Content Section */}
      <div className="row px-3 py-5 mb-4">
        {/* Left Column */}
        <div className="col-12 col-md-6 mt-4 ">
          <p className="fs-6 fs-md-5 p-2 fs-5">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="fs-6 fs-md-5 p-2">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="fs-6 fs-md-5 p-2">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 mt-4">
          <p className="fs-6 fs-md-5 p-2">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="fs-6 fs-md-5 p-2">
            <a href="/" className="text-decoration-none text-primary">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="fs-6 fs-md-5 p-2">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}
