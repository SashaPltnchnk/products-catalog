import React, { Component } from 'react'
import axios from 'axios'
import LeaveFeedback from './LeaveFeedback'

class Feedback extends Component {
    state = {
        feedback: null
    }

    getComments = () => {
        axios.get(`https://smktesting.herokuapp.com/api/reviews/${this.props.id}`)
        .then(res => {
            this.setState({ feedback: res.data })
        })
        .catch(err => console.log(err))

    }

    componentDidMount() {
        this.getComments()
    }
  render() {
    return (
      <div>
        <LeaveFeedback isAuthorized={this.props.isAuthorized} getComments={this.getComments} id={this.props.id}/>
        <h3>Comments:</h3>
        {
            this.state.feedback === null
            ? null
            : this.state.feedback.reverse().map(item => {
                return (
                    <div className="feedback" key={item.id}>
                        <div><span className="purple-text">Rate: </span>{item.rate}</div>
                        <div><span className="purple-text">Comment: </span>{item.text}</div>
                        <div><span className="purple-text">Leaved by: </span>{item.created_by.username}</div>
                    </div>
                )
            })
        }
      </div>
    )
  }
}

export default Feedback