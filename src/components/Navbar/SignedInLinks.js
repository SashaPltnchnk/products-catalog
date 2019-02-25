import React, { Component } from 'react'

class SignedInLinks extends Component {
    logOut = () => {
        localStorage.clear()
        this.props.checkStateIsAuthed()
    }


  render() {
    return (
      <div>
        <ul className="right">
          <button className="btn purple darken-3" onClick={this.logOut}>Log Out</button>
        </ul>
      </div>
    )
  }
}


export default SignedInLinks