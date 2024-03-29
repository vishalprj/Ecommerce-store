import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

export const SignUp = () =>
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
<>
  <main className="section-outer grid-center auth-section">
    <form action="#" className="form form-signup">
      <div className="m-bottom-small flex-jc-center">
        <h3 className="m-bottom-small">Sign Up</h3>
      </div>
      <div className="form-group flex">
        <a href="#">
          <i className="font-icon fa fa-brands fs-medium m-right-small fa-google" />
        </a>
        <a href="#">
          <i className="font-icon fa fa-brands fs-medium m-right-small fa-twitter" />
        </a>
        <a href="#">
          <i className="font-icon fa fa-brands fs-medium fa-github" />
        </a>
      </div>
      <div className="form-signup-group">
        <input
          id="name"
          type="name"
          name="fullName"
          className="form-input"
          placeholder="Full Name"
          required
        />
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
      </div>
      <div className="form-signup-group">
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="Email Address"
          required
        />
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
      </div>
      <div className="form-signup-group">
        <input
          id="signup-password"
          type="password"
          name="password"
          className="form-input"
          placeholder="Password"
          minLength="4"
          required
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
      </div>
      <div className="form-signup-group">
        <input
          id="password"
          type="password"
          name="confirmPassword"
          className="form-input"
          placeholder="Confirm Password"
          minLength="4"
          required
        />
        <label htmlFor="password" className="form-label">
          Confirm Password
        </label>
      </div>

      <div className="form-group">
        <button
          type="submit"
          className="btn btn-squared btn-outline-secondary w-100 spacing-medium weight-600"
        >
          Sign Up
        </button>
      </div>
      <div className="form-footer form-group flex">
        <p className="">
          <span>
            <i className="fa fa-regular fa-face-smile-beam" />
          </span>
          Already have an account
          <Link
            style={{ color: '#088178' }}
            to="/login"
            id="form-signup-link"
            href="#"
            className="link form-footer-link m-left-smallest"
          >
            Log in
          </Link>
        </p>
      </div>
    </form>
  </main>
</>;
