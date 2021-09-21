/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import React from 'react';
import Headerlogo from './Logo';
import HeroImage from './page-header.jpg';

// Write styles of the component with css-in-js using emotion

const herocomponent = css`
  background-color: #fef8f0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: auto;
  padding: 24px 0px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;

  h1 {
    font-size: 3.75rem;
    line-height: 3.75rem;
    color: rgb(255, 255, 255);
    text-align: center;
    margin-bottom: 0;
  }

  p {
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    max-width: 768px;
    color: rgb(229, 231, 235);
    bottom: 230px;
  }
  span {
    color: rgb(255, 186, 107);
  }
`;

const content = css`
  background-image: url(${HeroImage});
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1216px;
  padding: 0px 32px;
  height: 800px;
`;

// Adding function component
function Hero() {
  return (
    <div css={herocomponent}>
      <div css={content}>
        <h1>
          The marketplace to buy and sell
          <span> Tailwind components</span>
        </h1>
        <p>
          Tailory is the marketplace to buy and sell pre-made, ready-to-use
          components for Tailwind CSS UI framework. Add some magic to your
          design in 30 seconds or less with a premium component from our
          marketplace.
        </p>
      </div>
    </div>
  );
}

export default Hero;
