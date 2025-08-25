import React from "react";
import OpenAccount from "../OpenAccount";
import Award from "./Award";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
// import Menu from "../Menu";

export default function HomePage() {
  return (
    <>
      {/* <Menu/> */}
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
