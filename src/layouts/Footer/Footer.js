import React from 'react'
import './Footer.scss';
import Socials from '../Socials/Socials';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="styled-title section">Want to submit a story?</h1>
      <Link to="/submit_story">
        <button className="btn btn-primary">Submit a story</button>
      </Link>
      <h1 className="styled-title phrase">remember to... stay hungry</h1>
      <Socials />
    </footer>
  )
}
