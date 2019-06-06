import React from 'react'
import './Socials.scss';

export default function Socials() {
  return (
    <ul className="social-list">
      <li className="social-item">
        <a href="https://www.youtube.com/southerncannibal">
          <i className="fab fa-youtube"></i>
        </a>
      </li>
      <li className="social-item" id="snapchat">
        <i className="fab fa-snapchat-ghost"></i>
        <p>southerncanny</p>
      </li>

      <li className="social-item">
        <a href="https://instagram.com/Southern_Canni/">
          <i className="fab fa-instagram"></i>
        </a>
      </li>

      <li className="social-item">
        <a href="https://teespring.com/stores/southern-cannibal-merch">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </li>

      <li className="social-item">
        <a href="https://www.reddit.com/r/SouthernCannibal/">
          <i className="fab fa-reddit"></i>
        </a>
      </li>

      <li className="social-item">
        <a href="http://patreon.com/SouthernCannibal">
          <i className="fab fa-patreon"></i>  
        </a>
      </li>

      <li className="social-item">
        <a href="https://www.paypal.me/southerncannibal">
          <i className="fab fa-paypal"></i>
        </a>
      </li>

      <li className="social-item">
        <a href="https://discord.gg/k9pg3mg">
          <i className="fab fa-discord"></i>
        </a>
      </li>
    </ul>
  )
}
