import "./ThankYou.scss";

import { Link } from "react-router-dom";
import React from "react";
import avatar from "../../assets/sc png.png";
import bg from "../../assets/k2QwjE4G.jpg";

export default function ThankYou() {
  return (
    <div
      className="thanks-wrapper"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <h1 className="styled-title">Thanks For your story</h1>
      <Link to="/" className="back-link">
        &lt;&lt; Go Back Into The Forest
      </Link>
      <img src={avatar} alt="Canni Avatar" className="avatar" />
    </div>
  );
}
