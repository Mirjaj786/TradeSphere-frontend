import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        ProductImg="Media/Images/kite.png"
        ProductName="Kite"
        ProductDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo=""
        learnMore=""
        PlayStoreLink=""
        AppleStore=""
      />
      <RightSection
        ProductImg="Media/Images/console.png"
        ProductName="Console"
        ProductDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        Link=""
      />
      <LeftSection
        ProductImg="Media/Images/coin.png"
        ProductName="Coin"
        ProductDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        TryDemo=""
        learnMore=""
        PlayStoreLink=""
        AppleStore=""
      />
      <RightSection
        ProductImg="Media/Images/kiteconnect.png"
        ProductName="Kite Connect API"
        ProductDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Link=""
      />
      <LeftSection
        ProductImg="Media/Images/varsity.png"
        ProductName="Varsity mobile"
        ProductDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        TryDemo=""
        learnMore=""
        PlayStoreLink=""
        AppleStore=""
      />
      <p className="text-center fs-4 pb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="/" style={{textDecoration: "none"}}>Zerodha.tech </a>{" "}blog.
      </p>
      <Universe />
    </>
  );
}
