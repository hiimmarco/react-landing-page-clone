/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import React from 'react';
import Headerlogo from './Logo';

// Write styles of the component with css-in-js using emotion

const header = css`
  background-color: #fef8f0;
  height: 88px;
  width: 100vw;
`;

const headercontent = css`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1216px;
  padding: 24px 32px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
`;

const button = css`
  display: flex;
  justify-content: center;
  color: rgb(184, 98, 0);
  background-color: rgb(255, 226, 194);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.25rem;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;

  :hover {
    transform: scale(1.05) perspective(1px);
    transition-duration: 100ms;
  }
`;

function Header() {
  return (
    <div css={header}>
      <div css={headercontent}>
        <div>
          <Headerlogo />
        </div>
        <nav className="nav">
          <a className="navelement">Components</a>
          <a className="navelement">UI Kits</a>
          <a className="navelement">Sell on Tailory</a>
        </nav>

        <a href="https://www.google.at" class="buttonLink">
          <button css={button}>Open marketplace</button>
        </a>
      </div>
    </div>
  );
}

export default Header;