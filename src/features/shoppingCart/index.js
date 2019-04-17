import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap' 

const sort = (items) => {
    return items.sort((a,b) => a.id < b.id)
}


function Cart (props) {
    console.log(props.cart)
    const hasProducts = props.cart.length > 0
    return <div class='wanted'>
    <table style={{padding:"15px"}}>
        <thead>
            <tr>
                <td></td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td></td>
                
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {   
                hasProducts ? (
                sort(props.cart).map( (item, index) => 
                <tr key={index} style={{borderBottom: '1px solid lightGrey'}}>
                    <td>
                        <img 
                            height = { 100 }
                            title = {item.name}
                            src = {`/products/${item.image[0]}`}
                    />
                    </td>
                    
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    
                    <td style={{textAlign:"center"}}><h4>{item.quantity}</h4></td>    
                    <td>
                        <Button 
                        bsStyle="primary" 
                        style={{margin:"0"}}
                        onClick={ (e) => props.addToCart(item)}>+</Button>
                        
                        <Button 
                        bsStyle="danger" 
                        style={{margin:"0"}}
                        onClick={ (e) => props.removeFromCart(item)}>_</Button>
                    </td>

                    

                    <td>
                        <Button 
                            bsStyle="warning"
                            style={{margin:"0"}}
                            onClick={ (e)=> props.removeAllFromCart(item)}
                            >Remove all </Button>
                        
                    </td>
                    <hr/>
                </tr>
                )
                ) :
            <h5 style={{ color: 'red'}}><em>Please add some products to the cart</em></h5>
            }
            
            
        </tbody>
        
    </table>
    </div>
}

function mapStateToProps(state){
    return {
        
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (item) => {
            dispatch( {
                type: 'ADD',
                payload: item
            })
        },
        removeFromCart: (item) => {
            dispatch({
                type: 'REMOVE',
                payload: item
            })
        },
        removeAllFromCart: (item) => {
            dispatch ({
                type: 'REMOVE_ALL',
                payload: item
            })
        },
        updateSearchTerm: (item) => {
            dispatch ({
                type: 'UPDATE_SEARCH',
                payload: item
            })
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)