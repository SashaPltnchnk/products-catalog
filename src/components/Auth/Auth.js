import React, { Component } from 'react'
import axios from 'axios'

class Auth extends Component {
     state = {
         username: '',
         password: '',
         error: null
     }
     
     handleChange = (e) => {
       this.setState({ [e.target.id]: e.target.value })
     }

     handleClick = () => {
        const { username, password } = this.state
        axios.post(`http://smktesting.herokuapp.com/api/${this.props.authPath}/`, { username, password })
        .then( (res) => {
            if(res.data.success) {
                localStorage.setItem('token', res.data.token)
                this.props.history.push('/')
                // debugger
                this.props.checkStateIsAuthed()
            } else {
                this.setState({ error: res.data.message })
            }
            
        })
        .catch(res => console.log(`Something went wrong${res}`))
     }

     handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    
  render() {
      const { buttonName } = this.props
    return (
      <div className="container">   
          {
              this.state.error
              ? <h4 className="red-text">!!! {this.state.error} </h4>
              : null
          }    
        <form onSubmit={this.handleSubmit} className="white">
            <h3 className="grey-text text-darken-3">{buttonName}</h3>
            <div className="input-field">
                <label htmlFor="username">Username</label>
                <input value={this.state.username} type="text" id="username" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input value={this.state.password} type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button  className="btn purple darken-3" onClick={this.handleClick}>{buttonName}</button>
            </div>
        </form>                  
      </div>
    )
  }
}

export default Auth