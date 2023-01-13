
import { FILTER_BY_CATEGORIES } from "../redux/actions";
import { LOADING } from "../redux/actions";
import { DELETE_PRODUCTS } from "../redux/actions";
import { GET_PRODUCTS_DETAIL } from "../redux/actions";
import { CREATE_PRODUCTS } from "../redux/actions";
import { GET_PAYMENT_URL } from "../redux/actions";
import { UPDATE_PRODUCTS } from "../redux/actions";
import { RATING_PRODUCTS } from "../redux/actions";
import { GET_PRODUCTS_SUMMARY } from "../redux/actions";
import { GET_ALL_PRODUCTS } from "../redux/actions";
import {
	ADD_TO_CART,
	CLEAR_CART,
	REMOVE_ALL_FROM_CART,
	REMOVE_ONE_FROM_CART,
} from "../types";

import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types";
import { GET_USER_INFO } from "../redux/actions";


const initialState = {
	products: [],
	allProducts: [],
	allCategories: [],
	productDetail: {},
	loading: true,
	actualPage: 1,
	user: "",
	paymentUrl: "",
	buyProducts: [],
	cart: [],
	rating: undefined,
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


			return { ...state, user: action.payload };

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
		case RATING_PRODUCTS:
			return {
				...state,
				rating: action.payload,
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

				products: filteredStatus,
			};
		case ADD_TO_CART: {
			let newItem = state.products.find(
				(producto) => producto.id === action.payload
			);
			let itemInCart = state.cart.find((item) => item.id === newItem.id);
			return itemInCart
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === newItem.id
								? { ...item, quantity: item.quantity + 1 }
								: item
						),
				  }
				: {
						...state,
						cart: [...state.cart, { ...newItem, quantity: 1 }],
				  };
		}

		case REMOVE_ALL_FROM_CART: {
			let itemToDelete = state.cart.find((item) => item.id === action.payload);

			return itemToDelete > 1
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === action.payload
								? { ...item, quantity: item.quantity - 1 }
								: item
						),
				  }
				: {
						...state,
						cart: state.cart.filter((item) => item.id !== action.payload),
				  };
		}
		case REMOVE_ONE_FROM_CART: {
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		}
		case CLEAR_CART: {
			return initialState;
		}

		// case ORDER_BY_POPULATION:
		default:
			return state;
	}
};

export default rootReducer;





 
