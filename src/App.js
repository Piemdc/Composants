
import './header.css';
import './footer.css';
import './home/home.css';
import './normalize.css';
import Header from './Header.js';
import React from 'react';
import Footer from './Footer';
import Home from './Home/Home'


function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
