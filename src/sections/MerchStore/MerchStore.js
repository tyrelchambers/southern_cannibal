import React from 'react'
import './MerchStore.scss';

export default function MerchStore() {
  return (
    <div className="merch-store-section bg-light">
      <div className="container">
        <h1 className="styled-title section">Check out my merch!</h1>
        
        <div className="merch-cta">
          <a href="https://teespring.com/stores/southern-cannibal-merch">
            <p className="sub-text">
              Support the channel by buying some merch!
            </p>
              
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
