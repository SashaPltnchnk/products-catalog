import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Auth from '../Auth/Auth'

class SignedOutLinks extends Component {
  render() {
    return (
      <div>
        <Link to ='/login' >Log In</Link>
        <Link to ='/register' >Register</Link>


        
        <Route path='/login' render={() => <Auth buttonName={'Log In'} authPath={'login'}/>} />
        <Route path='/register' render={() => <Auth buttonName={'Register'} authPath={'register'}/>} />
      </div>
    )
  }
}

export default SignedOutLinks
