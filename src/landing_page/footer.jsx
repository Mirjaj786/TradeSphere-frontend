import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f6f6f6" }} className="pt-5">
      <div className="container border-top pt-5">
        <div className="row">
          
          <div className="col-lg-4 col-md-12 mb-4">
            <img
              src="Media/Images/logo.svg"
              alt="Logo"
              className="img-fluid mb-3"
            />
            <p className="text-muted">&copy; 2025, Zerodha Broking Ltd. All rights reserved.</p>
            <div className="d-flex flex-wrap gap-2">
              <i className="fa fa-twitter-square footer-icon fs-4"></i>
              <i className="fa fa-facebook-official footer-icon fs-4"></i>
              <i className="fa fa-instagram footer-icon fs-4"></i>
              <i className="fa fa-linkedin footer-icon fs-4"></i>
              <i className="fa fa-youtube-play footer-icon fs-4"></i>
              <i className="fa fa-whatsapp footer-icon fs-4"></i>
              <i className="fa fa-telegram footer-icon fs-4"></i>
            </div>
          </div>

        
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <p className="fs-5 fw-bold">Account</p>
            <Link to="/not-available" className="d-block mb-2 text-muted">Open demat account</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Minor demat account</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">NRI demat account</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Commodity</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Dematerialisation</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Fund transfer</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">MTF</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Referral program</Link>
          </div>

     
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <p className="fs-5 fw-bold">Support</p>
            <Link to="/not-available" className="d-block mb-2 text-muted">Contact us</Link>
            <Link to="/support" className="d-block mb-2 text-muted">Support portal</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">How to file a complaint?</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Status of your complaints</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Bulletin</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Circular</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Z-Connect blog</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Downloads</Link>
          </div>

          
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <p className="fs-5 fw-bold">Company</p>
            <Link to="/not-available" className="d-block mb-2 text-muted">About</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Press & media</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Philosophy</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Careers</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Zerodha Cares (CSR)</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Zerodha.tech</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Open source</Link>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <p className="fs-5 fw-bold">Quick links</p>
            <Link to="/not-available" className="d-block mb-2 text-muted">Upcoming IPOs</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Brokerage charges</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Market holidays</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Economic calendar</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Calculators</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Markets</Link>
            <Link to="/not-available" className="d-block mb-2 text-muted">Sectors</Link>
          </div>
        </div>

        {/* Full Legal / Disclaimer Text */}
        <div className="row mt-5">
          <div className="col-12 col-md-10 mx-auto text-muted" style={{ fontSize: "13px" }}>
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633. CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238. Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <Link to="/not-available">complaints@zerodha.com</Link>, for DP related to <Link to="/not-available">dp@zerodha.com</Link>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
            </p>

            <p>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism.
            </p>

            <p>
              Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              India's largest broker based on networth as per NSE. NSE broker factsheet.
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
