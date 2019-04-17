import React from "react";
import { Button } from 'react-bootstrap';

export default function AddButton(props) {
  return (
    <Button bsStyle="primary" onClick={() => props.addToCart(props.product)}>
      {" "}
      Add to cart ({(props.cartItem && props.cartItem.quantity) || 0}){" "}
    </Button>
  );
}
