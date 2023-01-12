import axios from "axios";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCTS_DETAIL = "GET_PRODUCTSDETAIL";
export const GET_PRODUCTS_SUMMARY = "GET_PRODUCTSS_SUMMARY";
export const CREATE_PRODUCTS = "CREATE_PRODUCTS";
export const GET_PAYMENT_URL = "GET_PAYMENT_URL";
export const FILTER_BY_CATEGORIES = "FILTER_BY_CATEGORIES";
export const LOADING = "LOADING";
export const DELETE_PRODUCTS = "DELETE_PRODUCTS";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

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

export const createProducts = (values) => {
	return async function (dispatch) {
		await axios.post("http://localhost:3001/products", values);
		return dispatch({ type: CREATE_PRODUCTS, payload: values });
	};
};

export const deleteProducts = (id) => {
	return async function (dispatch) {
		await axios.delete(`http://localhost:3001/products/delete/${id}`);
		return dispatch({ type: DELETE_PRODUCTS, payload: id });
	};
};

export const updateProducts = (id) => {
	return async function (dispatch) {
		await axios.put(`http://localhost:3001/products/${id}`);
		return dispatch({ type: UPDATE_PRODUCTS, payload: id });
	};
};

export const loading = () => {
	return { type: LOADING };
};

// export const OrderbyPopulation

export const filterProductsByCategories = (payload) => {
	return { type: FILTER_BY_CATEGORIES, payload };
};


export const login = ()=>{
    return async function(dispatch){
        const json = await axios.get("http://localhost:3000/login");
        return dispatch({ type: GET_USER_INFO, payload: json.data});
    };
};

export const getUserInfo= ()=>{
    return async function(dispatch){
        const json = await axios.get("http://localhost:3000/users");
        return dispatch({ type: GET_USER_INFO, payload: json.data});
    };
};