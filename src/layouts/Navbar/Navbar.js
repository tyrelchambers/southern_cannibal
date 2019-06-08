import React from 'react'
import './Navbar.scss';
import { Link, animateScroll as scroll } from "react-scroll";


export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            spy={true}
            activeClass="active" 
            to="home"
            smooth={true}
          >
            Home
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            spy={true}
            activeClass="active" 
            to="about"
            smooth={true}
            offset={-120}
          >
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            spy={true}
            activeClass="active" 
            to="paypal"
            smooth={true}
            offset={-120}
          >
            Paypal/Patreon
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            spy={true}
            activeClass="active" 
            to="videos"
            smooth={true}
            offset={-70}
          >
            Videos
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            spy={true}
            activeClass="active" 
            to="merch"
            smooth={true}
          >
            Merch
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            spy={true} to="/submit_story">
            <button className="btn btn-primary">Submit a story</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
