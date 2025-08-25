import React, { useState } from "react";
import Flash from "../../Flash";
import "./Signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    // Only validate confirmPassword if the field is present/used
    if (
      typeof formData.confirmPassword === "string" &&
      formData.confirmPassword.length > 0 &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:3002/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Registration failed");
      }
      if (data?.message) {
        localStorage.setItem("flash_success", data.message);
      }
      if (data?.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
      // Redirect to dashboard to show flash banner there and use user immediately
      window.location.href = "http://localhost:3001/";
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors((prev) => ({ ...prev, global: error.message || "There was an error creating your account. Please try again." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container" style={{ backgroundColor: "#999" }}>
      {errors.global && <Flash error={errors.global} />}
      <div className="signup-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="signup-content">
                <h1 className="signup-title">Open a Zerodha account</h1>
                <p className="signup-subtitle">
                  Modern platforms and apps, ₹0 investments, and flat ₹20
                  intraday and F&O trades.
                </p>
                <div className="signup-features">
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Free equity delivery</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>₹20 intraday & F&O</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Advanced charts & analytics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Signup Form */}
            <div className="col-lg-6">
              <div className="signup-form-container">
                <div className="signup-form-header">
                  <h2>Create your account</h2>
                  <p>Start your investment journey today</p>
                </div>

                <form onSubmit={handleSubmit} className="signup-form">
                  {/* Username */}
                  <div className="form-group">
                    <label htmlFor="username">Username *</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={`form-control ${
                        errors.username ? "is-invalid" : ""
                      }`}
                      placeholder="Enter username"
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Create password"
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>

                  {/* <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password *</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`form-control ${
                        errors.confirmPassword ? "is-invalid" : ""
                      }`}
                      placeholder="Confirm password"
                    />
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div> */}

                  {/* Terms */}
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        className={`form-check-input ${
                          errors.terms ? "is-invalid" : ""
                        }`}
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the{" "}
                        <a href="/terms-and-conditions" className="terms-link">
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a href="/privacy-policy" className="terms-link">
                          Privacy Policy
                        </a>{" "}
                        *
                      </label>
                      {errors.terms && (
                        <div className="invalid-feedback">{errors.terms}</div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary signup-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>

                <div className="signup-footer">
                  <p>
                    Already have an account?{" "}
                    <Link to="/signin" className="login-link">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  );
}
