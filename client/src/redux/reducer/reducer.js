import { FILTER_BY_CATEGORIES } from "../actions/globalActions";
import { LOADING } from "../actions/globalActions";
import { DELETE_PRODUCTS } from "../actions/globalActions";
import { GET_PRODUCTS_DETAIL } from "../actions/globalActions";
import { CREATE_PRODUCTS } from "../actions/globalActions";
import { GET_PAYMENT_URL } from "../actions/globalActions";
import { UPDATE_PRODUCTS } from "../actions/globalActions";
import { GET_PRODUCTS_SUMMARY } from "../actions/globalActions";
import { GET_ALL_PRODUCTS } from "../actions/globalActions";
import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../../types";


const initialState = {
	products: [],
	allProducts: [],
	productDetail: {},
	loading: true,
	actualPage: 1,
	paymentUrl: "",
	buyProducts: [],
	cart: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};
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
		case ADD_TO_CART: {
			let newItem = state.products.find(
				producto => producto.id === action.payload)
			let itemInCart = state.cart.find(item => item.id === newItem.id);
			return itemInCart
				? {
					...state,
					cart: state.cart.map((item) =>
						item.id === newItem.id
							? { ...item, quantity: item.quantity + 1 }
							: item),
				}
				: {
					...state,
					cart: [...state.cart, { ...newItem, quantity: 1 }],
				};
		}

		case REMOVE_ALL_FROM_CART: {
			let itemToDelete = state.cart.find(item => item.id === action.payload)

			return itemToDelete > 1 ? {
				...state,
				cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } :
					item),
			} : {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload)
			}
		}
		case REMOVE_ONE_FROM_CART: {
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload)
			}
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
