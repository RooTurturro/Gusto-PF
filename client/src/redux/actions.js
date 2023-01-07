import axios from 'axios'

export function getProducts() {
    return async function (dispatch) {
        try {
            const json = await axios.get('http://localhost:3001/products')
            return dispatch({
                type: 'GET_PRODUCTS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postProduct(payload) {
    return async function () {
        const info = await axios.post('http://localhost:3001/products', payload)
        return info
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`/products/${id}`)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}