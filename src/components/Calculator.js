import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const buttons = e.target.textContent;
    const { total, next, operation } = calculate(this.state, buttons);
    if (next === null && total === null) {
      this.setState({ next, total: 0, operation });
    } else {
      this.setState({ next, total, operation });
    }
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <>
        <div className="calc-container">
          <div className="calc-input">
            {total}
            {operation}
            {next}
          </div>
          <button type="submit" onClick={this.handleClick} className="num top-operator">AC</button>
          <button type="submit" onClick={this.handleClick} className="num top-operator">+/-</button>
          <button type="submit" onClick={this.handleClick} className="num top-operator">%</button>
          <button type="submit" onClick={this.handleClick} className="num operator">÷</button>
          <button type="submit" onClick={this.handleClick} className="num">7</button>
          <button type="submit" onClick={this.handleClick} className="num">8</button>
          <button type="submit" onClick={this.handleClick} className="num">9</button>
          <button type="submit" onClick={this.handleClick} className="num operator">x</button>
          <button type="submit" onClick={this.handleClick} className="num">4</button>
          <button type="submit" onClick={this.handleClick} className="num">5</button>
          <button type="submit" onClick={this.handleClick} className="num">6</button>
          <button type="submit" onClick={this.handleClick} className="num operator">-</button>
          <button type="submit" onClick={this.handleClick} className="num">1</button>
          <button type="submit" onClick={this.handleClick} className="num">2</button>
          <button type="submit" onClick={this.handleClick} className="num">3</button>
          <button type="submit" onClick={this.handleClick} className="num operator">+</button>
          <button type="submit" onClick={this.handleClick} className="zero">0</button>
          <button type="submit" onClick={this.handleClick} className="num">.</button>
          <button type="submit" onClick={this.handleClick} className="num operator">=</button>
        </div>
      </>
    );
  }
}

export default Calculator;
