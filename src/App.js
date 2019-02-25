import React, { Component } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import { isAuthorized } from './components/Auth/isAuth'

class App extends Component {
  state = {
    isAuthorized: isAuthorized()
  }

  checkStateIsAuthed = () => {
    this.setState({ isAuthorized: isAuthorized() })
    console.log(isAuthorized());
    
  }

  render() {
    // debugger
    return (
      <BrowserRouter>
        <div>
          <Navbar isAuthorized={this.state.isAuthorized} checkStateIsAuthed={this.checkStateIsAuthed} />
          <Dashboard isAuthorized={this.state.isAuthorized} checkStateIsAuthed={this.checkStateIsAuthed} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
