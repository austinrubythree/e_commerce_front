

let searchTerm = '';


// reducer
const searchReducer = ( state = {}, action) => {
    switch(action.type){
        case 'UPDATE_SEARCH':
        console.log('searchReducer', action.payload)
        return {
            ...state,
            searchTerm: action.payload
        }
    default:
    return state;
    }
}

export default searchReducer;