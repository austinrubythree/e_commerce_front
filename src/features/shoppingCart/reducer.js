

const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
// boolean
const isItemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

// const emptyCart = (cart, item) => cart


// ADD TO CART FUNCTION 
const addToCart = (cart, item) => {
    
    const cartItem = isItemInCart(cart, item)
    return cartItem === undefined 
    ? [ ...cartWithoutItem(cart, item), { ...item, quantity: 1}]
    : [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity +1}]
}
 
// REMOVE ONE ITEM FROM CART FUNCTION
const removeFromCart = (cart, item) => {
    return item.quantity === 1
    ?  [ ...cartWithoutItem(cart, item)]
    : [  ...cartWithoutItem(cart, item), { ...item, quantity: item.quantity -1 }]
}

// REMOVE ALL FUNCTION
const removeAllFromCart = (cart, item) => {
    return [ ...cartWithoutItem(cart, item)]
}

// REMOVE EVERYTHING
const removeEverything = (cart) => {
    return []
}


// SUBTOTAL FUNCTION
const subTotal = (cart, item) => {
    console.log(item.price, 'reducer') 
    return item.price.reduce((a,b) => a+b)
}

// reducer
const cartReducer = ( state = [], action) => {
    switch(action.type){
        case 'ADD':
        return addToCart(state, action.payload)

        case 'REMOVE':
        return removeFromCart(state, action.payload)

        case 'REMOVE_ALL':
        return removeAllFromCart(state, action.payload)

        case 'SUBTOTAL':
        return subTotal(state, action.payload)

        case 'REMOVE_EVERYTHING':
        return removeEverything(state)
        

    default:
    return state;
    }
}

export default cartReducer;