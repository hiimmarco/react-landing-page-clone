/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import React from 'react';
import Cosmetics from './card-images/cosmetics.png';
import Couple from './card-images/couple.png';
import Fruits from './card-images/fruits.png';

const card = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 362px;
  height: 314px;

  img {
    height: 214px;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 0px;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export default function Cardcomponent(props) {
  return (
    <div css={card}>
      <img alt="Placeholder" src={props.source} />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}
