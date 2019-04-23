import React, { Component } from "react";
import ProductItem from "./productlist";
import { connect } from "react-redux";


class Productlisting extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products,
      search: ''
    }
  }
  // filter this in between proudct and search keywords.
  componentDidMount(props){
    this.props.search.searchTerm = ''

  }

  // if(this.state.search.searchTerm){
  //   filteredProducts = filteredProducts.filter(
  //     (product) => {
  //       return product.name.toLowerCase().indexOf(
  //         props.search.searchTerm.toLowerCase()) !== -1;
  //         }
  //       )
  // }
  render(){
    let filteredProducts = this.props.products
    return (
      // filteredContacts
      
      // <div className="product_list">
      //        {this.props.products.map(product =>      
      //   <li>{product.id} {product.name} ${product.price} {product.description}</li>
      //        )}
      <div className="product_list">
        {this.props.products.map(product => (
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
