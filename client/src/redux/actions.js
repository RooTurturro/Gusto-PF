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

export const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER";
export const PRICE_ORDER = "PRICE_ORDER";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const RATING_PRODUCTS = "RATING_PRODUCTS";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_SPECIFICATION = "UPDATE_SPECIFICATION";
export const EDIT_FORM = "EDIT_FORM";

export const USER_LOCAL_LOGIN = "USER_LOCAL_LOGIN";
export const USER_LOCAL_LOGOUT = "USER_LOCAL_LOGOUT";
export const USER_PROFILE = "USER_PROFILE";
export const USER_UPDATE = "USER_UPDATE";
export const USER_LOGIN = "USER_LOGIN";
export const USER_EDIT_PROFILE = "USER_EDIT_PROFILE";
export const GET_ALL_USERS = "GET_ALL_USERS";

export const GET_ALL_PURCHASES = "GET_PURCHASE";
export const RESET_STATE_PURCHASE = "RESET_STATE_PURCHASE";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const POST_PURCHASE = "POST_PURCHASE";

export const getAllProducts = () => {
	return async function (dispatch) {
		dispatch(loading());
		try {
			//json
			const response = await axios.get("/products");
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

			const response = await axios.get('/purchase')

			return dispatch({
				type: GET_ALL_PURCHASES,
				payload: response.data,
			});
		} catch (error) {
			return dispatch({ type: GET_ALL_PURCHASES, payload: error.message });
		}
	};
};

export const getAllUsers = () => {
	return async function (dispatch) {
		try {

			const response = await axios.get('/users')

			return dispatch({
				type: GET_ALL_USERS,
				payload: response.data,
			});
		} catch (error) {
			return dispatch({ type: GET_ALL_USERS, payload: error.message });
		}
	};
};

export const getPaymentUrl = (values) => {
	return async function (dispatch) {
		dispatch(loading());
		try {
			const response = await axios.post(
				"/payment",
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
				`/products?name=${name}`
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
			let response = await axios.get(`/products/${id}`);
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
		await axios.post("/products", values);
		return dispatch({ type: CREATE_PRODUCTS, payload: values });
	};
};

// export const postPurchase = (payload) => {
// 	return async function (dispatch) {
// 		await axios.post('/purchase', payload)
// 		return dispatch({ type: POST_PURCHASE, payload: payload })
// 	}
// }

export const postPurchase = (payload) => {
	return async function (dispatch) {
		try {
			const response = await axios.post(
				"/purchase",
				payload
			);
			return dispatch({
				type: POST_PURCHASE,
				payload: response.data,
			});
		} catch (error) {
			return error;
		}
	};
};

export const deleteProducts = (id) => {
	return async function (dispatch) {
		await axios.delete(`/products/delete/${id}`);
		return dispatch({ type: DELETE_PRODUCTS, payload: id });
	};
};

export const editForm = (product, id) => {
	return async function (dispatch) {
		await axios.put(`/products/update/${id}`, { product });
		return dispatch({ type: EDIT_FORM, payload: product });
	};
};

export const updateProduct = (product) => async (dispatch) => {
	try {
		const response = await axios.put(
			`/products/update/${product.id}`,
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

export const ratingProducts = (rating, id) => {
	return async function (dispatch) {
		await axios.put(`/products/rating/${id}`, { rating });
		return dispatch({ type: RATING_PRODUCTS, payload: rating, id });
	};
};

export const updateState = (id, payload) => {
	return async () => {
		try {

			await axios.put(`/products/state/${id}`, payload)

		} catch (error) {
			console.log(error);
		}
	};
};

export const updateUser = (payload) => {
	return async () => {
		try {

			await axios.put(`/users`, payload)

		} catch (error) {
			console.log(error);
		}
	};
};

export const updatePurchaseState = (id, payload) => {
	return async () => {
		try {

			await axios.put(`/purchase/state/${id}`, payload)

		} catch (error) {
			console.log(error);
		}
	};
};

export const updateSpecification = (id, payload) => {
	return async () => {
		try {

			await axios.put(`/purchase/specification/${id}`, payload)

		} catch (error) {
			console.log(error);
		}
	};
};

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

export const userLocalLogin = (payload) => {
	return async function (dispatch) {

		const json = await axios.put("/users");
		return dispatch({ type: USER_EDIT_PROFILE, payload: json.data });

	};
};

export const userLocalLogout = () => {
	return async function (dispatch) {
		return dispatch({ type: USER_LOCAL_LOGOUT });
	};
};

export const userProfile = (email) => {
	return async function (dispatch) {
		const json = await axios.get(`http://localhost:3001/users/email?email=${email}`);
		return dispatch({ type: USER_PROFILE, payload: json.data });
	};
};

export const userLogin = (payload) => {
	return async function (dispatch) {
		const json = await axios.post("/users", payload);
		return dispatch({ type: USER_LOGIN, payload: json.data });
	};
};

export const userUpdate = (payload) => {
	return async function (dispatch) {
		const json = await axios.put("/users", payload);
		return dispatch({ type: USER_UPDATE, payload: json.data });
	};
};
