const initialState = {
    products: [],
    allProducts: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                allProducts: action.payload
            }
        default:
            return state
    }
}