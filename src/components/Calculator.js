/* eslint-disable react/prefer-stateless-function */

import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className="calc-container">
          <button type="submit" className="num top-operator">AC</button>
          <button type="submit" className="num top-operator">&plusmn;</button>
          <button type="submit" className="num top-operator">%</button>
          <button type="submit" className="num operator">&divide;</button>
          <button type="submit" className="num">7</button>
          <button type="submit" className="num">8</button>
          <button type="submit" className="num">9</button>
          <button type="submit" className="num operator">&times;</button>
          <button type="submit" className="num">4</button>
          <button type="submit" className="num">5</button>
          <button type="submit" className="num">6</button>
          <button type="submit" className="num operator">-</button>
          <button type="submit" className="num">1</button>
          <button type="submit" className="num">2</button>
          <button type="submit" className="num">3</button>
          <button type="submit" className="num operator">+</button>
          <button type="submit" className="zero">0</button>
          <button type="submit" className="num">.</button>
          <button type="submit" className="num operator">=</button>
        </div>
      </>
    );
  }
}

export default Calculator;
