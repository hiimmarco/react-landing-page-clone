/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import React from 'react';
import Cosmetics from './card-images/cosmetics.png';
import Couple from './card-images/couple.png';
import Fruits from './card-images/fruits.png';
import Cardcomponent from './Cardcomponent';

const cardcomponent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 128px;
  text-align: center;

  h2 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 0;
    max-width: 768px;
    padding: 0px 102px;
  }

  p {
    line-height: 1.625;
    font-size: 1rem;
    color: rgb(75, 85, 99);
    max-width: 768px;
  }
`;

const cards = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 2.5rem;
  width: 1216px;
`;

export default function Threecards() {
  return (
    <div css={cardcomponent}>
      <h2>Add magic to your site in 30 seconds</h2>
      <p>
        Tailory lets you buy pre-made TailwindCSS components that are
        beautifully designed and coded. You can customize the design or code
        yourself, saving up to 80% of development time.
      </p>
      <div css={cards}>
        <Cardcomponent
          source={Cosmetics}
          title="Browse for your perfect component"
          description="Search our library by category or keyword to find what you need - with beautiful previews!"
        />
        <Cardcomponent
          source={Fruits}
          title="Purchase the component"
          description="Buy the component you like from our marketplace and copy the code instantly without restrictions."
        />
        <Cardcomponent
          source={Couple}
          title="Use it anywhere, forever"
          description="The components are yours forever. No monthly fee or restrictions. Use it in as many projects as you want."
        />
      </div>
    </div>
  );
}
