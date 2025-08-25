import React from "react";
import { Link } from "react-router-dom";

export default function Universe() {
  const platforms = [
    {
      img: "Media/Images/zerodhaFundhouse.png",
      width: "57%",
      title: "Zerodha Fundhouse",
      desc: `Our asset management venture that is creating simple and transparent index funds to help you save for your goals.`,
    },
    {
      img: "Media/Images/sensibullLogo.svg",
      width: "65%",
      title: "Sensibull",
      desc: `Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.`,
    },
    {
      img: "Media/Images/tijori.svg",
      width: "45%",
      title: "Tijori",
      desc: `Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.`,
    },
    {
      img: "Media/Images/streakLogo.png",
      width: "50%",
      title: "Streak",
      desc: `Systematic trading platform that allows you to create and backtest strategies without coding.`,
    },
    {
      img: "Media/Images/smallcaseLogo.png",
      width: "60%",
      title: "Smallcase",
      desc: `Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.`,
    },
    {
      img: "Media/Images/dittoLogo.png",
      width: "40%",
      title: "Ditto",
      desc: `Personalized advice on life and health insurance. No spam and no mis-selling.`,
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fs-3 text-muted">The Zerodha Universe</h1>
        <p className="fs-5 text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      <div className="row">
        {platforms.map((platform, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 text-center">
            <a href="/not-available" className="text-decoration-none text-dark">
              <img src={platform.img} alt={platform.title} style={{ width: platform.width }} className="mb-3 img-fluid" />
              <p style={{ lineHeight: "1.5rem" }}>{platform.desc}</p>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link to="/signup" className="btn btn-primary fs-5 px-4 py-2">
          Sign up for free
        </Link>
      </div>
    </div>
  );
}
