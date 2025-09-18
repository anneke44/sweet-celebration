import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Sweet Celebrations NS Tran.svg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="nav-header d-flex">
        <div className="logo">
          <NavLink to="/" title="Homepage">
            <img
              src={Logo}
              alt="Logo"
              className="sweet-celebration-logo img img-fluid"
            />
          </NavLink>{" "}
          <span className="signature">Sweet Celebration</span>
        </div>
        <div className="dropDown">
          <ul>
            <li>
              <NavLink
                to="/about"
                title="About"
                className={({ isActive }) =>
                  isActive ? "active-link" : "page-link"
                }
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/packages"
                title="Packages"
                className={({ isActive }) =>
                  isActive ? "active-link" : "page-link"
                }
              >
                packages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                title="Contact"
                className={({ isActive }) =>
                  isActive ? "active-link" : "page-link"
                }
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
