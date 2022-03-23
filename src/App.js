/* eslint-disable react/prefer-stateless-function */
import './App.css';
import './components/Nav.css';
import './components/Home.css';
import './components/Calculator.css';
import './components/Quote.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
