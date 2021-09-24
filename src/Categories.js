/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import celebration from './card-images/celebration.jpeg';
import pricing from './card-images/pricing.jpeg';
import signup from './card-images/signup.jpeg';
import Categoriecard from './Categoriecard';

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

export default function Categories() {
  return (
    <div css={cardcomponent}>
      <h2>All the components you need</h2>
      <p>
        Building a Tailwind app from scratch is hard. Trying to find the right
        component that works can be even harder. That's why we created Tailory,
        the first marketplace for Tailwind components. Buy and sell from other
        developers with just one click and speed up your development time.
      </p>
      <div css={cards}>
        <Categoriecard
          source={pricing}
          title="Pricing components"
          description="The pricing components shows all the different options your product offers to customers."
        />
        <Categoriecard
          source={celebration}
          title="Feature components"
          description="The features component lists your product offering and explains to the user how they can benefit from using it."
        />
        <Categoriecard
          source={signup}
          title="Signup components"
          description="The signup component lets users create an account. Sometimes it also highlights why someone should signup."
        />
      </div>
    </div>
  );
}
