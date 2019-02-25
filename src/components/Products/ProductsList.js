import React, { Component } from 'react'
import axios from 'axios'
import ProductInfo from './ProductInfo';

class ProductsList extends Component {
    state = {
        data: null,
        activeProduct: null
    }

    showCatalog = () => {
        axios.get(`https://smktesting.herokuapp.com/api/products/`)
        .then( (res) => {
           this.setState({data: res.data}) })
        .catch(res => console.log(`Something went wrong${res}`))
    }

    showProductInfo = (id) => {
        this.setState({ activeProduct: id})
    }

  render() {
      const {data} = this.state
    return (
        <div className="section d-flex">
            <div className="d-flex space-between fdc">
                <button className="btn purple darken-1" onClick={this.showCatalog}>Open catalog</button>
                {/*  */}
                {
                    !this.state.data 
                    ? <div className="preloader-wrapper active">
                        <div className="spinner-layer spinner-green">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                      </div>
                    : data.map(item => (
                        <button className="btn purple lighten-2" onClick={() => this.showProductInfo(item.id)} key={item.id}>{item.title}</button>
                    ))
                }
            </div>
                {
                    this.state.activeProduct == null
                    ? null
                    : <ProductInfo 
                        isAuthorized={this.props.isAuthorized}
                        params={this.state.data.find(item => item.id === this.state.activeProduct)}
                        />
                    
                }
      </div>
    )
  }
}

export default ProductsList