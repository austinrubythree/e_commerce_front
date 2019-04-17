import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductItem from "./productlist";
import { connect } from "react-redux";

function Productlisting(props) {

  // filter this in between proudct and search keywords.
  let filteredProducts = props.products;
  if(props.search.searchTerm){
    filteredProducts = filteredProducts.filter(
      (product) => {
        return product.name.toLowerCase().indexOf(
          props.search.searchTerm.toLowerCase()) !== -1;
          }
        )
  }
  return (
    // filteredContacts
    <div className="product_list">
      {filteredProducts.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
        />
      ))}
    </div>
  );
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
