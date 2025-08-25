import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Signin from "./landing_page/signin/Signin";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/ProductPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/suport/SuportPage";
import NotFound from "./landing_page/NotFound";
import NavBar from "./landing_page/NavBar";
import Footer from "./landing_page/footer";
import Forget from "./landing_page/forget"
import PrivacyPolicyPage from "./landing_page/PrivacyPolicy/PrivacyPolicyPage";
import TermsAndConditions from "./landing_page/TermsAndConditions/TermsAndConditionsPage";
import Menu from "./landing_page/Menu";
import NotAvailable from "./landing_page/NotAvailable";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="/forget" element={<Forget />}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />}></Route>
      <Route path="/terms-and-conditions" element={<TermsAndConditions />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/not-available" element={<NotAvailable />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
