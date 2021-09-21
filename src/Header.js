import './App.css';
import React from 'react';
import Headerlogo from './Logo';

function Header() {
  return (
    <div className="header">
      <div className="headercontent">
        <div>
          <Headerlogo />
        </div>
        <nav className="nav">
          <a className="navelement">Components</a>
          <a className="navelement">UI Kits</a>
          <a className="navelement">Sell on Tailory</a>
        </nav>

        <a href="https://www.google.at" class="buttonLink">
          <button className="button">Open marketplace</button>
        </a>
      </div>
    </div>
  );
}

export default Header;
