import axios from "axios";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_PRODUCTS_DETAIL = "GET_PRODUCTSDETAIL";
export const GET_PRODUCTS_SUMMARY = "GET_PRODUCTSS_SUMMARY";
export const CREATE_PRODUCTS = "CREATE_PRODUCTS";
export const GET_PAYMENT_URL = "GET_PAYMENT_URL";
export const FILTER_BY_CATEGORIES = "FILTER_BY_CATEGORIES";
export const LOADING = "LOADING";
export const DELETE_PRODUCTS = "DELETE_PRODUCTS";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const USER_UPDATE = "USER_UPDATE";
export const USER_LOGIN = 'USER_LOGIN';
export const USER_EDIT_PROFILE = 'USER_EDIT_PROFILE';
export const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER";
export const PRICE_ORDER = "PRICE_ORDER";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const RATING_PRODUCTS = "RATING_PRODUCTS";
export const UPDATE_STATE = "UPDATE_STATE"
export const EDIT_FORM = "EDIT_FORM";
export const GET_ALL_PURCHASES = "GET_PURCHASE"

export const POST_PURCHASE = 'POST_PURCHASE'

// export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";

export const getAllProducts = () => {
	return async function (dispatch) {
		dispatch(loading());
		try {
			//json
			const response = await axios.get("http://localhost:3001/products");
			return dispatch({
				type: GET_ALL_PRODUCTS,
				payload: response.data,
			});
		} catch (error) {
			return dispatch({ type: GET_ALL_PRODUCTS, payload: error.message });
		}
	};
};

export const getAllPurchases = () => {
	return async function (dispatch) {
		try {
			const response = await axios.get('http://localhost:3001/purchase')
			return dispatch({
				type: GET_ALL_PURCHASES,
				payload: response.data
			})
		} catch (error) {
			return dispatch({ type: GET_ALL_PURCHASES, payload: error.message })
		}
	}
}



export const getPaymentUrl = (values) => {
	return async function (dispatch) {
		dispatch(loading());
		try {
			const response = await axios.post(
				"http://localhost:3001/payment",
				values
			);
			return dispatch({
				type: GET_PAYMENT_URL,
				payload: response.data,
			});
		} catch (error) {
			return dispatch({ type: GET_PAYMENT_URL, payload: error.message });
		}
	};
};

export const getProductsSummary = (name) => {
	return async function (dispatch) {
		try {
			let response = await axios.get(
				`http://localhost:3001/products?name=${name}`
			);
			return dispatch({ type: GET_PRODUCTS_SUMMARY, payload: response.data });
		} catch (error) {
			return dispatch({ type: GET_PRODUCTS_SUMMARY, payload: error.message });
		}
	};
};

export const getProductsDetail = (id) => {
	return async function (dispatch) {
		try {
			dispatch(loading());
			let response = await axios.get(`http://localhost:3001/products/${id}`);
			return dispatch({
				type: GET_PRODUCTS_DETAIL,
				payload: response.data,
			});
		} catch (error) {
			return dispatch({ type: GET_PRODUCTS_DETAIL, payload: {} });
		}
	};
};

export const createProduct = (values) => {
	return async function (dispatch) {
		await axios.post("http://localhost:3001/products", values);
		return dispatch({ type: CREATE_PRODUCTS, payload: values });
	};
};

export const postPurchase = (payload) => {
	return async function (dispatch) {
		await axios.post('http://localhost:3001/purchase', payload)
		return dispatch({ type: POST_PURCHASE, payload: payload })
	}
}

export const deleteProducts = (id) => {
	return async function (dispatch) {
		await axios.delete(`http://localhost:3001/products/delete/${id}`);
		return dispatch({ type: DELETE_PRODUCTS, payload: id });
	};
};

export const editForm = (product, id) => {
	return async function (dispatch) {
		await axios.put(`http://localhost:3001/products/update/${id}` , { product });
		return dispatch({ type: EDIT_FORM, payload: product });
	};
};

/*
export const updateProduct = (product) => async (dispatch) => {
	try {
		const response = await axios.put(
			`http://localhost:3001/products/update/${product.id}`,
			product
		);
		dispatch({
			type: "UPDATE_PRODUCT",
			payload: response.data,
		});
	} catch (error) {
		console.log(error);
	}
};
*/
export const ratingProducts = (rating, id) => {
	return async function (dispatch) {
		await axios.put(`http://localhost:3001/products/rating/${id}`, { rating });
		return dispatch({ type: RATING_PRODUCTS, payload: rating, id });
	};
};

export const updateState = (state, id) => {
	return async (dispatch) => {
		try {
			await axios.put(`http://localhost:3001/products/state/${id}`, { state })
			dispatch({ type: UPDATE_STATE, payload: { state, id } })
		} catch (error) {
			console.log(error)
		}
	}
}

export const loading = () => {
	return { type: LOADING };
};

// export const OrderbyPopulation

export const filterProductsByCategories = (payload) => {
	return {
		type: FILTER_BY_CATEGORIES,
		payload,
	};
};
export const priceOrder = (payload) => {
	return {
		type: PRICE_ORDER,
		payload,
	};
};
export const OrderbyPopulation = (payload) => {
	return {
		type: ORDER_BY_POPULATION,
		payload,
	};
};

export const aplhabeticalOrder = (payload) => {
	return {
		type: ALPHABETICAL_ORDER,
		payload,
	};
};

//-------------Actions Usuario -------------- Auth0

export const userEditProfile = () => {
	return async function (dispatch) {
		const json = await axios.put("http://localhost:3001/users");
		return dispatch({ type: USER_EDIT_PROFILE, payload: json.data });
	};
};



export const userLogin = (payload) => {
	return async function (dispatch) {
		const json = await axios.post("http://localhost:3001/users", payload);
		return dispatch({ type: USER_LOGIN, payload: json.data });
	};
};

export const userUpdate = (payload) => {
	return async function (dispatch) {
		const json = await axios.put("http://localhost:3001/users", payload);
		return dispatch({ type: USER_UPDATE, payload: json.data });
	};
};

