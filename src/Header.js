import './App.css';
import React from 'react';
import Headerlogo from './Logo';

function Header() {
  return (
    <div className="header">
      <div className="headercontent">
        <div className="logo">
          <a src="https://www.google.at">
            <Headerlogo />
          </a>
        </div>
        <nav className="navigationlinks">
          <a>Components</a>
          <a>UI Kits</a>
          <a>Sell on Tailory</a>
        </nav>

        <a href="https://www.google.at" class="buttonLink">
          <button className="button">Open marketplace</button>
        </a>
      </div>
    </div>
  );
}

export default Header;
