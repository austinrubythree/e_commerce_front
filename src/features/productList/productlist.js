import React from "react";
import AddBtn from "./add_Button";
import RemoveBtn from "./remove_Button";



export default function ProductItem(props) {
  return (
    <div className="product_item">
      <ul>
        <li>{props.product.name}</li>
        <img
          height={150}
          title={props.product.name}
          src={`/products/${props.product.image[1]}`}
        />
      <li>${props.product.price}</li>
      </ul>

      <AddBtn
        cartItem={props.cartItem}
        product={props.product}
        addToCart={props.addToCart}
      />
      {props.cartItem ? (
        <RemoveBtn
          cartItem={props.cartItem}
          product={props.product}
          removeFromCart={props.removeFromCart}
        />
      ) : null}
    </div>
  );
}
