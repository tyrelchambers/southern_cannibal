import React from 'react'
import './SupportChannel.scss';
import patreonImg from '../../assets/Patreon_Mark_Coral.jpg';
import discordImg from '../../assets/discord.svg';

export default function SupportChannel() {
  return (
    <div className="support-section bg-light" id="paypal">
      <div className="container">
        <h1 className="styled-title section">support the channel</h1>
        <p className="sub-text">If you like what I do, consider donating to my PayPal or joining my Patreon. Everything goes to help me do what I love, and do it better every time.</p>

        <ul className="support-list">
          <li className="support-item" id="paypal">
            <a href="https://www.paypal.me/southerncannibal">
              <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_200x51.png" alt="PayPal" />
            </a>
          </li>

          <li className="support-item" id="patreon">
            <a href="http://patreon.com/SouthernCannibal">
              <img src={patreonImg} alt="Patreon logo"/>
            </a> 
          </li>
        </ul>

        <div className="discord-section">
          <h1 className="styled-title section">Join my discord</h1>
          <a href="https://discord.gg/k9pg3mg">
            <img src={discordImg} alt="Discord logo"/>
          </a>
        </div>
      </div>
    </div>
  )
}
