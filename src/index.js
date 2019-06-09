import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SubmitStory from './sections/SubmitStory/SubmitStory';
import LogRocket from 'logrocket';
import ThankYou from './sections/ThankYou/ThankYou';
LogRocket.init('kstoxh/canni');
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/submit_story" component={SubmitStory} />
      <Route exact path="/thank_you" component={ThankYou} />
    </Switch>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
