import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Auth from '../Auth/Auth'

class SignedOutLinks extends Component {
  render() {
    return (
      <div className="right">
        <button className="btn purple darken-3"><Link to ='/login' >Log In</Link></button>
        <button className="btn purple darken-3"><Link to ='/register' >Register</Link></button>
      </div>
    )
  }
}

export default SignedOutLinks
