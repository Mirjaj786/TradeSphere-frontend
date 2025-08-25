import React from "react";

export default function RightSection({
  ProductImg,
  ProductName,
  ProductDesc,
  Link,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Product Info */}
        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1 className="fs-3 mb-3">{ProductName}</h1>
          <p className="fs-5 mb-3" style={{ lineHeight: "2rem" }}>
            {ProductDesc}
          </p>
          <a href={Link} className="text-decoration-none fs-5">
            Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Product Image */}
        <div className="col-12 col-md-6 text-center">
          <img src={ProductImg} alt="Product" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
