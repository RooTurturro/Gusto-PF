import { GET_ALL_PRODUCTS, 
			GET_USER_INFO, 
			GET_PRODUCTS_SUMMARY, 
			UPDATE_PRODUCTS, 
			CREATE_PRODUCTS,
			GET_PRODUCTS_DETAIL,
			DELETE_PRODUCTS,
			LOADING,
			FILTER_BY_CATEGORIES,
		} from "./actions";


const initialState = {
	products: [],
	allProducts: [],
	productDetail: {},
	loading: true,
	actualPage: 1,
	user: '',
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};

		case GET_USER_INFO:
				return {...state, user:action.payload}

		case GET_ALL_PRODUCTS:
			return {
				...state,
				products: action.payload,
				allProducts: action.payload,
			};
		case GET_PRODUCTS_SUMMARY:
			return {
				...state,
				loading: false,
				products: action.payload,
			};

		case GET_PRODUCTS_DETAIL:
			return {
				...state,
				loading: false,
				productDetail: action.payload,
			};
		case CREATE_PRODUCTS:
			return {
				...state,
				products: [...state.products, action.payload],
			};
		case UPDATE_PRODUCTS:
			return {
				...state,
				products: state.products.filter(
					(product) => product.name !== action.payload
				),
			};
		case DELETE_PRODUCTS:
			return {
				...state,
				products: state.products.filter(
					(product) => product.name !== action.payload
				),
			};
		//for drinks, burgers, wraps, desserts...

		//add to the products props a 'category'.
		case FILTER_BY_CATEGORIES:
			const allProducts = state.allProducts;
			const filteredStatus =
				action.payload === "All"
					? allProducts
					: allProducts.filter(
							(product) => product.category === action.payload
					  );
			return {
				...state,
				products: filteredStatus,
			};

		// case ORDER_BY_POPULATION:
		default:
			return state;
	}
};

export default rootReducer;
