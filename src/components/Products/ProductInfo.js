import React, { Component } from 'react'
import Feedback from './Feedback'

class ProductInfo extends Component {
  render() {
    
    const { params } = this.props
    return (
        <div className="fg1">
            <div className="row">
                <div className="col s12 right">
                    <div className="card center">
                        <div className="card-image col m6">
                            <img className="full-image" src={`https://smktesting.herokuapp.com/static/img${params.id}.png`} alt={params.title}/>                    
                        </div>
                        <div className="card-content">
                            <h3>{params.title}</h3>
                            <p>{params.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 m12">
                <Feedback id={params.id} isAuthorized={this.props.isAuthorized} />
            </div>
        </div>
    )
  }
}

export default ProductInfo