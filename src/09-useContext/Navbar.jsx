import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <NavLink className="nav-link " to="/">
              Home
            </NavLink>
            <NavLink className="nav-link " to="login">
              Login
            </NavLink>
            <NavLink className="nav-link " to="about">
              About
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};
