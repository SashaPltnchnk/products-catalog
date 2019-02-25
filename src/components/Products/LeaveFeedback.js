import React, { Component } from 'react'
import axios from 'axios'


class LeaveFeedback extends Component {
    state = {
        rate: 0,
        text: '',
    }

    leaveComment = () => {
      axios.defaults.headers.common = { Authorization: `Token ${localStorage.getItem('token')}`}    
      axios.post(`https://smktesting.herokuapp.com/api/reviews/${this.props.id}`, this.state)
        .then(res => {
            console.log(`Success, ${res}`)
            this.props.getComments()
            this.setState({ rate: 0, text: ''})
        })
        .catch(err => console.log(`Something went wrong${err}`))
    }

    

    handleChange = (e) => {
      this.setState({ text: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

  render() {
    return (
      <div>
        <h3>Leave a comment:</h3>
        {
          !this.props.isAuthorized 
          ? <span className="red-text">You have to registate or to log in to have a possibility of leaving comments</span>
          : <div>
                <span>Rate: </span>
                {
                    new Array(5).fill(0).map((item, index) => {
                        return (
                        <button className={`btn purple lighten-3 waves-effect waves-purple rate-button ${this.state.rate === index + 1 ? 'active' : ''}`} key={index} onClick={() => this.setState({ rate: index+1})}>{index+1}</button>
                        )
                    })
                }
                <form onSubmit={this.handleSubmit}>    
                    <div className="input-field">
                        <textarea  id="textarea1" className="materialize-textarea" name="text" value={this.state.text} onChange={this.handleChange}></textarea>
                        <label htmlFor="textarea1">Write your comment</label>
                    </div>
                    <button className="btn purple accent-4" onClick={this.leaveComment}>Leave a comment</button> 
                </form>
            </div> 
      
        }
      </div>
    )
  }
}

export default LeaveFeedback