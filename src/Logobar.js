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
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  h3 {
    color: rgb(107, 114, 128);
    text-transform: uppercase;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
  }
`;

export default function Logobar() {
  return (
    <div css={logobarStyles}>
      <h3>trusted by amazing companies</h3>
      <div className="logobar">
        <img src={techcrunch} alt="Techcrunch Logo" />
        <img src={producthunt} alt="Producthunt Logo" />
        <img src={adspresso} alt="Adspresso Logo" />
        <img src={cxl} alt="Cxl Logo" />
        <img src={crazyegg} alt="crazyegg Logo" />
      </div>
    </div>
  );
}
