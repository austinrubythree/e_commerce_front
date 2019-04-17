import React, {Component} from 'react'
import axios from 'axios';
import ProductListing from '../features/productList'

import data from '../database/products.json'

class Homepage extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    axios.get('http://localhost:3001/api/products')
    .then(response => {
      console.log(response)
      this.setState({
        lists:response.data
      })
    })
    .catch(error => console.log(error))
  }
  render(){
    return (<div>
      <h2 style={{textAlign:"left"}}>Welcome!</h2>
      <ProductListing  products={data.products} />
  </div>)
  }
    
}

export default Homepage;