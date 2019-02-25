import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Dashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
