import React, { Component } from "react";
import ProductItem from "./productlist";
import { connect } from "react-redux";


class Productlisting extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products
    }
  }
  // filter this in between proudct and search keywords.
  

  render(){
     //this is to filter items 
    let filteredProducts = this.props.products;
    console.log('line 18 index',filteredProducts)
    if (this.props.search.searchTerm) {
      filteredProducts = filteredProducts.filter(
        (product) => {
          return product.name.toLowerCase().indexOf(
            this.props.search.searchTerm.toLowerCase()) !== -1;
        }
      )
    }
    return (
      <div className="product_list">
        {filteredProducts.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={this.props.addToCart}
            removeFromCart={this.props.removeFromCart}
            cartItem={this.props.cart.filter(cartItem => cartItem.id === product.id)[0]}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({
        type: "ADD",
        payload: item
      });
    },
    removeFromCart: item => {
      dispatch({
        type: "REMOVE",
        payload: item
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Productlisting);
