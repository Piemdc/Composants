
import './header/header.css';
import './footer/footer.css';
import './Home/home.css';
import './normalize.css';
import Header from './header/Header.js';
import React, { useState } from 'react';
import Footer from './footer/Footer';
import Home from './Home/Home'
import log from './connexion/log'
import { hasAuthenticated } from './services/AuthApi'
import Auth from './contexts/Auth';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import { HashRouter, Route, Switch } from "react-router-dom";
import RegisterBox from './connexion/register/Register';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());


  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }} >
      <HashRouter>
        <div className="App">
          <Header />
          <Switch>
            <AuthenticatedRoute exact path="/" component={Home} />
            <Route exact path="/log" component={log} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    </Auth.Provider>
  );
}

export default App;
