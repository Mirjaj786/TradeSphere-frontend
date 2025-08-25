import React from "react";

export default function LeftSection({
  ProductImg,
  ProductName,
  ProductDesc,
  TryDemo,
  learnMore,
  PlayStoreLink,
  AppleStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Product Image */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={ProductImg} alt="Product Image" className="img-fluid" />
        </div>

        {/* Product Info */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="fs-3 mb-4">{ProductName}</h1>
          <p className="fs-5 mb-4" style={{ lineHeight: "2.25rem" }}>
            {ProductDesc}
          </p>

          {/* Links */}
          <div className="d-flex flex-column flex-md-row mb-4 gap-3">
            <a href={TryDemo} className="text-decoration-none fs-5">
              Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} className="text-decoration-none fs-5">
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Store Buttons */}
          <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mt-3">
            <a href={PlayStoreLink}>
              <img src="Media/Images/googlePlayBadge.svg" alt="Google Play" className="img-fluid" />
            </a>
            <a href={AppleStore}>
              <img src="Media/Images/appstoreBadge.svg" alt="App Store" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
