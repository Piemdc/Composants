
import './header/header.css';
import './footer/footer.css';
import './Home/home.css';
import './normalize.css';

import React, { useState } from 'react';
import { hasAuthenticated } from './services/AuthApi'
import { HashRouter, Route, Switch } from "react-router-dom";

import Header from './header/Header.js';
import Home from './Home/Home'
import log from './connexion/log'
import Account from './account/Account';
import CreateEvent from './events/CreateEvent';
import OneEvent from './events/OneEvent';

import Auth from './contexts/Auth';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnableToLogAgain from './components/UnableToLogAgain';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());



  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }} >
      <HashRouter>
        <div className="App">
          <Header />
          <Switch>
            <AuthenticatedRoute exact path="/" component={Home} />
            <AuthenticatedRoute exact path="/account" component={Account} />
            <AuthenticatedRoute exact path="/createevent" component={CreateEvent} />
            <AuthenticatedRoute exact path="/event/*" component={OneEvent} />
            <UnableToLogAgain exact path="/log" component={log} />
          </Switch>

        </div>
      </HashRouter>
    </Auth.Provider>
  );
}

export default App;
