/* eslint-disable react/prefer-stateless-function */
import './App.css';
import './components/Calculator.css';
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  render() {
    return (
      <div className="Calculator">
        <Calculator />
      </div>
    );
  }
}

export default App;
