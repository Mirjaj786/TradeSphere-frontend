import React from "react";
import { Link } from "react-router-dom";

export default function CreateTicket() {
  const sections = [
    {
      icon: "fa-user-plus",
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      icon: "fa-user-circle",
      title: "Your Zerodha Account",
      links: [
        "Login Credentials",
        "Account Modification and Segment Addition",
        "DP ID and bank details",
        "Your Profile",
        "Transfer and conversion of shares",
      ],
    },
    {
      icon: "fa-line-chart",
      title: "Trading & Platforms",
      links: [
        "Margin/leverage, Product and Order types",
        "Kite Web and Mobile",
        "Trading FAQs",
        "Corporate Actions",
        "Sentinel",
        "Kite API",
        "Pi and other platforms",
        "Stockreports+",
        "GTT",
      ],
    },
    {
      icon: "fa-credit-card",
      title: "Funds",
      links: [
        "Adding Funds",
        "Fund Withdrawal",
        "eMandates",
        "Adding Bank Accounts",
      ],
    },
    {
      icon: "fa-cogs",
      title: "Console",
      links: [
        "Reports",
        "Ledger",
        "Portfolio",
        "60 Day Challenge",
        "IPO",
        "Referral Program",
        "Transfer and conversion of shares",
      ],
    },
    {
      icon: "fa-diamond",
      title: "Coin",
      links: [
        "Understanding Mutual Funds",
        "About Coin",
        "Buying and Selling through Coin",
        "Starting an SIP",
        "Managing your Portfolio",
        "Coin App",
        "Moving to Coin",
        "Government Securities",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-sm-12"
          >
            <div className="ticket-link p-4 border rounded shadow-sm h-100">
              <h5 className="mb-3 d-flex align-items-center">
                <i className={`fa ${section.icon} me-2`} aria-hidden="true"></i>
                {section.title}
              </h5>
              <ul className="list-unstyled mb-0">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to="/not-available"
                      className="text-decoration-none d-block py-1 text-muted"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
