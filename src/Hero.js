/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import React from 'react';
import Inter from './fonts/Inter-Regular.ttf';
import HeroImage from './page-header.jpg';

// Write styles of the component with css-in-js using emotion

const herocomponent = css`
  background-color: #fef8f0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 0px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  font-family: 'Inter' sans-serif;
`;

const content = css`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${HeroImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1216px;
  height: 598px;
  padding: 0px 32px;
  border-radius: 16px;

  h1 {
    font-size: 3.75rem;
    line-height: 3.75rem;
    color: rgb(255, 255, 255);
    text-align: center;
    margin-bottom: 0;
    padding: 0px 100px;
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
  margin-left: 1rem;
  cursor: pointer;

  :hover {
    transform: scale(1.05) perspective(1px);
    transition-duration: 100ms;
    background-color: rgb(255, 207, 153);
  }
`;

const searchbar = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  input {
    border: 2px solid;
    border-radius: 30px;
    width: 469px;
    padding: 12px 48px 12px 16px;
    background-color: rgb(229, 231, 235);
    color: rgb(17, 24, 39);
    font-size: 1rem;
  }

  span {
    font-size: 0.75rem;
    line-height: 1rem;
    margin-left: 1rem;
    color: rgb(229, 231, 235);
    text-transform: uppercase;
  }
`;

const list = css`
  display: flex;
  flex-direction: row;
  color: white;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
  }

  span {
    color: white;
    opacity: 0.6;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: bold;
    margin-right: 12px;
  }

  li {
    margin-right: 12px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: bold;
  }
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
        <div css={searchbar}>
          <input placeholder="Search components like 'pricing' or 'gradients'"></input>
          <p>
            <span>or</span>
          </p>
          <button css={button}>Browse collection</button>
        </div>
        <div css={list}>
          <ul>
            <span>Trending:</span>
            <li>
              <a href="https://wwww.google.at">Gradient,</a>
            </li>
            <li>
              <a href="https://wwww.google.at">Pricing,</a>
            </li>
            <li>
              <a href="https://wwww.google.at">Four columns,</a>
            </li>
            <li>
              <a href="https://wwww.google.at">Hero</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
