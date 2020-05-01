import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Room from "./pages/Room";
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <Route path="/" component={App} />
    <div
      style={{
        paddingLeft: "50px",
        paddingRight: "50px"
      }}
    >
      <Route path="/room/:id" component={Room} />
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
