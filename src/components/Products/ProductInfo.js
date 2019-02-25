import React, { Component } from 'react'
import LeaveFeedback from './LeaveFeedback'
import Feedback from './Feedback'

class ProductInfo extends Component {
  render() {
    
    const { params } = this.props
    return (
      <div>
        <h1>{params.title}</h1>
        <h2>{params.text}</h2>
        <img src={`http://smktesting.herokuapp.com/static/img${params.id}.png`} />
        <LeaveFeedback id={params.id}/>
        <Feedback id={params.id}/>
      </div>
    )
  }
}

export default ProductInfo