const initialState = {
    products: [],
    allProducts: [],
    detail: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                allProducts: action.payload
            }
        case 'POST_PRODUCTS':
            return {
                ...state
            }
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}