import { FILTER_BY_CATEGORIES, GET_ALL_USERS, POST_PURCHASE, UPDATE_STATE } from "../redux/actions";
import { LOADING } from "../redux/actions";
import { DELETE_PRODUCTS } from "../redux/actions";
import { GET_PRODUCTS_DETAIL } from "../redux/actions";
import { CREATE_PRODUCTS } from "../redux/actions";
import { GET_PAYMENT_URL } from "../redux/actions";
import { UPDATE_PRODUCTS } from "../redux/actions";
import { RATING_PRODUCTS } from "../redux/actions";
import { GET_PRODUCTS_SUMMARY } from "../redux/actions";
import { GET_ALL_PRODUCTS } from "../redux/actions";
import { USER_LOGIN } from "../redux/actions";
import { USER_UPDATE } from "../redux/actions";
import { GET_ALL_PURCHASES } from "../redux/actions";
import { PRICE_ORDER } from "../redux/actions";
import { ALPHABETICAL_ORDER } from "../redux/actions";
import { EDIT_FORM } from "../redux/actions"
import { CLEAN_DETAIL } from '../redux/actions'
import { RESET_STATE_PURCHASE } from '../redux/actions'
import {
	ADD_TO_CART,
	CLEAR_CART,
	REMOVE_ALL_FROM_CART,
	REMOVE_ONE_FROM_CART,
} from "../types";

const initialState = {
	products: [],
	allProducts: [],
	allCategories: [],
	productDetail: {},
	loading: true,
	actualPage: 1,
	user: {},
	users: [],
	paymentUrl: "",
	buyProducts: [],
	cart: JSON.parse(window.localStorage.getItem('carrito')) || [],
	rating: undefined,
	purchases: [],
	newPurchase:[]
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};

		case USER_UPDATE:
			return {
				...state,
				user: action.payload
			}

		case EDIT_FORM: {
			return {
				...state,
			}
		}
		case USER_LOGIN:
			return {
				...state
			}
		case CLEAN_DETAIL:
			return {
				...state,
				productDetail: {}
			}

		case GET_ALL_PRODUCTS:
			return {
				...state,
				products: action.payload,
				allProducts: action.payload,
			};
		case GET_ALL_USERS:
			return {
				...state,
				users: action.payload
			}

		case GET_ALL_PURCHASES:
			return {
				...state,
				purchases: action.payload
			}

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
		case POST_PURCHASE:
			return {
				...state,
				newPurchase: action.payload
			}
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
			const productIndex = state.products.findIndex((p) => p.id === action.id);
			const product = { ...state.products[productIndex] };
			product.rating = action.payload;
			const products = [...state.products];
			products[productIndex] = product;
			return {
				...state,
				products: products,
			};
		// case UPDATE_STATE:
		// 	const { id, state: newState } = action.payload;
		// 	return {
		// 		...state,
		// 		products: state.products.map(product => {
		// 			if (product.id === id) {
		// 				return {
		// 					...product,
		// 					state: newState
		// 				}
		// 			}
		// 			return product
		// 		})
		// 	};

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


		case PRICE_ORDER:
			const sortPrice = action.payload === 'asc'
				? state.products.sort(function (a, b) {
					return a.price - b.price
				})
				: state.products.sort(function (a, b) {
					return b.price - a.price
				});
			return {
				...state,
				products: sortPrice
			}


		case ALPHABETICAL_ORDER:
			const sort =
				action.payload === "A-Z"
					? state.products.sort(function (a, b) {
						if (a.name > b.name) {
							return 1;
						}
						if (b.name > a.name) {
							return -1;
						}
						return 0;
					})
					: state.products.sort(function (a, b) {
						if (a.name > b.name) {
							return -1;
						}
						if (b.name > a.name) {
							return 1;
						}
						return 0;
					});
			return {
				...state,
				products: sort,
			};

		case ADD_TO_CART: {
			let newItem = state.products.find(
				(producto) => producto.id === action.payload
			);
			let itemInCart = state.cart.find((item) => item.id === newItem.id);
			if (itemInCart) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.id === newItem.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				}
			} else {
				return {
					...state,
					cart: [...state.cart, { ...newItem, quantity: 1 }],
				};
			}
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
		case RESET_STATE_PURCHASE:

			const { id, state: newState } = action.payload;
			return {
				...state,
				purchase: state.purchase.map(purchase => {
					if (purchase.id === id) {
						return {
							...purchase,
							state: newState
						}
					}
					return purchase
				})
			};
		// case ORDER_BY_POPULATION:
		default:
			return state;
	}
};

export default rootReducer;
