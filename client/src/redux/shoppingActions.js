import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_ALL_FROM_CART,
    REMOVE_ONE_FROM_CART,
    UPDATE_CART_STORAGE
} from '../types'

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id })

export const delFromCart = (id, all = false) =>
    all
        ? { type: REMOVE_ALL_FROM_CART, payload: id }
        : { type: REMOVE_ONE_FROM_CART, payload: id }

export const clearCart = () => ({ type: CLEAR_CART })

export function updateCartStorage(cart) {
    return {
        type: UPDATE_CART_STORAGE,
        payload: cart
    }
}