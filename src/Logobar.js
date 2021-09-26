/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import React from 'react';
import adspresso from './logos/adspresso.png';
import crazyegg from './logos/crazyegg.png';
import cxl from './logos/cxl.png';
import producthunt from './logos/producthunt.png';
import techcrunch from './logos/techcrunch.png';

const logobarStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;

  h3 {
    color: rgb(107, 114, 128);
    text-transform: uppercase;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const logos = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 1216px;
  flex: 1;
  flex-wrap: wrap;
  align-self: center;

  img {
    height: 32px;
    width: auto;
    filter: grayscale(100%);
  }
`;

export default function Logobar() {
  return (
    <div css={logobarStyles}>
      <h3>trusted by amazing companies</h3>
      <div css={logos}>
        <div>
          <img src={techcrunch} alt="Techcrunch Logo" />
        </div>
        <img src={producthunt} alt="Producthunt Logo" />
        <img src={adspresso} alt="Adspresso Logo" />
        <img src={cxl} alt="Cxl Logo" />
        <img src={crazyegg} alt="crazyegg Logo" />
      </div>
    </div>
  );
}
