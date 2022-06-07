import "./Socials.scss";

import React from "react";

export default function Socials() {
  return (
    <ul className="social-list">
      <li className="social-item">
        <a href="https://www.youtube.com/southerncannibal">
          <i className="fab fa-youtube"></i>
        </a>
      </li>

      <li className="social-item">
        <a href="https://instagram.com/Southern_Canni/">
          <i className="fab fa-instagram"></i>
        </a>
      </li>

      <li className="social-item">
        <a href="https://twitter.com/Southern_Canni">
          <i className="fab fa-twitter"></i>
        </a>
      </li>

      <li className="social-item">
        <a href="https://open.spotify.com/show/3zfschBzphkHhhpV870gFW?si=a5420efd7f1049f1">
          <i className="fab fa-spotify"></i>
        </a>
      </li>
    </ul>
  );
}
