import React from "react";
// import { useState } from "react";

export default function Menu() {

    // const [open , setOpen] = useState(false);
  return (
    <div className="contsiner">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-4 border">
          <div className="row ">
            <div className="col">
              <img src="Media/Images/kite-logo.svg" alt="Logo" />
              <p>Kite</p>
              <p>Trading platform</p>
            </div>
            <div className="col">
              <img src="Media/Images/consoleMenu.svg" alt="console" />
              <p>Console</p>
              <p>Backoffice</p>
            </div>
            <div className="col">
              <img src="Media/Images/kite-connect.svg" alt="kiteconnect" />
              <p>Kite Connect</p>
              <p>Trading APIs</p>
            </div>
            <div className="col">
              <img src="Media/Images/coinMenu.svg" alt="coin" />
              <p>Coin</p>
              <p>Mutual Funds</p>
            </div>
          </div>
          <div className="row menu-bar">
            <div className="col">
              <h4>Utilities</h4>
              <p>Calculators</p>
              <p>Brokerage calculator</p>
              <p>Margin calculator</p>
              <p>SIP calculator</p>
            </div>
            <div className="col">
              <h4>Updates</h4>
              <p>Z-Connect blog</p>
              <p>Circulars / Bulletin</p>
              <p>IPOs</p>
              <p>Markets</p>
            </div>
            <div className="col">
              <h4>Education</h4>
              <img src="Media/Images/varsity (1)Menu.png" alt="versity" />
              <p>Versity</p>
            </div>
            <div className="col">
              <img src="Media/Images/tqnaMenu.png" alt="Tqna" />
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}


