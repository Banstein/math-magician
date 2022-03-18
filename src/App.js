/* eslint-disable react/prefer-stateless-function */
import './App.css';
import './components/Calculator.css';
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}

export default App;
