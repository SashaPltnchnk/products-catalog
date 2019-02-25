import React, { Component } from 'react'
import axios from 'axios'

class Feedback extends Component {
    state = {
        feedback: null
    }

    componentDidMount() {
        axios.get(`http://smktesting.herokuapp.com/api/reviews/${this.props.id}`)
        .then(res => {
            this.setState({ feedback: res.data })
        })
        .catch(err => console.log(err))
    }
  render() {
    return (
      <div>
        {
            this.state.feedback === null
            ? null
            : this.state.feedback.map(item => {
                return (
                    <div key={item.id}>
                        <div key={item.id}>{item.text}</div>
                        <div>{item.rate}</div>
                        <div>{item.created_by.username}</div>
                    </div>
                )
            })
        }
      </div>
    )
  }
}

export default Feedback