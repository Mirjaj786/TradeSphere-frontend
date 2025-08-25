import React, { useState } from "react";
// import Flash from "../../Flash";
import "./Signin.css";
import { Link } from "react-router-dom";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
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
      const res = await fetch("http://localhost:3002/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Login failed");
      }
      if (data?.flash?.success) {
        localStorage.setItem("flash_success", data.flash.success);
      } else if (data?.message) {
        localStorage.setItem("flash_success", data.message);
      }
      if (data?.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      // Redirect to dashboard app after successful login
      // For testing, use localhost first
      window.location.href = "https://trade-sphare.netlify.app/";
      <div class="alert alert-success" role="alert">
       Login successful
      </div>;
      // window.location.href = "https://trade-sphare.netlify.app/";
    } catch (error) {
      console.error("Error signing in:", error);
      console.error("Response data:", error.response?.data);
      alert(
        error.message ||
          "There was an error signing in. Please check your credentials and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signin-container">
      <div className="signin-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="signin-content">
                <h1 className="signin-title">Welcome back to Zerodha</h1>
                <p className="signin-subtitle">
                  Access your trading account, manage investments, and stay
                  updated with market insights.
                </p>
                <div className="signin-features">
                  <div className="feature-item">
                    <i className="fas fa-chart-line"></i>
                    <span>Real-time market data</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-mobile-alt"></i>
                    <span>Trade on the go</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-shield-alt"></i>
                    <span>Secure & encrypted</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-headset"></i>
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="signin-form-container">
                <div className="signin-form-header">
                  <h2>Sign in to your account</h2>
                  <p>Access your trading dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="signin-form">
                  <div className="form-group">
                    <label htmlFor="username">Email *</label>
                    <input
                      type="text"
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

                  <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <div className="password-input-container">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="password-toggle-btn"
                        onClick={togglePasswordVisibility}
                      >
                        <i
                          className={`fas ${
                            showPassword ? "fa-eye-slash" : "fa-eye"
                          }`}
                        ></i>
                      </button>
                    </div>
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>

                  <div className="form-options">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <Link to="/forget" className="forgot-password-link">
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary signin-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="signin-footer">
                  <p className="">
                    Don't have an account? &nbsp;{" "}
                    <a href="/signup" className="signup-link">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
