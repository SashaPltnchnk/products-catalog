import React, { Component } from 'react'
import axios from 'axios'

class Auth extends Component {
     state = {
         username: '',
         password: ''
     }
     
     handleChange = (e) => {
       this.setState({ [e.target.name]: e.target.value })
     }

     handleClick = () => {
        axios.post(`http://smktesting.herokuapp.com/api/${this.props.authPath}/`, this.state)
        .then( (res) => {
            res.data.success
            ? localStorage.setItem('token', res.data.token) 
            : console.log('Something went wrong', res.data.message)
        })
        .catch(res => console.log(`Some shit happened${res}`))
     }

  render() {
      const { buttonName } = this.props
    return (
      <div>                         
        <h1>{buttonName}</h1>
        <input value={this.state.username} name="username" onChange={this.handleChange}/>
        <input value={this.state.password} name="password" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>{buttonName}</button>
      </div>
    )
  }
}

export default Auth