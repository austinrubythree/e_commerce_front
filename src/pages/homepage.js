import React, {Component} from 'react'
import axios from 'axios';
import ProductListing from '../features/productList'

// import data from '../database/products.json'

class Homepage extends Component{
  constructor(props){
    super(props);

    this.state = {
      products: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/products')
    .then(res => {
      console.log('response from 3001 localhost',res.data)
      const products = res.data;
      this.setState({
        products
      })
    })
    .catch(error => console.log(error))
  }
  render(){
    
    return (<div>
      <h2 style={{textAlign:"left"}}>Welcome!</h2>
      {/* <ProductListing  products={data.locations} /> */}
      
          
        <ProductListing products = { this.state.products } />
        
        
        
      
 
  </div>)
  }
    
}

export default Homepage;