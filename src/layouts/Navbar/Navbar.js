import React from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          Home
        </li>

        <li className="navbar-item">
          About
        </li>

        <li className="navbar-item">
          Paypal/Patreon
        </li>

        <li className="navbar-item">
          Videos
        </li>

        <li className="navbar-item">
          Merch
        </li>

        <li className="navbar-item">
          <Link to="/submit_story">
            <button className="btn btn-primary">Submit a story</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
