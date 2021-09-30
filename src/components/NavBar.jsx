/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/inicio">
      <a className="navbar-brand" href="#">
        JWT Register
      </a>
      {' '}
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Link to="/login">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          {' '}
        </Link>
        <Link to="/register">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Register
            </a>
          </li>
          {' '}
        </Link>
        <Link to="/user">
          <li className="nav-item">
            <a className="nav-link" href="#">
              User
            </a>
          </li>
          {' '}
        </Link>
        <Link to="/refresh">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Refresh
            </a>
          </li>
          {' '}
        </Link>
      </ul>
    </div>
  </nav>
);

export default NavBar;
