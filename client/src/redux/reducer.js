import { FILTER_BY_CATEGORIES, GET_ALL_CATEGORIES } from "./actions";
import { LOADING } from "./actions";
import { DELETE_PRODUCTS } from "./actions";
import { GET_PRODUCTS_DETAIL } from "./actions";
import { CREATE_PRODUCTS } from "./actions";
import { GET_PAYMENT_URL } from "./actions";
import { UPDATE_PRODUCTS } from "./actions";
import { GET_PRODUCTS_SUMMARY } from "./actions";
import { GET_ALL_PRODUCTS } from "./actions";
import { GET_USER_INFO } from "./actions";
import { PRICE_ORDER } from "./actions";
import { ALPHABETICAL_ORDER } from "./actions";


const initialState = {
	products: [],
	allProducts: [],
	allCategories: [],
	productDetail: {},
	loading: true,
	actualPage: 1,
	user: '',
	paymentUrl: "",
	buyProducts: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};

		case GET_USER_INFO:
			return { ...state, user: action.payload }

		case GET_ALL_PRODUCTS:
			return {
				...state,
				products: action.payload,
				allProducts: action.payload,
			};
			case GET_ALL_CATEGORIES:
			return {
				...state,
				allCategories: action.payload,
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
		case GET_PAYMENT_URL:
			return {
				...state,
				paymentUrl: action.payload,
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
			const cFilter = action.payload === 'all' ? 
			state.allProducts: 
			state.allProducts?.filter(e => e.categorie?.includes(action.payload))
			return {
			  ...state,
			  products: cFilter
			} 
		case PRICE_ORDER:
			const sortPrice = action.payload === 'asc' ? state.products.sort(function (a, b) {
				if (a.price > b.price) {
				  return 1;
				}
				if (b.price > a.price) {
				  return -1
				}
				return 0
			  }) : state.products.sort(function (a, b) {
				if (a.price > b.price) {
				  return -1;
				}
				if (b.price > a.price) {
				  return 1;
				}
				return 0
			  })
			  return {
				...state,
				products: sortPrice
			  }
	

		case ALPHABETICAL_ORDER:
			const sort = action.payload === 'A-Z' ? state.products.sort(function (a, b) {
				if (a.name > b.name) {
				  return 1;
				}
				if (b.name > a.name) {
				  return -1;
				}
				return 0
			  }) : state.products.sort(function (a, b) {
				if (a.name > b.name) {
				  return -1;
				}
				if (b.name > a.name) {
				  return 1;
				}
				return 0
			  })
			  return {
				...state,
				products: sort
			  }

		// case ORDER_BY_POPULATION:
		default:
			return state;
	}
};

export default rootReducer;





 
