import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import ShoppingCart from '../features/shoppingCart'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap';


class Cartpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

componentDidMount(props) {
    this.props.search.searchTerm = ''
    console.log(this.props.search)

}

calculateCartTotal(){
    let total = 0;
    const cart = this.props.cart
    for(var i =0; i<cart.length; i++){
        total = total +(cart[i].price * cart[i].quantity)
    }
    return total.toFixed(2)
}
getTax(){
    let subtotal = this.calculateCartTotal()
    return (subtotal * 0.0925).toFixed(2)
}

getTotal(){
    let tax = this.getTax()
    let subtotal = this.calculateCartTotal()
    console.log(tax, subtotal)
    let total = parseFloat(tax) + parseFloat(subtotal)
    console.log(total)
    return (total).toFixed(2)
}


render (){
    console.log(this.props.search)
    return <Grid>
            <h2 style={{textAlign:"left"}}>Cart</h2>
        <Row className="show-grid">
    <Col md={8} style={{paddingRight:'1px'}}>
    <ShoppingCart />`
    </Col>

    <Col md={4} style={{paddingLeft:'1px'}}>
    <div class='price'>
    <ul style={{padding:"30px"}}>
    
    <h4>Subtotal: ${this.calculateCartTotal()}</h4>
    <h4>Tax: ${ this.getTax()} </h4>
    <h6>zip code: 95050</h6>
    <h3>Total: ${this.getTotal()}</h3>
    <li><NavLink to='/checkout'>Proceed to checkout</NavLink></li>
    </ul>
    </div>
    </Col>
    </Row>
</Grid>
}
}


function mapStateToProps(state){
    return {
        cart: state.cart,
        search: state.search
    }
}

// tax calculation + shipping calculate
// auto complete address by google map API

export default connect(mapStateToProps)(Cartpage);