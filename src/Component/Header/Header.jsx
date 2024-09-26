import React from "react";

import {Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import logo from "../../assets/logo.png";

import logo from "../../assets/logo.png";



function Header() {
  return (
    <>
      <div className="Headmain">
        <div className="blank"></div>
        <div className="nav1">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 py-2">
                <img src={logo} alt="loading..." style={{ width: "150px" }}></img>
              </div>
              <div className="col-12 col-md-6 col-lg-5 py-2">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success text-dark" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className="col-12 col-md-6 col-lg-4 gap-3 d-flex justify-content-end py-2">
                <i
                  className="bi bi-cart"
                  style={{ color: "green", fontSize: "30px" }}
                ></i>
                <button className="btn btn-outline-success text-dark" type="submit">
                  Login
                </button>
                <button className="btn btn-success" type="submit">
                  SignUp
                </button>
              </div>
            </div>
          </div>
          <div className="nav3">
            

            <ul className="d-flex gap-5 py-2 align-items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
