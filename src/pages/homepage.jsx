import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="Homepage">
      <div className="homepage-hero">
        <h1 className="mb-4">Welcome to Sweet Celebrations!</h1>
        <p>
          At Sweet Celebrations, we believe every child deserves to feel
          celebrated in a magical way. We take the stress out of planning so
          parents can relax and enjoy their little one’s big day, while we
          handle the details that make it unforgettable.
        </p>
        <p>
          Our packages are designed to suit different needs and budgets, with
          plenty of add-ons to customize the experience. Whether it’s a simple
          themed table or a full celebration setup with entertainment and
          photography, we’re here to make it happen.
        </p>
        <Link
          id="button-link"
          to="/contact"
          title="Get in Touch"
          className="text-decoration-none"
        >
          <button id="homepage-button" className="btn btn-branding">
            reach out
          </button>
        </Link>
      </div>
    </div>
  );
}
