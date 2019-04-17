import React from 'react';
import { Button } from 'react-bootstrap';

export default function RemoveButton(props){
    
    return <Button
        bsStyle = "danger"
        onClick = { ()=> props.removeFromCart(props.cartItem)}
        >Remove</Button>
}