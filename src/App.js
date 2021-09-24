import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import breakerbanner from './card-images/breaker-banner.png';
import Categories from './Categories.js';
import Header from './Header';
import Hero from './Hero';
import Logobar from './Logobar';
import Threecards from './Three-cards';

const breaker = css`
  margin-top: 8rem;
  max-height: 306px;
`;

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Logobar />
      <Threecards />
      <img src={breakerbanner} alt="Breakder" css={breaker} />
      <Categories />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
