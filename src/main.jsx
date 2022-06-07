import "./index.scss";

import * as serviceWorker from "./serviceWorker";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import SubmitStory from "./sections/SubmitStory/SubmitStory";
import ThankYou from "./sections/ThankYou/ThankYou";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/submit_story" element={<SubmitStory />} />
      <Route exact path="/thank_you" element={<ThankYou />} />
    </Routes>
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
