import React, { Component } from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'


class Navbar extends Component {

  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
          <div className="container">
              <Link to='/' className="brand-logo">Mr. Robot</Link>
              {
                  this.props.isAuthorized 
                  ? <SignedInLinks checkStateIsAuthed={this.props.checkStateIsAuthed} />
                  : <SignedOutLinks />
              }
          </div>
      </nav>
    )
  }
}

export default Navbar
