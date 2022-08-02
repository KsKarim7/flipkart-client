import axios from "axios";
import { ADD_TO_CART, ADD_TO__CART_ERROR, REMOVE_FROM_CART, } from "../constants/cartConstant";

const url = 'http://localhost:5000'

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({ type: ADD_TO_CART, payload: { ...data, quantity } });
    }
    catch (error) {
        dispatch({ type: ADD_TO__CART_ERROR, payload: error.message });

    }
}
export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
}