
import './header/header.css';
import './footer/footer.css';
import './Home/home.css';
import './normalize.css';
import Header from './header/Header.js';
import React from 'react';
import Footer from './footer/Footer';
import Home from './Home/Home'
import Signinup from './connexion/log'


function App() {


  return (
    <div className="App">
      <Header />

      <Signinup />
      <Footer />
    </div>
  );
}

export default App;
