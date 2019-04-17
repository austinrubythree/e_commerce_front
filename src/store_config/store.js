import {createStore, combineReducers} from 'redux'
import cartReducer from '../features/shoppingCart/reducer'
import searchReducer from '../features/shoppingCart/searchReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    search : searchReducer
})



const store = createStore (
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store