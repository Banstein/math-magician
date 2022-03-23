import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const handleClick = (e) => {
    const { total, next, operation } = calculate(state, e.target.textContent);
    if (next === null && total === null) {
      setState({ next, total: 0, operation });
    } else {
      setState({ next, total, operation });
    }
  };
  return (
    <div className="calc">
      <h2>Lets do some math!</h2>
      <div className="calc-container">
        <div className="calc-input">
          {state.total}
          {state.operation}
          {state.next}
        </div>
        <button type="submit" onClick={handleClick} className="num top-operator">AC</button>
        <button type="submit" onClick={handleClick} className="num top-operator">+/-</button>
        <button type="submit" onClick={handleClick} className="num top-operator">%</button>
        <button type="submit" onClick={handleClick} className="num operator">÷</button>
        <button type="submit" onClick={handleClick} className="num">7</button>
        <button type="submit" onClick={handleClick} className="num">8</button>
        <button type="submit" onClick={handleClick} className="num">9</button>
        <button type="submit" onClick={handleClick} className="num operator">x</button>
        <button type="submit" onClick={handleClick} className="num">4</button>
        <button type="submit" onClick={handleClick} className="num">5</button>
        <button type="submit" onClick={handleClick} className="num">6</button>
        <button type="submit" onClick={handleClick} className="num operator">-</button>
        <button type="submit" onClick={handleClick} className="num">1</button>
        <button type="submit" onClick={handleClick} className="num">2</button>
        <button type="submit" onClick={handleClick} className="num">3</button>
        <button type="submit" onClick={handleClick} className="num operator">+</button>
        <button type="submit" onClick={handleClick} className="zero">0</button>
        <button type="submit" onClick={handleClick} className="num">.</button>
        <button type="submit" onClick={handleClick} className="num operator">=</button>
      </div>
    </div>
  );
};

export default Calculator;
