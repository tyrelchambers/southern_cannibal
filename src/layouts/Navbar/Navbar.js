import React, { useState } from 'react'
import './Navbar.scss';
import { Link, animateScroll as scroll } from "react-scroll";


export default function Navbar() {
  const [ extended, setExtended ] = useState(false);
  return (
    <nav className="navbar">
      <div className="mobile-toggle"
        onClick={() => setExtended(!extended)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <ul className={`navbar-list navbar-list-mobile ${extended ? "extended" : ""}`}>
        <li className="navbar-item">
          <Link
            onClick={() => setExtended(false)}
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
            onClick={() => setExtended(false)}
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
            onClick={() => setExtended(false)}
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
            onClick={() => setExtended(false)}
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
            onClick={() => setExtended(false)}
            spy={true}
            activeClass="active" 
            to="merch"
            smooth={true}
          >
            Merch
          </Link>
        </li>

        <li className="navbar-item">
          <a
            href="/submit_story">
            <button className="btn btn-primary">Submit a story</button>
          </a>
        </li>
      </ul>
    </nav>
  )
}
