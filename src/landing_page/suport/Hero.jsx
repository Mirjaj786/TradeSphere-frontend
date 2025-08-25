import React from "react";

export default function Hero() {
  return (
    <section className="container-fluid " id="support-hero">
      <div className="p-4 mt-5 mb-5 " id="supportWapper">
        <h4>Support Portal</h4>
        <a href="" style={{ color: "white", fontSize: "1.2rem" }}>
          Track Tickets
        </a>
      </div>
      <div className="row p-4 mt-5 mb-5 text-center">
        <div className="col-6 mt-5 mb-5 p-5">
          {" "}
          <h1 className="p-3 fs-3 ml-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
          />
          <p className="pt-4">
            <a href="">Track account opening</a> &nbsp; &nbsp; &nbsp;
            <a href="">Track segment activation</a>&nbsp; &nbsp; &nbsp;
            <a href="">Intraday margins</a>&nbsp; &nbsp; &nbsp;
            <a href="">Kite user manual</a>&nbsp; &nbsp; &nbsp;
          </p>
        </div>
        <div className="col-6 mt-5 mb-5 p-5">
          <h1 className="fs-3 mb-5">Featured</h1>
          <a href=""> 1. Current Takeovers and Delisting – January 2024</a>
          <br />
          <a href="">2. Latest Intraday leverages – MIS & CO</a>
        </div>
      </div>
    </section>
  );
}
