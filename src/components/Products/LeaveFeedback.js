import React, { Component } from 'react'
import axios from 'axios'

const isAuthorized = () => {
    return !!localStorage.getItem('token')
}

class GiveFeedback extends Component {
    state = {
        rate: '',
        text: '',
        isAuthorized: isAuthorized()
    }

    leaveComment = () => {
      axios.defaults.headers.common = { Authorization: `Token ${localStorage.getItem('token')}`}    
      axios.post(`http://smktesting.herokuapp.com/api/reviews/${this.props.id}`, this.state)
        .then(res => console.log(`Success, ${res}`))
        .catch(err => console.log(`Something went wrong${err}`))
    }

    

    handleChange = (e) => {
      this.setState({ text: e.target.value })
    }

  render() {
    return (
      <div>
        <h2>Leave a comment</h2>
        {
          !this.state.isAuthorized 
          ? <span>You have to registate or log in to have a possibility of leaving comments</span>
          : <div>
              {
                new Array(5).fill(0).map((item, index) => {
                    return (
                    <button key={index} onClick={() => this.setState({ rate: index+1})}>{index+1}</button>
                    )
                })
              }
            <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
            <button onClick={this.leaveComment}>Leave a comment</button>
            </div> 
      
        }
      </div>
    )
  }
}

export default GiveFeedback