import React, { Component } from 'react'
import axios from 'axios'
import ProductInfo from './ProductInfo';

class ProductsList extends Component {
    state = {
        data: null,
        activeProduct: null
    }

    showCatalog = () => {
        axios.get(`http://smktesting.herokuapp.com/api/products/`)
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
      <div>
        <button onClick={this.showCatalog}>Open catalog</button>
        {
            !this.state.data 
            ? <span>You have nothing</span>
            : data.map(item => (
                <button onClick={() => this.showProductInfo(item.id)} key={item.id}>{item.title}</button>
            ))
        }
        {
            this.state.activeProduct == null
            ? null
            : <ProductInfo 
                params={this.state.data.find(item => item.id === this.state.activeProduct)}
                />
            
        }
      </div>
    )
  }
}

export default ProductsList