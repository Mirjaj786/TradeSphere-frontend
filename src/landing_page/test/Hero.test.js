import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../home/Hero";


describe("Hero Component", () => {
    test("Renders Hero Image", () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "Media/Images/homeHero.png")
    })


    test("Renders signup button", () => {
        render(<Hero/>);
        const signupButton = screen.getByRole("button", {name: "Sign up for free"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("signup-btn")
    })
})